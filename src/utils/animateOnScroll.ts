/**
 * Utility function to animate elements when they enter the viewport
 * This uses the Intersection Observer API to detect when elements are visible
 */
export const setupScrollAnimations = (): void => {
  // Check if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    // Create a new IntersectionObserver instance
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // If the element is in the viewport
        if (entry.isIntersecting) {
          // Add the 'visible' class to trigger the animation
          entry.target.classList.add('visible');
          
          // Stop observing this element once it's animated
          animationObserver.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.1 // Trigger when at least 10% of the element is visible
    });
    
    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.fade-in, .fade-in-left, .fade-in-right, .fade-in-scale'
    );
    
    animatedElements.forEach(element => {
      animationObserver.observe(element);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    // Just show all elements immediately
    const animatedElements = document.querySelectorAll(
      '.fade-in, .fade-in-left, .fade-in-right, .fade-in-scale'
    );
    
    animatedElements.forEach(element => {
      element.classList.add('visible');
    });
  }
};
