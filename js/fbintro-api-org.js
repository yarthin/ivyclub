$(document).ready(function() {

    var albums = $('#faba');
    albums.faba({
        account: 'ivyclubsg',
        token: '574426812762931|N9RUNH_omfYTjHsPUN5m6N_K49Q',
        appID: '574426812762931',
        correctPageNum: {
            '233704190019951': 30
        },
        albumsTitle: 'Übersicht',
        albLimit : 10,
		showPageNumbers: true,
		skipAlbums : ['Profile Pictures', 'Cover Photos','Mobile Uploads','Timeline Photos','IVY Nächte'],
		autoplay: false,
		autoplaySpeed: 3600,
		loadFromCache: false,
		cacheData: false,
		albumsCachePath:'cache',
		metaCachePath:'cache',
		albumsSort: 'desc',
		keepAlbumOrder: 'false', 
		photosLayout:'photoAlbum',
		fixedSize: false,
		fbLinkText:'Auf Facebook ansehen',
		noCommentsText: 'Keine Kommentare vorhanden',
		photoDesc:'IVY - Club & Events',
		comments: true,
		albumsLoad:'expand',
		showCaption:true,
		albumAnimation : 'slideLeft',
		albumView : 'Ansehen <span>&rarr;</span>',
	    albumHeight : 200,
        callbacks: {
            albumsLoaded: function() {
                if (isExists('.swiper-container')) {

                    var swiperDirection = $('.swiper-container').data('direction'),
                        swiperAutoplay = $('.swiper-container').data('swiper-autoplay'),
                        swiperMousewheelControl = $('.swiper-container').data('swiper-wheel-control'),
                        swiperMargin = $('.swiper-container').data('swiper-margin'),
                        swiperSlideEffect = $('.swiper-container').data('slide-effect'),
                        swiperScrollbar = ($('.swiper-container').data('scrollbar') ? $('.swiper-container').find('.swiper-scrollbar') : null);
                    swiperScrollbar = (isExists(swiperScrollbar) ? swiperScrollbar : null);
                    var swiper = new Swiper($('.swiper-container'), {

                        pagination: '.swiper-pagination',
                        direction: (swiperDirection ? swiperDirection : 'horizontal'),
                        slidesPerView: 1,
                        nextButton: '.swiper-button-next',
                        prevButton: '.swiper-button-prev',
                        autoplay: (swiperAutoplay ? swiperAutoplay : false),
                        paginationClickable: true,
                        spaceBetween: (swiperMargin ? swiperMargin : 30),
                        mousewheelControl: ((swiperMousewheelControl === false) ? swiperMousewheelControl : true),
                        scrollbar: (swiperScrollbar ? swiperScrollbar : null),
                        scrollbarHide: false,
                        slidesPerView: 'auto',
                        speed: 600,
                        effect: (swiperSlideEffect ? swiperSlideEffect : 'coverflow'),
                        coverflow: {
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true
                        }
                    });

                }
            },
        },
    });
});