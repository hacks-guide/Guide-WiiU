# CBHC

## Launching CFW {docsify-ignore}

Now that you have your NAND backup in case anything goes wrong later, you can run CFW on your system.

Unlike systems such as the DSi, Wii, or 3DS, Wii U CFW is temporary. This means that as soon as your system reboots, you will lose CFW and have to follow these instructions again. This can be skipped by installing CBHC to a Haxchi CFW installation.

!> Installing CBHC incorrectly can brick your Wii U. Make sure to follow the following rules when installing CBHC:
<br>- The DS game has to be legitimately installed from the eShop
<br>- Don't format the system while CBHC is installed
<br>- Don't delete the user account that bought the DS VC game
<br>- Don't re-install the same game using WUP Installer or from the eShop
<br>- Don't install Haxchi over CBHC
<br>- Don't uninstall the DS Virtual Console game without [properly uninstalling CBHC first](extras/uninstall-cbhc)
<br>- Don't move the DS Virtual Console game to a USB drive

!> Breaking one of the above rules will result in a brick.

### Instructions

1. Take the SD Card out of your PC and plug it into your Wii U.
1. If you haven't already, now download your DS VC game of choice from the eShop.
1. Launch the Homebrew Launcher on your system as [previously explained](user-guide/cbhc/browser-exploit).
1. Navigate the Homebrew Launcher and open the Haxchi app.
1. Use the DPAD to navigate the cursor to the game you want to install Haxchi to and press the A button to install it.
1. Once the installation has finished, your console will launch the Wii U Menu. You will see your game replaced by a Haxchi icon.
1. Run the modified DS game. This will reboot the console and enable CFW.
1. Run the modified DS game again and hold the A button after launching it. This will run the Homebrew Launcher.
1. Navigate the Homebrew launcher and run the CBHC app.
1. Use the DPAD to navigate the cursor to the game you previously installed Haxchi to and press the A button to install CBHC.
1. Once the installation has finished, your console will launch the Wii U Menu.
1. Reboot your console. If CBHC installed correctly, you should see a new boot menu.
1. Use the DPAD to navigate to `Autoboot: Disabled` and press the A button until it says `Autoboot: System Menu`.
1. Use the DPAD to navigate to `Boot System Menu` and press the A button. This will launch the Wii U Menu with CFW enabled.
1. Your console now automatically boots into CFW every reboot.
1. You can now re-attach any USB devices you had attached before starting the guide.

<script src="https://cdn.jsdelivr.net/npm/docsify-pagination@2/dist/docsify-pagination.min.js"></script>
<div class="docsify-pagination-container">
<div class="pagination-item pagination-item--previous">
    <a href="#/user-guide/cbhc/nand-backup">
    <div class="pagination-item-label">
        <svg class="icon" width="10" height="16" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
        <polyline fill="none" vector-effect="non-scaling-stroke" points="8,2 2,8 8,14"></polyline>
        </svg>
        <span>PREVIOUS</span>
    </div>
    <div class="pagination-item-title">Making a NAND Backup</div>
    </a>
</div>
<div class="pagination-item pagination-item--next">
    <a href="#/user-guide/cbhc/installing-hblc">
    <div class="pagination-item-label">
        <span>NEXT</span>
        <svg width="10" height="16" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
        <polyline fill="none" vector-effect="non-scaling-stroke" points="2,2 8,8 2,14"></polyline>
        </svg>
    </div>
    <div class="pagination-item-title">Install Homebrew Channel</div>
    </a>
</div>
</div>