
import { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center z-50">
      <div className="text-center text-white">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 animate-pulse">QAAM Enterprises</h1>
          <p className="text-xl opacity-80">Since 2009</p>
        </div>
        
        <div className="w-64 h-2 bg-blue-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="mt-4 text-sm opacity-70">Loading... {progress}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
