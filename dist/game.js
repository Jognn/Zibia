const configuration = {
  width: screen.width,
  height: screen.height,
  renderer: Phaser.CANVAS,
  parent: 'gameDiv'
};

var game = new Phaser.Game(configuration);

var Zibia = {
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
    this.text = state.add.text(Zibia.textBounds.x * (state.game.camera.scale.x), Zibia.textBounds.y * (state.game.camera.scale.y), tekst, Zibia.textStyle);
    this.sprite = state.add.sprite(Zibia.facePositon.x * (state.game.camera.scale.x) , Zibia.facePositon.y * (state.game.camera.scale.y), face);
    this.sprite.fixedToCamera = true;
    this.text.alpha = 0.94;
    this.text.fixedToCamera = true;
  }
}

let dialog = new DialogService();


class GameMechanics {

  constructor() {

  }

  movement() {
    let cursors = game.input.keyboard.createCursorKeys();

    Zibia.player.body.velocity.x = 0;
    Zibia.player.body.velocity.y = 0;

    if (cursors.left.isDown){
      Zibia.player.body.velocity.x = -300;
      // Zibia.player.animations.play('left');
    }
    else if (cursors.right.isDown) {
      Zibia.player.body.velocity.x = 300;
      // Zibia.player.animations.play('right');
    }
    else if (cursors.down.isDown) {
      Zibia.player.body.velocity.y = 300;
    }
    else if (cursors.up.isDown) {
      Zibia.player.body.velocity.y = -300;
    }
    else {
      // Zibia.player.animations.stop();
      // Zibia.player.frame = 4;
    }
  }

}

let gms = new GameMechanics();

class Inventory {
    constructor(){
        this.items = new Map();
        this.slots = 0;
        const maxSlots = 10;
    }

    addItem(name, item) {
        if(!hasItem(name)) {
            this.slots++;
            this.items.set(name, item);
        }
        else {
            console.log("An item with given name already exists in player's inventory!");
        }
    }

    removeItem(name) {
        if(hasItem(name)) {
            this.items.delete(name);
            this.slots--;
        }
        else {
            console.log("An item with given name does not exist in player's inventory!");
        }
    }

    useItem(name) {

    }

    hasItem(name) {
        return (this.items.has(name)) ? true : false;
    }

}

class Player {
    constructor() {
        this.player = Zibia.player
        this.inventory = new Inventory();
    }





}


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

class BootState {
    constructor() {
        stateInfo.bootCreate('bootState');
    }

    init() {
        stateInfo.showState('bootState');
    }

    create() {
        this.game.state.start('preloader');
    }
}
Zibia.bootState = new BootState();


class CityLevel {
    constructor() {
        stateInfo.bootCreate('cityLevel');
    }

    init() {
        stateInfo.showState('cityLevel');
    }

    preload() {
        this.load.tilemap('city', 'assets/levels/city/pruszkow.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('arek-face', 'assets/faces/arekTwarz.png');
        this.load.image('city-tiles', 'assets/levels/city/roguelikecity_transparent.png');
    }

    create() {
        game.world.setBounds(0, 0, 4800, 3200);
        Zibia.player.frame = 4;
        let map = this.add.tilemap('city');
        map.addTilesetImage('roguelikeCity_transparent', 'city-tiles');
        for (let i = 0; i < 3; i++) {
          map.createLayer(i);
        }

        if(!Zibia.player.parent) {
          this.add.existing(Zibia.player);
        }
        this.game.camera.follow(Zibia.player);

        dialog.showDialog(this, Zibia.dialogs.cityLevel.tekst1, 'arek-face');
    }

    update() {
        gms.movement(Zibia.player);
    }

    render() {
        this.game.debug.text(game.time.fps, 2, 14, "#00ff00");
    }
}

Zibia.cityLevel = new CityLevel();


class Preloader {
    constructor() {
        stateInfo.bootCreate('preloader');
    }

    init() {
        stateInfo.showState('preloader');
    }

    preload() {
        this.game.load.spritesheet('player', 'assets/aro.png', 16, 35, 1, 7, 7);
    }

    create() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.time.advancedTiming = true;

        // this.game.camera.scale.x = 1.2;
        // this.game.camera.scale.y = 1.2;

        Zibia.player = this.make.sprite(100, 100, 'player');
        Zibia.player.frame = 1;

        Zibia.player.anchor.set(0.5);
        // Zibia.player.animations.add('left', [4, 3, 2, 1], 10, true);
        // Zibia.player.animations.add('right', [6, 7, 8, 9], 10, true);
        this.physics.arcade.enable(Zibia.player);

        this.game.state.start('roomLevel');
    }
}

Zibia.preloader = new Preloader();


class RoomLevel {
    constructor() {
        stateInfo.bootCreate('roomLevel');
    }

    init() {
        stateInfo.showState('roomLevel');
    }

    create() {
        // if(!Zibia.player.parent) {
        //   this.add.existing(Zibia.player);
        // }
        this.game.state.start('cityLevel');
    }
}

Zibia.roomLevel = new RoomLevel();


game.state.add('boot', Zibia.bootState);
game.state.add('preloader', Zibia.preloader);
game.state.add('roomLevel', Zibia.roomLevel);
game.state.add('cityLevel', Zibia.cityLevel);

game.state.start('boot');
