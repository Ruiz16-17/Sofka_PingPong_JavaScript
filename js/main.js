(function() {
    self.Board = function (width, height) {
        this.width = width;
        this.height = height;
        this.isPlaying = false;
        this.gameOver = false;
        this.bars = [];
        this.ball = null;
    }

    self.Board.prototype = {
        get elements(){

            var elements = this.bars;
            elements.push(this.ball);
            return elements;
        }
    }
})();

(function(){

    self.Bar = function(x,y,width, height, board) {
        
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.board = board;
        this.board.bars.push(this); 
        this.kind = "rectangle";
    }

    self.Bar.prototype = {

        down: function(){
            
        },
    
        up: function () {
            
        }
        
    }
})();

(function() {

    self.BoardView = function(canvas, board) {
        
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        this.contexto = canvas.getContext("2d");
    }

    self.BoardView.prototype = {
        draw: function(){
            
            for (let index = this.board.elements.length - 1; index >= 0; index--) {
                
                var el = this.board.elements[index];

                draw(this.contexto,el);
            };
        }
    }

    function draw(contexto,element) {

        if (element !== null && element.hasOwnProperty("kind")) {
            
            switch (element.kind) {
                case "rectangle":
                    
                    contexto.fillRect(element.x,element.y,element.width,element.height);
                    break;
            
                default:
                    break;
            }

        }
    }

})();

window.addEventListener("load", main);

function main() {
    
    var board = new Board(800, 400);
    var bar = new Bar(20,150,10,100,board);
    var bar2 = new Bar(770,150,10,100,board);
    var canvas = document.getElementById('canvas');
    var board_view = new BoardView(canvas,board);

    board_view.draw();
}