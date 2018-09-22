
Zibia.bootState = function () {
  bootCreate('bootState');
}

Zibia.bootState.prototype = {

  init: function () {
    showState('bootState');
  },

  create: function() {
    this.game.state.start('preloader');
  }
};
