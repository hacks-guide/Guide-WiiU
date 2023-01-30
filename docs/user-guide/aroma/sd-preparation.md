# Aroma {docsify-ignore-all}

## SD Preparation

We will now place the required Aroma files on the SD Card.

?> **Notice**
    Your SD Card will need to be formatted as FAT32. If your SD Card is not formatted to FAT32, use [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) with 32k (32768) allocation unit size to format it.  
    **Do not** label the SD Card as `wiiu` or it will cause issues with homebrew.

### What You Need

- The latest files from the [Aroma download page](https://aroma.foryour.cafe).
    1. Scroll down to the **Download** section.
    1. Read through the steps and click on the checkboxes.
    1. Click on `Download Payloads` and `Download Base Aroma`.
- The latest release of the [Sigpatches Module](https://github.com/V10lator/SigpatchesModuleWiiU/releases).
    - You will need to download the `01_sigpatches.rpx` file.

### Instructions

1. Insert your Wii U's SD Card into your PC.
1. **Extract** and copy the `wiiu` folder of the two newly downloaded *`.zip`* files to the root of your SD Card.
    - The two `wiiu` folders should be merged if not done automatically.
1. Copy the `01_sigpatches.rpx` file to `/wiiu/environments/aroma/modules/setup` on your SD Card.

?> If your computer asks you to overwrite existing files on your SD Card, you will need to click yes.
