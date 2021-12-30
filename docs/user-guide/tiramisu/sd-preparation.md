# Tiramisu

## SD Preparation {docsify-ignore}

We will now place the required CFW files and some additional homebrew files on the SD Card.

?> **Notice**
    Your SD Card will need to be formatted as FAT32. If your SD Card is not formatted to FAT32, use [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) with 32k (32768) allocation unit size to format it. </br> **Do not** label the SD Card as `wiiu` or it will cause issues with homebrew.

### What You Need {docsify-ignore}

- The latest files from [Tiramisu for your café](https://tiramisu.foryour.cafe).
    - Select `Nanddumper`, `PayloadLoader Installer`, `Base-Tiramisu`, `Bloopair for Tiramisu` and `Homebrew Appstore`
- The [01_sigpatches.rpx](/docs/files/01_sigpatches.rpx ':ignore') file

### Instructions {docsify-ignore}

1. Insert your Wii U's SD Card into your PC.
1. Copy the contents of the newly downloaded `files.zip` file to the root of your SD Card.
1. Copy the `01_sigpatches.rpx` file to `/wiiu/environments/tiramisu/modules/setup` on your SD Card