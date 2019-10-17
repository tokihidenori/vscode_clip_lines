import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as clipCode from '../../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Sample test', () => {
		const ws = vscode.workspace;
		const document = ws.openTextDocument('./extension.test.ts');
		// const document = ws.textDocuments[0];
		const editor:vscode.TextEditor = vscode.window.activeTextEditor!;
		console.log(editor.document.uri);
		console.log(document);
		assert.equal(-1, 1);
		// assert.equal(-1, [1, 2, 3].indexOf(0));
	});
});
