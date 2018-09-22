Zibia.preloader = function () {
  stateInfo.bootCreate('preloader');
}

Zibia.preloader.prototype = {

  init: function () {
    stateInfo.showState('preloader');
  },

  preload: function () {
    this.game.load.spritesheet('player', 'assets/aro.png', 32, 48);
  },

  create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    Zibia.player = this.make.sprite(16, 16, 'player');
    Zibia.player.anchor.set(0.5);
    Zibia.player.animations.add('left', [0, 1, 2, 3], 10, true);
    Zibia.player.animations.add('right', [5, 6, 7, 8], 10, true);
    this.physics.arcade.enable(Zibia.player);

    this.game.state.start('roomLevel');
  }
};
