$(document).ready(function(){
	"use strict";
	

 	if($("#select-menu").length){
		$("#select-menu").selectbox();
	}
	if($("select").length){
		$('select').selectric();
	}

  if($('.countdown').length){
    $('.countdown').downCount({ date: '08/08/2017 12:00:00', offset: +1 });
  }

  if($('.counter').length){
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });
  }


  if($('#owl-demo-main, #owl-demo-6').length){
    var owl = $("#owl-demo-main, #owl-demo-6");
    owl.owlCarousel({ 
     autoPlay: 5000, //Set AutoPlay to 3 seconds
      itemsCustom : [
      [0, 1],
      [450, 1],
      [600, 1],
      [700, 1],
      [1000, 1],
      [1200, 1]
      ],
      navigation : true

    });
  } 

  if($('#owl-demo-2').length){
    var owl = $("#owl-demo-2");
    owl.owlCarousel({ 
     autoPlay: 5000, //Set AutoPlay to 3 seconds
      itemsCustom : [
      [0, 1],
      [450, 2],
      [600, 2],
      [700, 3],
      [1000, 4],
      [1200, 4]
      ],
      navigation : true

    });
  } 

  if($('#owl-demo-3').length){
    var owl = $("#owl-demo-3");
    owl.owlCarousel({ 
     autoPlay: 5000, //Set AutoPlay to 3 seconds
      itemsCustom : [
      [0, 1],
      [450, 1],
      [600, 1],
      [700, 1],
      [1000, 1],
      [1200, 1]
      ],
      navigation : true

    });
  } 
  if($('#owl-demo-4').length){
    var owl = $("#owl-demo-4");
    owl.owlCarousel({ 
     autoPlay: 5000, //Set AutoPlay to 3 seconds
      itemsCustom : [
      [0, 1],
      [450, 2],
      [600, 6],
      [700, 6],
      [1000, 6],
      [1200, 6]
      ],
      navigation : false

    });
  } 

     var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
     
    var checkin = $('#dpd1').datepicker({
      onRender: function(date) {
        return date.valueOf() < now.valueOf() ? 'disabled' : '';
      }
    }).on('changeDate', function(ev) {
      if (ev.date.valueOf() > checkout.date.valueOf()) {
        var newDate = new Date(ev.date)
        newDate.setDate(newDate.getDate() + 1);
        checkout.setValue(newDate);
      }
      checkin.hide();
      $('#dpd2')[0].focus();
    }).data('datepicker');
    var checkout = $('#dpd2').datepicker({
      onRender: function(date) {
        return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
      }
    }).on('changeDate', function(ev) {
      checkout.hide();
    }).data('datepicker');
   

    $('.bxslider').bxSlider({
      pagerCustom: '#bx-pager'
    });


   
	  
  jQuery(window).load(function($) {
    var filter_container = jQuery('#filterable-item-holder-1');

    filter_container.children().css('position','relative');
    filter_container.masonry({
      singleMode: true,
      itemSelector: '.filterable-item:not(.hide)',
      animate: true,
      animationOptions:{ duration: 800, queue: false }
    });
    jQuery(window).resize(function(){
      var temp_width =  filter_container.children().filter(':first').width();
      filter_container.masonry({
        columnWidth: temp_width,
        singleMode: true,
        itemSelector: '.filterable-item:not(.hide)',
        animate: true,
        animationOptions:{ duration: 800, queue: false }
      });
    });
    jQuery('ul#filterable-item-filter-1 a').click(function(e){  

      jQuery(this).addClass("active");
      jQuery(this).parents("li").siblings().children("a").removeClass("active");
      e.preventDefault();
      
      var select_filter = jQuery(this).attr('data-value');
      
      if( select_filter == "All" || jQuery(this).parent().index() == 0 ){   
        filter_container.children().each(function(){
          if( jQuery(this).hasClass('hide') ){
            jQuery(this).removeClass('hide');
            jQuery(this).fadeIn();
          }
        });
      }else{
        filter_container.children().not('.' + select_filter).each(function(){
          if( !jQuery(this).hasClass('hide') ){
            jQuery(this).addClass('hide');
            jQuery(this).fadeOut();
          }
        });
        filter_container.children('.' + select_filter).each(function(){
          if( jQuery(this).hasClass('hide') ){
            jQuery(this).removeClass('hide');
            jQuery(this).fadeIn();
          }
        });
      }
      
      filter_container.masonry(); 
      
    });
  });
  

	$(document).ready(function(){
		$("area[rel^='prettyPhoto']").prettyPhoto();
		
		$(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: true});
		$(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({});
	});



  $( ".show" ).on('click',function() {
    $( ".searchform" ).slideToggle( "slow", function() {
    // Animation complete.
    });
  });

  $( ".more-1" ).on('click',function() {
    $( ".more-div-1" ).slideToggle( "slow", function() {
    // Animation complete.
    });
  });
  $( ".more-2" ).on('click',function() {
    $( ".more-div-2" ).slideToggle( "slow", function() {
    // Animation complete.
    });
  });

  /* ---------------------------------------------------------------------- */
  /*  Google Map Function for Custom Style
  
  /* ---------------------------------------------------------------------- */
  
