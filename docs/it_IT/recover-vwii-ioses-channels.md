# Recupera un Canale/IOS vWii

Questa pagina ti guiderà attraverso il processo di recupero di un IOS o di un canale sulla tua vWii, se per qualche motivo è stato corrotto o eliminato.

::: danger

This has the potential to destroy your vWii NAND if you are not careful! Please consider [backing up](aroma/nand-backup) your SLCCMPT and OTP if you do not yet have them backed up!

:::

::: tip

If you are using a system update blocking method, please [remove it](unblock-updates).

:::

::: tip

Due to mounting conflicts with this app, you need to also disable the FTPiiu plugin.

:::

## Cosa ti servirà

- A working [homebrew installation](index) on the Wii U side.
- The latest release of [vWii Decaffeinator](https://github.com/GaryOderNichts/vWii-Decaffeinator/releases).

## Istruzioni

1. Copy the contents of the `decaffeinator.zip` file to the root of your SD Card.
2. Togli la SD dal tuo computer e mettila nella tua Wii U.
3. Accendi il Wii U e avvia il CFW che preferisci (Mocha, Haxchi o CBHC).
4. Avvia l'Homebrew Launcher.
5. Avvia vWii Decaffeinator.

## Processo di recupero

Avrai diverse opzioni. It is recommended to first attempt restoring through the `Advanced options` menu if you know what to restore, or `Light mode` if you aren't sure. In extreme cases where no other option solves the issue, `Aggressive mode` should be chosen.

<!-- tabs:start -->

::::: tabs

:::: tab default Advanced options

### Advanced options

::: tip

This mode will clear the specified IOSes and channels to reinstall them. Tutti gli altri dati (Anche i cIOS) verranno conservati.

:::

:::details Clicca qui per mostrare cosa può essere recuperato con questo metodo.

![Advanced options](/files/Advanced-options.jpg)
![Advanced options2](/files/Advanced-options2.jpg)
![Advanced options3](/files/Advanced-options3.jpg)

:::

1. Select `Advanced options` on the menu.
2. Usa il D-Pad per selezionare cosa vorresti ripristinare.
3. Premi start per cominciare il ripristino.
4. Al termine del processo, acconsenti l'applicazione ad avviare le Impostazioni di Sistema.
5. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) to finish the restoration process.

::: tip

You can now re-enable your [system update blocking method](block-updates).

:::

::::

:::: tab Light mode

### Light mode

::: tip

This mode will clear the System Menu, Wii Message Board save data, IOSes, and other system titles to reinstall clean versions of them. Nota che questo rimuoverà i cIOS e dovranno essere reinstallati di nuovo. Tutti gli altri dati non verrano eliminati.

:::

1. Select `Light mode` on the menu.
2. Premi start per cominciare il ripristino.
3. Al termine del processo, acconsenti l'applicazione ad avviare le Impostazioni di Sistema.
4. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) to finish the restoration process.

::: tip

You can now re-enable your [system update blocking method](block-updates).

:::

::: info

Se ricevi l'errore 160-0101 quando avvii il sistema dopo aver utilizzato vWii Decaffeinator, rimuovi ogni disco, scollega eventuali dispositivi esterni e riavvia il sistema.

:::

::::

:::: tab Aggressive mode

### Aggressive mode

::: danger

This mode will clear **everything** to reinstall clean versions of the default IOSes and channels. Nota che TUTTI i dati verranno cancellati e la NAND del vWii ritornerà nel suo stato di stock!

:::

1. Select `Aggressive mode` on the menu.
2. Leggi l'avviso. Se vuoi procedere, premi Start per iniziare il processo.
3. Al termine del processo, acconsenti l'applicazione ad avviare le Impostazioni di Sistema.
4. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) to finish the restoration process.

::: tip

You can now re-enable your [system update blocking method](block-updates).

:::

::: info

Se ricevi l'errore 160-0101 quando avvii il sistema dopo aver utilizzato vWii Decaffeinator, rimuovi ogni disco, scollega eventuali dispositivi esterni e riavvia il sistema.

:::

::::

:::::

::: tip

If you receive Error Code 105-3102 when performing the system update, restart your console and reattempt the update.

:::
