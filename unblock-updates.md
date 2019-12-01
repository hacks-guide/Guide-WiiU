# Unblocking Updates

This is needed if you ever need to perform a System Update.

### Instructions

<!-- tabs:start -->

#### **Recreating the update folder**

?> In order for this method to work, your Wii U needs to be in the same network as your Computer.
> 1. Plug your SD Card into your Computer.
> 2. Download and extract [ftpiiu_everywhere](http://wiiubru.com/appstore/zips/fpiiu-cbhc.zip) to the root of your SD Card.
> 3. Download an FTP client of your choice such as [FileZilla](https://filezilla-project.org/download.php).
> 4. Plug the SD Card into your Wii U console and power it on.
> 5. Launch the CFW of your choice (mocha, haxchi/cbhc) and enter the Homebrew Launcher.
> 6. Navigate the Homebrew Launcher and run the ftpiiu_everywhere app.
> 7. Take note of the IP address on the Wii U screen.
> 8. On your PC run your preferred FTP client and open an FTP connection to your Wii U. In FileZilla this can be done using the Site Manager, but be sure to replace the IP address with the one shown on your Wii U screen:
![FileZilla](https://cdn.discordapp.com/attachments/399670410565910529/533075194546356224/1.png)
> 9. Navigate to `/storage_mlc/sys`.
> 10. Create a folder named `update`.
> 11. You are now no longer blocking system updates.

### **Removing the DNS Blocks**

> 1. Enter the Wii U's system settings and navigate to `Internet > Connect to the Internet > Connection List >`
> `Your WiFi connection > Change Settings > DNS` and set the option to `Auto-obtain`.
> 7. You are now no longer blocking system updates.


<!-- tabs:end -->
