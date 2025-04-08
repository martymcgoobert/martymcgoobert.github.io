/**
 * Utility function to lazy load videos using Intersection Observer
 * This will only start loading the video when it comes into the viewport
 */
export const setupLazyVideoLoading = (): void => {
  // Check if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    // Create a new IntersectionObserver instance
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // If the video is in the viewport
        if (entry.isIntersecting) {
          const video = entry.target as HTMLVideoElement;

          // If the video has sources, load them
          const sources = video.querySelectorAll('source');
          if (sources.length) {
            // Change preload attribute to auto
            video.preload = 'auto';

            // Load the video
            video.load();

            // Start playing if it has autoplay attribute
            if (video.autoplay) {
              video.play().catch(e => console.error('Error playing video:', e));
            }

            // Stop observing this video
            videoObserver.unobserve(video);
          }
        }
      });
    }, {
      rootMargin: '200px 0px', // Start loading when video is 200px from viewport
      threshold: 0.01 // Trigger when at least 1% of the video is visible
    });

    // Observe all videos
    document.querySelectorAll('video').forEach(video => {
      videoObserver.observe(video);
    });
  }
};
