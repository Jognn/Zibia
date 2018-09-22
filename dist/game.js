const configuration = {
  width: screen.width,
  height: screen.height,
  renderer: Phaser.CANVAS,
  parent: 'gameDiv'
};

let game = new Phaser.Game(configuration);

let Zibia = {
    player: null,
    dialogs: {
      roomLevel: {

      },
      cityLevel: {
        tekst1 : 'Siema Zychu co tam u ciebie slychac? Ostatnio sie nie odzywales. Malo sie widzielismy i ogolnie co tam u ciebie mordeczko moja, kochana buzio, ktora cos tam piri miri tiri riri siri miri ooooooooooo (TEN NA ZDJECIU OBOK TO JESTEM JA) MOGE TU NAPISAC CO CHCE'
      }
    },
    textStyle: {
      font: 'bold 16px Arial',
      fontStyle: 'italic',
      backgroundColor: 'rgb(206, 202, 181)',
      fill: 'black',
      wordWrap: true,
      wordWrapWidth: screen.width * 0.5,

    },
    textBounds: {
      x: screen.width * 0.1,
      y: screen.height * 0.81,
      width: screen.width * 0.5,
      height: screen.height * 0.2
    },
    facePositon: {
      x: screen.width * 0.0035,
      y: screen.height * 0.74
    }
};


class DialogService {

  constructor() {
    this.text = null;
    this.sprite = null;
  }

  showDialog(state, tekst, face) {
    console.log(`Width: ${screen.width}  Height: ${screen.height}`);
    this.text = state.add.text(Zibia.textBounds.x, Zibia.textBounds.y, Zibia.dialogs.cityLevel.tekst1, Zibia.textStyle);
    // this.sprite = this.add.sprite(Zibia.facePositon.x, Zibia.facePositon.y, key);
    this.text.alpha = 0.94;
    this.text.fixedToCamera = true;
  }
}

let dialog = new DialogService();


class GameMechanics {

  constructor() {

  }

  movement(player, cursors) {

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

}

let gms = new GameMechanics();


class StateInfo {

  constructor() {

  }

  bootCreate(source) {
    console.log('[BOOT] Creating ' + source);
  }

  showState(source) {
    console.log('Launching ' + source);
  }

}

let stateInfo = new StateInfo();


Zibia.bootState = function () {
  stateInfo.bootCreate('bootState');
}

Zibia.bootState.prototype = {

  init: function () {
    stateInfo.showState('bootState');
  },

  create: function() {
    this.game.state.start('preloader');
  }
};


Zibia.cityLevel = function() {
    stateInfo.bootCreate('cityLevel');
}

Zibia.cityLevel.prototype = {
  init: function(){
    stateInfo.showState('cityLevel');
    this.cursors = game.input.keyboard.createCursorKeys();
  },

  preload: function() {
    this.load.tilemap('city', 'assets/levels/city/pruszkow.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('arek-face', 'assets/faces/arekTwarz.png');
    this.load.image('city-tiles', 'assets/levels/city/roguelikecity_transparent.png');
  },

  create: function() {
    let map = this.add.tilemap('city');
    map.addTilesetImage('roguelikeCity_transparent', 'city-tiles');
    for (let i = 0; i < 3; i++) {
      map.createLayer(i);
    }

    if(!Zibia.player.parent) {
      this.add.existing(Zibia.player);
    }
    this.game.camera.follow(Zibia.player);

    dialog.showDialog(this, Zibia.dialogs.tekst1, 'arek-face');

  },

  update: function() {
      gms.movement(Zibia.player, this.cursors);
  },
};

Zibia.preloader = function () {
  stateInfo.bootCreate('preloader');
}

Zibia.preloader.prototype = {

  init: function () {
    stateInfo.showState('preloader');
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
  stateInfo.bootCreate('roomLevel');
}

Zibia.roomLevel.prototype = {
  init: function(){
    stateInfo.showState('roomLevel');
  },

  create: function(){
    this.game.state.start('cityLevel');
  }
};


game.state.add('boot', Zibia.bootState);
game.state.add('preloader', Zibia.preloader);
game.state.add('roomLevel', Zibia.roomLevel);
game.state.add('cityLevel', Zibia.cityLevel);

game.state.start('boot');
