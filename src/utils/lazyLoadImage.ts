/**
 * Utility function to enhance lazy loading of images using Intersection Observer
 * This provides a fallback for browsers that don't support the loading="lazy" attribute
 */
export const setupLazyImageLoading = (): void => {
  // Check if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    // Create a new IntersectionObserver instance
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // If the image is in the viewport
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          
          // If the image has a data-src attribute, use it
          const dataSrc = img.getAttribute('data-src');
          if (dataSrc) {
            img.src = dataSrc;
            img.removeAttribute('data-src');
          }
          
          // Stop observing this image
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '200px 0px', // Start loading when image is 200px from viewport
      threshold: 0.01 // Trigger when at least 1% of the image is visible
    });
    
    // Find all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    // Just load all images immediately
    document.querySelectorAll('img[data-src]').forEach(img => {
      const dataSrc = img.getAttribute('data-src');
      if (dataSrc) {
        img.setAttribute('src', dataSrc);
        img.removeAttribute('data-src');
      }
    });
  }
};
