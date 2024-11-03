import { Html, useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';

const CanvasLoader = () => {
  const { progress } = useProgress();
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Check if loading is complete
    if (progress >= 100) {
      // Give a slight delay before hiding, if desired, for a smoother transition
      const timeout = setTimeout(() => setLoadingComplete(true), 500);
      return () => clearTimeout(timeout);
    } else {
      setLoadingComplete(false);
    }
  }, [progress]);

  // Only render the loader when loading is not complete
  if (loadingComplete) return null;

  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: '#F1F1F1',
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
      </p>
    </Html>
  );
};

export default CanvasLoader;
