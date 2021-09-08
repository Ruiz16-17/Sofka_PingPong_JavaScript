
    function Board(width, height) {
        this.width = width;
        this.height = height;
        this.isPlaying = false;
        this.gameOver = false;
        this.bars = [];
        this.ball = null;
    }

    Board.prototype = {
        get elements(){

            var elements = this.bars;
            elements.push(ball);
            return elements;
        }
    }

    function Bar(x,y,width, height, board) {
        
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.board = board;
        this.board.bars.push(this); 
        this.kind = "rectangle";
    }

    Bar.prototype = {

        down: function(){

        },

        up: function () {
            
        }
    }

    function BoardView(canvas, board) {
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        this.contexto = canvas.getContext("2d");
    }


window.addEventListener("load", main);

function main() {
    
    var board = new Board(800, 400);
    var canvas = document.getElementById('canvas');
    var board_view = new BoardView(canvas,board);
}