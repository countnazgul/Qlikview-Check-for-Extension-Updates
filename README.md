## Check for new versions of qlikview extensions

[![Join the chat at https://gitter.im/countnazgul/Qlikview-Check-for-Extension-Updates](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/countnazgul/Qlikview-Check-for-Extension-Updates?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

There is no functionality in QV that will inform your users if new version of your QV extension is available. This script will help you do this.

### Pre-requirements
 - the extension code is hosted in Github
 - need to create "Releases" for each new version

### Setup releases in Github

Please check the Github documentation how to create releases (https://help.github.com/articles/creating-releases/) 

### Using the script

Edit the "version" and "repoReleaseUrl" in the "checkforupdate.js"

```
		var version = 'x.xx';
		var repoReleaseUrl = "https://api.github.com/repos/USERNAME/REPONAME/releases";
```

After this there are two changes that are needed to be made in the script of the actual extension:

 - include the "checkforupdate.js" 
 - call the "checkForUpdates" function
 
### Include "checkforupdate.js"

```
var extension_path = Qva.Remote + "?public=only&name=Extensions/MyExtension/";
Qva.LoadScript(extension_path + "checkforupdate.js", function() { ...
```
### Call "checkForUpdates" function
Call the function after the creation of the main extension div while passing the newly created div id:
```
Qva.AddExtension('MyExtension', function(){
  var _this = this;
  var divName = _this.Layout.ObjectId.replace("\\", "_");
  var ui = document.createElement("div");
  ui.setAttribute("id", divName);
  checkForUpdates(divName);
  // ... your extension code as usual
})
```
The script will check for new versions on every new session (not every time when selection is made) but the indicator will stay (if new version is available).

The script is not dependant from any other scripts or libraries. 

### Screenshots
![Icon](https://raw.githubusercontent.com/countnazgul/Qlikview-Check-for-Extension-Updates/master/Screenshots/screenshot1.png)

![IconWithHoverText](https://raw.githubusercontent.com/countnazgul/Qlikview-Check-for-Extension-Updates/master/Screenshots/screenshot2.png)
