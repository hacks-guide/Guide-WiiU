# Aroma {docsify-ignore-all}

## Autobooting Aroma

Currently, every time you want to launch Aroma you will have to launch the Health and Safety information app. If you wish to automatically launch into Aroma on every boot, you can autoboot the Health and Safety Information app.

If you don't want to autoboot Aroma, you can skip this step and follow the Setting Up PayloadLoader section below.

### Instruksjoner

1. Start the console to boot into the Wii U Menu, and then launch the Health and Safety Information app.
2. Press A to launch the `aroma` environment.
3. Press A to launch the Wii U Menu.
4. Once you are at the Wii U Menu, launch the PayloadLoader Installer.
5. Press A to select `Check`.
6. Select `Boot options`.
7. Du vil bli spurt om du vil bytte boot title. Press A to select `Switch to PayloadLoader`.
8. When the process has finished, press A to shutdown the console.
9. PayloadLoader vil nå kjøre automatisk når konsollen starter.

### Setting up PayloadLoader, Environment Loader and Aroma

Now, we are going to make the Aroma environment start automatically when your console loads the Health and Safety Information app and select Wii U Menu as the default boot option.

1. Launch the EnvironmentLoader.
   - If you are autobooting the PayloadLoader, simply turn on your Wii U.
   - If you skipped the autobooting steps, launch the Health and Safety Information app.

2. Using the D-Pad, navigate to `aroma` and press Y to set this to your default environment, then press A to launch into Aroma.
   - Det kan hende du får ett rødt advarselvindu som forteller deg at oppdateringer ikke er blokkert ordentlig. Trykk likevel A for å fortsette. Vi går gjennom hvordan man blokkerer oppdateringer i "Blokkere Systemoppdateringer" delen nedenfor.
   - To open the Environment Loader in the future, you have to hold X while your Wii U is booting or loading the Health and Safety Information app.

3. On the Aroma Boot Selector, the `Wii U Menu` should already be selected, press Y to set this to your default autobooting option, then press A to launch into the Wii U Menu.

4. Aroma will now be launched each time you boot the console (or load Health and Safety) and then straight into the Wii U Menu.
   - To open the Aroma Boot Selector in the future, you have to hold START (+) while the console is booting or loading the Health and Safety Information app.
   - Naviger lista ved å bruke D-Paden og velg hvilken tittel du vil autoboote inn i, så trykker du Y knappen for å sette det til autoboot tittel.
   - Trykk på A for å starte den valgte tittelen.
