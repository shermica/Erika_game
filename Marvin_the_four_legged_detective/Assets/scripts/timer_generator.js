#pragma strict

var timerClock : GameObject;
var xposition: float;
var yposition: float;

function spawn_powerup()
{
	xposition = Random.Range(-5,4);
	yposition = Random.Range(4,-3);
	
	xposition = transform.position.x +xposition;
	
	Instantiate(timerClock, Vector3(xposition, yposition,0), Quaternion.identity);
}	
	

function Start () 
{
	InvokeRepeating("spawn_powerup",1.0,5.0);
}

function Update () 
{
	
}