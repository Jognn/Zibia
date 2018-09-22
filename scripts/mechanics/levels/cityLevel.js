
Zibia.cityLevel = function() {
    stateInfo.bootCreate('cityLevel');
}

Zibia.cityLevel.prototype = {
  init: function(){
    stateInfo.showState('cityLevel');
  },

  preload: function() {
    this.load.tilemap('city', 'assets/levels/city/pruszkow.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('arek-face', 'assets/faces/arekTwarz.png');
    this.load.image('city-tiles', 'assets/levels/city/roguelikecity_transparent.png');
  },

  create: function() {
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

  },

  update: function() {
      gms.movement(Zibia.player, this.cursors);
  },
};
