(function ($) {
  'use strict';

  // COLOR MODE
  $('.color-mode').click(function () {
    $('.color-mode-icon').toggleClass('active');
    $('body').toggleClass('dark-mode');
    console.log('body class', $('body').hasClass('dark-mode'));
    if ($('body').hasClass('dark-mode')) {
      $('#email-img-icon').attr('src', '/images/contact-icons/email_white.svg');
      $('#phone-img-icon').attr('src', '/images/contact-icons/phone_white.svg');
      $('#skype-img-icon').attr('src', '/images/contact-icons/skype_white.svg');
      $('#address-img-icon').attr(
        'src',
        '/images/contact-icons/address_white.svg'
      );
      $('#github-img-icon').attr(
        'src',
        '/images/social-icons/github_white.svg'
      );
      $('.progress-bar').addClass('progress-bar-dark');
      $('.progress-bar').removeClass('progress-bar-light');
    } else {
      $('#email-img-icon').attr('src', '/images/contact-icons/email.svg');
      $('#phone-img-icon').attr('src', '/images/contact-icons/phone.svg');
      $('#skype-img-icon').attr('src', '/images/contact-icons/skype.svg');
      $('#address-img-icon').attr('src', '/images/contact-icons/address.svg');
      $('#github-img-icon').attr('src', '/images/social-icons/github.svg');
      $('.progress-bar').removeClass('progress-bar-dark');
      $('.progress-bar').addClass('progress-bar-light');
    }
  });

  // HEADER
  $('.navbar').headroom();

  // PROJECT CAROUSEL
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
  });

  // SMOOTHSCROLL
  $(function () {
    $('.nav-link, .custom-btn-link').on('click', function (event) {
      var $anchor = $(this);
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr('href')).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  // TOOLTIP
  $('.social-links a').tooltip();
})(jQuery);
