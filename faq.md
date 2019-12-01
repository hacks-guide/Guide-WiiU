# FAQ

### Hackable Switches

> Currently two hardware revisions of the Switch exist. Any Switch bought before July 2018 has a bootrom bug that allows us to launch CFW regardless of the firmware version on the switch. This bug cannot be fixed by Nintendo once the console leaves the factory, not even if the console is sent in for repairs. This means that all current and future firmwares will be able to launch CFW through this exploit on the old hardware revision.
>
> The first claims of a new hardware revision of the Switch that fixes the exploit needed to launch cfw have been made in July 2018. Currently the only way to know if your Switch is hackable is by trying to send the payload in RCM. Even with this exploit fixed, any Switch on firmware 4.1 and below will be able to launch CFW through other means in the far future. The serial number on the back of the box can possibly tell you which consoles are patched and which aren't. See [GBA Thread](https://gbatemp.net/threads/switch-informations-by-serial-number.481215/) for an up to date list.

### What is Haxchi, and do I need it?

> Haxchi is a secondary entrypoint which uses certain DS Virtual Console titles to allow for access to homebrew while being completely offline (still works with online but no connection required to launch CFW)
>
> Haxchi is not required, however if you want to use homebrew on your Wii U while offline you will need it. It’s highly recommended as it’s more stable than the browser entry point, especially on the newest firmware.
>
> The cheapest DS VC games usable for  this exploit:
Dr. Kawashima's Brain Training [PAL]\
Brain Age: Train Your Brain in Minutes a Day! [USA]\
Kawashima: Motto Nou wo Kitaeru Otona no DS Training [JPN]
>
> Currently all bans have been for very obvious and intrusive actions, specifically:

### Can I install games from my USB instead of SD?

> First off your Hard Disk/Flashdrive has to be formatted to Fat32. 
Then you want to just put the Homebrew Launcher, Wup Installer and an /install folder on the hard disk with the game you want to install. 
You also need this version of Mocha on the sdcard https://www.wiiubru.com/appstore/#/app/mocha_fat32
Now you start the Wii U up with no USB devices plugged in at all. Once at the menu you plug in the Fat32 disk and it will ask to format it, you say no. 
You then boot into Homebrew and run the Mocha Fat32 support version and set the following settings:
>
> Config view mode: default\
Skip this menu on launch: on\
Show launch image: on\
Don’t relaunch OS: off\
Launch System Menu: on\
RedNAND: off
>
>It should now put you back to System Menu but now the USB should replace the SD. 
You then go back into Homebrew and the only app that should be in there is Wup Installer because that's all you put on the Hard Disk earlier. 
Launch that and select to install the game to NAND.

### How to Delete Update Folder to Block Updates on Wii U

> Download filezilla client here https://filezilla-project.org/download.php and also the correct ftp server for wiiu. For Haxchi/CBHC and Mocha get this one http://wiiubru.com/appstore/#/app/fpiiu-cbhc 
>
>Run FTPiiu_Everywhere on your wiiu and take note of the IP. On the PC run filezilla and set up a new connection using this screenshot https://cdn.discordapp.com/attachments/399670410565910529/533075194546356224/1.png but use the IP shown on the wiiu screen.
>
>Once connected look in the right hand panel and double click "storage_mlc" to enter it. Then double click "sys" to enter it. You should now see a folder called "update". Right click it and delete it.

### Better Config for Mocha Users on 5.5.2

> Config view mode: default
Skip this menu on launch: on
Show launch image: off
Don’t relaunch OS: on
Launch System Menu: off
RedNAND: off
>
> This will launch CFW and put you straight back into the Homebrew Channel so you don't have to launch the web exploit again to get back in. You can leave the Homebrew Channel manually with Home afterwards.
>
> To re-enter Homebrew just launch the MiiMaker channel.

### Direct CFW

> Installing game backups - 32 GB  (Smaller size may be used, but certain titles are 20 GB in size)\
Running game mods - 8 GB  (FAT32 USB drive may be used as well for mods)\
Only running homebrew apps - Any size
>
>Brands - Sandisk, Samsung or PNY\
Note: Avoid class 4 SD cards, and avoid Ebay

### Haxchi common errors

> -3: No SD card detected. Re-insert the SD card and try again. Make sure the SD card is in FAT32 format. If the error persists, try blowing into the SD slot as it can get dusty inside.
>
>-4: SD detected but could not mount. Check to see if the SD is using MBR and not GPT. Also check to see if there are any other partitions on the SD card and merge them into one primary partition.
>
>-5: Missing files on the SD. Check to see if your SD has Homebrew Launcher located in wiiu/apps/homebrew_launcher/homebrew_launcher.elf

### Browser errors

> Fsgetmount Source Failed: Same as -3 above, means no SD card detected. Re-insert the SD and try again.
>
>FSOpenFile Failed [...] payload.elf: Missing payload file on SD. Make sure you have payload.elf in the wiiu folder.
>
>FSOpenFile Failed: Missing homebrew_launcher on SD. Make sure you have homebrew_launcher.elf in the wiiu/apps/homebrew_launcher folder.

!> **Homebrew risks**
    *Be careful with launching downloaded homebrew! If you don't know the source, it's best not to launch it.*<br><br>
    *Homebrew can potentially damage your system! Atmosphere provides protections against common bricking methods, but these are not guaranteed to always work!*

### Data Management asks to delete unnecessary data, what does it mean?

> This refers to leftover files from incomplete installs. Always choose Yes to delete this data, as it takes up space for no good reason.
If it ever stays stuck on deleting the data in an infinite loop, you can manually delete the data yourself. Use Ftpiiu Everywhere and browse to Storage_MLC/usr/import/ then delete any files in the folder if any exists. This is where the partial installs exist after incomplete installs. It'll be Storage_USB if installed to a USB. The import folder should always be kept empty.

### Can I install homebrew on WiiU with a USB instead of SD card?

> No, you must have an SD card for a first time setup, a usb can then be used to install game backups, vc injects, etc, but not to store Homebrew Apps which are required to set everything up

### My HDD doesn't work or makes a weird clicking-sound, what should I do?

> The reason behind that is that the Wii U doesn't give enough power through one USB port to use the Hard Drive.
>
>You can fix this by either using a powered HDD or using a Y-Cable to connect the HDD to two USB ports.
>
>If your HDD worked for some time and then stopped working for some games/all games, it is the same issue and can be fixed with the same methods.

### When extracting some of the files there are duplicates of certain ones called "info.json" & "manifest.install", what do I do with those?

> Nothing special, you can leave them there, delete them or replace them with new ones, those files are not used in the process therefore won't have any impact by being or not being there