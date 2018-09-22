
Zibia.bootState = function () {
  stateInfo.bootCreate('bootState');
}

Zibia.bootState.prototype = {

  init: function () {
    stateInfo.showState('bootState');
  },

  create: function() {
    this.game.state.start('preloader');
  }
};
