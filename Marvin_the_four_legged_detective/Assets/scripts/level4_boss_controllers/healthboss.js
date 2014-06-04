#pragma strict

static var healthboss : int;

function Start () 
{
	DontDestroyOnLoad(this);
	healthboss=50;	
}

 function OnGUI()
 {
 	//display score 	
 	GUI.Box(new Rect(450, 10, 120, 20), "Boss: " + healthboss);
 }
 
function Update () 
{
	
}