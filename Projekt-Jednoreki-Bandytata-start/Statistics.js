class Statistics {
    constructor(){
        this.gameResults = [];
    }

    addGameToStatistics(win, bid) {
        let gameResult = {
            win: win,
            bid: bid
        }
        this.gameResults.push(gameResult)
    }

    showGameStatistics() {
        let games = this.gameResults.lenght;
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = this.gameResults.filter(result => !result.win).length;
        return [games, wins, losses]
    }
}

// const stats = new Statistics()