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
		albumsCount: 120, 
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
		albumView : 'Ansehen <span>&rarr;</span>',
		albumHeight : 10,
    });
});