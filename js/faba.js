(function($) {
    "use strict";
    $.fn.faba = function(options) {
        // set defaults
        var defaults = {
            appID: '',
            token: '',
            account: '',
            albumsCachePath: '',
            metaCachePath: '',
            albumsTitle: 'Galleries',
            fixedSize: false,
            photosContainerLoad: 320,
            photosLayout: 'flex',
            photoWidth: 220,
            photoHeight: 240,
            photosPerPage: 25,
            photoAnimation: 'HorizontalSlide',
            photoMarginHorizontal: 5,
            photoMarginVertical: 5,
            photosSroll: 400,
            showCaption: true,
            photoDesc: 'Description',
            fbLinkText: 'Open In Facebook',
            skipPhotos: [],
            correctPageNum: {},
            comments: true,
            commentsLimit: 5,
            commentsMore: 'Load More',
            noCommentsText: 'There are no comments for this photo',
            commentsFaces: true,
            lineLoad: 480,
            photoHoverAnimations: {
                overlay: 'expand',
                button: 'shrink',
                duration: {
                    image: 1500,
                    overlay: 650,
                    button: 650
                }
            },
            css: {
                overlay: '',
                viewAlbum: '',
                buttons: '',
                viewAlbumHover: '',
                photosContainer: '',
                preloaderCircle: '',
                preloaderRotator: ''
            },
            albLimit: 15,
            albumWidth: 300,
            albumHeight: 260,
            albumsSort: 'desc',
            albumAnimation: 'HorizontalSlide',
            albumMarginHorizontal: 10,
            albumMarginVertical: 10,
            albumsScroll: 400,
            keepAlbumOrder: true,
            albumView: 'View <span>&rarr;</span>',
            skipAlbums: [],
            albumsCount: 1,
            albumsLoad: 'expand',
            albumsLoadDuration: 650,
            albumsHoverAnimations: {
                image: 'shrink',
                overlay: 'expand',
                button: 'slideDown',
                badge: 'slideUpLong',
                duration: {
                    image: 830,
                    overlay: 600,
                    button: 450,
                    badge: 600
                }
            },
            autoplay: false,
            autoplayPauseText: 'Pause Autoplay',
            autoplayResumeText: 'Resume Autoplay',
            autoplaySpeed: 5000,
            cacheData: false,
            cacheSpeed: 4700,
            loadFromCache: false,
            showPageNumbers: true,
            singleAlbum: false,
            debugging: false,
            lightbox: {
                fadeDuration: 500,
                fitImagesInViewport: true,
                positionFromTop: 10,
                resizeDuration: 700,
                showImageNumberLabel: true,
                wrapAround: false,
                maxWidth: null,
                maxHeight: null,
                disableScrolling: false,
                albumLabel: 'Image %1 of %2',
                alwaysShowNavOnTouchDevices: false
            },
            callbacks: {
                albumsLoading: function(page, direction) {},
                albumsLoaded: function(page, direction, isCached) {},
                albumOpened: function(id) {},
                albumsNavigate: function(direction, from, to) {},
                albumHovered: function(album, id) {},
                photosLoading: function(page) {},
                photosLoaded: function(page, isCached) {},
                photoChange: function(id) {},
                photosNavigate: function(page, direction, isCached) {},
                photoHovered: function(photo, link) {},
            },
        }

        var ops = $.extend({}, defaults, options);

        var albums = $('#faba');
        var token;
        var albumsTitle;
        var wall = undefined,
            albWall = undefined,
            zbir = {},
            albLimit,
            photosPerPage,
            albCurr = 1,
            showCaption,
            photoDesc,
            commentsLimit,
            commentsMore,
            comments;
        var photosLayout;
        var fixedSize;
        var photoWidth;
        var photoHeight;
        var skipAlbums;
        var skipPhotos;
        var albumWidth;
        var albumHeight;
        var photosContainerLoad;
        var lineLoad;
        var keepAlbumOrder = true;
        var albumsScroll;
        var photosSroll;
        var albumView;
        var css = {}
        var account;
        var albumsPgd;
        var albumsSort;
        var albumAnimation;
        var albumsLoad;
        var albumsLoadDuration;
        var photoAnimation;
        var albumsHoverAnimations = {}
        var photoHoverAnimations = {}
        var lbx;
        var anm = {};
        var lightBox = {}
        var callback = {};
        var photoAnm = [];
        var albHover = [];
        var cachedPhotos = {};
        var cachedAlbums = {};
        var cachedPhotoMeta = {};
        var lastCached;
        var currentAlb;
        var autoplay;
        var autoplaySpeed;
        var autoplayStep = 0;
        var autoplayPauseText;
        var autoplayResumeText;
        var paused = false;
        var cacheData;
        var caching = false;
        var cachedId = [];
        var cacheSpeed;
        var loadFromCache;
        var appID;
        var showPageNumbers;
        var singleAlbum;
        var apiCalls = {};
        var debugging;
        var albumMarginHorizontal;
        var albumMarginVertical;
        var photoMarginHorizontal;
        var photoMarginVertical;
        var fbLinkText;
        var commentsFaces;
        var noCommentsText;
        var lightboxlayout;
        var correctPageNum;
        var albumsCachePath;
        var metaCachePath;
        var hd = {
            current: 0,
            total: 0
        }
        fixedSize = fixedSize === true ? 0 : null;
        apiCalls.total = 0;

        // apply options
        function setOptions() {
            token = ops.token;
            albumsTitle = ops.albumsTitle;
            albLimit = ops.albLimit,
                photosPerPage = ops.photosPerPage,
                showCaption = ops.showCaption,
                photoDesc = ops.photoDesc,
                commentsLimit = ops.commentsLimit,
                commentsMore = ops.commentsMore,
                comments = ops.comments;
            photosLayout = ops.photosLayout;
            fixedSize = ops.fixedSize
            photoWidth = ops.photoWidth;
            photoHeight = ops.photoHeight;
            skipAlbums = ops.skipAlbums;
            skipPhotos = ops.skipPhotos;
            albumWidth = ops.albumWidth;
            albumHeight = ops.albumHeight;
            photosContainerLoad = ops.photosContainerLoad;
            lineLoad = ops.lineLoad;
            albumsScroll = ops.albumsScroll;
            photosSroll = ops.photosSroll;
            albumView = ops.albumView;
            css = {
                overlay: ops.css.overlay ? ops.css.overlay : '',
                viewAlbum: ops.css.viewAlbum ? ops.css.viewAlbum : '',
                viewAlbumHover: ops.css.viewAlbumHover ? ops.css.viewAlbumHover : '',
                buttons: ops.css.buttons ? ops.css.buttons : '',
                photosContainer: ops.css.photosContainer ? ops.css.photosContainer : '',
                preloaderCircle: ops.css.preloaderCircle ? ops.css.preloaderCircle : '',
                preloaderRotator: ops.css.preloaderRotator ? ops.css.preloaderRotator : ''
            }
            account = ops.account;
            albumsPgd = ops.albumsCount;
            albumAnimation = ops.albumAnimation;
            albumsLoad = ops.albumsLoad;
            albumsLoadDuration = ops.albumsLoadDuration;
            photoAnimation = ops.photoAnimation;
            albumsSort = ops.albumsSort;
            albumsHoverAnimations = {
                image: ops.albumsHoverAnimations.image ? ops.albumsHoverAnimations.image : 'dropDown',
                overlay: ops.albumsHoverAnimations.overlay ? ops.albumsHoverAnimations.overlay : 'expand',
                button: ops.albumsHoverAnimations.button ? ops.albumsHoverAnimations.button : 'shrink',
                badge: ops.albumsHoverAnimations.badge ? ops.albumsHoverAnimations.badge : 'slideLeft',
                duration: {
                    image: ops.albumsHoverAnimations.duration && ops.albumsHoverAnimations.duration.image ? ops.albumsHoverAnimations.duration.image : 1000,
                    overlay: ops.albumsHoverAnimations.duration && ops.albumsHoverAnimations.duration.overlay ? ops.albumsHoverAnimations.duration.overlay : 600,
                    button: ops.albumsHoverAnimations.duration && ops.albumsHoverAnimations.duration.button ? ops.albumsHoverAnimations.duration.button : 450,
                    badge: ops.albumsHoverAnimations.duration && ops.albumsHoverAnimations.duration.badge ? ops.albumsHoverAnimations.duration.badge : 650
                }
            }
            photoHoverAnimations = {
                overlay: ops.photoHoverAnimations.overlay ? ops.photoHoverAnimations.overlay : 'expand',
                button: ops.photoHoverAnimations.button ? ops.photoHoverAnimations.button : 'shrink',
                duration: {
                    image: ops.photoHoverAnimations.duration && ops.photoHoverAnimations.duration.image ? ops.photoHoverAnimations.duration.image : 1500,
                    overlay: ops.photoHoverAnimations.duration && ops.photoHoverAnimations.duration.overlay ? ops.photoHoverAnimations.duration.overlay : 650,
                    button: ops.photoHoverAnimations.duration && ops.photoHoverAnimations.duration.button ? ops.photoHoverAnimations.duration.button : 650
                }
            }
            lbx;
            anm = {
                album: { in: '',
                    out: ''
                },
                photos: { in: '',
                    out: ''
                },
                albumsLoad: { in: '',
                    out: '',
                    duration: albumsLoadDuration
                },
                albumsHover: {
                    image: { in: '',
                        out: '',
                        duration: albumsHoverAnimations.duration.image
                    },
                    overlay: { in: '',
                        out: '',
                        duration: albumsHoverAnimations.duration.overlay
                    },
                    button: { in: '',
                        out: '',
                        duration: albumsHoverAnimations.duration.button
                    },
                    badge: { in: '',
                        out: '',
                        duration: albumsHoverAnimations.duration.badge
                    }
                },
                photoHover: {
                    image: {
                        duration: photoHoverAnimations.duration.image
                    },
                    overlay: { in: '',
                        out: '',
                        duration: photoHoverAnimations.duration.overlay
                    },
                    button: { in: '',
                        out: '',
                        duration: photoHoverAnimations.duration.button
                    }
                }
            };
            lightBox = {
                fadeDuration: ops.lightbox.fadeDuration ? ops.lightbox.fadeDuration : 500,
                fitImagesInViewport: ops.lightbox.fitImagesInViewport ? ops.lightbox.fitImagesInViewport : true,
                positionFromTop: ops.lightbox.positionFromTop ? ops.lightbox.positionFromTop : 50,
                resizeDuration: ops.lightbox.resizeDuration ? ops.lightbox.resizeDuration : 700,
                showImageNumberLabel: ops.lightbox.showImageNumberLabel ? ops.lightbox.showImageNumberLabel : true,
                wrapAround: ops.lightbox.wrapAround ? ops.lightbox.wrapAround : false,
                maxWidth: ops.lightbox.maxWidth ? ops.lightbox.maxWidth : '',
                maxHeight: ops.lightbox.maxHeight ? ops.lightbox.maxHeight : '',
                disableScrolling: ops.lightbox.disableScrolling ? ops.lightbox.disableScrolling : false,
                albumLabel: ops.lightbox.albumLabel ? ops.lightbox.albumLabel : 'Image %1 of %2',
                alwaysShowNavOnTouchDevices: ops.lightbox.alwaysShowNavOnTouchDevices ? ops.lightbox.alwaysShowNavOnTouchDevices : false

            }
            callback = {
                albumsLoading: typeof ops.callbacks.albumsLoading === 'function' ? ops.callbacks.albumsLoading : '',
                albumsLoaded: typeof ops.callbacks.albumsLoaded === 'function' ? ops.callbacks.albumsLoaded : '',
                albumOpened: typeof ops.callbacks.albumOpened === 'function' ? ops.callbacks.albumOpened : '',
                albumsNavigate: typeof ops.callbacks.albumsNavigate === 'function' ? ops.callbacks.albumsNavigate : '',
                albumHovered: typeof ops.callbacks.albumHovered === 'function' ? ops.callbacks.albumHovered : '',
                photosLoading: typeof ops.callbacks.photosLoading === 'function' ? ops.callbacks.photosLoading : '',
                photosLoaded: typeof ops.callbacks.photosLoaded === 'function' ? ops.callbacks.photosLoaded : '',
                photoChange: typeof ops.callbacks.photoChange === 'function' ? ops.callbacks.photoChange : '',
                photosNavigate: typeof ops.callbacks.photosNavigate === 'function' ? ops.callbacks.photosNavigate : '',
                photoHovered: typeof ops.callbacks.photoHovered === 'function' ? ops.callbacks.photoHovered : ''
            };
            lastCached;
            currentAlb;
            autoplay = ops.autoplay;
            autoplaySpeed = ops.autoplaySpeed;
            autoplayPauseText = ops.autoplayPauseText;
            autoplayResumeText = ops.autoplayResumeText;
            cacheData = ops.cacheData;
            cacheSpeed = ops.cacheSpeed;
            loadFromCache = ops.loadFromCache;
            appID = ops.appID;
            showPageNumbers = ops.showPageNumbers;
            singleAlbum = ops.singleAlbum;
            debugging = ops.debugging;
            albumMarginHorizontal = ops.albumMarginHorizontal;
            albumMarginVertical = ops.albumMarginVertical;
            photoMarginHorizontal = ops.photoMarginHorizontal;
            photoMarginVertical = ops.photoMarginVertical;
            fbLinkText = ops.fbLinkText;
            commentsFaces = ops.commentsFaces;
            noCommentsText = ops.noCommentsText;
            lightboxlayout = ops.lightboxlayout;
            correctPageNum = ops.correctPageNum;
            albumsCachePath = ops.albumsCachePath;
            metaCachePath = ops.metaCachePath;
        }

        function debugPrint(msg, count) {
            if (!count) console.log(apiCalls.total + ' API Calls Made');
            if (msg) console.log(msg);
        }


        function render(In, Out, type, isHover, duration) {
            if (!isHover) {
                anm[type]['in'] = In;
                anm[type]['out'] = Out;
                //anm[type]['duration'] = duration;
            } else {
                anm[type][isHover]['in'] = In;
                anm[type][isHover]['out'] = Out;
                anm[type][isHover]['duration'] = duration;
            }
        }

        function Animation(animation, type, isHover) {
            var duration;
            if (animation.duration) duration = animation.duration;
            if (animation.duration && animation.duration[isHover]) duration = animation.duration[isHover];
            if (!isHover) isHover = false;
            else animation = animation[isHover];
            // check for selected animation
            switch (animation) {
                case 'slideUp':
                    render('transition.slideUpIn', 'transition.slideDownOut', type, isHover, duration);
                    break;
                case 'slideLeft':
                    render('transition.slideLeftIn', 'transition.slideRightOut', type, isHover, duration);
                    break;
                case 'slideRight':
                    render('transition.slideRightIn', 'transition.slideLeftOut', type, isHover, duration);
                    break;
                case 'slideDown':
                    render('transition.slideDownIn', 'transition.slideUpOut', type, isHover, duration);
                    break;
                case 'slideUpLong':
                    render('transition.slideUpBigIn', 'transition.slideDownBigOut', type, isHover, duration);
                    break;
                case 'slideLeftLong':
                    render('transition.slideLeftBigIn', 'transition.slideRightBigOut', type, isHover, duration);
                    break;
                case 'slideRightLong':
                    render('transition.slideRightBigIn', 'transition.slideLeftBigOut', type, isHover, duration);
                    break;
                case 'slideDownLong':
                    render('transition.slideDownBigIn', 'transition.slideUpBigOut', type, isHover, duration);
                    break;
                case 'flipX':
                    render('transition.flipXIn', 'transition.flipXOut', type, isHover, duration);
                    break;
                case 'flipY':
                    render('transition.flipYIn', 'transition.flipYOut', type, isHover, duration);
                    break;
                case 'flipYBounce':
                    render('transition.flipBounceYIn', 'transition.flipBounceYOut', type, isHover, duration);
                    break;
                case 'flipXBounce':
                    render('transition.flipBounceXIn', 'transition.flipBounceXOut', type, isHover, duration);
                    break;
                case 'expand':
                    render('transition.expandIn', 'transition.expandOut', type, isHover, duration);
                    break;
                case 'swoop':
                    render('transition.swoopIn', 'transition.swoopOut', type, isHover, duration);
                    break;
                case 'whirl':
                    render('transition.whirlIn', 'transition.whirlOut', type, isHover, duration);
                    break;
                case 'shrink':
                    render('transition.shrinkIn', 'transition.shrinkOut', type, isHover, duration);
                    break;
                case 'bounce':
                    render('transition.bounceIn', 'transition.bounceOut', type, isHover, duration);
                    break;
                case 'bounceDown':
                    render('transition.bounceDownIn', 'transition.bounceDownOut', type, isHover, duration);
                    break;
                case 'bounceLeft':
                    render('transition.bounceLeftIn', 'transition.bounceLeftOut', type, isHover, duration);
                    break;
                case 'bounceRight':
                    render('transition.bounceRightIn', 'transition.bounceRightOut', type, isHover, duration);
                    break;
                case 'verticalBounce':
                    render('transition.bounceUpIn', 'transition.bounceDownOut', type, isHover, duration);
                    break;
                case 'horizontalBounce':
                    render('transition.bounceLeftIn', 'transition.bounceRightOut', type, isHover, duration);
                    break;
                case 'dropDown':
                    render('transition.perspectiveUpIn', 'transition.perspectiveUpOut', type, isHover, duration);
                    break;
                case 'dropUp':
                    render('transition.perspectiveDownIn', 'transition.perspectiveDownOut', type, isHover, duration);
                    break;
                case 'dropLeft':
                    render('transition.perspectiveLeftIn', 'transition.perspectiveLeftOut', type, isHover, duration);
                    break;
                case 'dropRight':
                    render('transition.perspectiveRightIn', 'transition.perspectiveRightOut', type, isHover, duration);
                    break;
                case 'swoop':
                    render('transition.swoopIn', 'transition.swoopOut', type, isHover, duration);
                    break;
                case 'expand':
                    render('transition.expandIn', 'transition.expandOut', type, isHover, duration);
                    break;
                case 'shrink':
                    render('transition.shrinkIn', 'transition.shrinkOut', type, isHover, duration);
                    break;
                case 'HorizontalSlide':
                    if (type === 'album') render('transition.expandIn', 'transition.expandOut', type, isHover, duration);
                    else render('transition.slideLeftIn', 'transition.SlideRightOut', type, isHover, duration);
                    break;
                case 'VerticalSlide':
                    if (type === 'album') render('transition.expandIn', 'transition.expandOut', type, isHover, duration);
                    else render('transition.slideUpIn', 'transition.slideDownOut', type, isHover, duration);
                    break;
            }
        }

        function applyAnimations() {
            Animation(albumAnimation, 'album');
            Animation(photoAnimation, 'photos');
            Animation(albumsLoad, 'albumsLoad');
            Animation(albumsHoverAnimations, 'albumsHover', 'image');
            Animation(albumsHoverAnimations, 'albumsHover', 'overlay');
            Animation(albumsHoverAnimations, 'albumsHover', 'button');
            Animation(albumsHoverAnimations, 'albumsHover', 'badge');
            Animation(photoHoverAnimations, 'photoHover', 'overlay');
            Animation(photoHoverAnimations, 'photoHover', 'button');
        }

        function lightboxInit() {
            lightbox.option({
                fadeDuration: lightBox.fadeDuration,
                alwaysShowNavOnTouchDevices: lightBox.alwaysShowNavOnTouchDevices,
                albumLabel: lightBox.albumLabel,
                disableScrolling: lightBox.disableScrolling,
                fitImagesInViewport: lightBox.fitImagesInViewport,
                maxWidth: lightBox.maxWidth,
                maxHeight: lightBox.maxHeight,
                positionFromTop: lightBox.positionFromTop,
                resizeDuration: lightBox.resizeDuration,
                showImageNumberLabel: lightBox.showImageNumberLabel,
                wrapAround: lightBox.wrapAround
            });
        }

        function fixHeight() {
            var H = albums.find('.fb-album').length * 335;
            albums.find('#faba-inner').height(H);
            albums.find('.fb-album').each(function() {
                var $this = $(this);
                if ($this.index() != 0) {
                    var x = $this.index();
                    var t = albums.find('.fb-album').eq(x - 1).css('top');
                    t = parseInt(t, 10);
                    $this.css('top', t + 335);
                }
            });
        }

        function albumWallInit(markup) {
            if (albWall === undefined) {
                if (!navigator.userAgent.match(/chrome/i) == null)
                    albumMarginVertical += 5;
                albWall = new Freewall("#faba-inner");
                albWall.reset({
                    selector: '.fb-album',
                    gutterX: albumMarginHorizontal,
                    gutterY: albumMarginVertical,
                    cellW: albumWidth,
                    cellH: albumHeight,
                    keepOrder: keepAlbumOrder,
                    fixSize: fixedSize,
                    onResize: function() {
                        albWall.refresh();
                        if ($(window).width() > 400 && $(window).width() < 615) {
                            var a = setInterval(function() {
                                fixHeight();
                                var H = albums.find('.fb-album').length * 335;
                                if (H == albums.find('#faba-inner').outerHeight()) clearInterval(a);
                            }, 100);
                        }
                    },
                    onBlockResize: function(a) {
                        var H = a.height;
                        albums.find('.fb-wrap').height(H - 35);
                    }
                });
                albWall.fitWidth();
                // for scroll bar appear;
                $(window).trigger("resize");
                albWall.prepend(markup);
            } else {
                albWall.prepend(markup);
            }
        }

        function addAlbum(picture, name, id, description, count, cover) {
            //console.log(picture);
            //  var $image = picture;
            var $image = '';
            // fetch 1st picture from the album
            // and replace the poor quality one
            // that Facebook serves with the one
            // that will best suit selected dimensions
            FB.api(
                '/' + id + '/photos', {
                    'access_token': token,
                    "fields": "images",
                    "limit": 1
                },
                function(data) {
                    if (data.data && !data.error) {
                        if (data.data[0]['images'][5] && data.data[0]['images'][5].width > albumWidth) {
                            $image = data.data[0]['images'][5].source;
                        } else if (data.data[0]['images'][4] && data.data[0]['images'][4].width > albumWidth) {
                            $image = data.data[0]['images'][4].source;
                        } else if (data.data[0]['images'][3] && data.data[0]['images'][3].width > albumWidth) {
                            $image = data.data[0]['images'][3].source;
                        } else if (data.data[0]['images'][2] && data.data[0]['images'][2].width > albumWidth) {
                            $image = data.data[0]['images'][2].source;
                        } else if (data.data[0]['images'][1]) {
                            $image = data.data[0]['images'][1].source;
                        }
                        $('#a' + id).find('img').attr('src', $image);
                        $('#a' + id).find('.fb-album-img').css('background-image', 'url(' + $image + ')');
                        var al = $('#a' + id);
                        var H = al.parent().find('h4').outerHeight(true) > 35 ? albumHeight - (al.parent().find('h4').outerHeight(true) - 35) : albumHeight;
                        if (albums.width() < 1280) al.height(albumHeight - 35 - albumMarginVertical);
                        else al.height(albumHeight);
                        hd.current = hd.current + 1;
                        if (debugging) {
                            apiCalls.total = apiCalls.total + 1;
                            debugPrint('Thumb image for Album ' + id + ' has been successfully replaced!');
                        }
                    } else {
                        console.log(data.error);
                    }
                });
            var markup = '<div class="fb-album hidden">';
            markup += '<h4>' + name + '</h4>';
            markup += '<div class="fb-wrap" id="a' + id + '"> \
		    <div class="fb-album-img imgdiv"></div> \
		    <img class="imgdiv" src="' + $image + '" alt="' + name + '" /> \
		    <span class="ovlpic"> \
		      <a class="fbp-view" href="' + id + '">' + albumView + '</a> \
		    </span> \
		    <span class="badge">' + count + ' photos</span> \
		    </div>';
            //if( description ) markup += '<span class="album-desc">'+ description +'</span>';
            markup += '</div>';
            albumWallInit(markup);
            if (debugging) debugPrint('Album ' + id + ' successfully added!', true);
        }

        function pagination(num, dir, prev, next, last, pgd) {
            if ($(prev).not(':visible')) $(prev).css('display', 'inline-block');
            if ($(next).not(':visible')) $(next).css('display', 'inline-block');
            // check if paged exists
            // if it is - we are checking album pagination
            if (pgd) {
                var paged = parseInt(pgd.text(), 10);
                last = paged;
                num = albumsPgd;
                var paginate = $('#pagination');
                paginate.find('li[data-id="' + paged + '"]').addClass('active').siblings().removeClass('active');
            }
            // check if is first page, then hide prev button
            if (num == 2 && dir === 'prev') $(prev).css('display', 'none');
            else if (dir === 'next' && $(prev).not(':visible')) $(prev).css('display', 'inline-block');
            if (last == 1) $(prev).css('display', 'none');
            // check if is last page, then hide next button
            if (num === last) $(next).css('display', 'none');
            else if (num < last) $(next).css('display', 'inline-block');
            if (num == 1) {
                $(prev).css('display', 'none');
                $(next).css('display', 'none');
            }
        }

        function photosLayoutSel() {
            var w, h;
            switch (photosLayout) {
                case 'flex':
                    w = photoWidth + photoWidth * Math.random() << 0;
                    h = '';
                    break;
                case 'photoAlbum':
                    photoWidth = 320;
                    photoHeight = 320;
                    w = 320;
                    h = 320;
                    break;
                case 'custom':
                    w = photoWidth;
                    h = photoHeight;
                    break;
            }
            var size = {
                Width: w,
                Height: h
            }
            return size;
        }


        function checkSlideMode(dir, type) {
            if (type === 'album' && albumAnimation === 'HorizontalSlide' || type === 'photos' && photoAnimation === 'HorizontalSlide') {
                if (dir === 'next')
                    render('transition.slideRightBigIn', 'transition.slideLeftBigOut', type, false);
                else
                    render('transition.slideLeftBigIn', 'transition.slideRightBigOut', type, false);
            }
            if (type === 'album' && albumAnimation === 'VerticalSlide' || type === 'photos' && photoAnimation === 'VerticalSlide') {
                if (dir === 'next')
                    render('transition.slideUpBigIn', 'transition.slideDownBigOut', type, false);
                else
                    render('transition.slideUpBigIn', 'transition.slideDownBigOut', type, false);
            }
        }

        function setCache(num) {
            if (!cachedPhotos[currentAlb][num]) {
                var un = $('a[data-lightbox]').first().attr('href');
                if (cacheData) {
                    if (cachedId.indexOf(un) == -1) cachedId = un;
                    else {
                        delete cachedPhotos[currentAlb][num];
                        num = num - 1;
                    }
                }
                cachedPhotos[currentAlb][num] = {
                    html: $('.fbp-container').html(),
                    next: $('#phnx').attr('href') != undefined ? $('#phnx').attr('href') : '',
                    previous: $('#phpr').attr('href') != undefined ? $('#phpr').attr('href') : '',
                    unique: un
                }
                lastCached = num;
                paused = false;
            }
        }

        function albumsCache(num) {
            if (!cachedAlbums[num]) {
                cachedAlbums[num] = {
                    html: $('#faba-inner').html(),
                    next: $('#aphnx').attr('href') != undefined ? $('#aphnx').attr('href') : '',
                    previous: $('#aphpr').attr('href') != undefined ? $('#aphpr').attr('href') : ''
                }
            }
        }

        function lastPage(id) {
            // check for the total number of pages for each album and
            // append it to the navigation bar
            var val = zbir[id];
            val = parseInt(val);
            var pages = val / photosPerPage;
            var last = Math.round(pages);
            var dif = last * photosPerPage;
            var nbx = (last + 1) * photosPerPage;
            if (pages > last && val < 500) {
                if (val > dif) last++;

            }
            if (last === 0) {
                last = 1;
            }

            if (!$.isEmptyObject(correctPageNum) && correctPageNum[id]) last = correctPageNum[id];

            return last;
        }

        function nextPage(num, dir) {
            var number;
            if (dir === 'next') number = num + 1;
            else number = num - 1;

            if (typeof num === 'object') {
                number = $('.fb-first').text();
                number = parseInt(number, 10);
            }

            return number;
        }

        function fixAlbumHeight() {
            albums.find('.fb-album h4').each(function() {
                var $this = $(this);
                if ($this.outerHeight(true) > 35) {
                    var wrap = $this.parent().find('.fb-wrap');
                    var H = wrap.outerHeight(true) - ($this.outerHeight(true) - 35);
                    wrap.height(H);
                }
            });
        }

        function replaceMarkup(el) {
            var $self = el;
            var $image = $self.find('.imgdiv').attr('src');
            var $name = $self.find('.imgdiv').attr('alt');
            var $id = $self.find('.fbp-view').attr('href');
            var $albumView = $self.find('.fbp-view').html();
            var $count = $self.find('.badge').html();
            var markup = '<img class="imgdiv" src="' + $image + '" alt="' + $name + '" /> \
		  	 <span class="ovlpic"> \
		  	   <a class="fbp-view" href="' + $id + '">' + $albumView + '</a> \
		  	 </span> \
		  	 <span class="badge">' + $count + ' photos</span>';
            $self.find('.fb-wrap').html(markup);
        }

        function wallInit() {
            if (photosLayout === 'photoAlbum') {
                photoWidth = 320;
                photoHeight = 320;
            } else if (photosLayout === 'flex') {
                photoWidth = 220;
                photoHeight = 240;
            }
            if (wall === undefined) wall = new Freewall(".fbp-container");
            wall.reset({
                selector: '.fb-pic',
                gutterX: photoMarginHorizontal,
                gutterY: photoMarginVertical,
                cellW: photoWidth,
                cellH: photoHeight,
                fixSize: fixedSize,
                onResize: function() {
                    wall.fitWidth();
                }
            });
            wall.fitWidth();
        }

        function cachedAlbumsSkip() {
            if (skipAlbums.length) {
                var album = $('.fb-album');
                $.each(skipAlbums, function(key, val) {
                    if ($('#a' + val).length) $('#a' + val).remove();
                    if ($('h4:contains("' + val + '")')) $('h4:contains("' + val + '")').closest('.fb-album').remove();
                });
                albWall.refresh();
            }
        }

        function loadMore(type, url, dir, last, cached, isAuto) {

            //if( limit ) url = url.replace('limit=25', 'limit='+ limit );
            var h = $('.fbp-container').outerHeight(true);
            var paged = $('#fb-breadcrumbs #fbpt').find('.fb-first');
            var num = parseInt(paged.text());
            var paginate = $('#pagination');
            var current = paginate.find('li.active').data('id');
            current = current ? parseInt(current, 10) : parseInt(paged.text(), 10);
            // check if it is next, or prevous button and the add
            // or decrase page number accordingly
            if (dir === 'prev') {
                paged.text(num - 1);
                current--;
                if (type === 'album') albCurr--;
            } else {
                paged.text(num + 1);
                current++;
                if (type === 'album') albCurr++;
            }
            $('#aphpr, #aphnx, .fb-top-nav').css('display', 'none');

            //check if album, or photo animation is set
            // to auto direction slide
            checkSlideMode(dir, type);

            // check if next, or previous page is cached
            if (type === 'photos' && cachedPhotos[currentAlb] && cachedPhotos[currentAlb][current] && cached === true) cached = cachedPhotos[currentAlb][current];
            if (type === 'albums' && albumsCache[current]) cached = albumsCache[current];
            if (cached === true) cached = false;
            // check the request, if it is for albums
            // then load more albums, otherwise call photos
            if (type === 'photos') {
                loadPhotos(url, paged, num, dir, last, h, cached, isAuto);
                if (typeof callback.photosLoading === 'function') callback.photosLoading(dir);
            } else {
                loadAlbums(url, paged, num, dir, last, cached);
            }
            paginate.find('li[data-id="' + current + '"]').addClass('active').siblings().removeClass('active');

        } //loadMore;

        function loadAlbumsSort(result, paginate, num, paged, dir, last, cached) {
            var nxt = $('#aphnx');
            var prev = $('#aphpr');
            var number = nextPage(num, dir);
            var isCached = cached ? true : false;
            $('#faba-inner .fb-album').velocity('stop').velocity(anm['album']['in'], {
                stagger: 25,
                begin: function() {
                    $("#faba-inner .fbp-overlay").remove();
                    $('#faba-inner .fb-album').removeClass('hidden');
                },
                complete: function() {
                    albWall.refresh();
                    $('body').css('overflow-x', '');
                    if (cacheData) $('.fb-album').addClass('hidden');
                    if (cached && cached.previous) prev.attr('href', cached.previous);
                    if (cached && cached.next) nxt.attr('href', cached.next);
                    albumsCache(num + 1);
                    if (cacheData) $('#faba-inner .fb-album').removeClass('hidden');
                    if (debugging) debugPrint('All Albums on page (' + number + ') have been successfully loaded.', true);
                    if (typeof callback.albumsLoaded === 'function') callback.albumsLoaded(number, dir, isCached);
                    paused = false;
                    fixAlbumHeight();
                }
            });
            if (albumsScroll !== false) $('#fb-breadcrumbs').velocity('scroll', {
                duration: albumsScroll
            });
            pagination(num, dir, '#aphpr', '#aphnx', last, paged);
            paginate.fadeIn(360);
        }

        function afterLoadAlbums(result, paginate, num, paged, dir, last, cached) {
            if (cached) {
                albWall.prepend(cached.html);
                if (skipAlbums.length > 0) cachedAlbumsSkip();
                $('.fb-wrap').each(function() {
                    var $this = $(this);
                    var ID = $this.attr('id');
                    ID = ID.replace('a', '');
                    var total = $this.find('.badge').text();
                    total = parseInt(total, 10);
                    zbir[ID] = total;
                    if ($this.parent().hasClass('active')) {
                        $this.parent().removeClass('active');
                        replaceMarkup($this.parent());
                    }

                });
            }
            $('#faba-inner .imgdiv').waitForImages(true).done(function() {
                loadAlbumsSort(result, paginate, num, paged, dir, last, cached);
            });
        }

        function loadAlbums(url, paged, num, dir, last, cached) {
            paused = true;
            zbir['photos'] = 0;
            var h = $('#faba-inner').outerHeight(true);
            var paginate = $('#fbp-navs');
            paginate.fadeOut(360);
            var nxtPage = nextPage(num, dir);
            var nxt = $('#aphnx');
            var prev = $('#aphpr');
            if (typeof callback.albumsLoading === 'function') callback.albumsLoading(nxtPage, dir);
            $("#faba-inner .fb-album").velocity(anm['album']['out'], {
                stagger: 35,
                complete: function() {
                    $('body').css('overflow-x', 'hidden');
                    $("#faba-inner .fb-album").remove();
                    $("#faba-inner").append('<div class="fbp-overlay" style="height: ' + h + 'px"><div class="loader"></div></div>');
                    if (!cached) {
                        FB.api(
                            url, {
                                "fields": "id, name, description, count, cover_photo"
                            },
                            function(result) {
                                if (result && !result.error) {
                                    var i = 0;
                                    var last = result.data.length;
                                    if (debugging) {
                                        apiCalls.total = apiCalls.total + 1;
                                        debugPrint('Albums <<' + dir + '>> page (' + nxtPage + ') loaded.');
                                    }
                                    $.each(result.data, function(key, value) {
                                        if (skipAlbums.indexOf(value.id) == -1 && skipAlbums.indexOf(value.name) == -1) {
                                            FB.api(
                                                '/' + value.id + '/picture', {
                                                    'access_token': token
                                                },
                                                function(picture) {
                                                    if (debugging) {
                                                        apiCalls.total = apiCalls.total + 1;
                                                        debugPrint('Album ' + value.id + ' cover picture loaded.');
                                                    }
                                                    if (value.count > 0) {
                                                        hd.total = hd.total + 1;
                                                        //	console.log(picture);
                                                        if (picture.error.code == 1) {
                                                            addAlbum(picture.url, value.name, value.id, value.description, value.count, value.cover_photo);
                                                        } else {
                                                            //	addAlbum( picture.data.url, value.name, value.id, value.description, value.count, value.cover_photo );
                                                        }
                                                        //addAlbum( picture.data.url, value.name, value.id, value.description, value.count, value.cover_photo );

                                                        // push pictures count to the zbir array for later use
                                                        // and pair it with each album ID
                                                        var ID = value.id;
                                                        var total = value.count;
                                                        zbir[ID] = total;
                                                        zbir['photos'] = zbir['photos'] + total;
                                                    }
                                                    if (result && result.paging.previous) prev.attr('href', result.paging.previous);
                                                    if (result && result.paging.next) nxt.attr('href', result.paging.next);
                                                    i++;
                                                    if (i === last) {
                                                        var albumsInner = $('#faba-inner');
                                                        // extend the albums loading time so that cover
                                                        // images can be replaced with better quality ones
                                                        // unnoticed - without the images "blinking"
                                                        var cbg = setInterval(function() {
                                                            if (hd.total === hd.current) {
                                                                clearInterval(cbg);
                                                                afterLoadAlbums(result, paginate, num, paged, dir, last);
                                                            }
                                                        }, 100);
                                                    }
                                                }
                                            );
                                        } else {
                                            i++;
                                        }
                                    });
                                } else {
                                    console.log(result.error);
                                    $('.fbp-overlay').append('<h3>' + result.error.message + '</h3>');
                                }
                            }
                        );
                    } else {
                        if (debugging) {
                            apiCalls.total = apiCalls.total + 0;
                            debugPrint('Albums <<' + dir + '>> page (' + (dir === 'next' ? num + 1 : num - 1) + ') loaded.');
                        }
                        afterLoadAlbums('', paginate, num, paged, dir, last, cached);
                    }
                }
            });
        }

        function afterFirstLoadInit(id, photos, images, last) {
            var paginate = $('#fbp-navs');
            var nxt = (images.paging && images.paging.next ? images.paging.next : images.next);
            $('#phnx').attr('href', nxt);

            $('#phnx, #phpr').off().on('click', {
                i: id
            }, photosNavigation);

            //initialize wall
            if (images.paging) wallInit();

            //add pagination
            if (images.paging && images.paging.next || images.next) {
                if (zbir[id] > photosPerPage) {
                    $('#phnx').velocity('fadeIn', {
                        duration: 150
                    });
                    photosNumeration(last);
                    paginate.fadeIn(360);
                }
            }
        }

        function afterLoadPhotos(id, container, cached) {
            $('.fbp-overlay').css('height', container.outerHeight(true));
            container.find('.imgdiv').waitForImages(true).done(function() {
                var paged = $('#fb-breadcrumbs').find('.fb-first');
                var num = parseInt(paged.text());
                container.find('a').velocity(anm['photos']['in'], {
                    stagger: 26,
                    begin: function() {
                        $(this).find('.hidden').removeClass('hidden');
                        container.find('.fbp-overlay').remove();
                        if (photosSroll !== false) $('#fb-breadcrumbs').velocity('scroll', {
                            duration: photosSroll
                        });
                        if (!cachedPhotos[id]) cachedPhotos[id] = {};
                        currentAlb = id;
                        setCache(num);
                    },
                    complete: function() {
                        var isCached = cached ? true : false;
                        paused = false;
                        if (debugging) debugPrint('Album ' + id + ' photos succssefully loaded.', true);
                        if (typeof callback.albumOpened === 'function') callback.albumOpened(id);
                        if (typeof callback.photosLoaded === 'function') callback.photosLoaded(num, isCached);
                    }
                });
            });
        }

        function singleAlbumLoad() {
            if (!cachedAlbums[singleAlbum]) {
                FB.api(
                    '/' + singleAlbum, {
                        "fields": "count",
                        'access_token': token
                    },
                    function(pictures) {
                        if (pictures && !pictures.error) {
                            if (debugging) {
                                apiCalls.total = apiCalls.total + 1;
                                debugPrint('Single Album ' + singleAlbum + ' fetched.');
                            }
                            if (pictures.count > 0) {
                                var total = pictures.count;
                                zbir[singleAlbum] = total;
                                firstLoadPhotos(singleAlbum);
                            }
                        } else {
                            console.log(pictures.error);
                            $('.fbp-overlay').append('<h3>' + pictures.error.message + '</h3>');
                        }
                    }
                );
            } else {
                var total = cachedAlbums[singleAlbum][count];
                zbir[singleAlbum] = total;
                firstLoadPhotos(singleAlbum);
            }
        }

        function firstLoadPhotos(e) {
            if (autoplay && cacheData && autoplay < cacheSpeed / 2 || autoplay && autoplay < autoplaySpeed / 2) {
                window.clearInterval(autoplay);
                autoplay = window.setInterval(autoplayCallback, cacheSpeed);
            }
            if (e.type) e.preventDefault();
            var $this = $(this);
            if (!e.type) $this = e;
            var id = !singleAlbum ? $this.attr('href') : singleAlbum;
            var container = $(".fbp-container");
            var photos = $('#fb-photos');
            var name = !singleAlbum ? $this.closest('.fb-album').find('h4').text() : '';
            var brk = name ? '<h5 class="brk">' + name + '</h5>' : '';
            var paginate = $('#fbp-navs');
            var photos = $('#fb-photos');
            photos.css('display', 'block');
            if (!singleAlbum) $(brk).insertBefore('#fb-breadcrumbs #fbpt');
            $('#fb-breadcrumbs #fbpt .fb-first').text(1);
            $('#aphnx,#aphpr, .fb-top-nav').css('display', 'none');
            if (typeof callback.photosLoading === 'function') callback.photosLoading(1, false);
            paginate.fadeOut(360);
            var lineSequence = lineLoad / 4;
            var load = [{
                    elements: $('#faba-inner'),
                    properties: anm['albumsLoad']['out'],
                    options: {
                        duration: anm['albumsLoad']['duration']
                    }
                },
                {
                    elements: container,
                    properties: {
                        width: '20%'
                    },
                    options: {
                        sequenceQueue: false,
                        duration: lineSequence
                    }
                },
                {
                    elements: container,
                    properties: {
                        width: '30%'
                    },
                    options: {
                        duration: lineSequence
                    }
                },
                {
                    elements: container,
                    properties: {
                        width: '50%'
                    },
                    options: {
                        duration: lineSequence
                    }
                },
                {
                    elements: container,
                    properties: {
                        width: '100%'
                    },
                    options: {
                        duration: lineSequence
                    }
                },
                {
                    elements: container,
                    properties: {
                        height: '100%',
                        top: 90
                    },
                    options: {
                        duration: photosContainerLoad,
                        complete: function() {
                            container.css({
                                position: 'relative',
                                padding: 15,
                                margin: 'auto',
                                left: 0,
                                top: 0
                            });
                            container.append('<div class="fbp-overlay" style="background: ' + container.css('background-color') + ';height: ' + container.outerHeight(true) + 'px"><div class="loader"></div></div>');

                            if (!cachedPhotos[id]) {
                                setTimeout(function() {
                                    FB.api(
                                        '/' + id + '/photos', {
                                            "fields": "images,name",
                                            'access_token': token,
                                            "limit": photosPerPage
                                        },
                                        function(images) {
                                            if (images && !images.error) {
                                                if (debugging) {
                                                    apiCalls.total = apiCalls.total + 1;
                                                    debugPrint('Album ' + id + ' photos fetched.');
                                                }
                                                photos.find('.fb-pic').remove();
                                                photos.find('#load-more').remove();
                                                $.each(images.data, function(key, value) {
                                                    if (skipPhotos.indexOf(value.id) == -1) {
                                                        photoMarkup(value, images);
                                                    }
                                                });

                                                afterLoadPhotos(id, container);

                                                afterFirstLoadInit(id, photos, images, last);
                                            } else {
                                                console.log(images.error);
                                                $('.fbp-overlay').append('<h3>' + images.error.message + '</h3>');
                                            }
                                        }
                                    );
                                }, 30);
                            } else {
                                //initialize wall
                                wallInit();
                                wall.prepend(cachedPhotos[id]['1']['html']);
                                afterFirstLoadInit(id, photos, cachedPhotos[id]['1'], last);
                                afterLoadPhotos(id, container, true);
                            }
                        }
                    }
                }
            ];
            $.Velocity.RunSequence(load);
            // check for the total number of pages for each album and
            // append it to the navigation bar
            var last = lastPage(id);
            $('#fb-breadcrumbs #fbpt .fb-total').text(last);
        }

        function returnPages(n) {
            var pages = $('.fb-total').text();
            var paged = $('.fb-first').text();
            pages = parseInt(pages, 10);
            paged = parseInt(paged, 10);
            var vals = {
                pages: pages,
                paged: paged
            }

            return vals[n];
        }

        function autoplayControls() {
            var $this = $('.fbaply');
            var text = autoplayPauseText;
            if ($this.hasClass('active')) {
                $this.removeClass('active');
                window.clearInterval(autoplay);
                text = autoplayResumeText;
                paused = true;
                autoplay = false;
            } else {
                $this.addClass('active');
                paused = false;
                autoplay = window.setInterval(autoplayCallback, autoplaySpeed);
            }
            $this.text(text);
        }

        function autoplayStep1(albums) {
            var albumCurrent = $('#faba-inner').find('.fb-album.active').last();
            var firstAlbum = albums.first();
            var $this;
            if (!firstAlbum.hasClass('active')) {
                firstAlbum.addClass('active');
                $this = firstAlbum;
            } else {
                var i = albumCurrent.index();
                hoverHandle.album.out(albumCurrent);
                $this = albums.eq(i + 1);
                if (!$this.hasClass('active') && albums.eq(i).index() != albums.last().index()) $this.addClass('active');
                else {
                    var pages = returnPages('pages');
                    var paged = returnPages('paged');
                    if (pages > 1) {
                        var next = $('#aphnx');
                        var prev = $('#aphpr');
                        if (paged < pages) {
                            albumsNavigation(next);
                            return;
                        } else {
                            goToPage(1, true);
                            return;
                        }
                    } else {
                        albums.removeClass('active');
                        firstAlbum.addClass('active');
                        $this = firstAlbum;
                    }
                }
            }

            if (cacheData) {
                currentAlb = $this.find('.fb-wrap').attr('id').replace('a', '');
                checkCache();
            }

            hoverHandle.album.over($this);

            setTimeout(function() {
                var view = $this.find('.fbp-view');
                paused = true;
                firstLoadPhotos(view);
            }, albumsHoverAnimations.duration.image);
        }

        function autoplayStep2() {
            var first = $('a[data-lightbox]').eq(0);
            var last = $('a[data-lightbox]').length;
            if ($('#lightbox').css('display') === 'block') {
                var currentLink = $('a.active[data-lightbox]');
                if (currentLink.index() < last - 1) {
                    var nextLink = $('a[data-lightbox]').eq(currentLink.index() + 1);
                    nextLink.addClass('active').siblings().removeClass('active');
                    lightbox.changeImage(nextLink.index());
                    photoMeta(nextLink.data('id'));
                } else {
                    lightbox.end();
                    autoplayStep = 3;
                }
            } else {
                first.addClass('active');
                lightbox.start(first);
                photoMeta(first.data('id'));
            }
        }

        function autoplayStep3() {
            var pages = returnPages('pages');
            var paged = returnPages('paged');
            if (pages > 1) {
                if (paged < pages) {
                    var paginate = $('#pagination');
                    var current = paginate.find('li.active').data('id');
                    current = parseInt(current, 10);
                    var number = current + 1;
                    goToPage(number, true);
                } else {
                    // 3rd part
                    albumsHome();
                }
            } else {
                // 3rd part
                albumsHome();
            }
        }

        function autoplayCallback() {
            /* 
             * separate the autoplay process into 3 parts:
             * 1st part is to open the album and load it's contents
             * 2nd is to navigate through album, and
             * 3rd part is return back, then repeat with next album
             */
            var albumsContainer = $('#faba-inner');
            var photosContainer = $('#fb-photos')
            var albums = albumsContainer.find('.fb-album');
            var photos = photosContainer.find('a[data-lightbox]');
            //if not paused, run the code
            if (paused === false) {
                // 1st part
                if (albums.length && albumsContainer.css('display') != 'none') {
                    autoplayStep1(albums);
                }
                //2nd & 3rd part
                else if (photos.length && photosContainer.css('display') != 'none') {
                    if ($('a.active[data-lightbox]').length <= 0) autoplayStep = 2;
                    if (autoplayStep === 2) {
                        // 2nd Part
                        autoplayStep2();
                    } else if (autoplayStep === 3) {
                        // 3rd Part
                        autoplayStep3();
                    }
                }
            }
        }

        function checkCache() {
            if (cacheData && caching === 'done') {
                var done = '<div class="fbpdone-ovl"><div class="done-inner"><h3>Paste This Data To The albums.json file</h3><textarea class="fbpdone"></textarea></div></div>';
                var metaD = '<div class="done-inner"><h3>Paste This Data To The photo_meta.json file</h3><textarea class="fbpmdone"></textarea></div>';
                albums.append(done);
                done = $('.fbpdone');
                if (cachedPhotoMeta) {
                    $('#faba-caching').remove();
                    $('.fbpdone-ovl').append(metaD);
                    metaD = $('.fbpmdone');
                    metaD.text(JSON.stringify(cachedPhotoMeta));
                    metaD.on('click', function() {
                        $(this).select();
                    });
                    paused = true;
                    window.clearInterval(autoplay);
                    albums.faba.destroy(false, true);
                }
                cachedPhotos.albums = cachedAlbums;
                done.text(JSON.stringify(cachedPhotos));
                done.on('click', function() {
                    $(this).select();
                });
            } else if (cacheData) {
                var pages = returnPages('pages');
                var paged = returnPages('paged');
                if (pages === paged && $('#a' + currentAlb).parent().index() == $('.fb-album').last().index()) caching = 'done';
            }
        }

        function fetchCachedData(type) {
            if (type === 'meta') var file = metaCachePath + 'photo_meta.json';
            else var file = albumsCachePath + "albums.json";
            //var Data = JSON.parse('albums.json');
            //$.getJSON('albums.json',function(data){
            $.ajax({
                url: file,
                beforeSend: function(xhr) {
                    if (xhr.overrideMimeType) {
                        xhr.overrideMimeType("application/json");
                    }
                },
                async: true,
                dataType: "json",
                success: function(data) {
                    if (type === 'meta') {
                        cachedPhotoMeta = data;
                    } else {
                        cachedPhotos = data;
                        cachedAlbums = data.albums;
                    }
                }
            });
        }

        function getPhotoThumb(value) {
            var images = value.images;
            var last = images.length;
            var $image;
            for (var z = last - 1; z > 0; z--) {
                if (images[z]['width'] >= photoWidth && images[z]['width'] < photoWidth + 360)
                    $image = images[z]['source'];
            }

            return $image;
        }

        function photoMarkup(value, result, t, cached, num) {
            if (value == '') value = {
                images: {
                    0: '',
                    1: {
                        source: ''
                    },
                    length: 2
                },
                id: '',
                name: ''
            }
            var size = photosLayoutSel();
            var container = $('.fbp-container');
            var navs = $('#fbp-navs').outerHeight(true);
            var w = size.Width;
            var h = size.Height;
            var small = getPhotoThumb(value);
            var imgClass = 'fb-pic';
            imgClass += ' fb-gal hidden';
            var span = '<span class="ovlpic"></span><b class="lupa"></b>';
            var pic = '<a href="' + value.images[0].source + '" data-id="' + value.id + '" data-lightbox="fbpics" data-title=""><div class="' + imgClass + '" style="width: ' + w + 'px; height: ' + h + 'px; background-image: url(' + small + ')"><img class="imgdiv" src="' + small + '" alt="' + (value.name != undefined ? value.name.substr(0, 20) : '') + '" />' + span + '</div></a>';
            if (!t) {
                container.append(pic);
            } else {
                if (!cached) wall.prepend(pic);
                else wall.prepend(cached.html);
                var H = container.outerHeight(true);
                container.find('.fbp-overlay').height(H);
                if (result.data && t === result.data.length || cached) {
                    wall.refresh();
                    container.find('.imgdiv').waitForImages(true).done(function() {
                        container.find('.fbp-overlay').remove();
                        container.find('.hidden').removeClass('hidden');
                        container.find('a').velocity('stop').velocity(anm['photos']['in'], {
                            stagger: 32,
                            complete: function() {
                                var isCached = cached ? true : false;
                                var page = nextPage(container);
                                paused = false;
                                if (!cached) setCache(num);
                                if (debugging) debugPrint('Photos successfully loaded.');
                                if (typeof callback.photosLoaded === 'function') callback.photosLoaded(page, isCached);
                            }
                        }).addClass('vis');
                    });
                }
            }
        }

        function loadPhotos(url, paged, num, dir, last, h, cached, isAuto) {
            var t = 0;
            var paginate = $('#fbp-navs');
            var container = $(".fbp-container");
            var h = container.outerHeight(true);
            paused = true;
            paginate.fadeOut(360);
            $('<div class="fbp-overlay" style="background: ' + container.css('background-color') + ';visibility: hidden; height: ' + h + 'px"><div class="loader"></div></div>').appendTo(".fbp-container");
            var overlay = $('.fbp-overlay');
            var ldh = [{
                    elements: overlay,
                    properties: 'transition.fadeIn',
                    options: {
                        duration: 360
                    }
                },
                {
                    elements: $('.fbp-container').find('a'),
                    properties: anm['photos']['out'],
                    options: {
                        sequenceQueue: false,
                        stagger: 5,
                        complete: function() {
                            overlay.css('visibility', 'visible');
                            var paged = $('#fb-breadcrumbs #fbpt').find('.fb-total').text();
                            var pages = $('#fb-breadcrumbs #fbpt').find('.fb-first').text();
                            if (photosSroll !== false) $('#fb-breadcrumbs').velocity('scroll', {
                                duration: photosSroll
                            });
                            container.find('a').remove();
                            if (!cached) {
                                FB.api(
                                    url, {
                                        "fields": "images"
                                    },
                                    function(result) {
                                        if (result && !result.error) {
                                            if (debugging) {
                                                apiCalls.total = apiCalls.total + 1;
                                                debugPrint('<<' + dir + '>> ' + photosPerPage + ' photos  for page (' + (dir === 'next' ? num + 1 : num - 1) + ')  fetched.');
                                            }
                                            $.each(result.data, function(key, value) {
                                                if (skipPhotos.indexOf(value.id) == -1) {
                                                    t++;
                                                    photoMarkup(value, result, t, false, pages);
                                                } else {
                                                    t++;
                                                }
                                            });
                                            $('#phpr').attr('href', result.paging.previous);
                                            $('#phnx').attr('href', result.paging.next);
                                            pagination(paged, dir, '#phpr', '#phnx', pages);
                                            paginate.fadeIn(360);
                                        } else {
                                            console.log(result.error);
                                            $('.fbp-overlay').append('<h3>' + result.error.message + '</h3>');
                                        }
                                    }
                                );
                            } else {
                                $('#phpr').attr('href', cached.previous);
                                $('#phnx').attr('href', cached.next);
                                pagination(paged, dir, '#phpr', '#phnx', pages);
                                paginate.fadeIn(360);
                                photoMarkup('', '', 1, cached);
                            }
                        }
                    }
                }
            ];
            $.Velocity.RunSequence(ldh);
        }

        // function that handles the hover effect
        // for both albums and photos
        var hoverHandle = {
            photo: {
                over: function(el) {
                    var $this = el;
                    var load = [{
                            elements: $this.find('.imgdiv'),
                            properties: {
                                scaleX: 1.23,
                                scaleY: 1.23,
                                rotateZ: 6
                            },
                            options: {
                                duration: anm['photoHover']['image']['duration']
                            }
                        },
                        {
                            elements: $this.find('.ovlpic'),
                            properties: anm['photoHover']['overlay']['in'],
                            options: {
                                sequenceQueue: false,
                                duration: anm['photoHover']['overlay']['duration']
                            }
                        },
                        {
                            elements: $this.find('.lupa'),
                            properties: anm['photoHover']['button']['in'],
                            options: {
                                sequenceQueue: false,
                                duration: anm['photoHover']['button']['duration']
                            }
                        }
                    ];

                    if (typeof callback.photoHovered === 'function') {
                        var href = $this.parent().attr('href');
                        callback.photoHovered($this, href);
                    }

                    $.Velocity.RunSequence(load);
                },
                out: function(el) {
                    var $this = el;
                    $this.find('.imgdiv').velocity('stop');
                    $this.find('.imgdiv').velocity('reverse', {
                        duration: 400
                    });
                    $this.find('.ovlpic').velocity('stop');
                    $this.find('.ovlpic').velocity('reverse', {
                        duration: anm['photoHover']['overlay']['duration']
                    });
                    $this.find('.lupa').velocity('reverse', {
                        duration: anm['photoHover']['button']['duration']
                    });
                }
            },
            album: {
                over: function(el) {
                    var $el = el;
                    var hvr = [{
                            elements: $el.find('.imgdiv'),
                            properties: anm['albumsHover']['image']['out'],
                            options: {
                                duration: anm['albumsHover']['image']['duration']
                            }
                        },
                        {
                            elements: $el.find('.ovlpic'),
                            properties: anm['albumsHover']['overlay']['in'],
                            options: {
                                sequenceQueue: false,
                                duration: anm['albumsHover']['overlay']['duration']
                            }
                        },
                        {
                            elements: $el.find('a'),
                            properties: anm['albumsHover']['button']['in'],
                            options: {
                                sequenceQueue: false,
                                duration: anm['albumsHover']['button']['duration']
                            }
                        },
                        {
                            elements: $el.find('.badge'),
                            properties: anm['albumsHover']['badge']['in'],
                            options: {
                                sequenceQueue: false,
                                duration: anm['albumsHover']['badge']['duration']
                            }
                        }
                    ];
                    if (typeof callback.albumHovered === 'function') {
                        var ID = $el.attr('id');
                        ID = ID.replace('a', '');
                        callback.albumHovered($el, ID);
                    }

                    $.Velocity.RunSequence(hvr);
                },
                out: function(el) {
                    var $el = el;
                    $el.find('.ovlpic').velocity('stop');
                    $el.find('.ovlpic').velocity('reverse', {
                        duration: anm['albumsHover']['overlay']['duration']
                    });
                    $el.find('.badge').velocity('stop');
                    $el.find('.badge').velocity('reverse', {
                        duration: anm['albumsHover']['badge']['duration']
                    });
                    $el.find('.imgdiv').velocity('stop');
                    $el.find('.imgdiv').velocity(anm['albumsHover']['image']['in']);
                }
            }
        }

        function hover() {
            $("#faba").hoverIntent({
                over: function() {
                    var $this = $(this);
                    hoverHandle.photo.over($this);
                },
                out: function() {
                    var $this = $(this);
                    hoverHandle.photo.out($this);
                },
                selector: '.fbp-container a .fb-pic',
                interval: 60
            });

        }

        function albumHover() {
            $("#faba-inner").hoverIntent({
                over: function() {
                    var el = $(this);
                    hoverHandle.album.over(el);
                },
                out: function() {
                    var el = $(this);
                    hoverHandle.album.out(el);
                },
                selector: '.fb-album .fb-wrap',
                interval: 45
            });
        }

        function albumsHome() {
            var container = $(".fbp-container");
            var photos = $('#fb-photos');
            if (container.find('a').length > 0 && !singleAlbum) {
                var paginate = $('#pagination');
                paginate.find('li').remove();
                container.find('a').remove();
                var breadcrumbs = $('#fb-breadcrumbs');
                var albumsInner = $('#faba-inner');
                breadcrumbs.find('.brk').remove();
                breadcrumbs.find('#fbpt .fb-first').text(albCurr);
                breadcrumbs.find('#fbpt .fb-total').text(albumsPgd);
                $('#phpr, #phnx').css('display', 'none');
                container.css({
                    padding: 0,
                    width: '100%',
                    left: 0,
                    position: 'absolute'
                });
                container.velocity({
                    height: 10
                }, {
                    duration: photosContainerLoad,
                    sequenceQueue: false,
                    complete: function() {
                        var load = [{
                                elements: container,
                                properties: {
                                    width: 0
                                },
                                options: {
                                    duration: lineLoad
                                }
                            },
                            {
                                elements: albumsInner,
                                properties: anm['albumsLoad']['in'],
                                options: {
                                    duration: anm['albumsLoad']['duration'],
                                    complete: function() {
                                        photos.css('display', 'none');
                                        var paginate = $('#pagination');
                                        if (albumsScroll !== false) breadcrumbs.velocity('scroll', {
                                            duration: albumsScroll
                                        });
                                        if (albumsPgd > 1) {
                                            if (albCurr < albumsPgd) $('#aphnx').css('display', 'inline-block');
                                            if (albCurr > 1) $('#aphpr').css('display', 'inline-block');
                                            photosNumeration(albumsPgd);
                                            var current = $('.fb-first').text();
                                            paginate
                                                .find('li[data-id="' + current + '"]')
                                                .addClass('active')
                                                .siblings()
                                                .removeClass('active');
                                            $('#fbp-navs').fadeIn(320);
                                        }
                                        setTimeout(function() {
                                            albWall.refresh();
                                        }, 120);
                                    }
                                }
                            }
                        ];
                        $.Velocity.RunSequence(load);
                    }
                });
            }
        }

        function commentsData(id, Lightbox, comments, value, i, last, userPic) {
            var comment;
            if (comments === false && value === false) {
                comment = cachedPhotoMeta[id + '-comments']
            } else {
                var time = value.created_time;
                var avatar = userPic ? '<img src="' + userPic.data.url + '" />' : '';
                time = time.split('T');
                time = time[0];
                time = $.timeago(time);
                comment = '<div class="fbp-com clearfix">' + avatar + '<p><span class="fbp-ct"><b>' + value.from.name + '</b><b>' + time + '</b></span>' + value.message + '</p></div>';
            }
            Lightbox.find('.lb-details .fbp-comms').append(comment);
            if (i === last) {
                var hgh = Lightbox.find('.lb-details .fbp-comms').outerHeight(true);
                if (!cachedPhotoMeta[id + '-comments']) cachedPhotoMeta[id + '-comments'] = Lightbox.find('.lb-details .fbp-comms').html();
                if (comments === false && value === false || comments.paging.next) {
                    var moreLink;
                    if (comments === false && value === false) {
                        if (cachedPhotoMeta[id + '-comments-more']) moreLink = cachedPhotoMeta[id + '-comments-more'];
                        else moreLink = '';
                    } else {
                        if (comments.paging.next) moreLink = comments.paging.next;
                        else moreLink = '';
                    }
                    var moreButton = '<a class="fbc-lm" href="' + moreLink + '">' + commentsMore + '</a>';
                    if (!cachedPhotoMeta[id + '-comments-more'] && comments && comments.paging.next) cachedPhotoMeta[id + '-comments-more'] = comments.paging.next;
                    if (moreLink) Lightbox.find('.fbp-comms').append(moreButton);
                    $('#lightboxOverlay').css('height', '+=' + (hgh + 15) + 'px');
                    if (debugging) debugPrint('All comments successfully loaded and added to the photo ' + id, true);
                }
            }
        }

        function commentsFetch(id, comments) {
            var i = 0;
            var Lightbox = $('#lightbox');
            if (Lightbox.find('.fbp-comms .fbc-lm').length > 0) Lightbox.find('.fbp-comms .fbc-lm').remove();
            if (comments !== false) {
                var last = comments.data.length;
                $.each(comments.data, function(key, value) {
                    if (commentsFaces) {
                        FB.api(
                            '/' + value.from.id + '/picture', {
                                'access_token': token
                            },
                            function(userPic) {
                                if (userPic && !userPic.error) {
                                    if (debugging) {
                                        apiCalls.total = apiCalls.total + 1;
                                        debugPrint('Profile image of the commenter (' + value.from.id + ') fetched.');
                                    }
                                    i++;
                                    commentsData(id, Lightbox, comments, value, i, last, userPic);
                                } else {
                                    console.log(userPic.error);
                                }
                            }
                        );
                    } else {
                        i++;
                        commentsData(id, Lightbox, comments, value, i, last);
                    }
                });
            } else {
                commentsData(id, Lightbox, false, false, 1, 1);
            }
        }

        function loadComments(id, init) {
            if (cachedPhotoMeta[id + '-comments']) {
                commentsFetch(id, false);
            } else {
                FB.api(
                    init ? '/' + id + '/comments' : id, {
                        "fields": "from, message, created_time",
                        'limit': commentsLimit,
                        'access_token': token
                    },
                    function(comments) {
                        if (comments && !comments.error) {
                            if (comments.data.length) {
                                if (debugging) {
                                    apiCalls.total = apiCalls.total + 1;
                                    debugPrint('Comment data for the photo ' + id + ' successfully fetched.');
                                }
                                commentsFetch(id, comments);
                            } else {
                                $('.fbp-comms').append('<div class="fbp-com"><p>' + noCommentsText + '</p></div>');
                            }
                        } else {
                            console.log(comments.error);
                        }
                    }
                );
            }
        }

        // replace text url's with clickable links
        // source: http://jsfiddle.net/kZfGV/
        function replaceURL(text) {
            var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
            return text.replace(exp, "<a href='$1'>$1</a>");
        }

        function photoCaption(id, meta, Lightbox, cached) {
            if (showCaption) {
                if (meta && !cached) {
                    var fbLink = '<a class="fbp-link" href="' + meta.link + '" target="_blank">' + fbLinkText + '</a>';
                    var afterBox = fbLink;
                    var time = meta.created_time;
                    time = time.split('T');
                    time = time[0];
                    time = $.timeago(time);
                    var published = '<span class="fbp-posted">Published ' + time + '</span>';
                    if (meta.name) var desc = replaceURL(meta.name);
                    else var desc = '';
                    var caption = '<div class="fbp-caption"><p><h3>' + photoDesc + published + '</h3>' + desc + '</p>' + afterBox + '</div>';
                    Lightbox.find('.lb-details').prepend(caption);
                } else {
                    if (cachedPhotoMeta[cached + '-meta']) {
                        var caption = cachedPhotoMeta[cached + '-meta'];
                        Lightbox.find('.lb-details').prepend(caption);
                    }
                }
                if (debugging) debugPrint('Photo ' + id + ' meta content succssefully added.', true);
                if (!cachedPhotoMeta[id + '-meta']) cachedPhotoMeta[id + '-meta'] = caption;
                Lightbox.find('.fbp-caption a').off().on('click', function() {
                    var url = $(this).attr('href');
                    var open = window.open(url, '_blank');
                    open.focus();
                });
            }
        }

        function photoMeta(id) {
            var Lightbox = $('#lightbox');
            Lightbox.find('.lb-details .fbp-comms').remove();
            Lightbox.find('.lb-details .fbp-caption').remove();
            if (cachedPhotoMeta && cachedPhotoMeta[id + '-meta']) {
                photoCaption(id, false, Lightbox, id);
            } else {
                FB.api(
                    '/' + id, {
                        "fields": "name, created_time, link",
                        'access_token': token
                    },
                    function(meta) {
                        if (meta && !meta.error) {
                            if (debugging) {
                                apiCalls.total = apiCalls.total + 1;
                                debugPrint('Photo ' + id + ' meta content (description, link and published date) fetched.');
                            }
                            photoCaption(id, meta, Lightbox);
                        } else {
                            console.log(meta.error);
                        }
                    }
                );
            }
            if (comments === true) {
                $('<div class="fbp-comms"></div>').appendTo($('#lightbox .lb-details'));
                loadComments(id, true);
            }
        }

        function albumsNavigation(e) {
            var $this = $(this);
            if (e.type) e.preventDefault();
            else $this = e;
            var url = $this.attr('href');
            var dir = $this.attr('id');
            var cur = $('.fb-first').text();
            cur = parseInt(cur, 10);
            var num;
            if ($this.hasClass('fb-top-nav')) {
                if ($this.hasClass('nxt')) dir = 'aphnx';
                else dir = 'aphpr';
            }
            if (dir === 'aphnx') {
                dir = 'next';
                num = cur + 1;
            } else {
                dir = 'prev';
                num = cur - 1;
            }
            var val = parseInt(albumsPgd, 10);
            var pages = val / albLimit;
            var last = Math.round(pages);
            if (last == 0) {
                last = 1;
            }
            var cached = false;
            if (cachedAlbums[num]) cached = cachedAlbums[num];
            if (typeof callback.albumsNavigate === 'function') callback.albumsNavigate(dir, cur, num);
            loadMore('album', url, dir, last, cached);
        }

        function photosNavigation(e) {
            e.preventDefault();
            var $this = $(this);
            var url = $this.attr('href');
            var dir = $this.attr('id');
            var cur = $('.fb-first').text();
            cur = parseInt(cur, 10);
            var num;
            if ($this.hasClass('fb-top-nav')) {
                if ($this.hasClass('nxt')) dir = 'aphnx';
                else dir = 'aphpr';
            }
            if (dir === 'phnx') {
                dir = 'next';
                num = cur + 1;
            } else {
                dir = 'prev';
                num = cur - 1;
            }
            var id = e.data.i;
            var val = zbir[id];
            val = parseInt(val);
            var pages = val / photosPerPage;
            var last = Math.round(pages);
            if (last === 0) {
                last = 1;
            }
            if (typeof callback.photosNavigate === 'function') callback.photosNavigate(dir, cur, num);
            loadMore('photos', url, dir, last, true);
        }

        function photosNumeration(total) {
            var n = 1;
            if (showPageNumbers) {
                var paginate = $('#pagination');
                paginate.find('li').remove();
                if (total > 1) {
                    while (n <= total) {
                        var data = 'data-id="' + n + '"';
                        if (n === 1) data += ' class="active"';
                        paginate.append('<li ' + data + '><a>' + n + '</a></li>');
                        n++;
                    }
                }
            }
        }

        function goToPage(number, isAuto) {
            var albumsInner = $('#faba-inner');
            var paginate = $('#pagination');
            var current = paginate.find('li.active');
            if (!showPageNumbers) current = $('.fb-first').text();
            var jumpTo = paginate.find('li[data-id="' + number + '"]');
            var n = showPageNumbers ? parseInt(current.data('id'), 10) : parseInt(current, 10);
            var last = paginate.find('li').data('id');
            if (!showPageNumbers) last = $('.fb-total').text();
            var fs = 0;
            var type;
            if (albumsInner.css('display') == 'none') type = 'photos';
            else type = 'album';
            last = parseInt(last, 10);
            if (number > n) {
                var dir = 'next';
            } else {
                var dir = 'prev';
            }
            if (loadFromCache) lastCached = number - 1;
            if (type === 'album') var url = (dir === 'next' ? $('#aphnx').attr('href') : $('#aphpr').attr('href'));
            else var url = (dir === 'next' ? $('#phnx').attr('href') : $('#phpr').attr('href'));
            if (type === 'photos' && !cachedPhotos[currentAlb][number] || type === 'album' && !cachedAlbums[number]) {
                if (lastCached != undefined && number > lastCached && n < lastCached) {
                    if (type === 'photos') loadMore(type, cachedPhotos[currentAlb][lastCached]['next'], dir, last);
                    else loadMore(type, cachedAlbums[lastCached]['next'], dir, last);
                    n = lastCached;
                } else {
                    if (isAuto && !paused) paused = true;
                    loadMore(type, url, dir, last);
                }
                if (dir === 'next') n++;
                else n--;
                var pageTimer = setInterval(function() {
                    if (dir === 'next' && n < number || dir === 'prev' && n != number) {
                        if ($('.loader').length > 0) {
                            if (type === 'photos') url = (dir === 'next' ? $('#phnx').attr('href') : $('#phpr').attr('href'));
                            else url = (dir === 'next' ? $('#aphnx').attr('href') : $('#aphpr').attr('href'));
                            fs = 1;
                        }

                        if (fs === 1 && $('.loader').length <= 0) {
                            fs = 0;
                            if (isAuto && !paused) paused = true;
                            loadMore(type, url, dir, last, false, isAuto);
                            jumpTo.addClass('active').siblings().removeClass('active');
                            if (dir === 'next') n++;
                            else n--;
                        }
                    } else {
                        clearInterval(pageTimer);
                        jumpTo.addClass('active').siblings().removeClass('active');
                        $('.fb-first').text(number);
                    }
                }, 30);
            } else {
                if (type === 'photos') loadMore(type, url, dir, last, cachedPhotos[currentAlb][number]);
                else loadMore(type, url, dir, last, cachedAlbums[number]);
                $('.fb-first').text(number);
                jumpTo.addClass('active').siblings().removeClass('active');
            }
        }

        function fbConnect() {
            $.ajaxSetup({
                cache: true
            });

            $.getScript('https://connect.facebook.net/en_US/sdk.js', function() {
                FB.init({
                    appId: appID,
                    xfbml: true,
                    version: 'v2.5'
                });

                init();
            });
        }


        function beforeFirstAlbumsLoad() {
            var val = parseInt(albumsPgd);
            var apg = val / albLimit;
            if (apg < 1) apg = 1;
            var last = Math.round(apg);
            var dif = last * albLimit;
            var nbx = (last + 1) * albLimit;
            if (apg > last) {
                if (val > dif) last++;
            }
            albumsPgd = last;
            $('body').css('overflow-x', 'hidden');
            if (debugging) debugPrint('Fetching albums thumbs...');
        }

        function afterFirstAlbumsLoad(albums, cached) {
            //	console.log(albums);
            var albumsInner = $('#faba-inner');
            albumsInner.find('.imgdiv').waitForImages(true).done(function() {
                albumsInner.find('.fb-album').velocity('stop').velocity(anm['album']['in'], {
                    stagger: 32,
                    begin: function() {
                        albumsInner.find('.fbp-overlay').remove();
                        $('#aphnx').attr('href', cached ? albums.next : albums.paging.next);
                        albumsCache(1);
                        albumsInner.find('.fb-album').removeClass('hidden');
                    },
                    complete: function() {
                        albWall.refresh();
                        $('body').css('overflow-x', '');
                        var isCached = cached ? true : false;
                        if (typeof callback.albumsLoaded === 'function') callback.albumsLoaded(1, false, isCached);
                        paused = false;
                        fixAlbumHeight();
                    }
                });
                // check if there is pagging set
                if (albums.paging && albums.paging.next || albums.next) {
                    // then to make sure, we will re-check
                    // for total number of albums and albums count
                    if (albumsPgd > 1) {
                        // if it is, fadeIn next button
                        $('#aphnx').velocity('fadeIn', {
                            duration: 600
                        });
                        photosNumeration(albumsPgd);
                    }
                }
                if (cached) {
                    $('.fb-wrap').each(function() {
                        var $this = $(this);
                        var ID = $this.attr('id');
                        ID = ID.replace('a', '');
                        var total = $this.find('.badge').text();
                        total = parseInt(total, 10);
                        zbir[ID] = total;
                    });
                }
                // correct album cover height
                var h4 = $('.fb-album').eq(0).find('h4');
                var coverH = albumHeight - h4.outerHeight(true);
                var style = '.fb-album .fb-wrap{height: ' + coverH + 'px}';
                style += '#faba-inner, #fb-photos{min-height: ' + albumHeight + 'px}';
                style += '#faba{min-height: ' + albumHeight + 'px}';
                $('html').find('head style[data-id="fbp"]').append(style);
            });
        }

        // get approximate time that will take for caching.
        function calculateCatchTime() {
            var $albums = albums.find('.fb-album').length;
            var $photos = zbir['photos'];
            var $time = ($photos * (cacheSpeed / 2)) - ($photos * lightBox.fadeDuration) - ($albums * albumsHoverAnimations.duration.image) - albumsLoadDuration - lineLoad;
            if ($time > 360) $time = $time / 360;
            else $time = $time / 60;
            var $old = new Date();
            var $cur = new Date($old.getTime() + $time * 1000);
            var $done = $cur.getHours() + ":" + $cur.getMinutes();
            $time = $time / 60;
            var $result = {
                min: $time.toFixed(2),
                time: $done
            }

            return $result;
        }

        function albumsInit() {
            paused = true;
            zbir['photos'] = 0;
            if (typeof callback.albumsLoading === 'function') callback.albumsLoading(1, false);
            if (loadFromCache) {
                fetchCachedData('meta');
            }
            if (!cachedAlbums[1]) {

                FB.api(
                    account + "/albums",
                    'GET', {
                        "fields": "id, name, description, count,cover_photo",
                        'limit': albLimit,
                        'access_token': token
                    },
                    function(albums) {
                        //console.log(albums);
                        if (albums && !albums.error) {
                            var i = 0;
                            var g = albums.data.length;
                            if (debugging) {
                                apiCalls.total = apiCalls.total + 1;
                                debugPrint('Albums for the 1st page fetched.');
                            }
                            beforeFirstAlbumsLoad();
                            if (albumsSort != 'random') {
                                albums.data.sort(function(x, y) {
                                    if (x.cover_photo && y.cover_photo) {
                                        /* var date1 = new Date(x.cover_photo.created_time); 
									     var  date2 = new Date(y.cover_photo.created_time);
									      return date1 - date2 ;*/

                                        return x.id - y.id;

                                    }
                                });
                                if (albumsSort == 'asc') albums.data.reverse();
                                //	console.log('albums.data', albums.data);
                            }
                            $.each(albums.data, function(key, value) {

                                if (skipAlbums.indexOf(value.id) == -1 && skipAlbums.indexOf(value.name) == -1) {
                                    FB.api(
                                        '/' + value.id + '/picture', {
                                            'access_token': token
                                        },
                                        function(picture) {
                                            if (debugging) {
                                                apiCalls.total = apiCalls.total + 1;
                                                debugPrint('Album ' + value.id + ' thumb image fetched.');
                                            }
                                            if (value.count > 0) {
                                                hd.total = hd.total + 1;
                                                if (picture.error.code == 1) {
                                                    addAlbum(picture.url, value.name, value.id, value.description, value.count, value.cover_photo);
                                                } else {
                                                    addAlbum(picture.data.url, value.name, value.id, value.description, value.count, value.cover_photo);
                                                }
                                                //addAlbum( picture.data.url, value.name, value.id, value.description, value.count, value.cover_photo );
                                                // push pictures count to the zbir array for later use
                                                // and pair it with each album ID
                                                var ID = value.id;
                                                var total = value.count;
                                                zbir[ID] = total;
                                                zbir['photos'] = zbir['photos'] + total;
                                            }
                                            i++;
                                            if (i === g) {
                                                // extend the albums loading time so that cover
                                                // images can be replaced with better quality ones
                                                // unnoticed - without the images "blinking"							
                                                var cbg = setInterval(function() {
                                                    if (hd.total === hd.current) {
                                                        clearInterval(cbg);
                                                        //console.log('init', albums);
                                                        afterFirstAlbumsLoad(albums);
                                                    }
                                                }, 100);
                                                if (cacheData) {
                                                    var $time = calculateCatchTime();
                                                    $('#cache-time').text($time.time);
                                                    $('#cache-min').text($time.min + ' min');
                                                }
                                            }
                                        }
                                    );
                                } else {
                                    i++;
                                }

                            });

                            $("#fbp-navs").prepend('<a id="aphpr">Previous</a><a id="aphnx">Next</a>');
                            $('#fb-breadcrumbs #fbpt .fb-total').text(albumsPgd);

                        } else {
                            console.log(albums.error);
                            if ($('.fbp-overlay').length <= 0)
                                $('#faba-inner').append('<div class="fbp-overlay" style="height: 100%"><div class="loader"></div></div>');
                            $('.fbp-overlay').append('<h3>' + albums.error.message + '</h3>');
                        }
                    }
                );
            } else {
                beforeFirstAlbumsLoad();
                albumWallInit(cachedAlbums[1]['html']);
                if (skipAlbums.length > 0) cachedAlbumsSkip();
                afterFirstAlbumsLoad(cachedAlbums[1], true);

                $("#fbp-navs").prepend('<a id="aphpr">Previous</a><a id="aphnx">Next</a>');
                $('#fb-breadcrumbs #fbpt .fb-total').text(albumsPgd);
            }
        }

        function dynamicOps() {
            if (autoplay && !cacheData) {
                autoplay = window.setInterval(autoplayCallback, autoplaySpeed);
                var button = '<a class="fbaply">Autoplay</a>';
                $('#fb-breadcrumbs').append(button);
                $('#lightbox').append(button);
                button = $('.fbaply');
                button.on('click', autoplayControls);
                button.addClass('active').text(autoplayPauseText);
            }

            if (cacheData) {
                clearInterval(autoplay);
                autoplay = window.setInterval(autoplayCallback, cacheSpeed);
                loadFromCache = false;
                albums.append('<div id="faba-caching"><div><h1>Caching Data...</h1><h3>Please be patient, it can take time depending on number of albums+photos you are caching.</h3><h4>It will take approximetly <span id="cache-min">(calculating...)</span></h4><h5>Come back at <span id="cache-time"></span> it should be done.</h5></div></div>');
            }

            if (loadFromCache) {
                cachedPhotos = {};
                fetchCachedData();
            }

        }

        function applyStyles() {
            // set the styles
            var style = '<style type="text/css" data-id="fbp">';
            if (css.overlay) style += '.fbp-overlay{background:' + css.overlay + '}';
            if (css.photosContainer) style += '.fbp-container{background:' + css.photosContainer + '}';
            if (css.viewAlbum) style += '.fb-album .ovlpic a{' + css.viewAlbum + '}';
            if (css.viewAlbumHover) style += '.fb-album .ovlpic a:hover{' + css.viewAlbumHover + '}';
            if (css.buttons) style += '#phpr, #phnx, #aphpr, #aphnx{' + css.buttons + '}';
            if (css.preloaderCircle) style += '.loader{border: 8px solid ' + css.preloaderCircle + '}';
            if (css.preloaderRotator) style += '.loader{border-left: 8px solid ' + css.preloaderRotator + '}';
            style += '</style>';
            $('html').find('head').append(style);
        }

        function albumsRoll() {
            if (loadFromCache) {
                var cachedInit = setInterval(function() {
                    if (cachedAlbums[1]) {
                        clearInterval(cachedInit);
                        if (!singleAlbum) albumsInit();
                        else singleAlbumLoad();
                    }
                }, 100);
            } else {
                if (!singleAlbum) albumsInit();
                else singleAlbumLoad();
            }
        }

        function init() {

            var albumsInner = $('#faba-inner');
            var Lightbox = $('#lightbox');
            var photoData = Lightbox.find('.lb-dataContainer');
            var photos = $('#fb-photos');

            // apply options
            setOptions();
            //apply animations
            applyAnimations();
            // firing hover effect
            hover();
            //call album hover function
            albumHover();
            // initialize Lightbox
            lightboxInit();
            // apply dynamic Options
            dynamicOps();
            // apply custom CSS if any
            applyStyles();

            $('#fbgh').text(albumsTitle);

            // pagination
            albums.on('click', '#pagination li a', function() {
                var nmb = $(this).parent().data('id');
                nmb = parseInt(nmb, 10);
                goToPage(nmb);
            });


            albums.on('click', '#aphpr,#aphnx', albumsNavigation);

            photos.on('click', 'a[data-lightbox]', function() {
                photoMeta($(this).data('id'));
                lbx = $(this).index();
            });

            // return to galleries selection
            $('#fbgh').on('click', albumsHome);

            albumsInner.on('click', '.fbp-view', firstLoadPhotos);


            Lightbox.find('.lb-dataContainer').on('click', '.fbc-lm', function() {
                loadComments($(this).attr('href'));
            });

            Lightbox.find('.lb-nav a').on('click', function() {
                var index = lbx;
                if ($(this).hasClass('lb-next')) {
                    var id = $('a[data-lightbox]').eq(index + 1).data('id');
                    lbx++;
                } else {
                    var id = $('a[data-lightbox]').eq(index - 1).data('id');
                    lbx--;
                }
                photoMeta(id);
                if (typeof callback.photoChange === 'function') callback.photoChange(id);
            });

            albumsInner.append('<div class="fbp-overlay" style="height: 100%"><div class="loader"></div></div>');

            //initialize albums
            albumsRoll();

        } // init();

        /*
         * Methods
         */
        $.fn.faba.hoverAlbum = function(albumId, moment) {
            var $album = $('#a' + albumId);
            if (moment === 'over') hoverHandle.album.over($album);
            else hoverHandle.album.out($album);
        }

        $.fn.faba.openAlbum = function(albumId) {
            $link = $('#a' + albumId).find('.fbp-view');
            firstLoadPhotos($link);
        }

        $.fn.faba.closeAlbum = function() {
            albumsHome();
        }

        $.fn.faba.reset = function(newOps) {
            var inner = $('#faba-inner');
            if ($('.fbaply').length) $('.fbaply').remove();
            cachedAlbums = {};
            cachedPhotos = {};
            wall === undefined;
            ops = $.extend({}, defaults, newOps);
            setOptions();
            applyAnimations();
            lightboxInit();
            dynamicOps();
            applyStyles();
            inner.find('.fb-album').each(function() {
                replaceMarkup($(this));
            });
        }

        $.fn.faba.albumsReInit = function() {
            albumsHome();
            if ($('.fb-album').length) $('#faba-inner .fb-album').remove();
            albumsRoll();
        }

        $.fn.faba.destroy = function(deleteAll, deleteAlbums) {
            $('#breadcrumbs').off();
            $("#faba").off();
            $('#faba-inner').off();
            $('#fbgh').off();
            $('#fb-photos').off();
            $('#lightbox').off();
            if (deleteAll) $('#faba').remove();
            if (deleteAlbums) $('#faba-inner, #fb-photos').remove();
        }

        //connect to fb api
        fbConnect();

    } //facebook

})(jQuery);