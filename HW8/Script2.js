// JavaScript source code
/*Assignment HW 8 (Scrabble game):
Mohamed Ali, UML mohamed_ali1@student.uml.edu*/
var lettersOnDeck = 0;
var images = "";
var tcount = 0;

//8 Squares for play board
var word = new Array(8);

//pieces to choose from for play. Provided with assignment handout 
var pieces = [
    {"letter": "A", "value": 1, "amount": 9},
    {"letter": "B", "value": 3, "amount": 2},
    {"letter": "C", "value": 3, "amount": 2},
    {"letter": "D", "value": 2, "amount": 4},
    {"letter": "E", "value": 1, "amount": 12},
    {"letter": "F", "value": 4, "amount": 2},
    {"letter": "G", "value": 2, "amount": 3},
    {"letter": "H", "value": 4, "amount": 2},
    {"letter": "I", "value": 1, "amount": 9},
    {"letter": "J", "value": 8, "amount": 1},
    {"letter": "K", "value": 5, "amount": 1},
    {"letter": "L", "value": 1, "amount": 4},
    {"letter": "M", "value": 3, "amount": 2},
    {"letter": "N", "value": 1, "amount": 5},
    {"letter": "O", "value": 1, "amount": 8},
    {"letter": "P", "value": 3, "amount": 2},
    {"letter": "Q", "value": 10, "amount": 1},
    {"letter": "R", "value": 1, "amount": 6},
    {"letter": "S", "value": 1, "amount": 4},
    {"letter": "T", "value": 1, "amount": 6},
    {"letter": "U", "value": 1, "amount": 4},
    {"letter": "V", "value": 4, "amount": 2},
    {"letter": "W", "value": 4, "amount": 2},
    {"letter": "X", "value": 8, "amount": 1},
    {"letter": "Y", "value": 4, "amount": 2},
    {"letter": "Z", "value": 10, "amount": 1}
]

$(document).ready(function () {
    
    //start game with rondom tiles 
    newBoard();
    //
    dragAndDropFunction();
    
});

// Sets up the board with tiles
function newBoard() {
    var letter;
    var random;
    var lettersToAdd = 7;

    //make 7 random letter tiles 
    for (var i = 0; i < lettersToAdd; i++) {
        random = Math.floor((Math.random() * (pieces.length)));     
        letter = pieces[random].letter;                 
        //create image elements and append it to the rack holder
        $("#letter_rack").append(" <img   style=\"width:70px;height:70px;\" id=\"" + letter + "\" class=\"letter_rack_blocks \" src=\"graphics_data/Scrabble_Tiles/Scrabble_Tile_" + letter + ".jpg\">");
        
    }

}

// function to count the score
function updateScore(word) {
    var totalScore = 0;
    var scoreToAdd = 0;
    var doubleword = 0;
    
    for (var i = 0; i < word.length; i++) {
        // loop through the pieces to find the letter 
        for (var j = 0; j < pieces.length; j++) {
            
            if (word[i] != "" && (word[i] == pieces[j].letter)) {
                //if i == 2 double the value
                if (i == 2) {
                    scoreToAdd = pieces[j].value * 2;
                    totalScore += scoreToAdd;
                }if (i == 5) {
                    doubleword++;
                    scoreToAdd = pieces[j].value;
                    totalScore += scoreToAdd;
                }if(i!=2 && i != 5) //else, just add the score normally
                {
                    totalScore += pieces[j].value;
                }
            }
        }
    }
    if(doubleword!=0)
    {
        totalScore = totalScore * 2;
    }
    
    document.getElementById('Score').innerHTML = totalScore.toString();
}

function updateWord(letterBlock) {
    var currentword = "";
    for (var i = 0; i < letterBlock.length; i++) {
        if (typeof letterBlock[i] === 'undefined') {

        } else {
            currentword += letterBlock[i];
        }
    }
    if (currentword) {
        document.getElementById('word').innerHTML = currentword;
        updateScore(word);
    }
    
}


function dragAndDropFunction() {
$("#rack").droppable({accept: '.letter_rack_blocks', out: Letters});
function Letters(event, ui) {
        lettersOnDeck--;
    }
    
    $(".letter_rack_blocks").draggable({snap: ".board", snapMode: "inner", revert: 'invalid'});

    function Drag(event, ui) {
        if (ui.draggable.attr("id") == word[$(this).attr("id")]) {
            //remove letter from board
            word[$(this).attr("id")] = ""; 
            
        }
        updateWord(word);
    }

    
    $(".board").droppable({accept: '.letter_rack_blocks', drop: Drop, out: Drag});

    // when a tile  dropped
    function Drop(event, ui) {
    //get the id of the dragged letter
        var letter = ui.draggable.prop('id'); 
        var element = $(this).attr("id");
        console.log(element);
        var number = parseInt(element);             
        tcount++;
        
        if (typeof word[number - 1] === 'undefined' && typeof word[number + 1] === 'undefined' && tcount < 1) {
            console.log();
            console.log("tcount is:" + tcount);
            ui.draggable.draggable({revert: true});
        } else {
            word[number] = letter;
            updateWord(word);
        }


    }

}


//Using draggable and droppable to drage and drop blocks to a target

//var word="";
//var score=0;
//var letter="";
/*
$( function() {
    $( ".letter_rack_blocks" ).draggable({
        drag: function(event, ui){
           // console.log($(this).attr('id'));
           // console.log("Test");
           letter=$(this).attr('id');
        }
            
    }

    
    );
    
    $( ".board" ).droppable({
      drop: function( event, ui ) {
      console.log($( this ).attr('id'));
     if($( this ).attr('id') == 2 || $( this ).attr('id') == 4 || $( this ).attr('id') == 5 ){
          score +=2;
          $('.label-default').html('Extra points!');
          

     }
     else{
          score+=1;
     }
        $('#span').html(score);
      }
    });
  } );*/

 /* console.log(letter);
  const empties =  document.getElementsByClassName('board');
  //console.log(empties)
  var i;
  for (i=0; i<empties.length; i++){
        empties[i].addEventListener('drop', dragDrop);
  }

  function dragDrop(){
        console.log('drop');
  }

  $("html").on("drop", function(event) {
    event.preventDefault();  
    event.stopPropagation();
    console.log(event);
});*/


