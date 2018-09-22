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
      tekst1: 'siema'
    }

};
