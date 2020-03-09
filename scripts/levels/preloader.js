
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
