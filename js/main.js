
  // ポップアップ
  $(document).ready( function(){
    // ページ下部固定ボタン表示非表示
        $(window).on('load resize',function(){
            btnOffset = $('.btn-appear').offset().top;
            winH = $(window).height();
        });
        $(function() {
            var fixedbtn = $('.fixed__btn');
            fixedbtn.hide();
            $(window).scroll(function () {
                if ($(this).scrollTop() > btnOffset - winH) {
                    fixedbtn.fadeIn();
                } else {
                    fixedbtn.fadeOut();
                }
            });
        });
    });
// フェードイン
  window.onload = function() {
    // 実行したい処理
    var startid = document.getElementById('headerimg');
    startid.classList.add("fadein");
    var startid = document.getElementById('headimg-sp');
    startid.classList.add("fadein");

    fadeinEvent();
    window.addEventListener('scroll', fadeinEvent, false);
}

function fadeinEvent() {
    var fadeinClass= Array.prototype.slice.call(document.getElementsByClassName("fadein2"));
    fadeinClass.forEach(function( element ) {
        var boundingClientRect = element.getBoundingClientRect();
        var scroll = document.documentElement.scrollTop || document.body.scrollTop;
        var windowHeight = window.innerHeight;
        if (scroll > scroll + boundingClientRect.top - windowHeight + 200){
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
}



  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.querySelector('#carousel-container ul');
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;

  function updateButtons() {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if (currentIndex === 0) {
      prev.classList.add('hidden');
    }
    if (currentIndex === slides.length - 1) {
      next.classList.add('hidden');
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;
        updateDots();
        updateButtons();
        moveSlides();
      });
      dots.push(button);
      // document.querySelector('nav').appendChild(button);
      document.getElementById('nav1').appendChild(button);
    }

    dots[0].classList.add('current');
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }

  updateButtons();
  setupDots();

  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    updateDots();
    moveSlides();
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    updateDots();
    moveSlides();
  });

  window.addEventListener('resize', () => {
    moveSlides();
  });


  const next2 = document.getElementById('next2');
  const prev2 = document.getElementById('prev2');
  const ul2 = document.querySelector('#carousel-container2 ul');
  const slides2 = ul2.children;
  const dots2 = [];
  let currentIndex2 = 0;

  function updateButtons2() {
    prev2.classList.remove('hidden');
    next2.classList.remove('hidden');

    if (currentIndex2 === 0) {
      prev2.classList.add('hidden');
    }
    if (currentIndex2 === slides2.length - 1) {
      next2.classList.add('hidden');
    }
  }

  function moveSlides2() {
    const slideWidth2 = slides2[0].getBoundingClientRect().width;
    ul2.style.transform = `translateX(${-1 * slideWidth2 * currentIndex2}px)`;
  }

  function setupDots2() {
    for (let i = 0; i < slides2.length; i++) {
      const button2 = document.createElement('button');
      button2.addEventListener('click', () => {
        currentIndex2 = i;
        updateDots2();
        updateButtons2();
        moveSlides2();
      });
      dots2.push(button2);
      document.getElementById('slideshow').appendChild(button2);
    }

    dots2[0].classList.add('current');
  }

  function updateDots2() {
    dots2.forEach(dot2 => {
      dot2.classList.remove('current');
    });
    dots2[currentIndex2].classList.add('current');
  }

  updateButtons2();
  setupDots2();

  next2.addEventListener('click', () => {
    currentIndex2++;
    updateButtons2();
    updateDots2();
    moveSlides2();
  });

  prev2.addEventListener('click', () => {
    currentIndex2--;
    updateButtons2();
    updateDots2();
    moveSlides2();
  });

  window.addEventListener('resize', () => {
    moveSlides2();
  });

