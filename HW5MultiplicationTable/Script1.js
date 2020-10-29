// JavaScript source code

//function to check and validate inputs. 
function isvalid()
{
//getting inputs values 
		//range 1
		var start1=parseInt(document.getElementById("range1from").value);
        var end1=parseInt(document.getElementById("range1to").value);
		//range 2
        var start2=parseInt(document.getElementById("range2from").value);
        var end2=parseInt(document.getElementById("range2to").value);

		//Initial error message 
		var message="";
		 // Check if input a number and within range -50:50
  if ((isNaN(start1) || start1 < -51 || start1 > 51)||
		(isNaN(start2) || start2 < -51 || start2 > 51)||
		(isNaN(end1) || end1 < -51 || end1 > 51)||	
		(isNaN(end2) || end2 < -51 || end2 > 51)) 
		{
		//set message 
    message = "Invalid inputs";
	document.getElementById("isvalid").style.color = "red";

 
	} 
	//check if start of range is less than end of a range and dissplay appropiate message
	else if(start1>end1 || start2>end2  ){
	message = "Invalid input! either out of range or starting number is higher than ending number";
	document.getElementById("isvalid").style.color = "red";

	}
  
	//If inputs are correct display ok message and call creattables()
  else {
    message = "Valid inputs";
	document.getElementById("isvalid").style.color = "green";
	createTables();

  }
  //assign the message to the html lable
  document.getElementById("isvalid").innerHTML = message;


}


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