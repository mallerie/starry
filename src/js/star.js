export var MAX_WIDTH = 1200;
export var MAX_HEIGHT = 800;

class Star {

  constructor() {
    var x = Math.round( Math.random() * MAX_WIDTH);
    var y = Math.round( Math.random() * MAX_HEIGHT);
    var w = Math.random() * 8;
    var h = w;
    this.size = {w, h};
    this.coordinates = {x, y};
  }

}


export default Star;
