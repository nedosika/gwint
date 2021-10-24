export default class Player {
    constructor(
        uid,
        name = '',
        deck = [],
        leader = ''
    ) {
        this.uid = uid;
        this.name = name;
        this.deck = deck;
        this.leader = leader;
        this.hand = this.deck.slice(0, 10);
    }
}