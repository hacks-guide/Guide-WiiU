# Mocha

## Making a NAND Backup {docsify-ignore}

In case anything should go wrong in the later process and your Wii U ends up bricked, restoring a previously made NAND backup can fix it.

### Instructions

?> The Wii U NAND is (depending on your model) either 8 or 32GB. As a result of this, to create a full backup of your console's NAND, your SD Card has to be larger than the size of your NAND. If you do not have a large enough SD Card, you can skip the optional `MLC` section which includes save files and game data and is not needed to recover most types of bricks.

?> Restoring a NAND Backup on the Wii U requires additional hardware and micro soldering skills.
<br>However, making a NAND Backup is **always** useful, so please do not skip it.
<br>Your NAND Backup is unique to your system. Backups from other consoles **won't** work.

1. Navigate through the Homebrew Launcher and launch the `Wii U NAND Dumper` app.
1. Use the Wii U Gamepad's DPAD to enter the following configuration:
 - Dump SLC: **yes**
 - Dump SLCCMPT: **yes**
 - Dump MLC: **optional**
 - Dump OTP: **yes**
 - Dump SEEPROM: **yes**
1. Press the A button to start the dumping process.
1. When the process completed, power off your Wii U, take your SD Card out of the Wii U and plug it into your PC.
1. To make sure you don't lose the files, copy the `slc.bin`, `slccmpt.bin`, `seeprom.bin`, `otp.bin` and if you chose to go with a full backup, `every mlc.bin.part` file to your computer.
1. Delete the files from your SD Card to free up space.

<script src="https://cdn.jsdelivr.net/npm/docsify-pagination@2/dist/docsify-pagination.min.js"></script>
<div class="docsify-pagination-container">
<div class="pagination-item pagination-item--previous">
    <a href="#/user-guide/mocha/browser-exploit">
    <div class="pagination-item-label">
        <svg class="icon" width="10" height="16" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
        <polyline fill="none" vector-effect="non-scaling-stroke" points="8,2 2,8 8,14"></polyline>
        </svg>
        <span>PREVIOUS</span>
    </div>
    <div class="pagination-item-title">Browser Exploit</div>
    </a>
</div>
<div class="pagination-item pagination-item--next">
    <a href="#/user-guide/mocha/launching-cfw">
    <div class="pagination-item-label">
        <span>NEXT</span>
        <svg width="10" height="16" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
        <polyline fill="none" vector-effect="non-scaling-stroke" points="2,2 8,8 2,14"></polyline>
        </svg>
    </div>
    <div class="pagination-item-title">Launching CFW</div>
    </a>
</div>
</div>