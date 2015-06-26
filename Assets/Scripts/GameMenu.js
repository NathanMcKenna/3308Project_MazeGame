﻿var isQuit=false;
var AudioFile:AudioClip;

/*
Function: OnMouseEnter
	Plays audio file and changes text color if the user's mouse contacts a button
*/
function OnMouseEnter(){
	//Play Music
	GetComponent.<AudioSource>().clip = AudioFile;
	GetComponent.<AudioSource>().Play();
	//change text color
	GetComponent.<Renderer>().material.color=Color.red;
}

function OnMouseExit(){
	//change text color
	GetComponent.<Renderer>().material.color=Color.blue;
}

function OnMouseUp(){
	//is this quit
	if (isQuit==true) {
	//quit the game
		Application.Quit();
	}
	else {
	//load level
		Application.LoadLevel("StaticMaze");
	}
}

function Update(){
//quit game if escape key is pressed
	if (Input.GetKey(KeyCode.Escape))
		{ Application.Quit();
	}	
}