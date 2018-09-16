function appInit() {
  let core = core || {}
  core.game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gameDiv');

  game.state.add("roomLevel", core.roomLevel);
  game.state.start("roomLevel");
}
/*
function preload()
{
    game.load.image('player', 'assets/star.png');
}

var player;

var upKey;
var downKey;
var leftKey;
var rightKey;

function create()
{
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.stage.backgroundColor = '#736357';

  player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
  game.physics.arcade.enable(player);

  setUpKeys();

  game.camera.follow(player);
}

function update()
{
  player.body.velocity.x = 0;
  player.body.velocity.y = 0;
  if (upKey.isDown)
  {
      player.body.velocity.y = -150;
  }
  else if (downKey.isDown)
  {
    player.body.velocity.y = 150;
  }

  if (leftKey.isDown)
  {
    player.body.velocity.x = -150;
  }
  else if (rightKey.isDown)
  {
    player.body.velocity.x = 150;
  }
}

function setUpKeys()
{
  upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
  downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
  leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
  rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
}

*/
