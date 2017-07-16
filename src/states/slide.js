const GradientBG = require('../prefabs/gradientBG')
const SlideNumber = require('../prefabs/slideNumber')
const SlideTimer = require('../prefabs/slideTimer')
const TextButton = require('../prefabs/textButton')

const transition = require('../transition')

class Slide extends Phaser.State {

  init(slides) {
    this.slides = slides;
    this.slideNumber = JSON.parse(localStorage.getItem(this.game.global.key_totalSlides)) - (this.slides.length - 1);
    if (this.game.global.addBonusSlide){
      this.slideNumber = this.slideNumber + 2;
    }
    new GradientBG(this.game);
  }

  create() {
    // Meta slide stuff
    const slideNumber = new SlideNumber(this.game, this.slideNumber);

    if (JSON.parse(localStorage.getItem(this.game.global.key_shouldPlaySounds))) {
        const timer = this.game.time.create(true);
        timer.add(JSON.parse(localStorage.getItem(this.game.global.key_timeOnSlide)) * Phaser.Timer.SECOND - 3000, () => {
          this.game.sound.play('boop');
        });
        timer.add(JSON.parse(localStorage.getItem(this.game.global.key_timeOnSlide)) * Phaser.Timer.SECOND - 2000, () => {
          this.game.sound.play('boop');
        });
        timer.add(JSON.parse(localStorage.getItem(this.game.global.key_timeOnSlide)) * Phaser.Timer.SECOND - 1000, () => {
          this.game.sound.play('boop');
        });
        timer.add(JSON.parse(localStorage.getItem(this.game.global.key_timeOnSlide)) * Phaser.Timer.SECOND, () => {
          if (Math.random() < this.game.global.differentSoundPercentChance / 100) {
            console.log('different');
            this.game.sound.play(this.game.rnd.pick(this.game.global.transition_sounds));
          } else {
            this.game.sound.play('beep');
          }
        });
        timer.start();
    }

    const event = this.game.time.events.add(JSON.parse(localStorage.getItem(this.game.global.key_timeOnSlide)) * Phaser.Timer.SECOND, this.progress, this);
    const displayTimer = new SlideTimer(this.game, event);

    this.tweenedUI = [];
    const backButton = new TextButton(this.game, 0, 'Back to menu', 'menu', this.tweenedUI);

    // Actual content
    this.content = this.slides[0];
    this.game.add.existing(this.content);

    transition.in(this.game, [this.content]);

    this.tweenedUI.push(this.content);
    this.tweenedUI.push(slideNumber);
    this.tweenedUI.push(displayTimer);
    this.tweenedUI.push(backButton);
  }

  update() {}

  progress() {
    const remainingSlides = this.slides.splice(1, this.slides.length - 1);
    if(remainingSlides.length){
        transition.out(this.game, [this.content], 'slide', remainingSlides);
    } else {
        transition.out(this.game, this.tweenedUI, 'questions');
    }
  }

}

module.exports = Slide;
