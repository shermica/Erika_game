#pragma strict

var shootingup:boolean;
var x:int;
var y:int;

x= Screen.width/2;
y = Screen.height/2;

function Start () 
{

}

function Update () 
{
	if(shootingup)
	{
		//shoot up
		transform.Translate(Vector3.up * 10 * Time.deltaTime);
	}
	else
	{
		//shoot down
		transform.Translate(Vector3.up * -10 * Time.deltaTime);
	}
}

