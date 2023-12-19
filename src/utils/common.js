export const getMenuStyles = (menuOpened) => {
  if (document.documentElement.clientWidth <= 800) {
    return { right: !menuOpened && "-100%" };
  }
};

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 100,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2
    },
    750: {
      slidesPerView: 3,
       
    },
    1100: {
      slidesPerView: 3,
     
    },
    1800:{
      slidesPerView:3,
      spaceBetween:130,
    },
    1920:{
      slidesPerView:3,
      spaceBetween:150,
  
    },
    2100:{
      slidesPerView:3,
      spaceBetween:200,
    }
  },

};

