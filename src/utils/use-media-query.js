import { useState, useLayoutEffect } from 'react';

function useMediaQuery(mediaQuery) {
  const [matches, setMatches] = useState(() => {
    if (window) {
      return window.matchMedia(mediaQuery).matches;
    }

    return false;
  });

  useLayoutEffect(() => {
    let mediaQueryList;
    let listener;

    if (window) {
      mediaQueryList = window.matchMedia(mediaQuery);
      listener = e => setMatches(e.matches);
      mediaQueryList.addListener(listener);
    }
    return () => {
      if (window) {
        return mediaQueryList.removeListener(listener);
      }

      return false;
    };
  }, [mediaQuery]);

  return matches;
}

export default useMediaQuery;
