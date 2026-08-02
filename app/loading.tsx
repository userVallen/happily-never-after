import LoadingAnimation from '@/components/loading-animation';

export default function Loading() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <LoadingAnimation />
      <p className="text-heading text-xl">Loading...</p>
    </main>
  );
}
