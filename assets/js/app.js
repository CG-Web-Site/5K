// Template Name: Striker
// Template URL: https://techpedia.co.uk/template/striker
// Description:  Striker - Sports Club Html Template
// Version: 1.0.0

(function (window, document, $, undefined) {
  "use strict";
  var Init = {
    i: function (e) {
      Init.s();
      Init.methods();
    },
    s: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      Init.w();
      Init.BackToTop();
      Init.preloader();
      Init.jsSlider();
      Init.searchToggle();
      Init.niceSelect();
      Init.videoPlay();
      Init.tilt();
      Init.filterToggle();
      Init.VideoPlayer();
      Init.counterActivate();
      Init.quantityHandle();
      Init.wishlistButton();
      Init.countdownInit(".countdown", "2023/12/01");
      Init.initializeSlick();
      Init.formValidation();
      Init.contactForm();
      Init.achivementCountdown();
    },

    w: function (e) {
      this._window.on("load", Init.l).on("scroll", Init.res);
    },



    BackToTop: function () {
      var btn = $("#backto-top");
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 300) {
          btn.addClass("show");
        } else {
          btn.removeClass("show");
        }
      });
      btn.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate(
          {
            scrollTop: 0,
          },
          "300"
        );
      });
    },
    // Tilt
    tilt: function () {
      let architexTiltElm = $('.architex-tilt');
      if (architexTiltElm.length) {
        architexTiltElm.each(function () {
          let self = $(this);
          let options = self.data('tilt-options');
          let architexTilt = self.tilt(
            "object" === typeof options ? options : JSON.parse(options)
          );
        });
      }
    },

    preloader: function () {
      setTimeout(function () {
        $("#preloader").hide("slow");
      }, 2000);
    },
    jsSlider: function () {
      if ($(".js-slider").length) {
        $(".js-slider").ionRangeSlider({
          skin: "big",
          type: "double",
          grid: false,
          min: 0,
          max: 100,
          from: 20,
          to: 80,
          hide_min_max: true,
          hide_from_to: true,
        });
      }
    },

    // Achivement Counter 
    achivementCountdown:function() {
    var section = document.querySelector(".counter-section");
    var hasEntered = false;
    if (!section) return;

    var initAnimate = window.scrollY + window.innerHeight >= section.offsetTop;
    if (initAnimate && !hasEntered) {
      hasEntered = true;
      counterActivate();
    }

    window.addEventListener("scroll", (e) => {
      var shouldAnimate =
        window.scrollY + window.innerHeight >= section.offsetTop;

      if (shouldAnimate && !hasEntered) {
        hasEntered = true;
        this.counterActivate();
      }
    });
  },


  
    counterActivate:function() {
      $(".counter-count .count").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text()
            },
            {
              duration: 4000,
              easing: "swing",
              step: function (now) {
                $(this).text(Math.ceil(now), 3);
              }
            }
          );
      });
    },
     // Search Toggle 
     searchToggle: function () {
      if ($(".search-toggler").length) {
        $(".search-toggler").on("click", function (e) {
          e.preventDefault();
          $(".search-popup").toggleClass("active");
          $(".mobile-nav__wrapper").removeClass("expanded");
          $("body").toggleClass("locked");
        });
      }
    },



    quantityHandle: function () {
      $(".decrement").on("click", function () {
        var qtyInput = $(this).closest(".quantity-wrap").children(".number");
        var qtyVal = parseInt(qtyInput.val());
        if (qtyVal > 0) {
          qtyInput.val(qtyVal - 1);
        }
      });
      $(".increment").on("click", function () {
        var qtyInput = $(this).closest(".quantity-wrap").children(".number");
        var qtyVal = parseInt(qtyInput.val());
        qtyInput.val(parseInt(qtyVal + 1));
      });
    },

    wishlistButton: function () {
      if ($(".wishlist-icon").length) {
        $('.wishlist-icon').on('click', function() {
          $(this).find('.fal').toggleClass('fas');
          return false;
        })
      }
    },


    // Nice Select
    niceSelect: function () {
      if ($(".has-nice-select").length) {
        $('.has-nice-select, .contact-form select').niceSelect();
      }
    },
    
    // Latest Project Slider
    initializeSlick: function (e) {
      if ($(".latest-project-slider").length) {
        $(".latest-project-slider").slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          dots: true,
          arrows: false,
          centerPadding: "0",
          cssEase: "linear",
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                dots: false,
              },
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                dots: false,
                arrows: false,
              },
            },
          ],
        });
      }
      if ($(".brands-slider").length) {
        $(".brands-slider").slick({
          infinite: true,
          slidesToShow: 5,
          arrows: false,
          autoplay: true,
          cssEase: 'linear',
          autoplaySpeed: 0,
          speed: 4000,
          pauseOnFocus: false,
          pauseOnHover: false,
          responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
        });
      }
      if ($(".testimonials-slider").length) {
        $(".testimonials-slider").slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          dots: true,
          arrows: false,
          centerPadding: "0",
          cssEase: "linear",
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                dots: true,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                dots: false,
                arrows: false,
              },
            },
          ],
        });
      }
      if ($(".blog-slider").length) {
        $(".blog-slider").slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          dots: true,
          arrows: false,
          centerPadding: "0",
          cssEase: "linear",
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                dots: true,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                dots: false,
                arrows: false,
              },
            },
          ],
        });
      }
      if ($(".project-detail-slider").length) {
        $(".project-detail-slider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          dots: true,
          arrows: false,
          centerPadding: "0",
          cssEase: "linear",
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                dots: false,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                dots: false,
                arrows: false,
              },
            },
          ],
        });
      }
      if ($(".team-card-slider").length) {
        $(".team-card-slider").slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          dots: false,
          arrows: false,
          centerPadding: "0",
          cssEase: "linear",
          responsive: [
            {
              breakpoint: 1599,
              settings: {
                slidesToShow: 5,
                dots: false,
              },
            },
            {
              breakpoint: 1399,
              settings: {
                slidesToShow: 4,
                dots: false,
              },
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 3,
                dots: false,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                dots: false,
              },
            },
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 2,
                dots: false,
                arrows: false,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                dots: false,
                arrows: false,
              },
            },
          ],
        });
      }
    },
    
    filterToggle: function(){
      if($('.filter-block').length){
        $(".filter-block .title").on("click", function (e) {
          var count = $(this).data('count');
          if($('.filter-block.box-'+count+' .content-block').is(':visible')){
            $('.filter-block.box-'+count+' i').removeClass('fa-horizontal-rule');
            $('.filter-block.box-'+count+' i').addClass('fa-plus');
            $('.filter-block.box-'+count+' .content-block').hide('slow');

          }else{
            
            $('.filter-block.box-'+count+' i').removeClass('fa-plus');
            $('.filter-block.box-'+count+' i').addClass('fa-horizontal-rule');
            $('.filter-block.box-'+count+' .content-block').show('slow');
          }
        })
      }
    },
    // Video Modal
    VideoPlayer: function () {
      if ($("#video").length) {
        $("#video").aksVideoPlayer({
          file: [
              {
              file: "assets/media/videos/video-1080.mp4",
              label: "1080p"
              },
              {
              file: "assets/media/videos/video-720.mp4",
              label: "720p"
              },
              {
              file: "assets/media/videos/video-540.mp4",
              label: "540p"
              },
              {
              file: "assets/media/videos/video-360.mp4",
              label: "360p"
              },
              {
              file: "assets/media/videos/video-240.mp4",
              label: "240p"
              }
          ],
          poster: "assets/media/streaming/video-img-large.png",
          forward: true,
        });
      }
    },

    videoPlay:function(){
      $('#videoModal').on('hidden.bs.modal', function () {
        $('#videoModal video').get(0).pause();
      });
      $("#closeVideoModalButton").click(function() {
        $("#videoModal").modal("hide");
      });
    },

    // Countdown Timer
    countdownInit: function (countdownSelector, countdownTime, countdown) {
      var eventCounter = $(countdownSelector);
      if (eventCounter.length) {
        eventCounter.countdown(countdownTime, function (e) {
          $(this).html(
            e.strftime(
              '<li><h2>%D</h2><h6>Days</h6></li>\
              <li><h2>%H</h2><h6>Hrs</h6></li>\
              <li><h2>%M</h2><h6>Min</h6></li>\
              <li><h2>%S</h2><h6>Sec</h6></li>'
            )
          );
        });
      }
    },


    formValidation: function () {
      if ($(".contact-form").length) {
        $(".contact-form").validate();
      }
    },

    jsSlider: function () {
      if ($(".js-slider").length) {
        $(".js-slider").ionRangeSlider({
          skin: "big",
          type: "double",
          grid: false,
          min: 0,
          max: 100,
          from: 20,
          to: 80,
          hide_min_max: true,
          hide_from_to: true,
        });
      }
    },

    contactForm: function () {
      $(".contact-form").on("submit", function (e) {
        e.preventDefault();
        if ($(".contact-form").valid()) {
          var _self = $(this);
          _self
            .closest("div")
            .find('button[type="submit"]')
            .attr("disabled", "disabled");
          var data = $(this).serialize();
          $.ajax({
            url: "./assets/mail/contact.php",
            type: "post",
            dataType: "json",
            data: data,
            success: function (data) {
              $(".contact-form").trigger("reset");
              _self.find('button[type="submit"]').removeAttr("disabled");
              if (data.success) {
                document.getElementById("message").innerHTML =
                  "<h3 class='color-primary mt-5'>Email Sent Successfully</h3>";
              } else {
                document.getElementById("message").innerHTML =
                  "<h3 class='color-primary mt-5'>There is an error</h3>";
              }
              $("#message").show("slow");
              $("#message").slideDown("slow");
              setTimeout(function () {
                $("#message").slideUp("hide");
                $("#message").hide("slow");
              }, 3000);
            },
          });
        } else {
          return false;
        }
      });
    },
  };
  Init.i();
})(window, document, jQuery);
