
class GameMechanics {

  constructor() {

  }

  movement(player) {
    let cursors = game.input.keyboard.createCursorKeys();

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

  showDialog(state, tekst) {
    state.add.text(100, 200, tekst);
  }
}

let gms = new GameMechanics();
