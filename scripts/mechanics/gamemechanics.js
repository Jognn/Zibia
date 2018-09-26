
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
      Zibia.player.frame = 3;
    }
    else {
      Zibia.player.animations.stop();
      // Zibia.player.frame = 4;
    }
  }

}

let gms = new GameMechanics();
