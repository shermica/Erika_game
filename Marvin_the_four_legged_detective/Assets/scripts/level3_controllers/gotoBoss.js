#pragma strict

var bark : AudioClip;
 
function Start () 
{
	AudioSource.PlayClipAtPoint(bark, transform.position); 
}

function Update () 
{
	if(GameObject.FindGameObjectWithTag("keys_btn").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("hair_btn").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("tape_btn").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("specs_btn").renderer.enabled == false)
	{
		Application.LoadLevel(7);
	}
}