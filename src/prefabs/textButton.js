const styles = require('../styles')
const TextButtonBorder = require('./textButtonBorder')

//Documentation for Phaser's (2.6.2) text:: phaser.io/docs/2.6.2/Phaser.Text.html
class TextButton extends Phaser.Text {

  //initialization code in the constructor
  constructor(game, x, y, text, callback) {
    super(game, x, y, text, styles.fonts.medium(game));
    this.anchor.set(0, 1);
    this.originalX = x;

    game.add.existing(this);
    new TextButtonBorder(game, this, callback);
  }

  //Code ran on each frame of game
  update() {

  }

}

module.exports = TextButton;
