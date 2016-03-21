import Star from './star';

var colors = [
  '#CB6FEE',
  '#959C8C',
  '#B9AEDA',
  '#9C7759'
]

export default class TwinklingStar extends Star {

  twinkle() {
    var color = colors[ Math.floor(Math.random() * 5) ];
    this.color = color;
  }

}
