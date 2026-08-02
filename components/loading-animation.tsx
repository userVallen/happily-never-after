'use client';

export default function LoadingAnimation() {
  return (
    <video autoPlay loop muted playsInline className="w-25 h-25">
      <source src="/videos/movie.webm" type="video/webm" />
    </video>
  );
}
