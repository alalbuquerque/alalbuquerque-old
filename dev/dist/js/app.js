(function (GLOBAL) {
    //////////////////////////////////////////
    //     MEGAMAZON's Angular Module    //
    //////////////////////////////////////////
    'use strict';
    GLOBAL.MEGAMAZON = GLOBAL.angular.module('MegaMazon', ['ngAnimate', 'ngMask']);
  }(this));
(function (MEGAMAZON, $) {
    //////////////////////////
    //   HOME CONTROLLER    //
    //////////////////////////
    'use strict';
    MEGAMAZON.controller('HomeController', ['$interval', 'appConfig', function ($interval, appConfig) {
        var self = this;
        self.fixedBar = {
            opened: false,
            openToggle: function () {
                if (this.opened) {
                    this.opened = false;
                } else {
                    this.opened = true;
                }
            }
        };
        ///////////
        // MENU  //
        ///////////
        self.menu = {
            opened: false,
            openToggle: function () {
                if (this.opened) {
                    this.opened = false;
                } else {
                    this.opened = true;
                }
            }
        };

        $('#scene').parallax();
        ////////////////
        // PROGRAMAS  //
        ////////////////
        self.programs = {
            index: 0,
            changeProgram: function (index) {
                $interval.cancel(self.programs.autoPlay);
                this.index = index;
            },
            autoPlay: $interval(function () {
                if (self.programs.index < (appConfig.programsCount - 1)) {
                    self.programs.index += 1;
                } else {
                    self.programs.index = 0;
                }
            }, 5000)
        };
        ///////////////////
        //SPA-STRUCTURE  //
        ///////////////////
        self.spaSection = {
            index: 'spa',
            change: function (index) {
                this.index = index;
            }
        };

        //NAVIGATION
        $('a.scrollTo').click(function (e) {
            e.preventDefault();
            //var w_width = $window.innerWidth;
            //var marginTop = 65;
            //if (w_width >= 768) {
            //    marginTop = 66;
            //}
            //if (w_width >= 992) {
            //    marginTop = 66;
            //}
            //if (w_width >= 1200) {
            //    marginTop = 66;
            //}
            var section = $($(this).data('section'));
            var topo = section.offset().top;
            if (section.data('offset') !== undefined) {
                topo = topo - section.data('offset');
            }
            $('html, body').stop().animate({
                scrollTop: topo
            }, 800);
        });
    }]);
}(this.MEGAMAZON, this.jQuery));