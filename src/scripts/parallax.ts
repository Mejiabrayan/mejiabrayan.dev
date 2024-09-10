export function initParallax(elementId: string, speed: number = 0.5, scale: number = 1.1): void {
    function parallax(): void {
      const element = document.getElementById(elementId);
      if (element) {
        window.addEventListener('scroll', () => {
          const scrollPosition = window.scrollY;
          element.style.transform = `translateY(${scrollPosition * speed}px) scale(${scale})`;
        });
      }
    }
  
    const observer = new MutationObserver((mutations: MutationRecord[]) => {
      if (document.getElementById(elementId)) {
        parallax();
        observer.disconnect();
      }
    });
  
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  
    if (document.readyState === 'complete') {
      parallax();
    } else {
      document.addEventListener('DOMContentLoaded', parallax);
    }
  }