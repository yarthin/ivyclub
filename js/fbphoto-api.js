$(document).ready(function() {

    var albums = $('#faba');
 
    	var albums = $('#faba');
		albums.faba({
			account: 'ivyclubsg',
			token: '574426812762931|N9RUNH_omfYTjHsPUN5m6N_K49Q',
			appID : '574426812762931',
			correctPageNum: {
				'233704190019951': 30
			},
			albumsTitle: 'Übersicht',
			albLimit: 23,
			albumsCount: 72, 
			showPageNumbers: true,
			skipAlbums : ['Profile Pictures', 'Cover Photos','Mobile Uploads','Timeline Photos','IVY Nächte'],
			autoplay: false,
			autoplaySpeed: 3600,
			loadFromCache: false,
			cacheData: false,
			albumsCachePath:'cache',
			metaCachePath:'cache',
			albumsSort: 'desc',
			photosLayout:'flex',
			fixedSize: false,
			albumWidth:280,
			albumHeight:230,
			fbLinkText:'Auf Facebook ansehen',
			comments: true,
			albumsLoad:'expand',
			showCaption:true,
			commentsMore: 'Cargar mÃ¡s',
		    noCommentsText: 'Keine Kommentare vorhanden',
		    photoDesc:'IVY - Club & Events',
		
		}); 
	
});