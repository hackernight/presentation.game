class Transition {
    constructor(){
        this.easingAlgorithms = [];
        for (const algorithm in Phaser.Easing) {
            this.easingAlgorithms.push(algorithm);
        }
        this.inout = ['In', 'Out', 'InOut'];
    }

    out(game, stuffToMove, callback) {
        this.tweenAllToDestinationState({x: 0, y: 0}, game, stuffToMove, callback)
    }

    in(game, stuffToMove) {
        for (const ele of stuffToMove) {
            ele['scale'].set(0, 0);
        }
        this.tweenAllToDestinationState({x: 1, y: 1}, game, stuffToMove)
    }

    tweenAllToDestinationState (state, game, stuffToMove, callback) {
        const totalSignals = stuffToMove.length;
        let finishedSignals = 0;

        const easing = game.rnd.pick(this.easingAlgorithms);
        const inout = game.rnd.pick(this.inout);

        for (const piece of stuffToMove) {
            const tween = game.add.tween(piece['scale']).to(
                state,
                250 + Math.random() * 500,
                Phaser.Easing[easing][inout],
                true
            );
            if (callback) {
                tween.onComplete.add(() => {
                    if (totalSignals === ++finishedSignals) {
                        callback();
                    }
                })
            }
        }
    }
}

module.exports = new Transition();
