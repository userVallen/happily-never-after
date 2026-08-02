import LoadingAnimation from '@/components/loading-animation';

export default function Loading() {
  return (
    <main className="flex flex-col items-center justify-center min-h-dvh">
      <LoadingAnimation />
      <p className="font-heading text-xl">Loading...</p>
    </main>
  );
}
