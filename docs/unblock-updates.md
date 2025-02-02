# Unblocking Updates

This is needed if you ever need to perform a System Update.

::: tip

If you are running Aroma and have deleted the update folder, you need to disable both autobooting and recreate the update folder.

:::

::: tip

Users with ISFShax must have at least v4 of the `wafel_isfshax_patch.ipx`/`5isfshax.ipx` stroopwafel plugin on the SD Card or SLC in order to update.

:::

## Instructions

::::: tabs

:::: tab default Recreating Update Folder

### Recreating Update Folder

1. Make sure you have the latest Aroma beta.
1. Boot Aroma while holding + (Plus).
1. Hold + (Plus) **and** - (Minus) until it says "Updates not blocked!".

::::

:::: tab Removing Aroma Autoboot

### Removing Aroma Autoboot

::: tip

When autobooting into the PayloadLoader, updates are automatically blocked. Follow the guide below to disable it.

:::

::: tip

Users with ISFShax will have to remove the `wafel_payloader.ipx`/`5payldr.ipx` (if used) from the SD Card (`sd:/wiiu/ios_plugins`) or SLC (`slc:/sys/hax/ios_plugins`) to stop autobooting into Aroma.

:::

1. Launch the PayloadLoader Installer from the Wii U Menu.
1. Press A to select `Check`.
1. Select `Boot options`.
1. You will be asked if you want to switch the boot title. Press A to select `Switch back to Wii U Menu`.
1. When the process finished, press A to shutdown the console.
1. Perform the System Update.
1. Follow [this](aroma/autobooting) to re-enable autobooting.

::::

:::: tab Removing DNS Blocks

### Removing DNS Blocks

1. Enter the Wii U's system settings and navigate to `Internet > Connect to the Internet > Connection List >`
`Your WiFi connection > Change Settings > DNS` and set the option to `Auto-obtain`.
1. You are no longer blocking system updates.

::::

:::::
