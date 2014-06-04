#pragma strict

var button : GameObject;
//var button : Sprite;

function Start () 
{

}

function OnMouseDown()
{
	//to remove object clicked from scene
	this.renderer.enabled = false;
	
	//to remove button from list
	button = GameObject.FindGameObjectWithTag("shoe_btn");	
	button.renderer.enabled = false;
	
	//increment score
	score.score++;
	
	
	//GetComponent(SpriteRenderer).sprite = newSprite;
	
}

function Update () {

}