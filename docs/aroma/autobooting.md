---
prev: true
next: true
---

# Autobooting Aroma

Currently, every time you want to launch Aroma you will have to launch the Health and Safety information app. If you wish to automatically launch into Aroma on every boot, you can autoboot the Health and Safety Information app.

If you don't want to autoboot Aroma, you can skip this step and follow the Setting Up PayloadLoader section below.

## Instructions

1. Start the console to boot into the Wii U Menu, and then launch the Health and Safety Information app.
1. Press A to launch the `aroma` environment.
1. Press A to launch the Wii U Menu.
1. Once you are at the Wii U Menu, launch the PayloadLoader Installer.
1. Press A to select `Check`.
1. Select `Boot options`.
1. You will be asked if you want to switch the boot title. Press A to select `Switch to PayloadLoader`.
1. When the process has finished, press A to shutdown the console.
1. The PayloadLoader will now be launched automatically on every boot.

## Setting up PayloadLoader, Environment Loader and Aroma

Now, we are going to make the Aroma environment start automatically when your console loads the Health and Safety Information app and select Wii U Menu as the default boot option.

1. Launch the EnvironmentLoader.
    - If you are autobooting the PayloadLoader, simply turn on your Wii U.
    - If you skipped the autobooting steps, launch the Health and Safety Information app.
1. Press Y on `aroma` to set this to your default environment, then press A to launch into Aroma.
    ![](/assets/img/guide/EL_Highlight.png)
    - To open the Environment Loader in the future, you have to hold X while your Wii U is booting or loading the Health and Safety Information app.
1. On the Aroma Boot Selector, the `Wii U Menu` should already be selected, press Y to set this to your default autobooting option, then press A to launch into the Wii U Menu.
    ![](/assets/img/guide/ABM_Highlight.png)
1. Aroma will now be launched each time you boot the console (or load Health and Safety) and then straight into the Wii U Menu.
    - To open the Aroma Boot Selector in the future, you have to hold START (+) while the console is booting or loading the Health and Safety Information app.
    - Navigate the list using the D-Pad to hover on the title you want to autoboot in, then press the Y button to set this to your autoboot title.
    - Press A to launch the selected title.
