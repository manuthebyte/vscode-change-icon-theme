# VSCode Change Icon Theme

This extension allows you to dynamically change your icon theme, if your system changes from light to dark mode or vice versa.

## Setup

Download the extension from https://link.com or build it yourself (see below).

When installing the extension, you should get an notification, which asks you to set your light and dark icon theme. If you don't get this notification, you can set the themes in the settings under `Settings > Extensions > Dynamic Icon Theme > Dark/Light Icon Theme`.

**Note:** In the settings, you have to set the name of the icon theme, not the display name. Example: `vscode-jetbrains-icon-theme-2023`

## Extension Settings

This extension contributes the following settings:

* `icontheme.darkIconTheme`: This icon theme will be used when the system is in dark mode. If this is not set, this extension will not do anything.
* `icontheme.lightIconTheme`: This icon theme will be used when the system is in light mode. If this is not set, this extension will not do anything.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release

## Contributing

If you want to contribute to this project, feel free to open a pull request or an issue.

To build this project, you need to have [Node.js](https://nodejs.org/en/) installed. Then, clone this repository and run `npm install` in the root directory. After that, you can run `vsce package` to create a `.vsix` file, which you can install in VSCode.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Support

If you like this project, feel free to support me!<br><br>
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/manuthebyte)