import {useState, useEffect} from 'react';

const useResolution = () => {
  const [resolution, setResolution] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const handleResize = () =>
    setResolution({width: window.innerWidth, height: window.innerHeight});

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [resolution]);

  return resolution;
};

export default useResolution;
