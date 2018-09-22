
class StateInfo {

  constructor() {

  }

  bootCreate(source) {
    console.log('[BOOT] Creating ' + source);
  }

  showState(source) {
    console.log('Launching ' + source);
  }

}

let stateInfo = new StateInfo();
