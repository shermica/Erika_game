#pragma strict

static var health : int;

function Start () 
{
	DontDestroyOnLoad(this);
	health=3;	
}

function OnLevelWasLoaded (level : int) 
{
	if (level == 7) 
	{
		Destroy(this.gameObject);
	}
}

 function OnGUI()
 {
 	//display score 	
 	GUI.Box(new Rect(450, 10, 80, 20), "Health: " + health);
 }
 
function Update () {

}