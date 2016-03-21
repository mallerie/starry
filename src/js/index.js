// Javascript Entry Point

import $ from 'jquery';

import starFactory from './star_factory';
import ShootingStar from './shooting_star';
import TwinklingStar from './twinkling_star';

window.star = starFactory();

var shootingStars = new Map();
var twinklingStars = new Map();

for( var i = 0; i <= 500; i++) {
  var star = starFactory();
  var $star = $('<div/>');
  var {x, y} = star.coordinates;
  var {w, h} = star.size;
  $star.addClass('star');
  $star.css({
    top: `${y}px`, 
    left: `${x}px`,
    width: `${w}px`,
    height: `${h}px`
  });
  $('.sky').append($star);

  if (star instanceof ShootingStar) {
    shootingStars.set(star, $star);
  }

  if (star instanceof TwinklingStar) {
    twinklingStars.set(star, $star);
  }
}

setInterval(() => {
  for (var [star, $star] of shootingStars) {
    star.travel();
    var {x, y} = star.coordinates;
    $star.css({top: `${y}px`, left: `${x}px`});
  }

  for (var [star, $star] of twinklingStars) {
    star.twinkle();
    $star.css({background: star.color});
  }
}, 50);
