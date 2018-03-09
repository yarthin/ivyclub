

var swiper = new Swiper('.swiper-container', {
			
				slidesPerView: 1,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				scrollbarHide: false,
				speed: 600,
				coverflow: {
		            rotate: 50,
		            stretch: 0,
		            depth: 100,
		            modifier: 1,
		            slideShadows : true
		        }	
	});			

(function ($) {

    "use strict";
	
	// SMALLER DEVICE NAVIGAION FULLPAGE NAV

	$(window).on('load', function() {
		var  $cssLoader = $('.css-loader');
		$cssLoader.fadeOut();  
		$cssLoader.delay(350).fadeOut('slow');   
		$cssLoader.delay(350).css({'zIndex':'-1000'});
		
    });
	
	setPagePiling();
	
	$('[data-toggle=navigation]').on('click', function(){
		
		var mainMenu = $(this).data('target');
		
		$(mainMenu).find('.menu-wrapper').removeClass('menu-to-right');
		
		var animationClass = $(mainMenu).data('animation-in');
		var animationDuration = $(mainMenu).data('animation-duration');
		var animationDelay = .5;
		
		var $dataSlidePageForMenu = $('[data-slide-page-for-menu]');
		
		if(!$(this).hasClass('close-btn')){
			
			$($(mainMenu +' .nav-menu').find('li')).each(function(){
				$(this).addClass(animationClass);
				$(this).css('animation-delay', animationDelay + 's');
				$(this).css('animation-duration', animationDuration + 's');
				animationDelay += .1;
			});
			$dataSlidePageForMenu.toggleClass('page-slide-to-right');
			
		}else{
			$(mainMenu).find('.menu-wrapper').addClass('menu-to-right');
			$(mainMenu+' .nav-menu li').removeClass(animationClass);
			$dataSlidePageForMenu.toggleClass('page-slide-to-right');
		}
		
		$(mainMenu).toggleClass('visible');
		$(this).toggleClass('close-btn');
		
		return false;
		
	});

	loadSliderJsonData();
		
	$('[data-toggle=projects]').on('click', function(){
		
		var currentProjects = $(this).data('target');
		$(currentProjects).addClass('visible-projects');
		$(this).parents('.single-page-wrapper').addClass('page-slide');
		return false;
		
	});
	
	var $projectCloseBtn = $('.project-close-btn');
	$projectCloseBtn.on('click', function(){
		closeProjects();
		return false;
	});
	
	var $singlePageWrapper = $('.single-page-wrapper');
	$singlePageWrapper.on('click', function(){
		
		if($(this).hasClass('page-slide')){
			closeProjects();
			return false;
		}
		
	});
	
	
	// PAGE NAVIGATION FOR PAGEPILING PLUGIN
	
	var $dataSLiderNav = $('[data-slider-nav]');
	$dataSLiderNav.on('click', function(){
		if($(this).attr('data-slider-nav') === 'prev'){
			$.fn.pagepiling.moveSectionUp();
		}
		if($(this).attr('data-slider-nav') === 'next'){
			$.fn.pagepiling.moveSectionDown();
		}
	});

	
	// MAKE MAIN MENU FIXED ON SCROLL
	
	var mainMenuId = isExists('#main-menu-bar') ? $('#main-menu-bar') : null;
	var mainMenuBottom = (mainMenuId === null) ? 0 : mainMenuId.height() + 200;
	
	var top_of_window = $(window).scrollTop();
	
	if((top_of_window > mainMenuBottom)){ 
		$(mainMenuId).addClass('fixed-menu'); 
	}
	else{ 
		$(mainMenuId).removeClass('fixed-menu'); 
	}
	
	
	// COUNTER VARIABLE MUST BE OUTSIDE  SCROLL EVENT
	
	var counterVar = 0;
	var skillVar = 0;
		
		
	$(window).on('scroll', function(){
		
		
		top_of_window = $(this).scrollTop();
		
		
		// MAKE MAIN MENU FIXED ON SCROLL
		
		top_of_window = $(window).scrollTop();
		
		if((top_of_window > mainMenuBottom)){ 
			$(mainMenuId).addClass('fixed-menu'); 
		}
		else{ 
			$(mainMenuId).removeClass('fixed-menu'); 
		}
		
	});//EOF SCROLL
	

	
})(jQuery);

