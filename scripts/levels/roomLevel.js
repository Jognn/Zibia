
let roomLevel = function() {
  bootCreate(roomLevel.name);
}

roomLevel.prototype = {
  init: function(){
    showState('roomLevel');
  },

  create: function(){
    this.player = this.game.add.sprite(0, 0, 'player');
    this.game.physics.arcade.enable(this.player);
    this.game.camera.follow(this.player);
    this.player.body.collideWorldBounds
    this.game.state.start('city');
  }
};
