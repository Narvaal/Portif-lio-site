document.addEventListener('DOMContentLoaded', () => {
    const clockElement = document.getElementById('clock');
    if (clockElement) {
      const now = new Date();
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
      clockElement.innerHTML = now.toLocaleDateString(undefined, options);
    }

    document.querySelectorAll(".real-image").forEach((img) => {
      const wrapper = img.closest(".image-wrapper");
      const skeleton = wrapper.querySelector(".skeleton-loader");

      const showImage = () => {
        img.classList.add("loaded");
        if (skeleton) skeleton.style.display = "none";
      };

      if (img.complete) {
        showImage();
      } else {
        img.addEventListener("load", showImage);
      }
    });
    
    document.querySelectorAll(".fade-in").forEach(el => {
      el.classList.add("visible");
    });

    document.querySelectorAll("img").forEach(img => {
      const applyLoaded = () => img.classList.add("loaded");
      img.complete ? applyLoaded() : img.addEventListener("load", applyLoaded);
    });

    const words = document.querySelectorAll('.typing-word');
    const fadeInWord = index => {
      if (index >= words.length) return;
      const word = words[index];
      let opacity = 0;
      word.style.opacity = 0;
      const interval = setInterval(() => {
        opacity += 0.01;
        word.style.opacity = opacity;
        if (opacity >= 1) {
          clearInterval(interval);
          fadeInWord(index + 1);
        }
      }, 3);
    };
    fadeInWord(0);
  });
