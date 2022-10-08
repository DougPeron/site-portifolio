// Responsive carousel
// =============================================================================

const responsiveCarousel = document.querySelector(".js-carousel--responsive");

new Glider(responsiveCarousel, {
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  duration: 0.25,
  dots: ".js-carousel--responsive-dots",
  arrows: {
    prev: ".js-carousel--responsive-prev",
    next: ".js-carousel--responsive-next",
  },
  responsive: [
    {
      breakpoint: 648,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 995,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
  ],
}).mount();
