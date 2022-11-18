'use strict';

{
  function play() {
    setTimeout(() => {
      images[currentIndex].classList.remove('current');
      currentIndex++;
      if (currentIndex > images.length - 1) {
          currentIndex = 0;
      }
      images[currentIndex].classList.add('current');
      play();
    }, 5000);
  }

  const images = document.querySelectorAll('.hero img');
  let currentIndex = 0;

  play();

  const header = document.querySelector('header');
  const toTop = document.getElementById('to_top');

  const inViewObserver = new IntersectionObserver(inViewCallback, {
    threshold: 0.2,
  });

  document.querySelectorAll('.animate').forEach(el => {
    inViewObserver.observe(el);
  });

  const onScrollObserver = new IntersectionObserver(onScrollCallback);
  onScrollObserver.observe(document.getElementById('target'));

  toTop.addEventListener('click', e => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}
