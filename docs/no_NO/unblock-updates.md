# Fjerne Blokkering av Systemoppdateringer

Dette må du gjøre hvis du noen gang trenger en systemoppdatering.

::: tip

If you are running Aroma and have deleted the update folder, you need to disable both autobooting and recreate the update folder.

:::

::: tip

Users with ISFShax must have at least v4 of the `wafel_isfshax_patch.ipx`/`5isfshax.ipx` stroopwafel plugin on the SD Card or SLC in order to update.

:::

## Instruksjoner

::::: tabs

:::: tab default Recreating Update Folder

### Gjenopprette "update" mappen

1. Sørg for at du er på den nyeste Aroma betaen.
2. Boot Aroma mens du holder inne + (Pluss).
3. Hold + (Plus) **and** - (Minus) until it says "Updates not blocked!".

::::

:::: tab Removing Aroma Autoboot

### Fjerne Aroma Autoboot

::: tip

When autobooting into the PayloadLoader, updates are automatically blocked. Følg guiden nedenfor for å deaktivere den.

:::

::: tip

Users with ISFShax will have to remove the `wafel_payloader.ipx`/`5payldr.ipx` (if used) from the SD Card (`sd:/wiiu/ios_plugins`) or SLC (`slc:/sys/hax/ios_plugins`) to stop autobooting into Aroma.

:::

1. Kjør PayloadLoader Installer fra Wii U Menyen.
2. Trykk A for å velge `Check`.
3. Velg `Boot options`.
4. Du vil bli spurt om du vil bytte boot title. Press A to select `Switch back to Wii U Menu`.
5. Når prosessen er ferdig, trykk A for å slå av konsollen.
6. Kjør en System Update.
7. Follow [this](aroma/autobooting) to re-enable autobooting.

::::

:::: tab Removing DNS Blocks

### Fjerne DNS-blokkeringen

1. Enter the Wii U's system settings and navigate to `Internet > Connect to the Internet > Connection List >`
  `Your WiFi connection > Change Settings > DNS` and set the option to `Auto-obtain`.
2. Du blokkerer ikke lenger systemoppdateringer.

::::

:::::
