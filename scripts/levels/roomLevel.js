
let roomLevel = function() {
  bootcreate(roomLevel.name);
}

roomLevel.prototype = {
  player: {},
  init: function(){
    showstate('roomLevel');
  },

  preload: function() {
    this.game.load.spritesheet('player', 'assets/dude.png', 32, 48);
  },

  create: function() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.stage.backgroundColor = 0x808080;

    this.player = this.game.add.sprite(0, 0, 'player');
    this.game.physics.arcade.enable(this.player);
    this.player.body.collideWorldBounds
  },

  update: function() {

  }
};
