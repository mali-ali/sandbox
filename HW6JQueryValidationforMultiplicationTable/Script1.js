$(document).ready(function() {

//custom method to check max value is >= min value within a range
$.validator.addMethod('maxGreaterThanMin',function(value, element, param){
    var target = $(param);
    return parseInt(value)>= parseInt(target.val());
}, "Enter a number greater than or equal to the starting value");

//using jquery validator plug in to validate the form and display error messages for each field
$("#form1").validate({
    rules: {
      start1 : {
        required: true,
        number: true,
        min: -50,
        max: 50
      },
      end1: {
        maxGreaterThanMin: '#range1from',
        required: true,
        number: true,
        min: -50,
        max: 50
      },
      start2: {
        required: true,
        number: true,
        min: -50,
        max: 50
      },
      end2: {
        maxGreaterThanMin: '#range1from',
        required: true,
        number: true,
        min: -50,
        max: 50
      }
    },
    messages : {
      start1: {
        
      },
      end1: {
        maxGreaterThanMin: "Enter a number greater than or equal to the starting value of 1st range"
        
        
      },
      start2: {
        
      },
      end2: {
        maxGreaterThanMin: "Enter a number greater than or equal to the starting value of 2nd range"
        
      }
    }
  });
});

//Genrate table if form is valid

     $("#createTable").click(function() 
    {
       if ($('#form1').valid()) 
       {
           createTables();
       }
   });  




//function to calulcate and create multiplication table
function createTables(){
        
		//range 1
        var start1=parseInt(document.getElementById("range1from").value);
		console.log(start1);
		var end1=parseInt(document.getElementById("range1to").value);
		//range 2
        var start2=parseInt(document.getElementById("range2from").value);
        var end2=parseInt(document.getElementById("range2to").value);

		
		
	// create table element
	var table = document.createElement('table');
	
	
	//going through the range i and j
	for(let i = start1;i<end1+2;i++){
	//create table row
		const row = document.createElement('tr');
		for(let j = start2;j<end2+2;j++){
			const td = document.createElement('td');
			
        //add embty cell at the start 
			if(i === start1 && j === start2) td.innerHTML = '';
        //add j and i columins
			else if(i === start1) td.innerHTML = j-1;
			else if(j === start2) td.innerHTML = i-1; 
        //do the multiplication
			else td.innerHTML = (i-1)*(j-1);
		
			row.appendChild(td);
		}
        //add the row to the table
		table.appendChild(row)
	}
	//add the table to jumbotron class 
	document.getElementById("mytable").appendChild(table);
}