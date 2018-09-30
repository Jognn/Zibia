
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
