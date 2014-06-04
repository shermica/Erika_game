#pragma strict

//when clicked, timer increases
function OnMouseDown()
{
	//increment 5 more seconds	
	GameObject.FindGameObjectWithTag("MainCamera").GetComponent(timer).timer += 5;	
	this.renderer.enabled = false;
}

function Start () 
{
	
}

function Update () 
{
	
}