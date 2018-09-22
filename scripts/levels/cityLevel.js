
Zibia.cityLevel = function() {
    bootCreate('cityLevel');
}

Zibia.cityLevel.prototype = {
  init: function(){
    showState('cityLevel');
  },

  preload: function() {
    this.load.tilemap('city', 'assets/levels/city/pruszkow-city.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('city-tiles', 'assets/levels/city/roguelikecity_transparent.png');
  },

  create: function() {
    this.stage.backgroundColor = 0x808080;
    let map = this.add.tilemap('city');
    map.addTilesetImage('roguelikeCity_transparent', 'city-tiles');
    map.createLayer(0);
    map.createLayer(1);

    this.game.camera.follow(Zibia.player);

    if(!Zibia.player.parent) {
      this.add.existing(Zibia.player);
    }

  },

update: function() {
    movement(Zibia.player);
}
};
