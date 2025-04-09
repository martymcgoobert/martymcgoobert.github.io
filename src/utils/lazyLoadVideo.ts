/**
 * Utility function to lazy load videos using Intersection Observer
 * This will only start loading the video when it comes into the viewport
 */
// Function to force play all videos
const forcePlayVideos = () => {
  document.querySelectorAll('video[autoplay]').forEach(video => {
    const videoElement = video as HTMLVideoElement;
    videoElement.play().catch(() => {
      // Try again after a short delay
      setTimeout(() => {
        videoElement.play().catch(e => console.error('Could not autoplay video:', e));
      }, 500);
    });
  });
};

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

            // Force play the video with multiple attempts for mobile
            if (video.autoplay) {
              // First attempt
              video.play().catch(() => {
                // Second attempt with timeout
                setTimeout(() => {
                  video.play().catch(() => {
                    // Third attempt with user interaction simulation
                    document.addEventListener('touchstart', () => {
                      video.play().catch(e => console.error('Final error playing video:', e));
                    }, { once: true });
                  });
                }, 1000);
              });
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

    // Try to force play videos after a short delay
    setTimeout(forcePlayVideos, 1000);

    // Also try to play videos on first user interaction
    const userInteractionEvents = ['touchstart', 'click', 'scroll'];
    userInteractionEvents.forEach(event => {
      document.addEventListener(event, () => {
        forcePlayVideos();
        // Remove these event listeners after first interaction
        userInteractionEvents.forEach(e => {
          document.removeEventListener(e, forcePlayVideos);
        });
      }, { once: true });
    });
  }

  // For browsers without IntersectionObserver, just try to play videos
  else {
    setTimeout(forcePlayVideos, 1000);
  }
};
