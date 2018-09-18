
let bootState = function () {
  bootCreate(bootState.name);
}

bootState.prototype = {

  init: function () {
    showState('bootState');
  },

  create: function() {
    this.game.scale.setupScale(game.world.width, game.world.height);
    this.game.state.start('room');
  }
};
