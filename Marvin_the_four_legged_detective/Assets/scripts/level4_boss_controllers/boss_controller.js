#pragma strict

var leftborder:float=-6;
var rightborder:float=6;
var touchedrightwall:boolean=false;
var touchedleftwall:boolean=false;

function Start () 
{
	for(var counter=0;counter<5;counter++)
	{
		//wait for five seconds
		yield WaitForSeconds(5);
		
		//calls method to move boss down
		moveDown();
	}

}

function moveDown()
{
	//move down by one step
	transform.position.y--;
}


//when the boss gets hit
function OnTriggerEnter(other:Collider)
{
	if( other.gameObject.tag == "playerbullet")
	{	
		//decrement health of boss
		healthboss.healthboss-=1;
	}
	
	if(other.gameObject.tag == "playerbomb")
	{	
		//decrement health of boss
		healthboss.healthboss-=2;
	}
	
	if(other.gameObject.tag == "playerlaser")
	{	
		//decrement health of boss
		healthboss.healthboss-=3;
	}
}

function Update () 
{	
	if (transform.position.x > rightborder)
	{
		touchedrightwall=true;
	}
	
	if (transform.position.x < leftborder)
	{
		touchedleftwall = true;
	}
	
	if (touchedrightwall == false)
	{		
		touchedleftwall = false;
		transform.Translate(Vector3.right * 5 * Time.deltaTime);
	}
	
	if (touchedrightwall == true)
	{
		transform.Translate(Vector3.left * 5 * Time.deltaTime);
	}
		
	if (touchedleftwall == true)
	{
		touchedrightwall = false;
		transform.Translate(Vector3.right * 5 * Time.deltaTime);
	}

}