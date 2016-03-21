// Javascript Entry Point

import $ from 'jquery';

import starFactory from './star_factory';
import ShootingStar from './shooting_star';
import TwinklingStar from './twinkling_star';

import Planet from './planets';

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



var earth = new Planet({
  // size: '150px',
  name: 'earth',
  coordinates: {
    x: '500px',
    y: '300px'
  }
});
earth.setSrc('http://vignette1.wikia.nocookie.net/sonicthehedhug/images/1/1e/Earth.png/revision/latest?cb=20140807101508&path-prefix=ru');

$('.sky').append(earth.image);

var saturn = new Planet({
  size: '300px',
  name: 'saturn',
  coordinates: {
    x: '700px',
    y: '400px'
  }
});
saturn.setSrc('http://icons.iconarchive.com/icons/zairaam/bumpy-planets/256/08-saturn-icon.png');

$('.sky').append(saturn.image);

setTimeout(() => {

  earth.explode();
  $('.earth').replaceWith(earth.image);

  setTimeout(() => {
    $('.earth').hide();
  }, 3000);

}, 2000);

setTimeout(() => {

  saturn.explode();
  $('.saturn').replaceWith(saturn.image);

  setTimeout(() => {
    $('.saturn').hide();
  }, 6000);

}, 5000);




