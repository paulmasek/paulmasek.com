import { useState, useLayoutEffect } from 'react';

function useMediaQuery(mediaQuery) {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(mediaQuery).matches;
    }

    return false;
  });

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQueryList = window.matchMedia(mediaQuery);
      const listener = e => setMatches(e.matches);
      mediaQueryList.addListener(listener);
      return () => mediaQueryList.removeListener(listener);
    }
  }, [mediaQuery]);

  return matches;
}

export default useMediaQuery;
