(function () {
  var square1 = document.querySelector('.progress__wrapper-one');

  var abserver1 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
      var entrySquare1 = entry.target.querySelector('.squareone');
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
      }

      if (entry.isIntersecting) {
          entrySquare1.classList.add('count1');
          return;
      }

      entrySquare1.classList.remove('count1');
      });
  });

  abserver1.observe(square1);
  })();