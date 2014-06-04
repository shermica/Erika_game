#pragma strict

//Spawn a new object with AudioSource
var myClip : AudioClip;
 
function Start () 
{
	AudioSource.PlayClipAtPoint(myClip, transform.position);
}



function Update () {

}