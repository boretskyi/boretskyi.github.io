 /*!
 * Based on Clean Blog v1.0.0 (http://startbootstrap.com)
 * Copyright 2014 Start Bootstrap, Bogdan Kulynych
 * Licensed under Apache 2.0 (https://github.com/IronSummitMedia/startbootstrap/blob/gh-pages/LICENSE)
 */

$(function() {
  // Tooltip Init
  $("[data-toggle='tooltip']").tooltip();

  // When clicking on Full hide fail/success boxes
  $('#name').focus(function() {
    $('#success').html('');
  });

  // Make all images responsive
  $("img").addClass("img-responsive");
});

// Navigation Scripts to Show Header on Scroll-Up
$(function() {
  //primary navigation slide-in effect
  var WIDTH_THRESHOLD = 768;
  var $window = $(window),
      $navbar = $('.navbar-custom');

  var headerHeight = $navbar.height();
  $window.on('load resize', function() {
    var currentTop = $window.scrollTop();
    if (currentTop === 0 && $window.width() <= WIDTH_THRESHOLD) {
      $navbar.addClass('is-visible is-fixed');
    } else if ($window.width() > WIDTH_THRESHOLD) {
      $navbar.removeClass('is-visible is-fixed');
    }
  });
  $window.on('scroll', {
      previousTop: 0
    },
    function() {
      var currentTop = $window.scrollTop();
      //check if user is scrolling up
      if (currentTop <= this.previousTop) {
        //if scrolling up...
        if (currentTop > 0 && $navbar.hasClass('is-fixed')) {
          $navbar.addClass('is-visible');
        } else {
          if ($window.width() > WIDTH_THRESHOLD) {
            $navbar.removeClass('is-visible is-fixed');
          }
        }
      } else {
        //if scrolling down...
        $navbar.removeClass('is-visible');
        if (currentTop > headerHeight && !$navbar.hasClass('is-fixed')) {
          $navbar.addClass('is-fixed');
        }
      }
      this.previousTop = currentTop;
  });
});
