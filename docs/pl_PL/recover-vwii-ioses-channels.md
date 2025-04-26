# Odzyskiwanie vWii IOS/Channel

Ta strona poprowadzi Cię przez proces odzyskiwania IOS lub kanału na Twoim vWii, nie ważne czy został uszkodzony lub usunięty z jakiegokolwiek powodu.

::: danger

This has the potential to destroy your vWii NAND if you are not careful! Please consider [backing up](aroma/nand-backup) your SLCCMPT and OTP if you do not yet have them backed up!

:::

::: tip

If you are using a system update blocking method, please [remove it](unblock-updates).

:::

::: tip

Due to mounting conflicts with this app, you need to also disable the FTPiiu plugin.

:::

## Czego potrzebujesz

- A working [homebrew installation](index) on the Wii U side.
- The latest release of [vWii Decaffeinator](https://github.com/GaryOderNichts/vWii-Decaffeinator/releases).

## Instrukcje

1. Copy the contents of the `decaffeinator.zip` file to the root of your SD Card.
2. Wyjmij kartę SD ze swojego komputera i podłącz ją do konsoli Wii U.
3. Power on your Wii U and launch Aroma.
4. Launch vWii Decaffeinator from the Wii U Menu.

## Proces odzyskiwania

Masz kilka opcji. It is recommended to first attempt restoring through the `Advanced options` menu if you know what to restore, or `Light mode` if you aren't sure. In extreme cases where no other option solves the issue, `Aggressive mode` should be chosen.

<!-- tabs:start -->

::::: tabs

:::: tab default Advanced options

### Opcje zaawansowane

::: tip

This mode will clear the specified IOSes and channels to reinstall them. Wszystkie pozostałe dane (w tym cIOS'y) zostaną zachowane.

:::

:::details Kliknij tutaj, aby zobaczyć, co można odzyskać za pomocą tej metody.

![Advanced options](/files/Advanced-options.jpg)
![Advanced options2](/files/Advanced-options2.jpg)
![Advanced options3](/files/Advanced-options3.jpg)

:::

1. Select `Advanced options` on the menu.
2. Użyj D-Pada, aby przełączyć się na to, co chcesz przywrócić.
3. Naciśnij Start, aby rozpocząć proces przywracania.
4. Kiedy proce się zakończy, zezwól aplikacji na uruchomienie System Settings.
5. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) to finish the restoration process.

::: tip

You can now re-enable your [system update blocking method](block-updates).

:::

::::

:::: tab Light mode

### Light mode

::: tip

This mode will clear the System Menu, Wii Message Board save data, IOSes, and other system titles to reinstall clean versions of them. Pamiętaj, że to również usunie wszystkie cIOSy i muszą one zostać ponownie zainstalowane. Wszystkie pozostałe dane zostaną zachowane.

:::

1. Select `Light mode` on the menu.
2. Naciśnij Start, aby rozpocząć proces przywracania.
3. Kiedy proce się zakończy, zezwól aplikacji na uruchomienie System Settings.
4. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) to finish the restoration process.

::: tip

You can now re-enable your [system update blocking method](block-updates).

:::

::: info

Jeśli otrzymasz kod błędu 160-0101 podczas uruchamiania systemu po użyciu vWii Decaffeinator, wyjmij z czytnika płytę i odłącz wszelkie zewnętrzne napędy oraz uruchom ponownie system.

:::

::::

:::: tab Aggressive mode

### Aggressive mode

::: danger

This mode will clear **everything** to reinstall clean versions of the default IOSes and channels. Pamiętaj, że wszystkie cIOS, zapisane dane i kanały zostaną utracone, a vWii NAND zostanie przywrócony do stanu fabrycznego!

:::

1. Select `Aggressive mode` on the menu.
2. Przeczytaj ostrzeżenie w całości. Jeśli chcesz kontynuować, naciśnij przycisk Start, aby rozpocząć proces przywracania.
3. Kiedy proce się zakończy, zezwól aplikacji na uruchomienie System Settings.
4. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) to finish the restoration process.

::: tip

You can now re-enable your [system update blocking method](block-updates).

:::

::: info

Jeśli otrzymasz kod błędu 160-0101 podczas uruchamiania systemu po użyciu vWii Decaffeinator, wyjmij z czytnika płytę i odłącz wszelkie zewnętrzne napędy oraz uruchom ponownie system.

:::

::::

:::::

::: tip

If you receive Error Code 105-3102 when performing the system update, restart your console and reattempt the update.

:::
