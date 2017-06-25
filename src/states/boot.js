import Transitions from '../transitions'

class Boot extends Phaser.State {

  constructor() {
    super();
  }

  preload() {
    this.load.image('preloader', 'assets/preloader.gif');
  }

  create() {
    this.game.input.maxPointers = 1;

    //setup device scaling
    if (this.game.device.desktop) {
      this.game.scale.pageAlignHorizontally = true;
    } else {
      this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.game.scale.minWidth =  480;
      this.game.scale.minHeight = 260;
      this.game.scale.maxWidth = 640;
      this.game.scale.maxHeight = 480;
      this.game.scale.forceOrientation(true);
      this.game.scale.pageAlignHorizontally = true;
      this.game.scale.setSize();
    }

    this.initGlobalVariables();

    this.game.state.start('preloader');
  }

  initGlobalVariables(){
    var transistions = new Transitions()
    transistions.initCustomTransitions()
    this.game.global = {
      title: 'a placeholder title for a talk',
      bonusSlideChancePercent: 20,
      total_slides: 10,
      transition_timeout: 25000,
      transition_list: transistions.getTransitions(),
      differentSoundPercentChance: 2,
      transition_sounds: [
        'apple-cut-03',
        'arrow-return-to-quiver-01',
        'arrr',
        'beltHandle1',
        'bicycle-horn-1',
        'bookFlip1',
        'bookFlip2',
        'bookFlip3',
        'book-page-02',
        'boots-leather-jump-01',
        'bottle-clay-uncork-01',
        'bottle-glass-cork-twist-01',
        'bottle-glass-uncork-01',
        'bottle-pills-shake-01',
        'bottle-pills-shake-02',
        'button1',
        'button2',
        'cloth2',
        'cloth3',
        'cloth4',
        'cloth-pouch-shake-01',
        'coin-spin-fall-01',
        'complete',
        'congratulations',
        'cover-paper-tear-01',
        'creak2',
        'dropLeather',
        'floor-creak-01',
        'good_choice',
        'metalClick',
        'metal-hammer-hit-02',
        'new_highscore',
        'off',
        'ohmy',
        'on',
        'phrase1-5',
        'phrase1-8',
        'phrase2-1',
        'phrase2-12',
        'phrase2-13',
        'phrase2-14',
        'phrase2-15',
        'phrase2-16',
        'phrase2-2',
        'phrase2-5',
        'phrase2-8',
        'phrase2-9',
        'ready',
        'tin-whistle-whoosh-01',
        'tin-whistle-whoosh-02',
        'tube-plastic-whoosh-01',
        'tube-plastic-whoosh-02',
        'vial-glass-close-01',
        'vial-glass-open-01',
        'vial-glass-uncork-01',
        'war_fire_in_the_hole',
        'water-drop-01',
        'water-drop-02',
        'water-drop-03',
        'water-pour-01',
        'wood-twigs-break-02',
        'wrong',
        'wyrmsun_german-voice_012',
        'wyrmsun_german-voice_013',
      ],
      themes: [
         'agriculture',
         'beard-care',
         'breakfast',
         'computer-literacy',
         'conspiracies',
         'corporate-strategies',
         'dental-hygiene',
         'dessert',
         'ducks',
         'extreme-fitness',
         'greek-mythology',
         'marine-biology',
         'millennials',
         'modern-city-life',
         'multi-level-marketing',
         'parenting-a-teen',
         'pets',
         'ponies',
         'pop-music',
         'product-reviews',
         'reconsidering-stereotypes',
         'romance',
         'treating-illnesses',
       ]
    };
  }

}

export default Boot;
