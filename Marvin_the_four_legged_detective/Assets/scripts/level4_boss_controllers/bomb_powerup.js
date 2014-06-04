#pragma strict

var bomb:Rigidbody;

function Start () 
{
	Debug.Log("bomb appears");
}


function OnMouseDown()
{	
	//pick up
	Debug.Log("clicked bomb");
	GameObject.FindGameObjectWithTag("Player").GetComponent(player_controller).hasBomb = true;
	GameObject.FindGameObjectWithTag("Player").GetComponent(player_controller).hasGun = false;
	GameObject.FindGameObjectWithTag("Player").GetComponent(player_controller).hasLaser = false;
	Destroy(this.gameObject);
}


