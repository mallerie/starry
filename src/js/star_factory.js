
import Star from './star';
import ShootingStar from './shooting_star';
import TwinklingStar from './twinkling_star';

export default function() {
  if (Math.random() > 0.95) {
    return new ShootingStar();
  } else if (Math.random() > .7) {
    return new TwinklingStar(['#ff0000', '#0000ff']);
  } else {
    return new Star();
  }
}
