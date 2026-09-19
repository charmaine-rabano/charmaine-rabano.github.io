/** Accepts a bare 11-character id or any YouTube URL you paste in. */
export function youtubeId(value: string): string | null {
  if (!value) return null;
  const match = value.match(
    /(?:v=|\/embed\/|youtu\.be\/|\/shorts\/|\/live\/)([A-Za-z0-9_-]{11})/,
  );
  if (match) return match[1];
  return /^[A-Za-z0-9_-]{11}$/.test(value) ? value : null;
}

export function embedUrl(id: string): string {
  return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
}

export function watchUrl(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`;
}
