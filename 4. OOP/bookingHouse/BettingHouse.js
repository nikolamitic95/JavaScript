class BettingHouse {
    constructor(competition) {
        this.competition = competition;
        this.listOfBettingPlace = [];
        this.numberOfPlayers = 0;
    }


    addBettingPlace(place) {
        this.listOfBettingPlace.push(place);
        this.numberOfPlayers += place.numberOfPlayers;
    }
    getData() {
        let bettingHouseData = `${this.competition}, ${this.listOfBettingPlace.length} betting places, ${this.numberOfPlayers} bets`;
        let addressAndPlayersData = "";
        this.listOfBettingPlace.forEach(function (player) {
            let addressData = `\n${player.address.getFinalData()}, sum of all bets: ${player.betSum}eur`;
            let playersData = `\n${player.getData()}`;

            addressAndPlayersData += (addressData + playersData);
        })
        return `${bettingHouseData}\t${addressAndPlayersData}`;
    }
}
module.exports.BettingHouse = BettingHouse;