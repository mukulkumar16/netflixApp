// @ts-nocheck
'use client'

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 border-solid mx-auto mb-4"></div>
        <p className="text-lg font-semibold">Loading movies...</p>
      </div>
    </div>
  );
}