function closeProjects(){
	
	var $singleProjectWrapper = $('.single-page-wrapper');
	var $projects = $('.projects');
	
	if(isExists(('.single-page-wrapper'))) { $singleProjectWrapper.removeClass('page-slide'); }
	if(isExists(('.projects'))) { $projects.removeClass('visible-projects'); }
	
}

function loadSliderJsonData(){
	$.getJSON('include/calendar.php', function (data) {
	    //console.log(data);
	    data = data.reverse();
	    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	      for (var i = 0; i < data.length ; i++) {
			    var html = 
							'<div class="xx" data-animation-down="to-top" data-animation-up="to-bottom">' +
							'	<img src="' + data[i].image + '" alt="about Image" />' +
							'</div>' +
							'<div class="x" data-animation-down="to-top" data-animation-up="to-bottom">' +
							'	<div class="right-area-wrapper">' +
							'		<h2 class="title-event"><b>'+data[i].name+'</b></h2>' +
							'		<p class="">'+ data[i].day + '.' + data[i].month + '.' + data[i].year +'</p>' +
							'		<p class="desc-event">'+data[i].intro+'</p>' +
							'	</div>' +
							'</div>' ;
				if(w > 479){
					$('#subslide_' + i).append(html);
				}
				else{
					$('#subslideM_' + i).append(html);
				}
			  
			  
			}
    });
    
}


function isNull(elems){
	return (elems === null) ? true : false;
}

function isExists(elems){
	if ($(elems).length > 0) { 
		return true;
	}
	return false;
}


function counterEnable(elem){
	
	$($(elem).find('.counter-value')).each(function() {
		var $this = $(this),
			countDuration = $this.data('duration'),
			countTo = $this.data('count'),
			countDelay = $this.data('counting-delay');
			
		
		setInterval(function(){
			
			$({
			countNum: $this.text()
				}).animate({
					countNum: countTo
				},
				{	
					duration: countDuration,
					easing: 'linear',
					step: function() {
						$this.text(Math.floor(this.countNum));
					},
					complete: function() {
						$this.text(this.countNum);
					}

				});
		},countDelay);
	});
}

