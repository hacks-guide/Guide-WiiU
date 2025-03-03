---
prev: true
---

# Finalizing Setup

Now that PayloadLoader, Environment Loader and Aroma are installed, we are going to finalize the setup.

## Additional Homebrew Apps

::: tip

All Homebrew applications are loaded from the Wii U Menu on Aroma.

:::

- **SaveMii Mod WUT Port** is a homebrew app that lets you manage your Wii U and vWii save data.
- **Bloopair** is an Aroma module that lets you wirelessly connect most popular Bluetooth capable controllers. See [this page](https://gbatemp.net/threads/bloopair-connect-controllers-from-other-consoles-natively.594289/) for more details.
- The **Homebrew Appstore** lets you browse and download homebrew apps directly from your Wii U.

### Additional Homebrew Apps - What You Need

- The latest version of [SaveMii Mod WUT Port](https://wiiu.cdn.fortheusers.org/zips/SaveMiiModWUTPort.zip).
- `wiiu-extracttosd.zip` of the [HB Appstore](https://github.com/fortheusers/hb-appstore/releases/).

### Additional Homebrew Apps - Extracting Files to the SD Card

1. Copy the contents of the newly downloaded `SaveMiiModWUTPort.zip` file to the root of your SD Card.
2. Copy the contents of the newly downloaded `wiiu-extracttosd.zip` file to the root of your SD Card.

## Recommended Plugins

| Name                                                                                                                                                  | Description                                                                              | Installation Instructions                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [FTPiiU Plugin](https://github.com/wiiu-env/ftpiiu_plugin/) ([Download](https://github.com/wiiu-env/ftpiiu_plugin/releases))       | Runs a FTP server in the background.                                     | 1. Extract the downloaded `ftpiiu_vX_X.zip` file. <br> 2. Copy the `ftpiiu.wps` to the `wiiu/environments/aroma/plugins` folder on the root of your SD Card.                                                                                                                                   |
| [SDCafiine](https://github.com/wiiu-env/sdcafiine_plugin/) ([Download](https://github.com/wiiu-env/sdcafiine_plugin/releases))     | Allows you to mod games by redirecting files to the SD Card.             | 1. Extract the downloaded `sdcafiine_vX_X_X.zip` file. <br> 2. Copy the `sdcafiine.wps` to the `wiiu/environments/aroma/plugins` folder on the root of your SD Card.                                                                                                                           |
| [Bloopair](https://github.com/GaryOderNichts/Bloopair/) ([Download](https://github.com/GaryOderNichts/Bloopair/releases))          | Allows wirelessly connecting most popular Bluetooth capable controllers. | 1. Extract the contents of the newly downloaded `Bloopair_vX.X.X.zip` file. <br> 2. Copy the `30_bloopair.rpx` to the `wiiu/environments/aroma/modules/setup/` folder on the root of your SD Card. <br> 3. Copy the `wiiu` folder to the root of your SD Card. |
| [Screenshot Plugin](https://github.com/wiiu-env/ScreenshotWUPS/) ([Download](https://github.com/wiiu-env/ScreenshotWUPS/releases)) | Allows taking screenshots directly to the SD Card.                       | 1. Extract the downloaded `screenshot_plugin_vX_X.zip` file. <br> 2. Copy the `screenshot.wps` to the `wiiu/environments/aroma/plugins` folder on the root of your SD Card.                                                                                                                    |

## Pretendo Network

Pretendo is a replacement service for the Nintendo Network, which brings back online services as they are set to be discontinued. It also revives the Miiverse service, via juxtaposition. The official guide can be found [here](https://pretendo.network/docs/install/wiiu).

## Booting Tiramisu (optional)

::: warning

Tiramisu is now archived, and was succeeded by Aroma and considered outdated. No more Homebrew will be developed for it, and services like Pretendo have ended support for it.

:::

However, if you find the need to boot into Tiramisu, for example, to use a legacy Homebrew app, do the following:

1. Download the latest files from [Tiramisu for your café](https://tiramisu.foryour.cafe).
2. Copy the `wiiu` folder to the root of your SD Card.
   - The folder should merge with the existing `wiiu` folder if not done automatically.
3. Take the SD Card out of your computer and plug it into your Wii U console.
4. Start the EnvironmentLoader.
   - If you're autobooting into it, this can be done by powering on your console and holding X.
   - You do not need to reinstall the PayloadLoader if you already did so with Aroma.
5. Highlight the entry called `tiramisu` using the D-Pad.
6. Launch Tiramisu by pressing A.
7. Launch the Wii U Menu by pressing A.
   - To make the console autoboot the Wii U Menu when loading the Tiramisu environment, press Y.
8. Homebrew Launcher can be loaded by launching the Mii Maker app.