if($('#map-canvas').length){
	google.maps.event.addDomListener(window, 'load', initialize);
}
function initialize() {
  var MY_MAPTYPE_ID = 'custom_style';
  var map;
  var brooklyn = new google.maps.LatLng(40.6743890, -73.9455);
  var featureOpts = [
    {
      stylers: [
      { hue: '#f9f9f9' },     
      { visibility: 'simplified' },
      { gamma: 0.7 },
      { saturation: -200 },
      { lightness: 15 },
      { weight: 0.6 }
      ]
    },
    {
    featureType: "road",
      elementType: "geometry",
      stylers: [
      { lightness: 30 },
      { visibility: "simplified" }
      ]
    },
    {
      elementType: 'labels',
      stylers: [      
      { visibility: 'on' }
      ]
    },
    {
      featureType: 'water',
      stylers: [
      { color: '#000' }
      ]
    }
  ];

  var mapOptions = {
    zoom: 13,
    scrollwheel: false,
    center: brooklyn,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}





    $(document).ready(function() {
     
      var owl = $("#owl-demo-1");
     
      owl.owlCarousel({
         
          itemsCustom : [
            [0, 1],
            [450, 1],
            [600, 2],
            [700, 2],
            [1000, 3],
            [1200, 3],
            [1400, 3],
            [1600, 3]
          ],
          navigation : false
     
      });
     
    });


   $('#cal2').click(function(){
       $(document).ready(function(){
           $("#my-datepicker").datepicker().focus();
       });
   });

   $('#cal3').click(function(){
      $("#my-datepicker2").datepicker().focus();
   });

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    var events_array = [
        {
        title: 'Test1',
        start: new Date(2012, 8, 20),
        tip: 'Personal tip 1'},
    {
        title: 'Test2',
        start: new Date(2012, 8, 21),
        tip: 'Personal tip 2'}
    ];

    $('#calendar-sidebar').fullCalendar({
        header: {
            left: 'prev',
            center: 'title',
            right: 'next'
        },
        selectable: true,
        events: events_array,
        eventRender: function(event, element) {
            element.attr('title', event.tip);
        }
   
     });
	 /*
    ==============================================================
       PROGRESS BAR Script Start
    ============================================================== */
    $(".progressbars").jprogress();
      $(".progressbarsone").jprogress({
        background: "#ff401b"
      });

      var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-36251023-1']);
        _gaq.push(['_setDomainName', 'jqueryscript.net']);
        _gaq.push(['_trackPageview']);

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

   
    $('[data-toggle="tooltip"]').tooltip()
 

    $("#nav-mobile").html($("#nav-main").html());
    $("#nav-trigger span").click(function(){
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
        } else {
            $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }
    });

