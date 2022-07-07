$(document).ready(function () {

    // site view show hide js
    $('.view .hide').click(function(event) {
        $(this).hide().siblings('.show').show();
    });
    $('.view .show').click(function(event) {
        $(this).hide().siblings('.hide').show();
    });

    // sound nute unmute js
    $('.sound-effect .mute').click(function(event) {
        $(this).hide().siblings('.unmute').show();
    });
    $('.sound-effect .unmute').click(function(event) {
        $(this).hide().siblings('.mute').show();
    });

    ////////////////////////////////////////////////
    // Welcome Modal JS 
    $('.welcome-modal-trgt').click(function () {
        $('body').addClass('modal-show');
    });
    $('.close-modal, .cancel-modal').click(function () {
        $('body').removeClass('modal-show');
    });
    $('.welcome-modal .form-control').keyup(function(){
        tmpval = $(this).val();
        if(tmpval == '') {
            $(this).addClass('empty');
            $(this).removeClass('not-empty');
            $('.primary-btn').removeClass('filled');
        } else {
            $(this).addClass('not-empty');
            $(this).removeClass('empty');
            
            $('.primary-btn').addClass('filled');
        }
    });
    ///////////////////////////////////////////
    // toggle js
    $('.menu-tgl').click(function(event) {
        $('body').addClass('open-tgl');
    });
    $('.cls-tgl').click(function(event) {
        $('body').removeClass('open-tgl');
    });
    ///////////////////////////////////////////.
    
     if (document.documentElement.clientWidth > 1024 ) {

        $('#fullpage').fullpage({
         anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage', '7thpage'],
        navigation: true,
        slidesNavigation: true,
        navigation:true,
        navigationTooltips: ['01', '02', '03', '04', '05', '06', '07'],
        showActiveTooltip: true,
        autoScrolling:  true,
        onLeave: function( section, origin, destination, direction){
            let current_page_anchor = origin.anchor;
            let scroll_direction = destination;
            if(current_page_anchor !== '' && scroll_direction === 'down') {
                if($('.slider-images').children().hasClass(current_page_anchor)) {
                    $('.slider-images .'+current_page_anchor+'').children('.rev-video').hide();
                    $('.slider-images .'+current_page_anchor+'').children('.fwd-video').show();
                    let video_element = $('.slider-images .'+current_page_anchor+'').children('.fwd-video');
                    if(video_element) {
                        video_element[0].play();    
                    }
                }   
            } else {
                if($('.slider-images').children().hasClass(current_page_anchor)) {
                    $('.slider-images .'+current_page_anchor+'').children('.fwd-video').hide();
                    $('.slider-images .'+current_page_anchor+'').children('.rev-video').show();
                    let video_element = $('.slider-images .'+current_page_anchor+'').children('.rev-video');                
                    if(video_element) {
                        video_element[0].play();
                    }      
                }
            }
        }
      });
    }
    if (document.documentElement.clientWidth < 1025) {
        $('#fullpage').fullpage({
         anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage', '7thpage'],
        navigation: true,
        slidesNavigation: true,
        navigation:true,
        navigationTooltips: ['01', '02', '03', '04', '05', '06', '07'],
        showActiveTooltip: true,
        autoScrolling:  false,
        onLeave: function( section, origin, destination, direction){
            let current_page_anchor = origin.anchor;
            if(current_page_anchor !== '') {
                if($('.slider-images').children().hasClass(current_page_anchor)) {
                    let video_element = $('.slider-images .'+current_page_anchor+'').children();
                    video_element[0].play();
                }   
            }
        }
      });
    }
    // calling fullpage.js methods using jQuery
    $('#moveSectionUp').click(function(e){
        e.preventDefault();
        //  $.fn.fullpage.moveSectionUp();
        fullpage_api.moveTo('firstPage', 0);
    });

    $('#moveSectionDown').click(function(e){
        e.preventDefault();
        $.fn.fullpage.moveSectionDown();
    });

    ////////////////////////////////////////
    
    // slick slider js

    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false
    });

    //////////////////////////////////////

    // accordion js
    $(function() {
      $('.acc-title').click(function(j) {
        
        var dropDown = $(this).closest('.acc-card').find('.acc-panel');
        $(this).closest('.acc').find('.acc-panel').not(dropDown).slideUp();
        
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
        } else {
          $(this).closest('.acc').find('.acc-title.active').removeClass('active');
          $(this).addClass('active');
        }
        
        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
      });
    });

    ///////////////////////////

    // plan selection js
    $('.plan-cards').click(function(event) {
        $(this).addClass('active').siblings().removeClass('active');
    });

    /////////////////////////////////

    $('select').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;
      
        $this.addClass('select-hidden'); 
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());
      
        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);
      
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }
      
        var $listItems = $list.children('li');
      
        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').slideToggle();
            $('select').toggleClass('active');
            $('.product-view').toggleClass('title-show');
        });
      
        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            $('select').removeClass('active');
            $('.product-view').removeClass('title-show');
            //console.log($this.val());
        });
      
        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
            $('select').removeClass('active');
            $('.product-view').removeClass('title-show');
        });

    });


    //////////////////////////////////////////////////
     // Discard Modal JS 
    $('.back-to-home').click(function () {
        $('body').addClass('d-show');
    });
    $('.close-modal, .cancel-modal').click(function () {
        $('body').removeClass('d-show');
    });
     // SET Modal JS 
    $('.place-resv').click(function () {
        $('body').addClass('p-show');
    });
    $('.close-modal, .cancel-modal').click(function () {
        $('body').removeClass('p-show');
    });
});