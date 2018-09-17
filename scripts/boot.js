
let bootState = function () {
  bootcreate(bootState.name);
}

bootState.prototype = {

  init: function () {
    showstate('bootState');
  },

  create: function() {
    this.game.scale.setupScale(game.world.width, game.world.height);
    this.game.state.start('room');
  }
};
