(function() {
	var $, server_url;
    var isLoaded = false;
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
	var loadScript = function(type, src, callback){

    // Create attribute
    var attr, src_type;
    switch (type){
      case 'css':
        attr = {element: 'link', 'type': 'text/css', rel: 'stylesheet'};
        src_type = 'href';
        break;
      default:
        attr = {element: 'script', 'type': 'text/javascript'};
        src_type = 'src';
    }
    
    // Set attr
    var element = document.createElement(attr.element);
    for (var i in attr){
      element[i] = attr[i];
    }
    
    // Callback handle
    if (callback !== undefined){
      if (element.readyState){
        element.onreadystatechange = function(){
          if (element.readyState == 'loaded' || element.readyState == 'complete'){
            element.onreadystatechange = null;
             callback();
          }
        };
      }else{
        element.onload = function(){
          callback();
        }
      }
    }
    
    // Append script
    element[src_type] = src;
    document.getElementsByTagName("head")[0].appendChild(element);

  };
	
	function addjQueryPlugin(){
		// visible
		$.fn.visible=function(){return this.each(function(){var a=$(this)[0].offsetTop;var c=$(this).height();var b=$(this).parent();$(b).animate({scrollTop:a+c/2-$(b).height()/2},0)})};
		// styleSelect
		$.fn.styleSelect=function(a){var c={class_wrap:"ul-select-wrap",class_ul:"ul-select",class_tag:"tag",direction:"top",height:190,selected_format:"%s"};var d=$.extend(c,a);var b=this;return this.each(function(){var g=this;if($(this).prop("tagName").toLowerCase()==="select"){var f=$("<div>").addClass(d.class_wrap).css({position:"relative",outline:"none"}).prop("tabindex",0);var e=$("<ul>").addClass(d.class_ul).css({position:"absolute",left:"0px",width:"100%","z-index":999,display:"none","max-height":d.height,"overflow-y":"auto"});if(d.direction=="top"){$(e).css("top","100%")}else{$(e).css("bottom","100%")}$(this).find("option").each(function(i,j){var h=$("<li>").data("value",$(this).val()).html($(this).html());$(e).append(h)});$(f).append(e);$(this).after(f);$(f).focus(function(){$(e).show();$(e).find("li").removeClass("select");$("li.selected",e).last().addClass("select").visible()}).blur(function(){$(e).hide()}).keydown(function(j){if(j.keyCode==38){var i=$(e).find("li.select").prev("li")}else{if(j.keyCode==40){var i=$(e).find("li.select").next("li");if(i.length===0){i=$(e).find("li:eq(0)")}}else{if(j.keyCode==13){$(e).find("li.select").trigger("click");return false}else{var h=String.fromCharCode(j.keyCode);if(/[a-z0-9]/i.test(h)){var i=$("li",e).filter(function(k){return $(this).html().toUpperCase().indexOf(h.toUpperCase())===0}).eq(0)}}}}if(i&&i.length!==0){$(e).find("li").removeClass("select");$(i).addClass("select").visible();return false}return true});$(e).find("li").click(function(){g.selectOption($(this).data("value"));if(!$(g).prop("multiple")){$(f).blur()}});$(g).change(function(){g.syncValue()});$(g).click(function(){$(f).trigger("focus")});$(this).hide();this.selectOption=function(j){var h=$(g).val();h=h instanceof Array?h:[h];var i=(h.indexOf(j)!==-1)?false:true;$(g).find("option").filter(function(k){return $(this).prop("value")==j}).prop("selected",i);$(g).trigger("change");g.syncValue()};this.syncValue=function(){var h=$(g).val();h=h instanceof Array?h:[h];$(e).find("li").removeClass("selected").filter(function(i){return h.indexOf($(this).data("value"))!==-1}).addClass("selected");var j=$("option[hidden]",g).map(function(i,m){return $(this).prop("value")}).toArray();$("li",e).hide().filter(function(i){return j.indexOf($(this).data("value"))===-1}).show();$(f).find("div._tag").remove();for(var k in h){if(h[k]||!$(g).prop("multiple")){var l=$("<div>").data("value",h[k]).html($(g).find('option[value="'+h[k]+'"]').html()).addClass("_tag").addClass(d.class_tag);$(f).append(l);if($(g).prop("multiple")){$(l).click(function(i){g.selectOption($(this).data("value"))})}}}};this.syncValue()}})};
	}

	var ContactForm = function(){
		return this;
	}

	ContactForm.prototype= {
		init: function(){
			var _this = this;
			loadScript('css', server_url+'css/style.css', function(){
				_this.loadContent();
			});
		},

		loadContent: function(){
			var _this = this;
			$.ajax({
				url: server_url+'include/reservation.php',
				type: 'GET'
			}).done(function(data){
                if ((msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) && !isLoaded){
                    isLoaded = true;
                } else {
                    $('body').append(data);
                }

				_this.$wrap = $('.wrap-embed-contact-form');
				_this.$form = $('.embed-contact-form', _this.$wrap);
				_this.$success_message = $('.form-message', _this.$wrap);
				_this.$btn_show = $('.btn-show-contact', _this.$wrap);

                _this.uiEvent();

			});
		},

		uiEvent: function(){
			var _this = this;
			$('select', this.$form).styleSelect({
				class_wrap: 'ul-dropdown-wrap'
			});

			this.$btn_show.click(function(){
				_this.$wrap.toggleClass('show-widget');
				return false;
			});

			this.$form.submit(function(){
				var $btn = $('[type=submit]', this),
						btn_text = $btn.html();

				$btn.prop('disabled', true).html('Sending...');

				$.ajax({
					type: 'POST',
					url: server_url+'include/reservation.php',
					data: _this.$form.serialize(),
					dataType: 'json',
					success: function(data){
						$btn.prop('disabled', false).html(btn_text);
						$('.error-message', _this.$form).remove();
						if (data.code == 'failed'){
							data.fields = data.fields.reverse();
							for (var i in data.fields){
								$('[name=' + data.fields[i].name + ']', _this.$form).trigger('focus').trigger('click').parent('div').each(function(){
									$(this).append($('<div>').addClass('error-message').html(data.fields[i].message));
								});
							}
						}else if (data.code == 'success'){
							$('input, textarea', _this.$form).val('');
							_this.$success_message.removeClass('hide');
						}
					}
				});
				return false;
			});

		}

	};

	// server url detect
    server_url = document.location.href.replace(/([a-z\.]+)$/i, '');

	// require jQuery $
	if (!window.jQuery){
		loadScript('js', server_url+'js/jquery.js', function(){
			$ = window.jQuery;
			addjQueryPlugin();
			(new ContactForm()).init();
		});
	}else{
		$ = window.jQuery;
		addjQueryPlugin();
		(new ContactForm()).init();
	}

}());

