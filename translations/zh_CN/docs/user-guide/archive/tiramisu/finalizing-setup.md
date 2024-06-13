# Tiramisu {docsify-ignore-all}

## Finalizing Setup

Now that PayloadLoader, Environment Loader and Tiramisu are installed, we are going to finalize the setup.

We are going to make the Tiramisu environment start automatically when your console autoboots the Health and Safety Information app (or when manually launching it if you chose not to autoboot it) and select Wii U Menu as default as well as getting additional homebrew apps.

### Setting up PayloadLoader, Environment Loader and Tiramisu

1. 打开你的 Wii U。
    - The Environment Loader should show up.
1. Using the D-Pad, navigate to `tiramisu` and press Y to set this to your default environment, then press A to launch into Tiramisu.
    - You might get a red warning screen telling you that updates aren't blocked properly. Press A to continue anyway. We're going to block updates in the "Blocking Updates" section below.
    - To open the Environment Loader in the future, you have to hold X while your Wii U is booting up.
1. On the Tiramisu Boot Selector, the `Wii U Menu` should already be selected, press Y to set this to your default autobooting option, then press A to launch into the Wii U Menu.
    - To open the Tiramisu Boot Selector in the future, you have to hold START (+) while your Wii U is booting up.

?> Once you're booted into the Tiramisu environment, you can open the Mii Maker at any time to get into the Homebrew Launcher. <br>Homebrew Launcher will be empty for first-time modders. Follow the rest of the guide to install apps into the Homebrew Launcher. <br>To get back into the Mii Maker, simply press the HOME button while in the Homebrew Launcher.

### Blocking Updates
While Tiramisu's PayloadLoader already has built-in update blocking functionality, it is recommended to delete the update folder to effectively block system updates. If you get a red warning screen while booting into Tiramisu, the update folder still exists and it is recommended to delete it using [this guide](../block-updates).

### Additional Homebrew Apps

- **SaveMii Mod WUT Port** is a homebrew app that lets you manage your Wii U and vWii save data.
- **Bloopair** is a Tiramisu module that lets you wirelessly connect most popular Bluetooth capable controllers. See [this page](https://gbatemp.net/threads/bloopair-connect-controllers-from-other-consoles-natively.594289/) for more details.
- The **Homebrew Appstore** lets you browse and download homebrew apps directly from your Wii U.

### Additional Homebrew Apps - What You Need

- The latest version of [SaveMii Mod WUT Port](https://wiiubru.com/appstore/zips/SaveMiiModWUTPort.zip).
- The latest version of [Bloopair](https://github.com/GaryOderNichts/Bloopair/releases).
- `wiiu-extracttosd.zip` of the [HB Appstore](https://github.com/fortheusers/hb-appstore/releases/).

### Additional Homebrew Apps - Extracting Files to the SD Card

1. Copy the contents of the newly downloaded `SaveMiiModWUTPort.zip` file to the root of your SD Card.
1. Extract the contents of the newly downloaded `Bloopair_vX.X.X.zip` file.  
   Copy the `30_bloopair.rpx` to the `wiiu/environments/tiramisu/modules/setup/` folder on the root of your SD Card.  
   Copy the `wiiu` folder to the root of your SD Card.
1. Copy the contents of the newly downloaded `wiiu-extracttosd.zip` file to the root of your SD Card.
