import { useState, useEffect } from 'react';

/**
 * Custom React hook to determine whether the current device is a mobile device.
 *
 * Used to determine whether to render the mobile or desktop version of the app.
 *
 * @returns Whether the current device is a mobile device.
 */
export function useDeviceType () {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 480px)');
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Set initial value
    setIsMobile(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return isMobile;
};
