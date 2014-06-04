#pragma strict

static var score : int;

function Start () 
{
	DontDestroyOnLoad(this);
	score=0;
	
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
 	GUI.Box(new Rect(350, 10, 80, 20), "Score: " + score + "/12");
 }
function Update () {

}