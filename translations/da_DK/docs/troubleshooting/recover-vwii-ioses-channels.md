# Recover a vWii IOS/Channel
---
This page will guide you through the process of recovering a IOS or channel on your vWii, whether it has been corrupted or deleted for whatever reason.

<details>
<summary>Click here to show what can be recovered with this method.</summary>

- Wii Menu Manual
- vWii System Channel
- Region Select
- System Menu
- Mii Channel
- Wii U Menu
- Wii Shop Channel
- IOS 9
- IOS 12
- IOS 13
- IOS 14
- IOS 15
- IOS 17
- IOS 21
- IOS 22
- IOS 28
- IOS 31
- IOS 33
- IOS 34
- IOS 35
- IOS 36
- IOS 37
- IOS 38
- IOS 41
- IOS 43
- IOS 45
- IOS 46
- IOS 48
- IOS 53
- IOS 55
- IOS 56
- IOS 57
- IOS 58
- IOS 59
- IOS 62
- IOS 80
- BC-NAND
- BC-WFS

</details>

!> This has the potential to destroy your vWii NAND if you are not careful! Please consider [backing up](mocha/online-exploit/nand-backup) your SLCCMPT and OTP if you do not yet have them backed up!

?> If you are using a system update blocking method, please [remove it](unblock-updates).

### What You Need {docsify-ignore}

- A working [homebrew installation](introduction) on the Wii U side.
- The latest release of [vWii Decaffeinator](https://github.com/GaryOderNichts/vWii-Decaffeinator/releases).

### Instructions {docsify-ignore}

1. Copy the contents of the `decaffeinator.zip` file to the root of your SD Card.
1. Take the SD Card out of your computer and plug it into your Wii U console.
1. Power on your Wii U and launch the CFW of your choice (Mocha, Haxchi or CBHC).
1. Launch the Homebrew Launcher.
1. Launch vWii Decaffeinator.

### Recovering Process

You will be provided with various options. It is recommended to first attempt restoring through the `Advanced options` menu if you know what to restore, or `Light mode` if you aren't sure. In extreme cases where no other option solves the issue, `Aggressive mode` should be chosen.

<!-- tabs:start -->

#### **Advanced options**

### Advanced options

?> This mode will clear the specified IOSes and channels to reinstall them. All other data (including cIOSes) will be preserved.

1. Select `Advanced options` on the menu.
1. Use the D-Pad to toggle what you would like to be restored.
1. Press Start to initiate the restoration process.
1. When the application finishes, allow the application to launch the System Settings.
1. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) to finish the restoration process.

?> You can now re-enable your [system update blocking method](block-updates).

#### **Light mode**

### Light mode

?> This mode will clear the System Menu, Wii Message Board save data, IOSes, and other system titles to reinstall clean versions of them. Please note this will remove all cIOSes as well and must be reinstalled. All other data will be preserved.

1. Select `Light mode` on the menu.
1. Press Start to initiate the restoration process.
1. When the application finishes, allow the application to launch the System Settings.
1. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) to finish the restoration process.

?> You can now re-enable your [system update blocking method](block-updates).

#### **Aggressive mode**

### Aggressive mode

!> This mode will clear **everything** to reinstall clean versions of the default IOSes and channels. Please note that all cIOSes, save data, and channels will be lost, and the vWii NAND will be returned to its stock form!

1. Select `Aggressive mode` on the menu.
1. Read the warning in its entirety. If you wish to proceed, press Start to initiate the restoration process.
1. When the application finishes, allow the application to launch the System Settings.
1. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) to finish the restoration process.

?> You can now re-enable your [system update blocking method](block-updates).

> If you receive Error Code 160-0101 when booting up the system after using vWii Decaffeinator, take out the inserted disc and unplug any external drives and restart the system.

<!-- tabs:end -->

> If you receive Error Code 105-3102 when performing the system update, restart your console and reattempt the update.