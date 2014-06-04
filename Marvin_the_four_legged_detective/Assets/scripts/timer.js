#pragma strict

var timer : float = 10.0;

function Start () 
{

}

function Update () 
{
	timer -= Time.deltaTime; //set timer to count down
	
	if (timer <= 0)
	{
		timer = 0;
		//when timer reaches zero, gameover
		Application.LoadLevel(6);		
	}
}

function OnGUI()
{
	GUI.Box(new Rect(300, 10, 30, 20), "" + timer.ToString("0"));
}