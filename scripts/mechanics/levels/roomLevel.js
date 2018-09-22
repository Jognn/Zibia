
Zibia.roomLevel = function() {
  stateInfo.bootCreate('roomLevel');
}

Zibia.roomLevel.prototype = {
  init: function(){
    stateInfo.showState('roomLevel');
  },

  create: function(){
    this.game.state.start('cityLevel');
  }
};
