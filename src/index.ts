import { commands, window } from 'vscode'

export function activate() {
  commands.registerCommand('exchangeWords.test', () => {
    window.showInformationMessage('test')
  })
  commands.registerTextEditorCommand('exchangeWords', (textEdit, edit) => {
    const document = textEdit.document
    const firstSelections = textEdit.selections[0]
    const secondSelections = textEdit.selections[1]
    const firstText = document.getText(firstSelections)
    const secondText = document.getText(secondSelections)

    edit.replace(firstSelections, secondText)
    edit.replace(secondSelections, firstText)
  })
}

export function deactivate() {

}
