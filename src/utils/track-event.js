function trackEvent(eventName, eventCategory, eventValue) {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, {
      event_category: eventCategory,
      event_label: eventValue,
    });
  }
}

return trackEvent;
