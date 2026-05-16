# Installing ISFShax (optional)
This page will guide you through installing ISFShax with Stroopwafel.

::: warning
Although ISFShax is safe, even reliable once installed and can even protect you from bricks, it can be dangerous as it uses the ISFS superblocks to install itself. **You are on your own and you are installing this to your own risk.** To protect yourself against **boot1 updates** (which are long gone and could cause a brick), ISFShax disables them. General updates can still be installed, just not boot1 updates to prevent bricks.
:::

## What is it for and how does it works?
ISFShax exploits the boot1 sector by replacing an ISFS (the filesystem that the SLC chip of your Wii U uses) which serves as a brick protection because, as you can guess, it installs itself in the first boot stage of a Wii U, giving you a "menu" (the minute menu) to troubleshoot stuff. What it **WON'T** do is fix an already existing brick.

ISFShax can be used to:

- Rebuilding / upgrading the MLC
- Removing 64GB MLC limit and disabling SCFM
- Brick protection (e.g. before doing region change)
- Cold booting redNAND (useful when when the eMMC is failing)
- It gives a minimal CFW, which can launch old homebrew using the homebrew launcher (not sure how useful since we have Aroma and Tiramisu)
- Stop the Wii U from turning the Tablet on during boot (using a stroopwafel plugin)
- Use partitioned HDDs / SD cards

::: danger

ISFShax will **NOT** protect you from bricks caused by:
- breaking boot1
- seeprom bricks
- installing a bad ISFShax.

:::

There are multiple ways to install ISFShax (exploits), follow the appropriate guide.

- If you use any CFW such as Tiramisu or Aroma, follow **Aroma**.
- If you have Haxchi or CBHC installed, follow **Haxchi** (although you should probably uninstall CBHC and/or Haxchi before doing this).
- If your browser still works and you can launch the browser exploit of u.wiidb.de, follow **Browser**.
- If you can't use the browser but Settings still work, follow **DNSpresso**.
- If your Wii U crashes in the initial setup on Mii creation, follow **DNSpresso**.
- If your Wii U can't launch the Browser at all or can't connect to the Internet, follow **UDPIH**.
- If none of the above works, use **Paid The Beak (PTB)**.

## Prepairing the SD Card

Windows hides file name extension by default. I highly recommend turning this feature off to avoid confusion. <br>
Make sure the SD card is formatted to FAT32 (already the case if you are using it for Homebrew). <br>
Cards up to 32GB come already with FAT32 from the factory. If you need to reformat them, I recommend using the offical formatter: Windows / Mac or Linux <br>
For cards above 32GB you can't use the official formatter: On Linux you can use gparted, on mac the built in DiskUtility. <br> On Windows, you have to use a third party tool like Rufus or if you have the latest Windows 11 you can use the command prompt (launch as Admin): <br> `format /FS:FAT32 X: (replace X with the letter of the SD card!)`

A .zip archive is available on https://isfsh.ax, download it and extract everything inside of the "sd" folder to the root of your SD Card. Delete any unnecessary files using the tree of files right below.

Your SD Card should look like this:

```shell
boot1now.img (UDPIH Only)
recovery_menu  (UDPIH Only)
launch.rpx (DNSpresso Only)
fw.img
ios.img
superblock.img
superblock.img.sha
wiiu
    payload.elf (Browser, DNSpresso, and Aroma Only)
    payloads (Browser, DNSpresso, and Aroma Only)
        fw_img_loader
            payload.elf
    ios_plugins
         00core.ipx
         5isfshax.ipx
    apps
        fw_img_loader (Haxchi Only)
            fw_img_loader.elf
            icon.png
            meta.xml
```

## Launching into minute

::::: tabs

:::: tab default Aroma

**This tab is only for Aroma and Tiramisu CFW users! Please use the correct exploit unless you are on Aroma and/or Tiramisu!**

1. Hold B on the GamePad if you have coldboot enabled, or go to the Health & Safety app and hold B there.
2. A black and white menu should show up asking you to choose a payload.
3. Choose `fw_img_loader`

::::

:::: tab Haxchi

**This tab is only for Haxchi and/or CBHC users! Please use the correct exploit unless you are on Haxchi or CBHC!**

1. Load the Homebrew Launcher.
2. Launch the fw.img loader app.

::::

:::: tab Browser

**This tab is only for people that needs to go through the Browser exploit! Please use the correct exploit unless you use the Browser!**

1. Open the Browser and browse to u.wiidb.de
2. Click on "HAXX"
3. Immediately hold B until you see the payload menu
4. Select the fw_img_loader

::::

:::: tab DNSpresso
**This tab is only for people that needs to use the DNSpresso exploit! Please use the correct exploit unless you need to use the DNSpresso exploit!**

If you can access the settings: 

1. On your Wii U head over to System Settings -> Internet -> Connect to the Internet and setup a new connection (Recommended!).
2. Go to (X) Connection List and select your newly created connection.
3. Select Change Settings -> DNS -> Do not auto-obtain.
4. Enter 85.215.57.182 as the Primary DNS and select Confirm.
5. Press (B) Back and select Connection Test.
6. Immediately hold B after starting the test until you see the payload menu
7. Select the fw_img_loader

If you are stuck on the Mii creation in the Inital setup:

1. If you already connected your Wii U to your AP / Router, turn the AP / Router or the Wifi on it off.
2. When the setup asks you if you already have a NNID, say yes (even if you don't have one)
3. Now it tries to connect to the Internet, but will fail and ask you to take you back to the Wifi settings, follow back to thge settings.
4. Turn your Router / AP on again and give it time to start.
5. If you don't already have your Wifi configured there, connect to it now, but enter a wrong password.
6. Edit your wifi connection and configure 85.215.57.182 as Primary DNS, if you entered a wrong password before set the right one now.
7. Press (B) Back and select Connection Test.
8. Immediately hold B after starting the test until you see the payload menu
9. Select the fw_img_loader

::::

:::: tab UDPIH

1. Load the recovery using UDPIH: https://gbatemp.net/threads/udpih-usb-host-stack-exploit-recovery-menu.613369/ (don't replace the recovery_menu)
2. The LED should turn purple and a countdown timer for loading boot1now.img should appear, wait the 5 seconds
3. Unplug your device
**Note:** If the LED turned purple, the UDPIH exploit worked, even if you don't see anything on the screen

:::: 

:::: tab Paid The Beak (PTB)
Follow this: https://gbatemp.net/threads/how-to-use-paid-the-beak-wii-u-unbricking-without-soldering.673686/

::::

:::::

Now you should see the minute main menu. If not, something went wrong. Make sure you have the correct fw.img file on the SD. <br>
In minute you move the cursor with the power button and enter with the eject button (swapped compared to the recovery menu). <br>

::: danger
ISFShax isn't installed yet! minute is just loaded temporarily and gone after a reboot.
:::

Note: minute only outputs 1080p through HDMI, no picture on the gamepad, and nothing on the analog outputs. <br>
Some people reported that the screen output is not working for them when minute was loaded from the recovery_menu. If you made sure nothing else is the problem (right fw.img, TV supports 1080p HDMI), you can try following along blindly by pressing the appropriate buttons. Make sure to wait long enough between the presses, so the system has time to load. Without display output skip the first backup and go directly to Installing ISFShax.

## Back up
If you already have an SLC backup or it is inconvenient for you to do one (no screen output), then you can skip this.

1. Navigate to Backup and Restore
2. `Dump SEEPROM & OTP` (This will be needed for redNAND / region changing)
3. `Dump SLC.RAW`
4. Return to Main Menu

## 