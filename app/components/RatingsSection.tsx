'use client';

import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

import { isSupabaseConfigured, supabase } from '@/lib/supabaseClient';

type RatingEntry = {
  id: number;
  name: string;
  rating: number;
  comment: string;
  created_at: string;
};

type RatingFormData = {
  name: string;
  rating: number;
  comment: string;
};

const initialFormData: RatingFormData = {
  name: '',
  rating: 5,
  comment: '',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const formatTimestamp = (value: string): string => {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return '';
  }

  return date.toLocaleString('en-PH', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
};

const upsertRating = (current: RatingEntry[], incoming: RatingEntry): RatingEntry[] => {
  const merged = [incoming, ...current.filter((entry) => entry.id !== incoming.id)];

  return merged.sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
};

export default function RatingsSection() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [ratings, setRatings] = useState<RatingEntry[]>([]);
  const [isLoading, setIsLoading] = useState(isSupabaseConfigured);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(
    isSupabaseConfigured
      ? null
      : 'Supabase is not configured yet. Add environment variables to enable cloud ratings.'
  );
  const [formData, setFormData] = useState<RatingFormData>(initialFormData);

  const averageRating = useMemo(() => {
    if (ratings.length === 0) {
      return null;
    }

    const total = ratings.reduce((sum, rating) => sum + rating.rating, 0);
    return (total / ratings.length).toFixed(1);
  }, [ratings]);

  useEffect(() => {
    const supabaseClient = supabase;

    if (!supabaseClient) {
      return;
    }

    const fetchRatings = async () => {
      const { data, error } = await supabaseClient
        .from('ratings')
        .select('id, name, rating, comment, created_at')
        .order('created_at', { ascending: false })
        .limit(40);

      if (error) {
        setErrorMessage('Unable to load ratings right now. Please try again in a moment.');
        setIsLoading(false);
        return;
      }

      setRatings((data ?? []) as RatingEntry[]);
      setErrorMessage(null);
      setIsLoading(false);
    };

    void fetchRatings();
  }, []);

  useEffect(() => {
    const supabaseClient = supabase;

    if (!supabaseClient) {
      return;
    }

    const channel = supabaseClient
      .channel('ratings-live-feed')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'ratings',
        },
        (payload) => {
          const inserted = payload.new as RatingEntry;

          if (typeof inserted.id !== 'number') {
            return;
          }

          setRatings((current) => upsertRating(current, inserted));
        }
      )
      .subscribe();

    return () => {
      void supabaseClient.removeChannel(channel);
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const supabaseClient = supabase;

    if (!supabaseClient) {
      setErrorMessage('Supabase is not configured yet. Ratings cannot be submitted.');
      return;
    }

    const trimmedComment = formData.comment.trim();

    if (!trimmedComment) {
      setErrorMessage('Please add your comment before submitting your rating.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const payload = {
      name: formData.name.trim() || 'Anonymous',
      rating: formData.rating,
      comment: trimmedComment,
    };

    const { data, error } = await supabaseClient
      .from('ratings')
      .insert([payload])
      .select('id, name, rating, comment, created_at')
      .single();

    if (error || !data) {
      setErrorMessage('Unable to submit your rating right now. Please try again.');
      setIsSubmitting(false);
      return;
    }

    setRatings((current) => upsertRating(current, data as RatingEntry));
    setFormData(initialFormData);
    setIsSubmitting(false);
  };

  return (
    <section id="ratings" ref={ref} className="bg-zinc-950 py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="mb-14 text-center">
          <h2 className="mb-4 text-4xl font-bold text-zinc-100 md:text-5xl">Client Ratings</h2>
          <motion.div
            className="mx-auto mb-4 h-1 w-24 bg-zinc-400"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Share your feedback and see what others are saying about JLG DEV services.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div variants={itemVariants} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 lg:col-span-2">
            <h3 className="mb-2 text-2xl font-semibold text-zinc-100">Leave a Rating</h3>
            <p className="mb-6 text-sm text-zinc-400">Your feedback appears on the page once submitted.</p>

            {!isSupabaseConfigured && (
              <div className="mb-5 rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
                Add Supabase environment variables to enable live cloud ratings.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="rating-name" className="mb-2 block text-sm font-medium text-zinc-300">
                  Name (optional)
                </label>
                <input
                  id="rating-name"
                  type="text"
                  value={formData.name}
                  onChange={(event) => setFormData((previous) => ({ ...previous, name: event.target.value }))}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-zinc-100 placeholder-zinc-500 outline-none transition-colors focus:border-zinc-500"
                  maxLength={60}
                />
              </div>

              <div>
                <p className="mb-2 block text-sm font-medium text-zinc-300">Rating</p>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData((previous) => ({ ...previous, rating: star }))}
                      className={`text-2xl transition-transform hover:scale-110 ${
                        star <= formData.rating ? 'text-amber-300' : 'text-zinc-600'
                      }`}
                      aria-label={`Select ${star} star${star > 1 ? 's' : ''}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="rating-comment" className="mb-2 block text-sm font-medium text-zinc-300">
                  Comment
                </label>
                <textarea
                  id="rating-comment"
                  value={formData.comment}
                  onChange={(event) => setFormData((previous) => ({ ...previous, comment: event.target.value }))}
                  rows={5}
                  maxLength={500}
                  placeholder="Share your experience..."
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-zinc-100 placeholder-zinc-500 outline-none transition-colors focus:border-zinc-500"
                />
              </div>

              {errorMessage && <p className="text-sm text-rose-300">{errorMessage}</p>}

              <button
                type="submit"
                disabled={isSubmitting || !isSupabaseConfigured}
                className="inline-flex w-full items-center justify-center rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-3 font-medium text-zinc-100 transition-colors hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Rating'}
              </button>
            </form>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 lg:col-span-3 max-h-168 overflow-hidden"
          >
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-2xl font-semibold text-zinc-100">Recent Feedback</h3>
              <div className="text-sm text-zinc-400">
                {averageRating ? `Average: ${averageRating} / 5 (${ratings.length})` : 'No ratings yet'}
              </div>
            </div>

            <div className="max-h-128 overflow-y-auto pr-1">
              {isLoading ? (
                <p className="text-zinc-400">Loading ratings...</p>
              ) : ratings.length === 0 ? (
                <p className="text-zinc-400">No feedback yet. Be the first to leave a rating.</p>
              ) : (
                <div className="space-y-4">
                  {ratings.map((entry) => (
                    <article key={entry.id} className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                        <p className="font-semibold text-zinc-100">{entry.name}</p>
                        <p className="text-amber-300">{'★'.repeat(entry.rating)}{'☆'.repeat(5 - entry.rating)}</p>
                      </div>
                      <p className="mb-3 text-zinc-300">{entry.comment}</p>
                      <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">
                        {formatTimestamp(entry.created_at)}
                      </p>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
