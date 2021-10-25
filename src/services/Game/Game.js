import Board from "../Board";
import Player from "../Player";

export default class Game {
    constructor(
        name,
        password,
        owner
    ) {
        console.log(owner)
        this.name = name;
        this.password = password;
        this.owner = owner;
        this.players = {
            P1: {
                ... new Player(
                    owner.uid,
                    owner.name,
                    owner.deck,
                    owner.leader
                )
            },
            P2: {

            }
        }
        this.board = {...new Board(this.players)};
        this.isGameDone = false;
        this.playerTurn = 0;
        this.turnNumber = 0;
    }
}