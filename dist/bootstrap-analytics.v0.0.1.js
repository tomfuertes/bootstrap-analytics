/*! bootstrap-analytics - v0.0.1 - 2014-03-27
* http://www.youtube.com/watch?v=cDuG95DXbw8
* Copyright (c) 2014 Obi-Wan Kenobi; Licensed  */
(function ($) {
  'use strict';

  window.ga = function () {
    console.log(arguments);
  };
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/events

  var $document = $(document);
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

  /**
   * Scrollspy
   *  - activate
   */
  $document.on('activate.bs.scrollspy', function (e) {
    ga(e, $(e.target).text());
  });

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
   *  - hide
   */

  /**
   * Carousel
   *  - too many
   */

  /**
   * Affix
   *  - na
   */

})(jQuery);
