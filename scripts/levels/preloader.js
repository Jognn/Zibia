Zibia.preloader = function () {
  bootCreate('preloader');
}

Zibia.preloader.prototype = {

  init: function () {
    showState('preloader');
  },

  preload: function () {
    this.game.load.image('player', 'assets/random/dude.png');
  },

  create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.world.setBounds(0, 0, 4800, 3200);

    Zibia.player = this.make.sprite(16, 16, 'player', 6);
    Zibia.player.anchor.set(0.5);
    this.physics.arcade.enable(Zibia.player);

    this.game.state.start('roomLevel');
  }
};
