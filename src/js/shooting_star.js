import Star, {MAX_WIDTH, MAX_HEIGHT} from './star';

class ShootingStar extends Star {
  constructor() {
    super();
    this.direction = Math.random() * (Math.PI * 2);
    this.speed = Math.random() * 10;
  }

  travel() {
    // this === star
    // this !== travel
    var {x, y} = this.coordinates;
    x += Math.sin(this.direction) * this.speed;
    y -= Math.cos(this.direction) * this.speed;

    if (x > MAX_WIDTH) {
      x -= MAX_WIDTH;
    }
    if (x < 0) {
      x += MAX_WIDTH;
    }

    if (y > MAX_HEIGHT) {
      y -= MAX_HEIGHT;
    }
    if (y < 0) {
      y += MAX_HEIGHT;
    }


    this.coordinates = {x, y};
  }
}

export default ShootingStar;