/*------------------------------------------------------------------
cpntact form right/left with button

-------------------------------------------------------------------*/

function open_panel()
{
slideIt();
var a=document.getElementById("sidebar");
a.setAttribute("id","sidebar1");
a.setAttribute("onclick","close_panel()");
}

function slideIt()
{
	var slidingDiv = document.getElementById("slider");
	var stopPosition = 0;
	
	if (parseInt(slidingDiv.style.right) < stopPosition )
	{
		slidingDiv.style.right = parseInt(slidingDiv.style.right) + 2 + "px";
		setTimeout(slideIt, 1);	
	}
}
	
function close_panel(){
slideIn();
a=document.getElementById("sidebar1");
a.setAttribute("id","sidebar");
a.setAttribute("onclick","open_panel()");
}

function slideIn()
{
	var slidingDiv = document.getElementById("slider");
	var stopPosition = -300;
	
	if (parseInt(slidingDiv.style.right) > stopPosition )
	{
		slidingDiv.style.right = parseInt(slidingDiv.style.right) - 2 + "px";
		setTimeout(slideIn, 1);	
	}
}



/*------------------------------------------------------------------
Jiggowaat Form

-------------------------------------------------------------------*/

jQuery(document).ready(function(){

	$('#reservationform').submit(function(){

		var action = $(this).attr('action');

		$("#message").slideUp(750,function() {
		$('#message').hide();

 		$('#submit')
			.after('<img src="assets/ajax-loader.gif" class="loader" />')
			.attr('disabled','disabled');

		$.post(action, {
			fname: $('#firstname').val(),
			lname: $('#lastname').val(),
			email: $('#email').val(),
			phone: $('#phone').val(),
			dateagepicker: $('#dateagepicker').val(),
			datepicker: $('#datepicker').val(),
			t_table: $('#t_able').val(),
			guest: $('#guest').val()
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#reservationform img.loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#reservationform').slideUp('slow');

			}
		);

		});

		return false;

	});
	$('#contactform').submit(function(){

		var action = $(this).attr('action');

		$("#message").slideUp(750,function() {
		$('#message').hide();

 		$('#submit')
			.after('<img src="assets/ajax-loader.gif" class="loader" />')
			.attr('disabled','disabled');

		$.post(action, {
			name: $('#name').val(),
			email: $('#email').val(),
			phone: $('#phone').val(),
			subject: $('#subject').val(),
			comment: $('#comment').val(),
			
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#contactform').slideUp('slow');

			}
		);

		});

		return false;

	});
	$('#newsletterform').submit(function(){

		var action = $(this).attr('action');

		$("#new_message").slideUp(750,function() {
		$('#new_message').hide();

 		$('#submit')
			.after('<img src="assets/ajax-loader.gif" class="loader" />')
			.attr('disabled','disabled');

		$.post(action, {
			email: $('#nemail').val()//,
			//phone: $('#phone').val(),
		},
			function(data){
				document.getElementById('new_message').innerHTML = data;
				$('#new_message').slideDown('slow');
				$('#newsletterform img.loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#newsletterform').slideUp('slow');

			}
		);

		});

		return false;

	});
	$('#becomememform').submit(function(){

		var action = $(this).attr('action');

		$("#message").slideUp(750,function() {
		$('#message').hide();

 		$('#submit')
			.after('<img src="assets/ajax-loader.gif" class="loader" />')
			.attr('disabled','disabled');

		$.post(action, {
			firstname: $('#firstname').val(),
			lastname: $('#lastname').val(),
			email: $('#email').val(),
			phone: $('#phone').val(),
			adress: $('#adress').val(),
			zip: $('#zip').val(),
			ort: $('#ort').val(),
			datetimepicker: $('#datetimepicker').val(),
			gender: $('#gender').val(),
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#becomememform img.loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#becomememform').slideUp('slow');

			}
		);

		});

		return false;

	});
});