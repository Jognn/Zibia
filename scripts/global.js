const configuration = {
  width: screen.width,
  height: screen.height,
  renderer: Phaser.CANVAS,
  parent: 'gameDiv'
};

var game = new Phaser.Game(configuration);

let Zibia = {
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
