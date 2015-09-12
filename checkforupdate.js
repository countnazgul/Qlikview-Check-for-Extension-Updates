var newExtensionVersionAvailable = false;
var checkedForNewExtensionVersion = false;

function checkForUpdates(divName) {
	// Author: stefan.stoichev@gmail.com
	// Repo: https://github.com/countnazgul/Qlikview-Check-for-Extension-Updates
	// Info: If your QV extension is hosted in GitHub and there are releases configured
	//       this script will check if there are new version available.
	//       How to use it and how to setup releases and tags in Github? - check the readme file or 
	//       the Github repo from the link above
	
	try {
		var version = '0.1';
		var repoReleaseUrl = "https://api.github.com/repos/countnazgul/RadialTree/releases";
		var newVersionMessage = "New version of this extension is available!";
		var xmlhttp;	
		
		var div = document.createElement("div");
			div.id = "update";
			div.style.width = "10px";
			div.style.height = "10px";
			div.style.csstext = 'position: absolute; top: 0; left: 0;';
			div.style.visibility = 'hidden';
		
		var arrowDiv = document.createElement("div");
			arrowDiv.title = newVersionMessage;
			arrowDiv.id = "updateArrow";
			arrowDiv.style.width = "0px";
			arrowDiv.style.height = "0px";
			arrowDiv.style.borderBottom = "7px solid #00F010";
			arrowDiv.style.borderLeft = "7px solid transparent";
			arrowDiv.style.borderRight = "7px solid transparent";
			
		div.appendChild(arrowDiv);	
		
		var a = document.getElementById(divName);
			a.appendChild(div);	
			
		if(newExtensionVersionAvailable == true) {
			document.getElementById('update').style.visibility = 'visible';
		}
		
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		} else {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}

		xmlhttp.onreadystatechange = function() {		
			if(xmlhttp.status == 200){
				response = JSON.parse(xmlhttp.responseText);
									
				if( response[0].tag_name != version) {
					document.getElementById('update').style.visibility = 'visible';
					newExtensionVersionAvailable = true;
				}
				
				checkedForNewExtensionVersion = true;					
			}			   
			else if(xmlhttp.status == 400) {
			}
		}		
		
		if(checkedForNewExtensionVersion == false) {
			xmlhttp.open("GET", repoReleaseUrl, true);
			xmlhttp.send();
		}
	} catch( err ) {
	}
}
