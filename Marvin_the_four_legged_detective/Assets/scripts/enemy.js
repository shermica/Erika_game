#pragma strict


function Start () 
{

}

function OnMouseDown()
{
	//decrement health
	health.health-=1;
}

function Update () 
{
	if(health.health <= 0)
	{
		health.health = 0;
		
		//when health reaches zero, gameover
		Application.LoadLevel(6);
	}
}