class Player{
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score = 0;
    }

    getCount(){
        database.ref('playerCount').on("value", (data) => {
            playerCount = data.val();
        });
    }

    updateCount(count){
        database.ref('/').update({
            "playerCount": count
        });
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score: this.score
        });
    }

    static getPlayerInfo(){
        database.ref('players').on("value", (data) => {
            allPlayers = data.val();
        });
    }


}
