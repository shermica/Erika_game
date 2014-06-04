#pragma strict

var bark : AudioClip;
 
function Start () 
{
	AudioSource.PlayClipAtPoint(bark, transform.position); 
}
function Update () 
{
	//when healthBoss reaches zero, you win
	if(healthboss.healthboss <= 0)
	{
		healthboss.healthboss = 0;
		Destroy(this.gameObject);
		
		Application.LoadLevel(5);
	}
	
	//when healthMarvin reaches zero, gameover
    if(healthMarvin.healthMarvin <= 0)
	{
		healthMarvin.healthMarvin = 0;
		Destroy(this.gameObject);		
		
		Application.LoadLevel(6);
	}
}

