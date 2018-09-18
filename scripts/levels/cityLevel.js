
let cityLevel = function() {
  bootCreate(cityLevel.name);
}

cityLevel.prototype = {
  player: {},
  init: function(){
    showState('cityLevel');
  },

  preload: function() {
    this.game.load.spritesheet('player', 'assets/random/dude.png', 32, 48);
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

    this.player = this.game.add.sprite(0, 0, 'player');
    this.game.physics.arcade.enable(this.player);
    this.game.camera.follow(this.player);
    this.player.body.collideWorldBounds
  },

  update: function() {
    cursors = game.input.keyboard.createCursorKeys();

    this.player.body.velocity.x = 0;
    this.player.body.velocity.y = 0;
    if (cursors.left.isDown){
      this.player.body.velocity.x = -150;
    }
    else if (cursors.right.isDown) {
      this.player.body.velocity.x = 150;
    }
    else if (cursors.down.isDown) {
      this.player.body.velocity.y = 150;
    }
    else if (cursors.up.isDown) {
      this.player.body.velocity.y = -150;
    }
  }
};
