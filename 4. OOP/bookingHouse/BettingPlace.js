class BettingPlace {
    constructor(address) {
        this.address = address;
        this.listOfPlayers = [];
        this.numberOfPlayers = 0;
        this.betSum = 0;
    }
    addPlayers(player) {
        this.listOfPlayers.push(player);
        this.numberOfPlayers++;
        this.betSum += player.betAmount;
    }
    getData() {
        let playerData = "";
        this.listOfPlayers.forEach(element => { playerData += element.getData() + "\n" })
        return playerData;
    }
}
module.exports.BettingPlace = BettingPlace;