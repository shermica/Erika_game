#pragma strict

var lifetime = 3;

function Start () {

}

function Update () 
{
	Destroy();
}

function Destroy()
{
    yield WaitForSeconds(lifetime);
    Destroy(gameObject);
}