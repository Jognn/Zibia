
class DialogService {

  constructor() {
    this.text = null;
    this.sprite = null;
  }

  showDialog(state, tekst, face) {
    console.log(`Width: ${screen.width}  Height: ${screen.height}`);
    this.text = state.add.text(Zibia.textBounds.x, Zibia.textBounds.y, Zibia.dialogs.cityLevel.tekst1, Zibia.textStyle);
    // this.sprite = this.add.sprite(Zibia.facePositon.x, Zibia.facePositon.y, key);
    this.text.alpha = 0.94;
    this.text.fixedToCamera = true;
  }
}

let dialog = new DialogService();
