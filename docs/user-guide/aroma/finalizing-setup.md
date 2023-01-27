# Aroma {docsify-ignore-all}

## Finalizing Setup

Now that Aroma is on your SD Card, we need to set up some final things.

### Booting into Aroma

1. Take the SD Card out of your computer and plug it into your Wii U console.
1. Start the EnvironmentLoader.
    - If you're autobooting into Tiramisu, this can be done by powering on your console and holding `X`.
1. Highlight the entry called `aroma` using the D-Pad.  
    - To make the console autoboot Aroma press `Y`.
1. Launch Aroma by pressing `A`.
    - If you get a red warning screen telling you that updates aren't blocked properly, you might want to block updates by following [this guide](../block-updates).
1. On the Boot Selector, the `Wii U Menu` should already be selected, press Y to set this to your default autobooting option, then press A to launch into the Wii U Menu.
    - To open the Boot Selector in the future, you have hold START (+) while launching Aroma.

You are now running Aroma. Any apps you have on your SD Card will show up on the Wii U menu.

?> **Aroma does not support the Homebrew Launcher**  
Launch apps from the Wii U menu using the `homebrew_on_menu` plugin.

You can now open the Plugin Configuration Menu using `L + Down + SELECT (-)` on the GamePad or Pro Controller (or `B + Down + Minus (-)` for WiiMotes).

### Installing apps, modules, and plugins

Base-Aroma already comes with several useful plugins and modules.  
You can also install additional Aroma compatible apps, modules and plugins. Below is a list with various recommendations.

| Name | Description | Installation Instructions |
| ---- | ----------- | ------------ |
| [FTPiiU Plugin](https://github.com/wiiu-env/ftpiiu_plugin/) ([Download](https://github.com/wiiu-env/ftpiiu_plugin/releases)) | Runs a FTP server in the background. | 1. Extract the downloaded `ftpiiu_vX_X.zip` file. <br> 2. Copy the `ftpiiu.wps` to the `wiiu/environments/aroma/plugins` folder on the root of your SD Card. |
| [SDCafiine](https://github.com/wiiu-env/sdcafiine_plugin/) ([Download](https://github.com/wiiu-env/sdcafiine_plugin/releases)) | Allows you to mod games by redirecting files to the SD Card. | 1. Extract the downloaded `sdcafiine_vX_X_X.zip` file. <br> 2. Copy the `sdcafiine.wps` to the `wiiu/environments/aroma/plugins` folder on the root of your SD Card. |
| [Bloopair](https://github.com/GaryOderNichts/Bloopair/) ([Download](https://github.com/GaryOderNichts/Bloopair/releases)) | Allows wirelessly connecting most popular Bluetooth capable controllers. | 1. Extract the contents of the newly downloaded `Bloopair_vX.X.X.zip` file. <br> 2. Copy the `30_bloopair.rpx` to the `wiiu/environments/aroma/modules/setup/` folder on the root of your SD Card. <br> 3. Copy the `wiiu` folder to the root of your SD Card. |
| [Screenshot Plugin](https://github.com/wiiu-env/ScreenshotWUPS/) ([Download](https://github.com/wiiu-env/ScreenshotWUPS/releases)) | Allows taking screenshots directly to the SD Card. | 1. Extract the downloaded `screenshot_plugin_vX_X.zip` file. <br> 2. Copy the `screenshot.wps` to the `wiiu/environments/aroma/plugins` folder on the root of your SD Card. |

### Booting into Tiramisu

If you find the need to boot into Tiramisu, for example, due to a homebrew app not supported by Aroma, simply do the following:

1. Take the SD Card out of your computer and plug it into your Wii U console.
1. Start the EnvironmentLoader.
    - If you're autobooting into it, this can be done by powering on your console and holding `X`.
1. Highlight the entry called `tiramisu` using the D-Pad.  
    - To make the console autoboot Tiramisu press `Y`.
1. Launch Tiramisu by pressing `A`.
