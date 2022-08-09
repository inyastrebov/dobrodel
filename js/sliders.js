const portSlider = new Swiper('.help__items', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.help__next',
        prevEl: '.help__prev',
    },
    breakpoints: {
        840: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 4
        },
        1550: {
            slidesPerView: 4
        }
    }
});

const advantagesSlider = new Swiper('.advantages__items', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        840: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 4
        },
        1550: {
            slidesPerView: 4
        }
    }
});

const teamSlider = new Swiper('.team__items', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.team__next',
        prevEl: '.team__prev',
    },
    breakpoints: {
        840: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 4
        },
        1550: {
            slidesPerView: 4
        }
    }
});