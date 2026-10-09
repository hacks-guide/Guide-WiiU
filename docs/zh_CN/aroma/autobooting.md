---
prev: true
next: true
---

# 自动启动Aroma

目前，每次您想要进入Aroma时，都需要进入健康与安全信息应用程序。如果您想要在每一次启动时都自动进入Aroma，可以自动启动健康与安全信息应用程序。

如果您不想要自动启动Aroma, 您可以跳过这一步并遵循下面的“设置PayloadLoader”部分。

## 操作步骤

1. 启动主机并进入Wii U Menu，之后启动健康与安全信息应用程序。
2. 按下A键进入 `aroma` 环境。
3. 按下A键进入Wii U菜单。
4. 当你打开Wii U菜单时，进入PayloadLoader安装程序（PayloadLoader Installer）。
5. 按下A键选择 `Check`。
6. 选择 `Boot options`。
7. 您会被询问是否要切换启动项目。按下A选择 `Switch to PayloadLoader`。
8. 完成操作后，按下A关机。
9. PayloadLoader将会在每次启动时自动加载。

## 设置PayloadLoader，Environment Loader和Aroma

现在, 我们要让Aroma在启动健康与安全信息应用并选择Wii U Menu（Wii U菜单）设置为默认选项。

1. 打开EnvironmentLoader.
   - 如果您设置了自动启动PayloadLoader，只要打开您的Wii U就可以了。
   - 如果您并没有设置自动启动，打开健康与安全信息应用。
2. 在`aroma`选项上按下Y键来把Aroma设置为您的默认环境，之后按下A键进入Aroma。
   ![](/assets/img/guide/EL_Highlight.png)
   - 如果您想在之后打开Environment Loader，您需要在主机启动或者加载健康与安全信息应用时按下X键。
3. 在Aroma加载选择器上，`Wii U Menu`应该已经被选中了，按下Y键将它设置为默认加载选项，之后按下A键进入Wii U Menu。
   ![](/assets/img/guide/ABM_Highlight.png)
4. Aroma以后将会在您启动主机（或者启动健康与安全信息应用程序）时自动启动并直接进入Wii U Menu。
   - 如果您想要在将来打开Aroma加载选择器，您需要在启动主机或加载健康与安全信息应用时按下START（+）键。
   - 用十字键选择您想要自动加载的选项，然后按下Y键将其设置为自动加载。
   - 按下A进入选择的选项。
