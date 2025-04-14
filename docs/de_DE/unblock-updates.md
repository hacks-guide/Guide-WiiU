# Unblocking Updates

This is needed if you ever need to perform a System Update.

::: tip

If you are running Aroma and have deleted the update folder, you need to disable both autobooting and recreate the update folder.

:::

::: tip

Users with ISFShax must have at least v4 of the `wafel_isfshax_patch.ipx`/`5isfshax.ipx` stroopwafel plugin on the SD Card or SLC in order to update.

:::

## Anleitung

::::: tabs

:::: tab default Recreating Update Folder

### Recreating Update Folder

1. Stelle sicher, dass du die neueste Aroma-Beta hast.
2. Boot Aroma while holding + (Plus).
3. Hold + (Plus) **and** - (Minus) until it says "Updates not blocked!".

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
2. Press A to select `Check`.
3. Select `Boot options`.
4. You will be asked if you want to switch the boot title. Press A to select `Switch back to Wii U Menu`.
5. When the process finished, press A to shutdown the console.
6. Perform the System Update.
7. Follow [this](aroma/autobooting) to re-enable autobooting.

::::

:::: tab Removing DNS Blocks

### Removing DNS Blocks

1. Enter the Wii U's system settings and navigate to `Internet > Connect to the Internet > Connection List >`
  `Your WiFi connection > Change Settings > DNS` and set the option to `Auto-obtain`.
2. You are no longer blocking system updates.

::::

:::::
