
class Renderer {
    renderMainPage(data) {
        const source = $('#main-template').html()
        const template = Handlebars.compile(source)
        $('.container').empty()
        const mainHtml = template(data)
        $('.container').append(mainHtml)
    }

    renderScore1(player1Score) {
        const source = $('#player1scores-template').html()
        const template = Handlebars.compile(source)
        $('.player1scores').empty()
        const mainHtml = template(player1Score)
        $('.player1scores').append(mainHtml)
    }
    renderScore2(player2Score){
        const source = $('#player2scores-template').html()
        const template = Handlebars.compile(source)
        $('.player2scores').empty()
        const mainHtml = template(player2Score)
        $('.player2scores').append(mainHtml)
    }
}