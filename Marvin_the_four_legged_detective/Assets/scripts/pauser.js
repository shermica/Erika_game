#pragma strict

var paused : boolean = false;

function Start () {

}

function Update () 
{
	//press space bar to pause
	if(Input.GetButtonUp("Jump"))
	{
	  if(!paused)
	  {
   		Time.timeScale = 0;
   		paused=true;
   	  }
   	  else
   	  {
   	  	Time.timeScale = 1;
   	  	paused=false;
   	  }  	  	
	}
}


