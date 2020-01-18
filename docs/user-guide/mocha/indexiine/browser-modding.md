# Mocha - Indexiine

## Internet Browser Modding {docsify-ignore}

Now that you have your NAND backup in case anything goes wrong later, you can install Indexiine on your system.

### What You Need

- The Indexiine <a href="docs/files/index.html" download>index.html</a> file
- This release of [FTPiiU Everywhere](http://wiiubru.com/appstore/zips/fpiiu-cbhc.zip)
- An FTP client such as [FileZilla](https://filezilla-project.org/download.php?show_all=1)

### Instructions

1. Extract the `fpiiu-cbhc.zip` file to the root of your SD Card
1. Install FileZilla on your computer

### Modding The Internet Browser

!> Before you proceed, you must be aware that every time you modify your console's system files, there is always the potential for an unrecoverable brick.

1. Take the SD Card out of your computer and plug it into your Wii U console.
1. Launch the Internet Browser and go to `google.com`.
1. Close and re-launch the Internet Browser.
1. Go to `wiiuexploit.xyz`.
1. Launch Mocha CFW.
1. Launch FTPiiU Everywhere.
1. On your computer, launch FileZilla.
1. Type in the IP address displayed by your Wii U in the `Host` field at the top of the window and click on `Quickconnect`
1. - If you have a EUR region Wii U, navigate to <code>/storage_mlc/sys/title/<wbr>000500030/1001220A/<wbr>content/pages</code>
   - If you have a USA region Wii U, navigate to <code>/storage_mlc/sys/title/<wbr>000500030/1001210A/<wbr>content/pages</code>
   - If you have a JPN region Wii U, navigate to <code>/storage_mlc/sys/title/<wbr>000500030/1001200A/<wbr>content/pages</code>
1. Make a backup of the original `index.html` file by copying it from your Wii U to your computer.
1. Replace the original `index.html` by the previously downloaded Indexiine `index.html` file.

!> You must overwrite the html file, not delete it. If you ever delete it, you will get the error code 112-1037 and you will have to [manually set the right file permissions](troubleshooting/fix-errcode-112-1037) for it.

1. Close FTPiiU Everywhere and the Homebrew Launcher.
1. Launch the Internet Browser.
1. Click the button (blue door) at the top left corner of the screen and wait a few seconds.
1. You should now be back in the Homebrew Launcher.
1. Close the Homebrew Launcher.
1. Launch the Internet Browser.
1. Click the button (blue door) at the top left corner of the screen and immediately press the HOME button.

The Homebrew Launcher will now be launched every time you launch the Internet Browser even without an Internet connection.

?> If you're getting the error code 112-1037, please see [this page](troubleshooting/fix-errcode-112-1037).

<script src="https://cdn.jsdelivr.net/npm/docsify-pagination@2/dist/docsify-pagination.min.js"></script>
<div class="docsify-pagination-container">
<div class="pagination-item pagination-item--previous">
    <a href="#/user-guide/mocha/indexiine/nand-backup">
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
    <a href="#/user-guide/mocha/indexiine/launching-cfw">
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