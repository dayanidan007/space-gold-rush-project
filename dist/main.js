const board = new GoldRush
const renderer = new Renderer
alert("Are you ready to play!")

setTimeout(function()
{   
    if(board.player1.score > board.player2.score){
        alert("Player 1 is Win!");
    }else if(board.player2.score > board.player1.score){
        alert("Player 2 is Win!")
    }else{
        alert("draw!")
    }
 }, 20000);

    renderer.renderMainPage(board.get())
    renderer.renderScore1(board.player1.score)
    renderer.renderScore2(board.player2.score)
    
$(document).keypress(function (e) {    
    if (e.which == 119) {
        board.movePlayer('player1', 'up')
        renderer.renderScore1(board.player1.score)
        renderer.renderMainPage(board.get())
        
    }
    if (e.which == 97) {
        board.movePlayer('player1', 'left')
        renderer.renderScore1(board.player1.score)
        renderer.renderMainPage(board.get())
    }
    if (e.which == 115) {
        board.movePlayer('player1', 'down')
        renderer.renderScore1(board.player1.score)
        renderer.renderMainPage(board.get())
    }
    if (e.which == 100) {
        console.log('d')
        board.movePlayer('player1','right')
        renderer.renderScore1(board.player1.score)
        renderer.renderMainPage(board.get())
    }
    /////
    if (e.which == 105) {
        board.movePlayer('player2','up')
        renderer.renderScore2(board.player2.score)
        renderer.renderMainPage(board.get())
    }
    if (e.which == 106) {
        board.movePlayer('player2','left')
        renderer.renderScore2(board.player2.score)
        renderer.renderMainPage(board.get())
    }
    if (e.which == 107) {
        board.movePlayer('player2','down')
        renderer.renderScore2(board.player2.score)
        renderer.renderMainPage(board.get())
    }
    if (e.which == 108) {
        board.movePlayer('player2','right')
        renderer.renderScore2(board.player2.score)
        renderer.renderMainPage(board.get())
    }
})

