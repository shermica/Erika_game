#pragma strict

//when clicked, health increases
function OnMouseDown()
{
	//increment health
	health.health++;
	this.renderer.enabled = false;
}

function Start () 
{
	
}

function Update () 
{
	//if health is already at its max ie.3, it will not increment
	if (health.health >= 3)
	{
		health.health = 3;
	}	
}