function setPagePiling(){
	
	if ( $.isFunction($.fn.pagepiling) && isExists('#pagepiling') ) {
		
		var $pagePiling = $('#pagepiling');
		var pageDirection = $pagePiling.data('direction');
		
		$pagePiling.pagepiling({
			sectionSelector: '.single-page',
			direction: (pageDirection ? pageDirection : 'vertical'),
			menu: null,
			touchSensitivity : 10,
			scrollingSpeed : 500,
			onLeave: function(index, nextIndex, direction){

				var nextSection = $('.single-page').eq(nextIndex-1);
				var currentSection = $('.single-page').eq(index-1);
				
				var nxtEachAnimatedElem = $(nextSection).find('[data-animation-up]');
				var curEachAnimatedElem = $(currentSection).find('[data-animation-up]');
				
				if(nextSection.data('counting-enable')){
					counterEnable(nextSection);
				}
				
				if(pageDirection === 'horizontal'){
					
					$(curEachAnimatedElem).each(function(){
						var animatedUpAnim = $(this).data('animation-up');
						var animatedDownAnim = $(this).data('animation-down');
						$(this).removeClass(animatedUpAnim).removeClass(animatedDownAnim);
					});
					$(nxtEachAnimatedElem).each(function(){
						var animatedUpAnim = $(this).data('animation-up');
						var animatedDownAnim = $(this).data('animation-down');
						$(this).removeClass(animatedUpAnim).removeClass(animatedDownAnim);
					});
					
					var $singleProjectWrapper = $('.single-page-wrapper-2'); 
					$singleProjectWrapper.removeClass('page-to-right').removeClass('page-to-left');
					
					if(direction ==='down'){
						$(currentSection).find('.single-page-wrapper-2').addClass('page-to-right');
						
						var animationDelayIncrease = 0;
						
						$(nxtEachAnimatedElem).each(function(){
							var animatedDownAnim = $(this).data('animation-down');
							var animatedDownAnimDelay = ($(this).data('delay') ? $(this).data('delay') : (.05 + animationDelayIncrease));
							var animatedDownAnimDuration = .5;
							$(this).addClass(animatedDownAnim);
							$(this).css({
								'animation-delay' : animatedDownAnimDelay + 's',
								'animation-duration' : animatedDownAnimDuration + 's'
								});
							animationDelayIncrease += .1;
						});
						
						
					} //if(direction ==='down')
					else if(direction ==='up'){
						$(nextSection).find('.single-page-wrapper-2').addClass('page-to-left');
						
						var animationDelayIncrease = 0;
						
						$(nxtEachAnimatedElem).each(function(){
							var animatedUpAnim = $(this).data('animation-up');
							var animatedUpAnimDelay = ($(this).data('delay') ? $(this).data('delay') : (.05 + animationDelayIncrease));
							var animatedUpAnimDuration = .5;
							$(this).addClass(animatedUpAnim);
							$(this).css({
								'animation-delay' : animatedUpAnimDelay + 's',
								'animation-duration' : animatedUpAnimDuration + 's'
								});
							animationDelayIncrease += .1;
						});
						
						
					} //else if(direction ==='up')
					
					
				}else{
					
					$(curEachAnimatedElem).each(function(){
						var animatedUpAnim = $(this).data('animation-up');
						var animatedDownAnim = $(this).data('animation-down');
						$(this).removeClass(animatedUpAnim).removeClass(animatedDownAnim);
					});
					$(nxtEachAnimatedElem).each(function(){
						var animatedUpAnim = $(this).data('animation-up');
						var animatedDownAnim = $(this).data('animation-down');
						$(this).removeClass(animatedUpAnim).removeClass(animatedDownAnim);
					});
					
					var $dataAnimationContent = $('[data-animation-content]');
					var $dataAnimationBg = $('[data-animation-bg]');
					
					$dataAnimationContent.removeClass('content-to-top').removeClass('content-to-bottom').removeClass('content-to-bottom-small');
					
					$dataAnimationBg.removeClass('bg-to-top').removeClass('bg-to-bottom').removeClass('bg-to-top-small').removeClass('bg-to-bottom-small');
					
					
					if(direction ==='down'){
						
						$(currentSection).find('[data-animation-content]').addClass('content-to-bottom');
						
						$(currentSection).find('[data-animation-bg]').addClass('bg-to-bottom');
						
						$(nextSection).find('[data-animation-bg]').addClass('bg-to-top-small');
						
						
						var animationDelayIncrease = 0;
						var animationDurationDecrease = 0;
						
						$(nxtEachAnimatedElem).each(function(){
							var animatedDownAnim = $(this).data('animation-down');
							var animatedDownAnimDelay = .4 + animationDelayIncrease;
							var animatedDownAnimDuration = .75 - animationDurationDecrease;
							$(this).addClass(animatedDownAnim);
							$(this).css({
								'animation-delay' : animatedDownAnimDelay + 's',
								'animation-duration' : animatedDownAnimDuration + 's'
								});
							animationDelayIncrease += .16;
							animationDurationDecrease += .1;
						});
						
					} //if(direction ==='down')

					else if(direction === 'up'){
						
						$(nextSection).find('[data-animation-content]').addClass('content-to-top');
						
						$(currentSection).find('[data-animation-content]').addClass('content-to-bottom-small');
						
						$(nextSection).find('[data-animation-bg]').addClass('bg-to-top');
						
						$(currentSection).find('[data-animation-bg]').addClass('bg-to-bottom-small');
						
						
						var animationDelayIncrease = 0;
						var animationDurationDecrease = 0;
						
						$(nxtEachAnimatedElem).each(function(){
							var animatedUpAnim = $(this).data('animation-up');
							var animatedUpAnimDelay = .4 + animationDelayIncrease;
							var animatedUpAnimDuration = .75 - animationDurationDecrease;
							$(this).addClass(animatedUpAnim);
							$(this).css({
								'animation-delay' : animatedUpAnimDelay + 's',
								'animation-duration' : animatedUpAnimDuration + 's'
								});
							animationDelayIncrease += .16;
							animationDurationDecrease += .1;
						});
						
					} //else if(direction === 'up')
					
				} //else of if(pageDirection === 'horizontal')
				
			} // END OF ONLEAVE

		}); //$('#pagepiling').pagepiling
		
	} //if ( $.isFunction($.fn.pagepiling) )
}
jQuery(document).ready(function($){
    var isLateralNavAnimating = false;

    //open/close lateral navigation
    $('.cd-nav-trigger').on('click', function(event){
        event.preventDefault();
        //stop if nav animation is running
        if( !isLateralNavAnimating ) {
            if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true;

            $('body').toggleClass('navigation-is-open');
            $('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                //animation is over
                isLateralNavAnimating = false;
            });
        }
    });


    $('.faba-intro').click(function() {
    	location.href = './photos' ;
    });

});



