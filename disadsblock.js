




/**
 * Adi.js
 */
(function($) {

  'use strict';

  var Adi;

  $.adi = function(args) {

    /**
     * Merge defaults with user options
     */

    var options = $.extend({}, Adi.defaults, args);
    return new Adi(options);
  };

  /**
   * Constructor
   */

  Adi = function(args) {

    /**
     * Merge this with user options
     */

    $.extend(this, args);

    if (this._check()) {
      this._init();
      this.active();
    }

    if (!this._check()) {
      this.inactive();
    }
  };

  /**

   
   * Check for $.adblock
   */

  Adi.prototype._check = function () {
   if($('.adsbygoogle').css("display")=="none"){
      return $.adblock === undefined
    }else{
      return $.adblock === null
    }
  };

  /**
   * Start plugin  
   */

  Adi.prototype._init = function() {
    this._append();
  };

  /**
   * Set template
   */

  Adi.prototype._setTemplate = function(title, content) {

    return '<div class="jquery-adi">' +
      '<div class="jquery-adi_content">' +
      '<button class="jquery-adi_close"></button>' +
      '<h2>' + title + '</h2>' +
      '<p>' + content + '</p>' +
      '</div>' +
      '</div>';
  };

  /**
   * Append html
   */

  Adi.prototype._append = function(callback) {

    this.$el = $(this._setTemplate(this.title, this.content)).appendTo($(document.body)).addClass(this.theme);
    this._show();
  };

  /**
   * Show modal
   */

  Adi.prototype._show = function() {

    var that = this;

    this.$el.show();
    this._center();
    this._controls();

    this.onOpen(this.$el);
  };

  /**
   * Modal controls
   */

  Adi.prototype._controls = function() {

    var that = this;

    function close() {
      that.$el.hide();
      that.onClose(that.$el);
    }

    this.$el.on('click', '.jquery-adi_close', close);
    $(document).on('keyup', function(e) {
      if (e.keyCode == 27)
        close();
    });
  };

  /**
   * Center modal
   */

  Adi.prototype._center = function() {
    var $modal = this.$el.find('.jquery-adi_content');
    $modal.css('margin-top', -Math.abs($modal.outerHeight() / 2));
  };

  /**
   * Defaults
   */

  Adi.defaults = {
    title: 'Em Chào Đại Ca <3',
    content: 'Đại ca tắt <b style="color:#02ff00;font-size:18px">Adbock</b> giúp bọn em. Để bọn em có thể phục vụ đại ca tốt nhất ạ ! ',
    theme: 'dark',
    onOpen: function() {},
    onClose: function() {},
    active: function() {},
    inactive: function() {}
  };

})(jQuery);

/*==========================
      End plugin
===========================*/

$(document).ready(function() {

  $.adi({
    theme: 'dark',
    onOpen: function(el) {
      /* $.adi working with animate.css */
      el.find('.jquery-adi_content').addClass('animated bounceInDown')
    },
    onClose: function(el) {
      window.location.reload(true)
      /**
       * Redirect
       * ========
       * window.location.href('https://web.archive.org/web/20170930132956/http://some-website/')
       * 
       * Dont let user to see content / reload page
       * ==========================================
       * window.location.reload(true);
       */
    },
    inactive: function() {

      var tpl = '';

      $('.container').append(tpl);

      console.log('Adblock not detected :)');
    },
    active: function() {

      var tpl = '';

      $('.container').append(tpl);

      console.log('Adblock detected :(')
    }
  });

});
/*
     FILE ARCHIVED ON 13:29:56 Sep 30, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:42:06 Jul 02, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 52.853 (3)
  esindex: 0.006
  captures_list: 67.559
  CDXLines.iter: 10.648 (3)
  PetaboxLoader3.datanode: 77.727 (4)
  exclusion.robots: 0.172
  exclusion.robots.policy: 0.161
  RedisCDXSource: 1.865
  PetaboxLoader3.resolve: 186.256
  load_resource: 225.059
*/
