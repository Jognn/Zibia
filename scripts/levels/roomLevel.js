
let roomLevel = function() {
  bootCreate(roomLevel.name);
}

roomLevel.prototype = {
  init: function(){
    showState('roomLevel');
  },

  create: function(){
    this.game.state.start('city');
  }
};
