    const carousel = document.getElementById('carousel');
    const slides = carousel.querySelectorAll('img');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    let current = 0;
    let autoplay;

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[index].classList.add('active');
    }

    function nextSlide() {
      current = (current + 1) % slides.length;
      showSlide(current);
    }

    function prevSlide() {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    }

    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoplay();
    });

    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoplay();
    });

    function startAutoplay() {
      autoplay = setInterval(nextSlide, 10000);
    }

    function resetAutoplay() {
      clearInterval(autoplay);
      startAutoplay();
    }

    // Swipe (touch)
    let startX = 0;
    carousel.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchend', e => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) {
        nextSlide();
        resetAutoplay();
      } else if (endX - startX > 50) {
        prevSlide();
        resetAutoplay();
      }
    });

    // Inicializar
    showSlide(current);
    startAutoplay();


    //carta

      function openLetter(element) {
      element.classList.toggle('open');
    }