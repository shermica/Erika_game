#pragma strict

var bossLaser:Rigidbody;
var delay: float;

function shootingLaser()
{	
	//boss shooting laser
	Instantiate(bossLaser, transform.position, transform.rotation);
}

function Start ()
{	
	for (var i = 0; i < 10; i++)
	{
		delay = Random.Range(0.5,2.0);
		InvokeRepeating("shootingLaser", delay, delay);
	}
}

function Update () 
{

}