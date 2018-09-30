
class RoomLevel {
    constructor() {
        stateInfo.bootCreate('roomLevel');
    }

    init() {
        stateInfo.showState('roomLevel');
    }

    create() {
        // if(!Zibia.player.parent) {
        //   this.add.existing(Zibia.player);
        // }
        this.game.state.start('cityLevel');
    }
}

Zibia.roomLevel = new RoomLevel();
