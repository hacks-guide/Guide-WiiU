# FAQ {docsify-ignore-all}

### Does Homebrew have any risks?

> Currently homebrewing the Wii U does not expose you to a risk of being banned by Nintendo unless you cheat in online games. You should, however, always be careful with launching downloaded homebrew, especially if you don't trust the source, as Homebrew can potentially damage your system!

### What is Haxchi, and do I need it?

> Haxchi is a secondary entry point which uses certain DS Virtual Console titles to allow for access to homebrew while being completely offline (still works with online but no connection required to launch CFW)
>
> Haxchi is not required, however, if you want to use homebrew on your Wii U while offline you will need it. It’s highly recommended as it’s more stable than the browser entry point, especially on the newest firmware.
>
> The cheapest DS VC games usable for  this exploit:
Dr. Kawashima's Brain Training [PAL]\
Brain Age: Train Your Brain in Minutes a Day! [USA]\
Kawashima: Motto Nou wo Kitaeru Otona no DS Training [JPN]

### Can I install games from my USB instead of SD?

> Yes. It is, however, a bit more complicated than installing from SD Card. Detailed instructions are in the `Install from USB` tab in the [Dumping guide](docs/extras/dump-games).

### How to Delete Update Folder to Block Updates on Wii U

> If you want to delete the update folder to block updates, see it's tab in the [Blocking Updates guide](docs/extras/block-updates)

### What SD Card size is recommended?

> Installing game backups - 32 GB  (Smaller size may be used, but certain titles are 20 GB in size)\
Running game mods - 8 GB  (FAT32 USB drive may be used as well for mods)\
Only running homebrew apps - Any size
>
> Brands - SanDisk, Samsung or PNY\
Note: Avoid class 4 SD Cards, and avoid eBay

### Haxchi common errors

> -3: No SD Card detected. Re-insert the SD Card and try again. Make sure the SD Card is in FAT32 format. If the error persists, try blowing into the SD slot as it can get dusty inside.
>
> -4: SD detected but could not mount. Check to see if the SD is using MBR and not GPT. Also, check to see if there are any other partitions on the SD Card and merge them into one primary partition.
>
> -5: Missing files on the SD. Check to see if your SD has Homebrew Launcher located in /wiiu/apps/homebrew_launcher/&zwnj;homebrew_launcher.elf

### Browser errors

> Fsgetmount Source Failed: Same as -3 above, means no SD Card detected. Re-insert the SD and try again.
>
> FSOpenFile Failed [...] payload.elf: Missing payload file on SD. Make sure you have payload.elf in the wiiu folder.
>
> FSOpenFile Failed: Missing homebrew_launcher on SD. Make sure you have homebrew_launcher.elf in the /wiiu/apps/homebrew_launcher folder.

### Data Management asks to delete unnecessary data, what does it mean?

> This refers to leftover files from incomplete installs. Always choose Yes to delete this data, as it takes up space for no good reason.
If it ever stays stuck on deleting the data in an infinite loop, you can manually delete the data yourself. Use Ftpiiu Everywhere and browse to Storage_MLC/usr/import/ then delete any files in the folder if any exists. This is where the partial installs exist after incomplete installs. It'll be Storage_USB if installed to a USB. The import folder should always be kept empty.

### Can I install homebrew on Wii U with a USB instead of SD Card?

> No, you must have an SD Card for a first time setup, a USB can then be used to install game backups, vc injects, etc, but not to store Homebrew Apps which are required to set everything up

### My HDD doesn't work or makes a weird clicking sound, what should I do?

> The reason behind that is that the Wii U doesn't give enough power through one USB port to use the Hard Drive.
>
>You can fix this by either using a powered HDD or using a Y-Cable to connect the HDD to two USB ports.
>
>If your HDD worked for some time and then stopped working for some games/all games, it is the same issue and can be fixed with the same methods.

### When extracting some of the files there are duplicates of certain ones called "info.json" & "manifest.install", what do I do with those?

> Nothing special, you can leave them there, delete them or replace them with new ones. Those files are not used in the process, therefore, won't have any impact by being or not being there
