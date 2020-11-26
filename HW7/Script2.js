// JavaScript source code

//This function add slider and set range -50 :50
$( "#slider1" ).slider({
		range: true,
		min: -50,
		max: 50,
		step: 1,
		values: [-10, 10], //intial values for slider
		slide: function(event, ui) {
        //update inputs from slider
		for (var i = 0; i < ui.values.length; ++i) {
		$("input.test[data-index=" + i + "]").val(ui.values[i]);
		}
		}
		});
        //update slider values from user typed inputs
		$("input.test").change(function() {
		var $this = $(this);
		$("#slider1").slider("values", $this.data("index"), $this.val());
		});

        //settings fro slider/range2
		$( "#slider2" ).slider({
		range: true,
		min: -50,
		max: 50,
		step: 1,
		values: [-10, 10],
		slide: function(event, ui) {
        //update inputs from slider
		for (var i = 0; i < ui.values.length; ++i) {
		$("input.test1[data-index=" + i + "]").val(ui.values[i]);
		}
		}
		});
        //update slider values from inputs
		$("input.test1").change(function() {
		var $this = $(this);
		$("#slider2").slider("values", $this.data("index"), $this.val());
		});

		




//custom method to check max value is >= min value within a range
        $.validator.addMethod('maxGreaterThanMin',function(value, element, param){
        var target = $(param);
        return parseInt(value)>= parseInt(target.val());
        }, "Enter value greater than or equal to the starting value");

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
        maxGreaterThanMin: '#val1',
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
        maxGreaterThanMin: '#val3',
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
        maxGreaterThanMin: "Value must be greater than or equal starting value of 1st range"


        },
        start2: {

        },
        end2: {
        maxGreaterThanMin: "Value must be greater than or equal starting value of 2nd range"

        }
        }
        });

        //Genrate table and add tabs if form is valid

     $("#add-tab").click(function() 
    {
       if ($('#form1').valid()) 
       {
       //create tab and then add the table to the tab
            addtabs();
           createTables();
           

       }
   });

   //function to create and add tabs
  function addtabs(){
        $("div#tabs").tabs();
        var num_tabs = $("div#tabs ul li").length + 1;
        //add the tab
        $("div#tabs ul").append(
            "<li><a href='#tab" + num_tabs + "'>" + "Table #"+ num_tabs +"</a><input type='checkbox'></li>"
        );
		//update the information inside tabs
$("div#tabs").append(
            "<div class='updatetab table-sm table-responsive ' id='tab" + num_tabs + "'>" + "<div id='mytable' class='table-responsive' </div>"  + "</div>"

        );
	//refresh tabs

        $("div#tabs").tabs("refresh");
  }


  //function to remove tabs once button clicked
  $("button#remove-tab").click(function(){
	var params = {};
    //going though each tab to see if check and remove its li element
$('li input:checked').each(function (i, el) {
    var tabData= $
console.log(this.id);
     
    params[this.id] = $(this).closest('li').remove();
    

    //console.log(params);
});
});
  


   //function to calulcate and create multiplication table
function createTables(){
    
		//range 1
        var start1=parseInt(document.getElementById("val1").value);
		
		var end1=parseInt(document.getElementById("val2").value);
		//range 2
        var start2=parseInt(document.getElementById("val3").value);
        var end2=parseInt(document.getElementById("val4").value);

		
		
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
     $("div#tabs").tabs();
     var num_tabs = $("div#tabs ul li").length + 1;
	//add the table to jumbotron class 
    var name=""+num_tabs;
    console.log(name);
	//document.getElementById("mytable").appendChild(table);
    $(".updatetab").last().append(table);
}

