const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
	const iconThemes = vscode.extensions.all.flatMap(extension => {
		const contributes = extension.packageJSON.contributes;
		return contributes && contributes.iconThemes
		  ? contributes.iconThemes.map(iconTheme => iconTheme.id)
		  : [];
	  });

	// Check if user has configured the icon themes
	const configuration = vscode.workspace.getConfiguration();
	const darkIconTheme = configuration.get('icontheme.darkIconTheme');
	const lightIconTheme = configuration.get('icontheme.lightIconTheme');

	if (darkIconTheme === "" || lightIconTheme === "") {
		// Send a message to the user with a link to the settings.json file
		const selection = await vscode.window.showInformationMessage(
			'Please configure the icon themes to have them dynamically changed.',
			'Configure now',
			'Later'
		);

		if (selection === 'Later') {
			return;
		}

		// Open popup with list of icon themes
		const selectedDarkIconTheme = await vscode.window.showQuickPick(iconThemes, {
			placeHolder: 'Select dark icon theme'
		});

		if (!selectedDarkIconTheme) {
			return;
		}

		const selectedLightIconTheme = await vscode.window.showQuickPick(iconThemes, {
			placeHolder: 'Select light icon theme'
		});

		if (!selectedLightIconTheme) {
			return;
		}

		await configuration.update(
			'icontheme.darkIconTheme',
			selectedDarkIconTheme,
			vscode.ConfigurationTarget.Global
		);

		await configuration.update(
			'icontheme.lightIconTheme',
			selectedLightIconTheme,
			vscode.ConfigurationTarget.Global
		);

		vscode.window.showInformationMessage('Icon themes configured successfully.');
	}

	vscode.window.onDidChangeActiveColorTheme(() => {
		setIconTheme();
	});

	setIconTheme();
}

// This method is called when your extension is deactivated
function deactivate() {}

function setIconTheme() {
	const config = vscode.workspace.getConfiguration();
    const isDark = vscode.window.activeColorTheme.kind === vscode.ColorThemeKind.Dark;
    const iconThemeName = isDark ? config.get("icontheme.darkIconTheme") : config.get("icontheme.lightIconTheme");

    if(iconThemeName !== "null") vscode.workspace.getConfiguration().update('workbench.iconTheme', iconThemeName, vscode.ConfigurationTarget.Global);
}

module.exports = {
	activate,
	deactivate
}
