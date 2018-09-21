
let cityLevel = function() {
  bootCreate(cityLevel.name);
  console.log(self);
}

cityLevel.prototype = {
  player: {},
  init: function(){
    showState('cityLevel');
  },

  preload: function() {
    this.game.load.spritesheet('player', 'assets/aro.png', 32, 48);
    this.game.load.tilemap('city', 'assets/levels/city/pruszkow-city.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('city-tiles', 'assets/levels/city/roguelikecity_transparent.png');

  },

  create: function() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.stage.backgroundColor = 0x808080;
    let map = this.game.add.tilemap('city');
    map.addTilesetImage('roguelikeCity_transparent', 'city-tiles');
    map.createLayer(0);
    map.createLayer(1);
    this.game.camera.follow(this.player);

    this.player = this.game.add.sprite(100, 100, 'player');
    this.player.animations.add('left', [1, 2, 3, 4], 10, true);
    this.player.animations.add('right', [9, 8, 7, 6], 10, true);

    this.game.physics.arcade.enable(this.player);
    this.game.camera.follow(this.player);
    this.player.body.collideWorldBounds
  },

  update: function() {
    movement(this.player);
  }
};
