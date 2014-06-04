#pragma strict

var laserGen : GameObject;
var xposition: float;
var yposition: float;


function spawn_powerup()
{
	xposition = Random.Range(-2.56,2.4);
	yposition = Random.Range(-2.08,-2.08);
	
	xposition = transform.position.x +xposition;
	
	Instantiate(laserGen, Vector3(xposition, yposition,0), Quaternion.identity);
}	
	

function Start () 
{
	InvokeRepeating("spawn_powerup",7.0,0.0);	
}


function Update () 
{	
}



