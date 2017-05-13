class Menu extends Phaser.State {

  constructor() {
    super();
  }

  create() {


    var grammar = tracery.createGrammar({
      'animal': ['panda','fox','capybara','iguana'],
      'emotion': ['sad','happy','angry','jealous'],
      'origin':['I am #emotion.a# #animal#.'],
    });

    grammar.addModifiers(tracery.baseEngModifiers);

    const output = grammar.flatten('#origin#');
    console.log(output);


    var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, output, {
      font: '42px Arial',
      fill: '#ffffff',
      align: 'center'
    });
    text.anchor.set(0.5);

    this.input.onDown.add(this.startGame, this);
  }

  update() {}

  startGame() {
    this.game.state.start('game');
  }

}

export default Menu;
