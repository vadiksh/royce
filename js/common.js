$(function() {
	if (window.location.pathname.indexOf('/Strategies/') !== -1) {
		$('.headerMenu__nav-link').eq(0).addClass('active')
	} else if (window.location.pathname.indexOf('/funds/') !== -1) {
		$('.headerMenu__nav-link').eq(1).addClass('active')
	} else if (window.location.pathname.indexOf('/insights/') !== -1 ||
			   window.location.pathname.indexOf('/news/') !== -1 ||
			   window.location.pathname.indexOf('/News/') !== -1) {
		$('.headerMenu__nav-link').eq(2).addClass('active')
	} else if (window.location.pathname.indexOf('/about/') !== -1 ||
			   window.location.pathname.indexOf('/people/') !== -1) {
		$('.headerMenu__nav-link').eq(3).addClass('active')
	}

	$(window).resize(function() {
	    $('.headerMenu-mob__container').height(window.innerHeight - 119);
	});
	$(window).trigger('resize');


	var utilityEntered;
	$('.headerMenu__utility-link').mouseenter(function(){
		$(this).addClass('active').siblings().addClass('active');
	})
	$('.headerMenu__utility-link, .headerMenu__utility-dropdown').mouseleave(function(){
		var that = $(this);
		utilityEntered = false;
		setTimeout(function() {
			if (!utilityEntered) {
				that.removeClass('active').siblings().removeClass('active');
			}
		},50)
	})
	$('.headerMenu__utility-dropdown').mouseenter(function() {
		utilityEntered = true;
	})

	var mouseEntered = false;
	$('.headerMenu__nav-link').mouseenter(function(){
		mouseEntered = true;
		$(this).addClass('active').siblings().addClass('active').parent().siblings().children().removeClass('active');
	})
	$('.headerMenu__nav-link, .headerMenu__nav-dropdown').mouseleave(function(){
		var that = $(this);
		mouseEntered = false;
		setTimeout(function() {
			if (!mouseEntered) {
				that.removeClass('active').siblings().removeClass('active');
			}
		},50)
	})
	$('.headerMenu__nav-dropdown').mouseenter(function() {
		mouseEntered = true;
	})
	var subEntered = false;
	$('.headerMenu__nav-sublink').mouseenter(function(){
		subEntered = true;
		$(this).addClass('active').siblings().removeClass('active');
		$('.headerMenu__nav-submenu').addClass('visible');
		$('.headerMenu__nav-submenu > li').eq($(this).index('.headerMenu__nav-sublink')).addClass('active').siblings().removeClass('active');
	})
	$('.headerMenu__nav-sublink').mouseleave(function(){
		var that = $(this);
		subEntered = false;
		setTimeout(function() {
			if (!subEntered) {
				that.removeClass('active');
				$('.headerMenu__nav-submenu').removeClass('visible');
				$('.headerMenu__nav-submenu > li').eq(that.index('.headerMenu__nav-sublink')).removeClass('active')
			}
		},50)
	})
	$('.headerMenu__nav-submenu').mouseenter(function() {
		subEntered = true;
	})
	$('.headerMenu__nav-submenu').mouseleave(function() {
		subEntered = false;
		setTimeout(function() {
			if (!subEntered) {
				$('.headerMenu__nav-sublink').removeClass('active');
				$('.headerMenu__nav-submenu').removeClass('visible');
				$('.headerMenu__nav-submenu > li').removeClass('active')
			}
		},50)
	})

	$('.headerMenu .hamburger').click(function() {
		if (!$(this).hasClass('active')) {
			$(this).addClass('active');
			$('.headerMenu__search, .headerMenu-mob').addClass('active');
		} else {
			$(this).removeClass('active');
			$('.headerMenu__search, .headerMenu-mob').removeClass('active');

		}
	})
	var openedSub;
	$('.headerMenu-mob__nav li').click(function() {
		$('.headerMenu-mob__submenus > li').eq($(this).index()).addClass('active').siblings().removeClass('active');
		openedSub = $('.headerMenu-mob__submenus li.active');
		$('.headerMenu-mob__submenus').addClass('active');
		$('.headerMenu-mob__main').addClass('hidden');
	})
	$('.headerMenu-mob__sublink').click(function(e) {
		e.preventDefault();
		$('.headerMenu-mob__subfunds > li').eq($(this).index('.headerMenu-mob__sublink')).addClass('active').siblings().removeClass('active');
		$('.headerMenu-mob__subfunds').addClass('active');
		$('.headerMenu-mob__submenus').addClass('hidden');
		openedSub.removeClass('active');
		$('.headerMenu-mob__container > ul').css({
		  "margin-bottom": 0,
		  "line-height": "initial"
		});
	})
	$('.headerMenu-mob__back').click(function() {
		if($(this).parents('.headerMenu-mob__submenus').length) {
			$('.headerMenu-mob__submenus, .headerMenu-mob__submenus li').removeClass('active');
			$('.headerMenu-mob__main').removeClass('hidden');
		} else {
			$('.headerMenu-mob__container > ul').attr('style', '');
			$('.headerMenu-mob__subfunds, .headerMenu-mob__subfunds li').removeClass('active');
			$('.headerMenu-mob__submenus').removeClass('hidden');
			openedSub.addClass('active');
		}
	})
	$('.headerMenu-mob__nav a, .headerMenu-mob__sublink a').click(function() {
		setTimeout(function() {
			$('.headerMenu-mob__container').animate({
				scrollTop: 0
			}, 250);
		}, 300)
		
	})

	var	offset,
		width,
		index;
		
	if ($('.strategies__nav .button-bg').length) {
		setTimeout(function() {
			offset = $('.strategies__nav li.active').position().left;
			width = $('.strategies__nav li.active').outerWidth();
			$('.strategies__nav .button-bg').css({
				"width": width,
				"transform": "translate3d(" + offset + "px,0,0)"
			});
		}, 100)
		
	}
	
	
	$('.strategies__nav li').click(function() {
		index = $(this).index() - 1;
		$(this).addClass('active').siblings().removeClass('active');
		offset = $(this).position().left;
		$('.strategies__nav .button-bg').css({
			"transform": "translate3d(" + offset + "px,0,0)"
		});

		width = $(this).outerWidth();
		$('.strategies__nav .button-bg').css({
			"width": width
		});
		$('.strategies__container > div').eq(index).addClass('active').siblings().removeClass('active');

	})
	$('.open-form').click(function() {
		$('.engage__form-wrapper').addClass('active');
	})
	$('.engage .close').click(function () {
		$('.engage__form-wrapper').removeClass('active');
	})
	$('.mob-title').click(function() {
		if (!$(this).hasClass('active')) {
			$('.mob-title').removeClass('active');
			$(this).parent().siblings().find('.mob-wrapper').removeClass('active').css({"height": 0});

			var height = $(this).next('.mob-wrapper')[0].scrollHeight;
			$(this).addClass('active').next('.mob-wrapper').addClass('active').css({"height": height});
		} else {
			$(this).removeClass('active').next('.mob-wrapper').removeClass('active').css({"height": 0});
		}
		$('body, html').animate({
			scrollTop: 0
		},500)
	})
	$('.headerMenu__search input').keydown(function(e) {
	    if(e.keyCode === 13) {
	    	$('.search-final-item a')[0].click();
	    }
	  });
	$('.headerMenu__search-button').click(function() {
		$('.search-final-item a')[0].click();
	})
	$('.headerMenu-mob__utility-personalize').click(function(e) {
		e.preventDefault();
		$('.headerMenu__utility-dropdown.profile-dropdown').addClass('active');
		console.log('open')
	})
	$('.headerMenu__utility-dropdown.profile-dropdown .close').click(function() {
		$('.headerMenu__utility-dropdown.profile-dropdown').removeClass('active');
		console.log('close');
	})
});
