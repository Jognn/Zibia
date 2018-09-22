var Zibia = {
    player: null

};


Zibia.cityLevel = function() {
    bootCreate('cityLevel');
}

Zibia.cityLevel.prototype = {
  init: function(){
    showState('cityLevel');
  },

  preload: function() {
    this.load.tilemap('city', 'assets/levels/city/pruszkow-city.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('city-tiles', 'assets/levels/city/roguelikecity_transparent.png');
  },

  create: function() {
    this.stage.backgroundColor = 0x808080;
    let map = this.add.tilemap('city');
    map.addTilesetImage('roguelikeCity_transparent', 'city-tiles');
    map.createLayer(0);
    map.createLayer(1);

    this.game.camera.follow(Zibia.player);

    if(!Zibia.player.parent) {
      this.add.existing(Zibia.player);
    }

  },

update: function() {
    movement(Zibia.player);
}
};

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


Zibia.bootState = function () {
  bootCreate('bootState');
}

Zibia.bootState.prototype = {

  init: function () {
    showState('bootState');
  },

  create: function() {
    this.game.state.start('preloader');
  }
};


function movement(player) {
  cursors = game.input.keyboard.createCursorKeys();

  player.body.velocity.x = 0;
  player.body.velocity.y = 0;
  if (cursors.left.isDown){
    player.body.velocity.x = -300;
  }
  else if (cursors.right.isDown) {
    player.body.velocity.x = 300;
  }
  else if (cursors.down.isDown) {
    player.body.velocity.y = 300;
  }
  else if (cursors.up.isDown) {
    player.body.velocity.y = -300;
  }
}

function bootCreate(source) {
  console.log('[BOOT] Creating ' + source);
}

function showState(source) {
  console.log('Launching ' + source);
}

const configuration = {
  width: screen.width,
  height: screen.height,
  renderer: Phaser.CANVAS,
  parent: 'gameDiv'
};

var game = new Phaser.Game(configuration);

game.state.add('boot', Zibia.bootState);
game.state.add('preloader', Zibia.preloader);
game.state.add('roomLevel', Zibia.roomLevel);
game.state.add('cityLevel', Zibia.cityLevel);

game.state.start('boot');
