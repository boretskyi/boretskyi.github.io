 /*!
 * Based on Clean Blog v1.0.0 (http://startbootstrap.com)
 * Copyright 2014 Start Bootstrap
 * Licensed under Apache 2.0 (https://github.com/IronSummitMedia/startbootstrap/blob/gh-pages/LICENSE)
 */

// Tooltip Init
$(function() {
  $("[data-toggle='tooltip']").tooltip();
});

// When clicking on Full hide fail/success boxes
$('#name').focus(function() {
  $('#success').html('');
});

// Make all images responsive
$("img").addClass("img-responsive");

// Navigation Scripts to Show Header on Scroll-Up
$(function() {
  //primary navigation slide-in effect
  var WIDTH_THRESHOLD = 768;

  var headerHeight = $('.navbar-custom').height();
  $(window).on('scroll', {
      previousTop: 0
    },
    function() {
      var currentTop = $(window).scrollTop();
      if (currentTop === 0) {
        if ($(window).width() > WIDTH_THRESHOLD) {
          $('.navbar-custom').removeClass('is-visible is-fixed');
        } else {
          $('.navbar-custom').removeClass('is-fixed');
        }
      } else {
      //check if user is scrolling up
      if (currentTop <= this.previousTop) {
        //if scrolling up...
        if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
          $('.navbar-custom').addClass('is-visible');
        } else {
          if ($(window).width() > WIDTH_THRESHOLD) {
            $('.navbar-custom').removeClass('is-visible is-fixed');
          }
        }
      } else {
        //if scrolling down...
        $('.navbar-custom').removeClass('is-visible');
        if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) {
          $('.navbar-custom').addClass('is-fixed');
        }
      }}
    this.previousTop = currentTop;
  });
});