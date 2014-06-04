#pragma strict

static var healthMarvin : int;

function Start () 
{
	DontDestroyOnLoad(this);
	healthMarvin=50;	
}

 function OnGUI()
 {
 	//display score 	
 	GUI.Box(new Rect(300, 10, 120, 20), "Marvin: " + healthMarvin);
 }
 
function Update () 
{
	
}