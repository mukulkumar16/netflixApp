// @ts-nocheck
'use client';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 border-t-4 border-red-500 border-solid mx-auto mb-4"></div>
        <p className="text-base sm:text-lg md:text-xl font-semibold">Loading movies...</p>
      </div>
    </div>
  );
}
