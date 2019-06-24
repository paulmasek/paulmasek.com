import { useState, useEffect } from 'react';

const useUpdateBodyClass = (className, active) => {
  const [isActive, setClassActive] = useState(active);

  useEffect(() => {
    if (isActive !== active) {
      setClassActive(active);
    }

    if (document && document.body) {
      if (active) {
        document.body.classList.add(className);
      } else if (document.body.classList.contains(className)) {
        document.body.classList.remove(className);
      }
    }
  }, [active]);

  return [setClassActive];
};

export default useUpdateBodyClass;
