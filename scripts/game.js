
const configuration = {
  width: 4800,
  height: 3200,
  renderer: Phaser.CANVAS
};

this.game = new Phaser.Game(configuration);

game.state.add('boot', bootState);
game.state.add('room', roomLevel);
game.state.add('city', cityLevel);

game.state.start('boot');

function bootcreate(source) {
  console.log('[BOOT] Creating ' + source);
}

function showstate(source) {
  console.log('Launching ' + source);
}
