document.querySelectorAll('.tulips').forEach(tulip => {
    tulip.addEventListener('mouseenter', () => {
      tulip.style.animation = 'moveTulip 2s ease-in-out infinite';
    });
    
    tulip.addEventListener('mouseleave', () => {
      tulip.style.animation = 'moveTulip 5s ease-in-out infinite';
    });
  });
  