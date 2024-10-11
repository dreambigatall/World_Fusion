import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="animate-spin rounded-full border-t-4 border-b-4 border-blue-500 h-12 w-12 md:h-16 md:w-16 lg:h-24 lg:w-24"></div>
      <p className="ml-4 text-blue-500 text-lg md:text-xl lg:text-2xl">Loading your answer...</p>
    </div>
  );
};

export default LoadingSpinner;

  