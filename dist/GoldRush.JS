
class GoldRush {
    constructor() {
        this.matrix = this.generateMatrix(9, 9)
        this.player1 = {
            score: 0
        }
        this.player2 = {
            score: 0
        }
    }
    get() {
        return this.matrix
    }
    generateMatrix(numRows, numColumns) {
        let newmatrix = []
        for (let i = 0; i < numRows; i++) {
            newmatrix[i] = []
            for (let j = 0; j < numColumns; j++) {
                newmatrix[i].push('block')
            }
        }
        for (let c = 0; c < 70; c++) {
            let rowCoin = Math.floor(Math.random() * 8);
            let culCoin = Math.floor(Math.random() * 8);
            newmatrix[rowCoin][culCoin] = 'coin'
        }
        for (let w = 0; w < 20; w++) {

            let rowWall = Math.floor(Math.random() * 7);
            let culWall = Math.floor(Math.random() * 7);
            if (newmatrix[rowWall + 1][culWall] != 'wall'
                & newmatrix[rowWall][culWall + 1] != 'wall'
                & newmatrix[rowWall][culWall - 1] != 'wall'
                & newmatrix[rowWall][culWall]!= 'wall') {
                newmatrix[rowWall][culWall] = 'wall'
            }
        }
        newmatrix[0][0] = 'player1'
        newmatrix[numRows - 1][numColumns - 1] = 'player2'
        return newmatrix
    }
    print() {
        let l
        for (let i = 0; i < 9; i++) {
            l = ""
            for (let j = 0; j < 9; j++) {
                l += (this.matrix[i][j] + ' \t ')
            }
            console.log(l)
        }
    }
    movePlayer(player, action) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (this.matrix[i][j] === player) {
                    if (action === 'down') {
                        if (this.matrix[i + 1][j] === 'player2' ||
                            this.matrix[i + 1][j] === 'player1' ||
                            this.matrix[i + 1][j] === undefined ||
                            this.matrix[i + 1][j] === 'wall') {
                            return 'err'
                        }
                        this.matrix[i][j] = 'block'
                        if (this.matrix[i + 1][j] === 'coin') {
                            if (player === 'player1') {
                                this.player1.score += 10
                            } else {
                                this.player2.score += 10
                            }
                        }
                        this.matrix[i + 1][j] = player
                        return
                    }
                    if (action === 'left') {
                        if (this.matrix[i][j - 1] === 'player2'
                            || this.matrix[i][j - 1] === 'player1'
                            || this.matrix[i][j - 1] === undefined
                            || this.matrix[i][j - 1] === 'wall') {
                            return 'err'
                        }
                        this.matrix[i][j] = 'block'
                        if (this.matrix[i][j - 1] === 'coin') {
                            if (player === 'player1') {
                                this.player1.score += 10
                            } else {
                                this.player2.score += 10
                            }
                        }
                        this.matrix[i][j - 1] = player
                        return
                    }
                    if (action === 'right') {
                        if (this.matrix[i][j + 1] === 'player2'
                            || this.matrix[i][j + 1] === 'player1'
                            || this.matrix[i][j + 1] === undefined
                            || this.matrix[i][j + 1] === 'wall') {
                            return 'err'
                        }
                        this.matrix[i][j] = 'block'
                        if (this.matrix[i][j + 1] === 'coin') {
                            if (player === 'player1') {
                                this.player1.score += 10
                            } else {
                                this.player2.score += 10
                            }
                        }
                        this.matrix[i][j + 1] = player
                        return
                    }
                    if (action === 'up') {
                        if (this.matrix[i - 1][j] === 'player2'
                            || this.matrix[i - 1][j] === 'player1'
                            || this.matrix[i - 1][j] === undefined
                            || this.matrix[i - 1][j] === 'wall') {
                            return 'err'
                        }
                        this.matrix[i][j] = 'block'
                        if (this.matrix[i - 1][j] === 'coin') {
                            if (player === 'player1') {
                                this.player1.score += 10
                            } else {
                                this.player2.score += 10
                            }
                        }
                        this.matrix[i - 1][j] = player
                        return
                    }
                }
            }
        }
    }
}