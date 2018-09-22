
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
