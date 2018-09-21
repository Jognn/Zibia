
let bootState = function () {
  bootCreate(bootState.name);
}

bootState.prototype = {

  init: function () {
    showState('bootState');
  },

  create: function() {
    this.game.scale.setupScale(game.world.width, game.world.height);
    this.game.state.start('room');
  }
};


const configuration = {
  width: 4800,
  height: 3200,
  renderer: Phaser.CANVAS
};

this.game = new Phaser.Game(configuration);

game.state.add('boot', bootState);
game.state.add('room', roomLevel);
game.state.add('city', cityLevel);

game.state.start('boot');

function bootCreate(source) {
  console.log('[BOOT] Creating ' + source);
}

function showState(source) {
  console.log('Launching ' + source);
}


function movement(player) {
  cursors = game.input.keyboard.createCursorKeys();

  player.body.velocity.x = 0;
  player.body.velocity.y = 0;
  if (cursors.left.isDown){
    player.body.velocity.x = -150;
  }
  else if (cursors.right.isDown) {
    player.body.velocity.x = 150;
  }
  else if (cursors.down.isDown) {
    player.body.velocity.y = 150;
  }
  else if (cursors.up.isDown) {
    player.body.velocity.y = -150;
  }
}


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
