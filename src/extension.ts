// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
export const range = (start: number, end: number) => Array.from({length: (end - start + 1)}, (v, k) => k + start);

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.clipLines', () => {
		const config = vscode.workspace.getConfiguration('clipLines');
		const newlineCharacter:string = "\n";
		const editor:vscode.TextEditor = vscode.window.activeTextEditor!;
		const document = editor.document;
		const selection = editor.selection;
		const lineStart:number = selection.start.line;
		const lineEnd:number = selection.end.line;
		const filepath:string = config.onlyIncludeRelativePath ? vscode.workspace.asRelativePath(document.uri) : document.uri.path;
		const fileExtention = document.fileName.split('.').pop();
		const filepathInfo = `${filepath}(${lineStart}-${lineEnd})`;
		let txt:string = '';

		for (var lineNumber of range(lineStart, lineEnd)) {
			txt += txt !== '' ? newlineCharacter : "";
			txt += `${lineNumber + 1}${config.lineNumberSeparater}${document.lineAt(lineNumber).text}`;
		}

		if (config.enableMarkDownFormat) {
			let codePrefix = `${fileExtention}:`;
			if (config.includeFilepathInMarkDownSyntaxHighlight) {
				codePrefix = `${codePrefix}${filepathInfo}`;
				txt = `\`\`\`${codePrefix}${newlineCharacter}${txt}${newlineCharacter}\`\`\``;
			} else {
				txt = `\`\`\`${codePrefix}${newlineCharacter}${txt}${newlineCharacter}\`\`\``;
				txt = `${filepathInfo}${newlineCharacter}${newlineCharacter}${txt}`;
			}
		} else {
			txt = `${filepathInfo}${newlineCharacter}${txt}`;
		}

		vscode.env.clipboard.writeText(txt);
		vscode.window.showInformationMessage("Clipped");
		// vscode.env.clipboard.readText();
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
