#pragma strict

var bark : AudioClip;
 
function Start () 
{
	AudioSource.PlayClipAtPoint(bark, transform.position); 
}

function Update () 
{
	if(GameObject.FindGameObjectWithTag("shoe_btn").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("note_btn").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("torch_btn").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("fingerprints_btn").renderer.enabled == false)
	{
		Application.LoadLevel(3);
	}
}