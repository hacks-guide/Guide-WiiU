# Blocking Updates

All currently known Wii U exploits can, unlike e.g. the Nintendo Switch RCM exploit, be patched by a system update. Although the Wii U is no longer officially supported, Nintendo may still release updates for it. Namely the updates 5.5.3 and 5.5.4 were both released after the Wii U was discontinued, so blocking updates is still a recommended action.

### Instructions

Currently two ways exist to block updates on the Wii U system:
<!-- tabs:start -->

#### **Deleting The Update Folder**
?> While this method of update blocking is a bit more advanced than DNS Blocking and currently requires at least basic knowledge on FTP Programs, it has the advantage that the eShop's functionality will not be restricted.

?> In order for this method to work, your Wii U needs to be in the same network as your Computer.
1. Plug your SD Card into your Computer.
1. Download and extract [ftpiiu_everywhere](http://wiiubru.com/appstore/zips/fpiiu-cbhc.zip) to the root of your SD Card.
1. Download an FTP client of your choice such as [FileZilla](https://filezilla-project.org/download.php).
1. Plug the SD Card into your Wii U console and power it on.
1. Launch the CFW of your choice (mocha, haxchi/cbhc) and enter the Homebrew Launcher.
1. Navigate the Homebrew Launcher and run the ftpiiu_everywhere app.
1. Take note of the IP address on the Wii U screen.
1. On your PC run your preferred FTP client and open an FTP connection to your Wii U. In FileZilla this can be done using the Site Manager, but be sure to replace the IP address with the one shown on your Wii U screen:  
<img src="docs/assets/img/FTP.png" alt="FileZilla">
1. Navigate to `/storage_mlc/sys`. You should see an empty folder called `update`.
1. Right click the folder and delete it.
1. You are now blocking updates.

### **DNS Blocking**
?> This method is the easier method and is recommended to less advanced users. It does, however, prevent the eShop from working. This can be worked around by running [NNUPatcher](http://www.wiiubru.com/appstore/zips/nnupatcher.zip) before starting the eShop.
1. Plug your SD Card into your Computer.
1. Extract the `nnupatcher.zip` file to the root of your SD Card. If asked, overwrite any duplicate files.
1. Plug the SD Card into your Wii U console and power it on.
1. Enter the Wii U's system settings and navigate to `Internet > Connect to the Internet > Connection List >`
`Your WiFi connection > Change Settings > DNS` and set the option to `Do not auto-obtain`.
1. You will be asked to input a primary and secondary DNS. Enter the following IP addresses:
 - Primary DNS: 168.235.092.108
 - Secondary DNS: 081.004.127.020
<img src="docs/assets/img/DNS.png" alt="DNS Block">
1. Click on confirm
1. You are now blocking updates. In order to access the eShop, run the nnupatcher app from the Homebrew Launcher before launching the eShop


<!-- tabs:end -->
