#pragma strict

var object : GameObject;

function Start () 
{

}

function OnMouseDown()
{
	//to remove button from list
	object = GameObject.FindGameObjectWithTag("torch_btn");	
	object.renderer.enabled = false;
	
	//to remove object clicked from scene
	this.renderer.enabled = false;
	
	//increment score
	score.score++;
}

function Update () {

}