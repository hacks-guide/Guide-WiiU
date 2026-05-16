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

A .zip archive is available on https://isfsh.ax

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

Delete any unnecessary files that do not corresponds for your exploit.