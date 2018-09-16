class gameStart {

  constructor() {
    this.game = new Phaser.this.game (
      799,
      599,
      Phaser.CANVAS,
      '',
      {
        preload: () => this.preload,
        create:  () => this.create,
        update:  () => this.update,
        render:  () => this.render
      });
    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  preload() {
    this.game.load.image('background', 'assets/sky.png');
    this.game.load.spritesheet('this.player', 'assets/dude.png', 32, 48);
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.stage.backgroundColor = 0x808080;

    this.player = this.game.add.sprite(0, 0, 'this.player');
    this.game.physics.arcade.enable(this.player);
    this.player.body.collideWorldBounds = true;
    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);

  }

  update() {
    if (this.cursors.left.isDown){
      this.player.body.velocity.x = -150;
    }
    else if (this.cursors.right.isDown) {
      this.player.body.velocity.x = 150;
    }
    else if (this.cursors.down.isDown) {
      this.player.body.velocity.y = -150;
    }
    else if (this.cursors.up.isDown) {
      this.player.body.velocity.y = 150;
    }
  }

  render() {
  }
}
