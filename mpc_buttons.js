/*
*
*
*/

function buttonPress(me,my){
	var output = my;	
	switch(me){
		case 'pad_1':			
			document.getElementById("led_screen").innerHTML = "Kick";				
		break;
		case 'pad_2':			
			document.getElementById("led_screen").innerHTML = "Snare";			
		break;
		case 'pad_3':			
			document.getElementById("led_screen").innerHTML = "Rim";			
		break;
		case 'pad_4':			
			document.getElementById("led_screen").innerHTML = "Clap";			
		break;
		case 'pad_5':			
			document.getElementById("led_screen").innerHTML = "Kick";			
		break;
		case 'pad_6':			
			document.getElementById("led_screen").innerHTML = "Kick";			
		break;
		case 'pad_7':			
			document.getElementById("led_screen").innerHTML = "Kick";			
		break;
		case 'pad_8':			
			document.getElementById("led_screen").innerHTML = "Kick";			
		break;
		case 'pad_9':			
			document.getElementById("led_screen").innerHTML = "Kick";			
		break;
		case 'pad_10':			
			document.getElementById("led_screen").innerHTML = "Kick";			
		break;
		case 'pad_11':			
			document.getElementById("led_screen").innerHTML = "Kick";			
		break;
		case 'pad_12':			
			document.getElementById("led_screen").innerHTML = "Kick";			
		break;
		case 'pad_13':
			document.getElementById("led_screen").innerHTML = "Cymbal";		
		break;
		case 'pad_14':			
			document.getElementById("led_screen").innerHTML = "Kick";			
		break;
		case 'pad_15':
			document.getElementById("led_screen").innerHTML = "Cymbal";		
		break;
		case 'pad_16':
			document.getElementById("led_screen").innerHTML = "Cymbal";		
		break;
		default:
			alert("Error Occurred: -");
			getElementById("led_screen").value = "pad 1";			
		break;	
		}
		setTimeout("buttonRelease()", 500);
		
}

function buttonRelease(){	
	document.getElementById("led_screen").innerHTML  = "";
	}