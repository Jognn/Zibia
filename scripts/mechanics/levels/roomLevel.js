
Zibia.roomLevel = function() {
  stateInfo.bootCreate('roomLevel');
}

Zibia.roomLevel.prototype = {
  init: function(){
    stateInfo.showState('roomLevel');
  },

  create: function(){
    // if(!Zibia.player.parent) {
    //   this.add.existing(Zibia.player);
    // }
    this.game.state.start('cityLevel');
  }
};
