
class DialogService {

  constructor() {
    this.text = null;
    this.sprite = null;
  }

  showDialog(state, tekst, face) {
    console.log(`Width: ${screen.width}  Height: ${screen.height}`);
    this.text = state.add.text(Zibia.textBounds.x * (state.game.camera.scale.x), Zibia.textBounds.y * (state.game.camera.scale.y), tekst, Zibia.textStyle);
    this.sprite = state.add.sprite(Zibia.facePositon.x * (state.game.camera.scale.x) , Zibia.facePositon.y * (state.game.camera.scale.y), face);
    this.sprite.fixedToCamera = true;
    this.text.alpha = 0.94;
    this.text.fixedToCamera = true;
  }
}

let dialog = new DialogService();
