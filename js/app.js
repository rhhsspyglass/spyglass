(function($) {
  'use strict';

  // Modernizr.touchevents = true;

  var $contact_forms = $('form.blahlab_contact_form');

  if ( $.fn.validate ) {
    for (var i = 0; i < $contact_forms.length; i++) {

      $($contact_forms[i]).validate({
        messages: { },
        submitHandler: function(form) {
          $.ajax({
            type: 'POST',
            url: 'send.php',
            data: $(form).serialize(),
            success: function(data) {
              if(data.match(/success/)) {
                $(form).trigger('reset');
                $(form).find('p.thanks').removeClass('hide').show().fadeOut(5000);
              }
            }
          });
          return false;
        }
      });

    }
  }


  window.mousePosition = {};

  function mousePositionTrack() {

    window.mousePosition.x;
    requestAnimationFrame(mousePositionTrack);
  }


  // for performance only watch for:
  // 1. mousemove
  // 2. the animation of the swiper is in progress
  // requestAnimationFrame(mousePositionTrack);

  if (!Modernizr.touchevents) {

    $(document).on('mousemove', function(event) {
      window.mousePosition.x = event.pageX;
      window.mousePosition.y = event.pageY;

      if ( window.swiper ) {
        updateColor(window.swiper);
      }

    });

  }


  // update background color for .swiper-slide.work elements
  function updateColor(swiper) {

    var color = currentColor(swiper);

    var works = $('.swiper-slide.work', swiper.$el);

    for (var i = 0; i < works.length; i++) {
      $(works[i]).css('background-color', color);
    }

  }

  function currentColor(swiper) {
    var current;

    var works = $('.swiper-slide.work', swiper.$el);


    if ( Modernizr.touchevents ) {

      current = $(swiper.slides[swiper.visualActiveIndex]).data('color');

    } else {

      for (var i = 0; i < works.length; i++) {
        var work = works[i]

        if ( mouseIsOnWorkImage(work) ) {
          current = $(work).data('color');
          swiper.currentColorCache = current;
          break;
        }
      }

      if ( !current ) {
        if ( mouseIsOnAnyWork() ) {
          current = swiper.currentColorCache;
        }
      }

    }

    return current ? current : swiper.defaultColor;
  }

  function mouseIsOnAnyWork() {
    var works = $('.swiper-slide.work');

    for (var i = 0; i < works.length; i++) {
      if ( mouseIsOnWork(works[i]) ){
        return true;
      }
    }

    return false;
  }

  function mouseIsOnWork(work) {

    var offset = $(work).offset();
    var width = $(work).width();
    var height = $(work).height();

    var xIn = ( window.mousePosition.x > offset.left ) && ( window.mousePosition.x < offset.left + width );
    var yIn = ( window.mousePosition.y > offset.top ) && ( window.mousePosition.y < offset.top + height );

    return xIn && yIn;
  }

  function mouseIsOnWorkImage(work) {
    var inner = $(work).find('.inner')[0];

    var offset = $(inner).offset();
    var width = $(inner).width();
    var height = $(inner).height();

    var xIn = ( window.mousePosition.x > offset.left ) && ( window.mousePosition.x < offset.left + width );

    return xIn;
  }


  $(document).ready(function() {
    new Swiper('#case-study', {
      slidesPerView: 'auto',
      freeMode: true,
      direction: 'vertical',
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      freeMode: true,
      mousewheel: true,
      grabCursor: true,
      breakpoints: {

      }
    });

    new Swiper('#about', {
      slidesPerView: 'auto',
      freeMode: true,
      mousewheel: {
        sensitivity: 5
      },
      grabCursor: true,
      breakpoints: {
        2400: {
          slidesPerView: 'auto',
          spaceBetween: 0,
          slidesOffsetAfter: 0,
          slidesPerGroup: 1
        },
        1023: {
          freeMode: true,
          slidesPerView: 'auto',
          spaceBetween: 0,
          slidesOffsetAfter: 0,
          slidesPerGroup: 1
        }
      }
    });

    new Swiper('#contact-slider', {
      slidesPerView: 'auto',
      freeMode: true,
      mousewheel: {
        sensitivity: 5
      },
      grabCursor: true,
      breakpoints: {
        2400: {
          slidesPerView: 'auto',
          spaceBetween: 0,
          slidesOffsetAfter: 0,
          slidesPerGroup: 1
        },
        1023: {
          freeMode: true,
          slidesPerView: 'auto',
          spaceBetween: 0,
          slidesOffsetAfter: 0,
          slidesPerGroup: 1
        }
      }
    });

    new Swiper('#post-slider', {
      speed: 700,
      mousewheel: true,
      grabCursor: true,
      on: {
        reachBeginning: function() {
          $(this.$el).addClass('beginning');
        },
        init: function() {
          $(this.$el).addClass('beginning');

          this.defaultColor = $(this.$el).find('.swiper-slide.work').css('background-color');
          this.currentColorCache = undefined;

        },
        transitionStart: function() {
          if ( !this.isBeginning ) {
            $(this.$el).removeClass('beginning');
          }
          if ( !Modernizr.touchevents ) {
            this.trigger_mousemove_event = setInterval(function() {
              var event = jQuery.Event('mousemove');
              event.pageX = window.mousePosition.x;
              event.pageY = window.mousePosition.y;
              $(document).trigger(event);
            }, 1000/30);
          }
        },
        transitionEnd: function() {

          var visualActiveIndex = this.activeIndex;

          if ( Modernizr.touchevents ) {

            this.visualActiveIndex = this.activeIndex;
            var slide = this.slides[this.activeIndex];
            if ( $(slide).offset().left < 0 ) {
              // this means the slide has visually deactivated
              // only happens when scroll to the end
              this.visualActiveIndex += 1;
            }
            updateColor(this);

          } else {
            clearInterval(this.trigger_mousemove_event);
          }

        }
      },
      breakpoints: {
        2400: {
          slidesPerView: 'auto',
          spaceBetween: 0,
          slidesOffsetAfter: 0,
          slidesPerGroup: 1
        },
        1023: {
          freeMode: false,
          slidesPerView: 1,
          spaceBetween: 0,
          slidesOffsetAfter: 0,
          slidesPerGroup: 1
        }
      }
    });

    var mySwiper = new Swiper ('#gallery', {
      speed: 700,
      mousewheel: true,
      grabCursor: true,
      on: {
        reachBeginning: function() {
          $(this.$el).addClass('beginning');
        },
        init: function() {
          $(this.$el).addClass('beginning');

          this.defaultColor = $(this.$el).find('.swiper-slide.work').css('background-color');
          this.currentColorCache = undefined;

        },
        transitionStart: function() {
          if ( !this.isBeginning ) {
            $(this.$el).removeClass('beginning');
          }
          if ( !Modernizr.touchevents ) {
            this.trigger_mousemove_event = setInterval(function() {
              var event = jQuery.Event('mousemove');
              event.pageX = window.mousePosition.x;
              event.pageY = window.mousePosition.y;
              $(document).trigger(event);
            }, 1000/30);
          }
        },
        transitionEnd: function() {

          var visualActiveIndex = this.activeIndex;

          if ( Modernizr.touchevents ) {

            this.visualActiveIndex = this.activeIndex;
            var slide = this.slides[this.activeIndex];
            if ( $(slide).offset().left < 0 ) {
              // this means the slide has visually deactivated
              // only happens when scroll to the end
              this.visualActiveIndex += 1;
            }
            updateColor(this);

          } else {
            clearInterval(this.trigger_mousemove_event);
          }

        }
      },
      breakpoints: {
        2400: {
          slidesPerView: 'auto',
          spaceBetween: 0,
          slidesOffsetAfter: 0,
          slidesPerGroup: 1
        },
        1023: {
          freeMode: false,
          slidesPerView: 1,
          spaceBetween: 0,
          slidesOffsetAfter: 0,
          slidesPerGroup: 1
        }
      }
    });

    window.swiper = mySwiper;


    $('.scroll-to-beginning').on('click', function() {
      var swiper = $(this).closest('.swiper-container')[0].swiper;
      swiper.slideTo(0);
    });


    $('.swiper-container').removeClass('is-invisible');


    $('#menu-bar').on('click', function(event) {
      if ( $(event.target).is('#logo') ) {
        return true;
      } else {

        $('#wrapper').toggleClass('show-menu');
        $('#menu-bar').toggleClass('show-menu');
        $('#menu').toggleClass('show-menu');

      }
    });


    $('#wrapper').on('click', function(event) {
      // check whether it is clicked inside #menu

      var insideMenu = event.pageX > $('#menu').offset().left && ( event.pageX < $('#menu').offset().left + $('#menu').width() );

      if ( !insideMenu ) {
        $('#wrapper').removeClass('show-menu');
        $('#menu-bar').removeClass('show-menu');
        $('#menu').removeClass('show-menu');
      }

    });


  });

})(jQuery);