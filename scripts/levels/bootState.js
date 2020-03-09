class BootState {
    constructor() {
        stateInfo.bootCreate('bootState');
    }

    init() {
        stateInfo.showState('bootState');
    }

    create() {
        this.game.state.start('preloader');
    }
}
Zibia.bootState = new BootState();
