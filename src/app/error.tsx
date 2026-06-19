'use client';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-gray-50">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-extrabold text-red-600">!</span>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Something Went Wrong</h1>
        <p className="text-gray-500 mb-8">
          An unexpected error occurred. Please try again or contact us if the problem persists.
        </p>
        <button onClick={() => reset()} className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20">
          Try Again
        </button>
      </div>
    </div>
  );
}
