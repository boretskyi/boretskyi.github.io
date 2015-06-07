(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|android|ipad|playbook|silk|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);    

$(function(){

    // CANVAS
    function callCanvas (canvas) {

        // SETTINGS
        var screenpointSplit = 12000;
        var movingSpeed = 0.2;

        var viewportWidth = $(window).width();
        var viewportHeight = $(window).height();

        // Calculate Screen Dots
        var nbCalculated = Math.round(viewportHeight*viewportWidth/screenpointSplit)

        //CONFIG
        var _this = this,
            ctx = canvas.getContext('2d');

        _this.config = {
            star: {
                color: 'rgba(255, 255, 255, 1)'
            },

            line: {
                color: 'rgba(255, 255, 255, 1)',
                width: 0.1
            },

            position: {
                x: canvas.width * 0.5,
                y: canvas.height * 0.5
            },

            velocity: movingSpeed,
            length: nbCalculated,
            distance: 120,
            radius: 150,
            stars: [],
            fps: 20
        };

        function Star () {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;

            this.vx = (_this.config.velocity - (Math.random() * 0.3));
            this.vy = (_this.config.velocity - (Math.random() * 0.3));

            this.radius = Math.random();
        }

        Star.prototype = {
            create: function(){
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fill();
            },

            animate: function(){
                var i;
                for(i = 0; i < _this.config.length; i++){
                    var star = _this.config.stars[i];
                    if(star.y < 0 || star.y > canvas.height){
                        star.vx = star.vx;
                        star.vy = - star.vy;
                    }
                    else if(star.x < 0 || star.x > canvas.width){
                        star.vx = - star.vx;
                        star.vy = star.vy;
                    }
                    star.x += star.vx;
                    star.y += star.vy;
                }
            },

            line: function(){
                var length = _this.config.length,
                    iStar,
                    jStar,
                    i,
                    j;

                for(i = 0; i < length; i++){
                    for(j = 0; j < length; j++){
                        iStar = _this.config.stars[i];
                        jStar = _this.config.stars[j];

                        if(
                            (iStar.x - jStar.x) < _this.config.distance &&
                            (iStar.y - jStar.y) < _this.config.distance &&
                            (iStar.x - jStar.x) > - _this.config.distance &&
                            (iStar.y - jStar.y) > - _this.config.distance
                        ) {
                            if(
                                (iStar.x - _this.config.position.x) < _this.config.radius &&
                                (iStar.y - _this.config.position.y) < _this.config.radius &&
                                (iStar.x - _this.config.position.x) > - _this.config.radius &&
                                (iStar.y - _this.config.position.y) > - _this.config.radius
                            ) {
                                ctx.beginPath();
                                ctx.moveTo(iStar.x, iStar.y);
                                ctx.lineTo(jStar.x, jStar.y);
                                ctx.stroke();
                                ctx.closePath();
                            }
                        }
                    }
                }
            }
        };

        _this.createStars = function () {
            var length = _this.config.length,
                star,
                i;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for(i = 0; i < length; i++){
                _this.config.stars.push(new Star());
                star = _this.config.stars[i];

                star.create();
            }

            star.line();
            star.animate();
        };

        _this.setCanvas = function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        _this.setContext = function () {
            ctx.fillStyle = _this.config.star.color;
            ctx.strokeStyle = _this.config.line.color;
            ctx.lineWidth = _this.config.line.width;
        };

        _this.loop = function (callback) {
            reqAnimFrame(function () {
                _this.loop(function () {
                    callback();
                });
            });

            _this.now = Date.now();
            delta = _this.now - _this.then;

            if (delta > _this.interval) {
                _this.then = _this.now - (delta % _this.interval);
                callback();
            }
        };

        _this.bind = function () {
            $(window).on('mousemove', function(e){
                _this.config.position.x = e.pageX;
                _this.config.position.y = e.pageY;
            });
        };

        _this.init = function () {
            _this.setCanvas();
            _this.setContext();

            _this.now;
            _this.then = Date.now();
            _this.interval = 1000/_this.config.fps;
            _this.delta;

            _this.loop(function () {
                _this.createStars();
            });

            _this.bind();
        };

      return _this;
    }

    //requestAnimationFrame
    var reqAnimFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };

    var $canvas = $('canvas');

    if ($canvas) {
        callCanvas($canvas[0]).init();

        //Resize Canvas
        var waitForFinalEvent = (function () {
          var timers = {};
          return function (callback, ms, uniqueId) {
            if (!uniqueId) {
              uniqueId = "Don't call this twice without a uniqueId";
            }
            if (timers[uniqueId]) {
              clearTimeout (timers[uniqueId]);
            }
            timers[uniqueId] = setTimeout(callback, ms);
          };
        })();

        $(window).resize(function () {
            waitForFinalEvent(function(){
                callCanvas($canvas[0]).init();

            }, 100, "some unique string");
        });
    }
});