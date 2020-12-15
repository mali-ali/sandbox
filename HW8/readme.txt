
Assignment HW 8 (Scrabble game):

Github:
https://mali-ali.github.io/sandbox/HW8/HTMLPage1.html
https://github.com/mali-ali/sandbox



This assignment to implement a turn of Scrabble game to learn more about working with JQuery UI.
I the following resources to learn how implement drag and drop for this assignment

https://jqueryui.com/draggable/
https://www.w3schoolshttps://stackoverflow.com/questions/3943868/jquery-drag-and-drop-find-the-id-of-the-target
https://www.youtube.com/watch?v=C22hQKE_32c
https://www.youtube.com/watch?v=-JFkAaLOou8


Implemented features:

 Basic Functionality:
            Letter tiles in player's hand are selected randomly from a data structure with the proper distribution of letters - implemented using a modified version of the associative array provided by professor Heines
            Letter tiles can be dragged-and-dropped onto target Scrabble squares - Implemented using jQuery UI draggable and droppable features
            Program Identifies which letter tile is dropped onto which Scrabble square - Implemented via custom attributes and classes dynamically added and removed from letter and board tiles
            Board includes bonus squares - Implemented using special classes for bonus squares
            Score is tallied correctly, including consideration of bonus square miltipliers - Implemented in Javascript. Handles tracking score of the current word and the total score of the player. Current score updates dynamically.
            User can always restart the game.
 Partially Working:
	    Tiles can only be dragged from the “rack” to Scrabble board. If the user drop them anywhere else, they will be bounced back to the “rack”.
            Once the tile is placed on the Scrabble board, it can not be moved
 Not working: 
             After playing a word, only the number of letter tiles needed to bring the player’s “hand” back to 7 tiles are selected
             Except for the first letter, all sub-subsequent letters must be placed directly next to or below another letter with no space. Else, they will bounce back to the “rack”.


