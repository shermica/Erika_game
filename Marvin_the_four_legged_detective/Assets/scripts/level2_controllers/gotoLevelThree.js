#pragma strict

var bark : AudioClip;
 
function Start () 
{
	AudioSource.PlayClipAtPoint(bark, transform.position); 
}

function Update () 
{
	if(GameObject.FindGameObjectWithTag("poison_btn").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("blood_btn").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("phone_btn").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("footprints_btn").renderer.enabled == false)
	{
		Application.LoadLevel(4);
	}
}