/**jquery.input-stepper.js**/
  ;(function (root, $, undefined) {

    var pluginName = "inputStepper";
    var defaults = {
      selectorButtonIncrease: '[data-input-stepper-increase]',
      selectorButtonDecrease: '[data-input-stepper-decrease]',
      dataAttributeIncrease: 'input-stepper-increase',
      dataAttributeDecrease: 'input-stepper-decrease',
      classNameDisabled: 'is-disabled',
      selectorInput: 'input',
      initialValue: null,
      min: 0,
      max: Infinity
    };

    // The actual plugin constructor
    function Plugin( element, options ) {
      this.element = element;

      this.options = $.extend( {}, defaults, options) ;

      this._defaults = defaults;
      this._name = pluginName;

      return this.init();
    }

    Plugin.prototype = {

      init: function () {
        var _this = this;

        // Cache elements
        this.$el = $(this.element);
        this.$input = this.$el.find(this.options.selectorInput);
        this.$decreaseButton = this.$el.find(this.options.selectorButtonDecrease);
        this.$increaseButton = this.$el.find(this.options.selectorButtonIncrease);

        this.min = this.$input.attr('min') || this.options.min;
        this.max = this.$input.attr('max') || this.options.max;

        this.initialValue = this.getValue() || this.options.initialValue || this.min;

        this.setValue(this.initialValue);
        this.checkState();

        this.$input.attr('pattern', '[0-9]*');

        // Bind events
        this.$input.on('keydown', this.onKeyDown.bind(this) );

        this.$input.on('change', this.onChange.bind(this) );

        this.$increaseButton.on('click', function (e) {
          e.preventDefault();
          _this.increase( $(this).data( _this.options.dataAttributeIncrease ) || 1 );
        });
        this.$decreaseButton.on('click', function (e) {
          e.preventDefault();
          _this.decrease( $(this).data('input-stepper-decrease') || 1 );
        });

        return this;
      },

      onChange: function (e) {
        if (this.getValue() === '') {
          this.setValue( this.initialValue );
        } else {
          this.setValue( this.getValue() );
        }

        return this;
      },

      onKeyDown: function (e) {
        // Inspired by:
        // http://stackoverflow.com/questions/995183/how-to-allow-only-numeric-0-9-in-html-inputbox-using-jquery

        // Allow: backspace, delete, tab, escape, enter and .
        var isEnterKey = e.keyCode == 13;

        if (isEnterKey) {
          this.setValue(this.getValue());
          return e.preventDefault();
        }

        var isSomeKeys = $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1;
        // Allow: Ctrl+A
        var isCntrlA = (e.keyCode == 65 && e.ctrlKey === true);
        // Allow: home, end, left, right
        var isHomeEndLeftRight = (e.keyCode >= 35 && e.keyCode <= 39);

        var isUpKey = e.keyCode == 38;
        var isDownKey = e.keyCode == 40;

        if (isUpKey) this.increase( (e.shiftKey ? 10 : 1) );
        if (isDownKey) this.decrease( (e.shiftKey ? 10 : 1) );

        if (isSomeKeys || isCntrlA || isHomeEndLeftRight) return;

        // Ensure that it is a number and stop the keypress
        if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
          // Numbers 0-9
          this.setValue(this.getValue());
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) ) {

          e.preventDefault();
        }

        return this;
      },

      getValue: function () {
        return this.$input.val();
      },

      setValue: function (amount) {
        amount = parseInt(amount, 10);

        if (this.amount === parseInt(amount, 10) ) return;

        if (amount !== '') {
          this.amount = parseInt(amount, 10);
        } else {
          this.amount = this.initialValue;
        }

        if (this.amount >= this.max) {
          this.amount = parseInt(this.max, 10);
        }

        if (this.amount <= this.min) {
          this.amount = parseInt(this.min, 10);
        }

        this.$input.val(this.amount).trigger('change');
        this.checkState();

        return this;
      },

      increase: function (amount) {
        if (this.$increaseButton.hasClass( this.options['classNameDisabled'] )) return;
        var newAmount = parseInt(this.amount + (amount || 1), 10);

        this.setValue(newAmount);
        this.$input.trigger('increase', [amount, this]);

        return this;
      },

      decrease: function (amount) {
        if (this.$decreaseButton.hasClass( this.options['classNameDisabled'] )) return;
        var newAmount = parseInt(this.amount - (amount || 1), 10);

        this.setValue(newAmount);
        this.$input.trigger('decrease', [amount, this]);

        return this;
      },

      disableButton: function ($button) {
        $button.addClass( this.options['classNameDisabled'] ).attr('disabled', true);
        return this;
      },

      enableButton: function ($button) {
        $button.removeClass( this.options['classNameDisabled'] ).attr('disabled', false);
        return this;
      },

      checkState: function () {
        if (this.amount <= this.min) {
          this.disableButton( this.$decreaseButton );
        } else {
          this.enableButton( this.$decreaseButton );
        }

        if (this.amount >= this.max) {
          this.disableButton( this.$increaseButton );
        } else {
          this.enableButton( this.$increaseButton );
        }

        return this;
      }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
      return this.each(function () {
        if ( ! $.data(this, "plugin-" + pluginName)) {
          $.data(this, "plugin-" + pluginName,
            new Plugin( this, options ));
          }
      });
    };

  })(window, jQuery);

  $('.input-stepper').inputStepper();

  $('.input-stepper-advanced').inputStepper({
      selectorButtonIncrease: '.increase',
      selectorButtonDecrease: '.decrease',
      dataAttributeIncrease: 'increase',
      dataAttributeDecrease: 'decrease'
  });

  $('#some-input').on('increase', function (e, amount) {
      alert('increase with: ' + amount);
  });
  $('#some-input').on('decrease', function (e, amount) {
      alert('decrease with: ' + amount);
  });
  /*
  ============================================================== 
      DL Responsive Menu
  ============================================================== 
  */
  if(typeof($.fn.dlmenu) == 'function'){
    $('#kode-responsive-navigation').each(function(){
      $(this).find('.dl-submenu').each(function(){
      if( $(this).siblings('a').attr('href') && $(this).siblings('a').attr('href') != '#' ){
        var parent_nav = $('<li class="menu-item kode-parent-menu"></li>');
        parent_nav.append($(this).siblings('a').clone());
        
        $(this).prepend(parent_nav);
      }
      });
      $(this).dlmenu();
    });
  }

    
});

   
   