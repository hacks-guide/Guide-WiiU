# Common Issues & Fixes {docsify-ignore-all}
---
### Haxchi common errors

 - **-3:** No SD Card detected. Re-insert the SD Card and try again. Make sure the SD Card is in FAT32 format. If the error persists, try blowing into the SD slot as it can get dusty inside.

 - **-4:** SD detected but could not mount. Check to see if the SD is using MBR and not GPT. Also, check to see if there are any other partitions on the SD Card and merge them into one primary partition.

 - **-5:** Missing files on the SD. Check to see if your SD has Homebrew Launcher located in <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher<wbr>/homebrew_launcher.elf</code>.

### Browser errors

 - **FSGetMountSource failed:** Same as -3 above, means no SD Card detected. Re-insert the SD and try again.

 - **FSOpenFile failed [...] payload.elf:** Missing payload file on SD. Make sure you have payload.elf in the wiiu folder.

 - **FSOpenFile failed:** Missing `homebrew_launcher` on SD. Make sure you have `homebrew_launcher.elf` in the <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher</code> folder.

### Data Management asks to delete unnecessary data, what does it mean?

This refers to leftover files from incomplete installs. Always choose Yes to delete this data, as it takes up space for no good reason. If it ever stays stuck on deleting the data in an infinite loop, you can manually delete the data yourself.  
Use FTPiiU Everywhere and browse to `/storage_mlc/usr/import` then delete any files in the folder if any exists. This is where the partial installs exist after incomplete installs. It'll be `/storage_usb/usr/import` if installed to a USB.  
The `import` folder should always be kept empty.

### My HDD doesn't work or makes a weird clicking sound, what should I do?

The reason behind that is that the Wii U doesn't give enough power through one USB port to use the Hard Drive.

You can fix this by either using a powered HDD or using a Y-Cable to connect the HDD to two USB ports.

If your HDD worked for some time and then stopped working for some games/all games, it is the same issue and can be fixed with the same methods.

### Quando si estraggono alcuni file ci sono determinati duplicati chiamati "info.json" & "manifest.install", cosa devo fare con questi?

Niente di speciale, puoi lasciarli lì, eliminarli o sostituirli con dei nuovi. Those files are not used in the process, therefore, won't have any impact by being or not being there.

### My console suddenly lost online connectivity and I have an HDD sitting on top of the console, what should I do?

The internal antenna may have been influenced by the hard drive magnet.  
You can move the HDD to a different position atop the Wii U, or move it off the Wii U entirely.