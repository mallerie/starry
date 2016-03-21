
var DEFAULT_SIZE = '50px';
var DEFAULT_COORDS = {
  x: '100px',
  y: '100px'
}
var DEFAULT_NAME = 'planet';

export default class Planet {

  constructor(options = {}) {
    this.options = Object.assign({
      size: DEFAULT_SIZE,
      coordinates: DEFAULT_COORDS,
      name: DEFAULT_NAME
    }, options);
  }

  setSrc(planetPicture) {
    var {size, coordinates, name} = this.options;
    var {x, y} = coordinates;
    this.image = `
      <img
        class="${name}"
        style="position: absolute; top: ${y}; left: ${x};"
        width="${size}"
        src="${planetPicture}"
      />
    `;
  }

  explode() {
    var {size, coordinates, name} = this.options;
    var {x, y} = coordinates;
    this.image = `
      <img
        class="${name}"
        style="position: absolute; top: ${y}; left: ${x};"
        width="${size}"
        src="http://rs651.pbsrc.com/albums/uu236/416o/explosion.gif~c200"
      />
    `;
  }

}
