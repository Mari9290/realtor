// const counters = document.querySelectorAll(".count");
// const speed = 200;

// counters.forEach((counter) => {
//     const updateCount = () => {
//     const target = parseInt(+counter.getAttribute("data-target"));
//     const count = parseInt(+counter.innerText);
//     const increment = Math.trunc(target / speed);

//     if (count < target) {
//         counter.innerText = count + increment;
//         setTimeout(updateCount, 1);
//         } else {
//         count.innerText = target;
//         }
//     };
//     updateCount();
//     });

(function () {
    var square = document.querySelector('.progress__wrapper');

    var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        var entrySquare = entry.target.querySelector('.square');
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
            return;
        }

        if (entry.isIntersecting) {
            entrySquare.classList.add('count');
            return;
        }

        entrySquare.classList.remove('count');
        });
    });

    observer.observe(square);
    })();

