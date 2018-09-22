
Zibia.roomLevel = function() {
  bootCreate('roomLevel');
}

Zibia.roomLevel.prototype = {
  init: function(){
    showState('roomLevel');
  },

  create: function(){
    this.game.state.start('cityLevel');
  }
};
