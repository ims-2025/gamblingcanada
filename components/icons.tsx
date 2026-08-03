export function Leaf({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M12 2c.4 1.9 1.3 3 2.7 4 .9.6 1.1 1.4.7 2.3l1.9-.5.3 2 2.1-.2-1 2.4 1.6 1-3.6 2c-.6.3-.8.8-.6 1.5l.6 2.3-3.6-.8c-.5-.1-.9.1-1 .6L12 22l-.4-1.4c-.1-.5-.5-.7-1-.6l-3.6.8.6-2.3c.2-.7 0-1.2-.6-1.5l-3.6-2 1.6-1-1-2.4 2.1.2.3-2 1.9.5c-.4-.9-.2-1.7.7-2.3C10.7 5 11.6 3.9 12 2z" />
    </svg>
  );
}

export function Check({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function ShieldCheck({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Scale({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v18M7 21h10M5 7l-3 6a3 3 0 0 0 6 0L5 7Zm14 0-3 6a3 3 0 0 0 6 0l-3-6ZM5 7h14M8 4l8-1" />
    </svg>
  );
}

export function Users({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11" />
    </svg>
  );
}

export function Star({ fill = 'full' }: { fill?: 'full' | 'half' | 'empty' }) {
  const id = Math.random().toString(36).slice(2, 8);
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      {fill === 'half' && (
        <defs>
          <linearGradient id={`h-${id}`}>
            <stop offset="50%" stopColor="var(--gold)" />
            <stop offset="50%" stopColor="#dfe5ec" />
          </linearGradient>
        </defs>
      )}
      <path
        d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2Z"
        fill={fill === 'full' ? 'var(--gold)' : fill === 'half' ? `url(#h-${id})` : '#dfe5ec'}
      />
    </svg>
  );
}

export function StarRating({ value }: { value: number }) {
  const stars: ('full' | 'half' | 'empty')[] = [];
  for (let i = 1; i <= 5; i++) {
    if (value >= i) stars.push('full');
    else if (value >= i - 0.5) stars.push('half');
    else stars.push('empty');
  }
  return (
    <span className="stars" aria-label={`Rated ${value} out of 5`}>
      {stars.map((s, i) => (
        <Star key={i} fill={s} />
      ))}
    </span>
  );
}
