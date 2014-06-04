#pragma strict

var gun:Rigidbody;
var bomb:Rigidbody;
var laser:Rigidbody;

static var hasGun = true;
static var hasBomb = false;
static var hasLaser = false;

var original : Texture2D;  
var injured  : Texture2D;

function Start () 
{
	//original state of player	
	renderer.material.mainTexture = original;
	DontDestroyOnLoad(this.gameObject);	 
}


//when the player gets hit
function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag == "enemylaser")
	{
		//decrement health of player
		healthMarvin.healthMarvin-=2;	
		
		//change colour of player
		renderer.material.mainTexture = injured;	
		
	}
}

function OnTriggerExit()
{
	//reset to original state when shot exits	
	renderer.material.mainTexture = original;	 
}


function OnMouseDown()
{
	
	if(hasGun == true)
	{		
		hasBomb = false;
		hasLaser = false;
		Instantiate(gun, transform.position, transform.rotation);		
	}
	
	if(hasBomb == true)
	{
		hasGun = false;		
		hasLaser = false;
		Instantiate(bomb, transform.position, transform.rotation);
	}
	
	if(hasLaser == true)
	{
		hasGun = false;
		hasBomb = false;		
		Instantiate(laser, transform.position, transform.rotation);
	}
		
}

function Update () 
{	
	//horizontal movement with mouse	  
    transform.position.x = Camera.main.ScreenToWorldPoint(Input.mousePosition).x;
    
    //restric values
    transform.position.x = Mathf.Clamp(transform.position.x, -6, 6);
    					   
}
