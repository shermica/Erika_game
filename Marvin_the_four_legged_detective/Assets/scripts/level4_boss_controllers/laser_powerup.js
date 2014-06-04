#pragma strict

var laser:Rigidbody;


function Start () 
{
	Debug.Log("laser gun appears");
}

function OnMouseDown()
{	
	//pick up
	Debug.Log("clicked laser gun");
	GameObject.FindGameObjectWithTag("Player").GetComponent(player_controller).hasLaser = true;
	GameObject.FindGameObjectWithTag("Player").GetComponent(player_controller).hasBomb = false;
	GameObject.FindGameObjectWithTag("Player").GetComponent(player_controller).hasGun = false;
	Destroy(this.gameObject);
}

function Update()
{

}
