/*! bootstrap-analytics - v0.0.2 - 2015-09-05
* https://github.com/tomfuertes/bootstrap-analytics
* Copyright (c) 2015 Tom Fuertes <tomfuertes@gmail.com>; Licensed WTFPL */
(function ($) {
  'use strict';

  // https://developers.google.com/analytics/devguides/collection/analyticsjs/events
  var $document = $(document);

  // TODO: Deprecate in 0.1.0 & Remove in prod if you're reading this...
  if (window.location.href.indexOf('//getbootstrap.com/' > 0)) {
    /*jshint ignore:start*/
    // load universal analytics to Tom's domain
    // so we can screenshot demo ga data in the README
    (function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r;
      i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date();
      a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    window.ga('create', 'UA-20500285-16', 'getbootstrap.com');
    window.ga('send', 'pageview');
    /*jshint ignore:end*/

    // window.ga = function () {
    //   var args = Array.prototype.slice.call(arguments, 0);
    //   args.length = 5;
    //   console.log.apply(console, args);
    // };
  }

  var ga = function (e, label) {
    window.ga('send', 'event',
      e.namespace,
      e.type,
      $.trim(label) || window.location.pathname);
  };

  /**
   * Modal
   *  - show
   *  - hide
   */
  $document.on('show.bs.modal hide.bs.modal', function (e) {
    var $target = $(e.target);
    ga(e, $target.find('.modal-title').text() || $target.find('h1, h2, h3, h4, h5').first().text() || $target.attr('id'));
  });

  /**
   * Dropdown
   *  - show //
   *  - hide // na
   */
  $document.on('show.bs.dropdown', function (e) {
    ga(e, $(e.relatedTarget).text());
  });

  // /**
  //  * Scrollspy - NOTE: Deprecated for over firing
  //  *  - activate
  //  */
  // $document.on('activate.bs.scrollspy', function (e) {
  //   ga(e, $(e.target).text());
  // });

  /**
   * Tab
   *  - show
   */
  $document.on('show.bs.tab', function (e) {
    ga(e, $(e.target).text());
  });

  /**
   * Tooltip
   *  - show
   */
  $document.on('show.bs.tooltip', function (e) {
    ga(e, $(e.target).text());
  });

  /**
   * Popover
   *  - show
   *  - hide
   */
  $document.on('show.bs.popover hide.bs.popover', function (e) {
    ga(e, $(e.target).text());
  });

  /**
   * Alert
   *  - close
   */
  $document.on('close.bs.alert', function (e) {
    ga(e, $(e.target).find('strong').first().text() || e.target && e.target.id);
  });

  /**
   * Button
   *  - no events / data toggles?
   */

  /**
   * Collapse
   *  - show
   */
  $document.on('show.bs.collapse', function (e) {
    ga(e, e.target && e.target.id);
  });

  /**
   * Carousel
   *  - too many
   */

  /**
   * Affix
   *  - na
   */

})(jQuery);
