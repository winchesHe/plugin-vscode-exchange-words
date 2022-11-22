import type { ExtensionContext } from 'vscode'
import { commands, window } from 'vscode'

export function activate(cxt: ExtensionContext) {
  commands.registerCommand('exchangeWords.test', () => {
    window.showInformationMessage('test')
  })
  const exchangeWordsCommand = commands.registerTextEditorCommand('exchangeWords', (textEdit, edit) => {
    const document = textEdit.document
    const firstSelections = textEdit.selections[0]
    const secondSelections = textEdit.selections[1]
    const firstText = document.getText(firstSelections)
    const secondText = document.getText(secondSelections)

    edit.replace(firstSelections, secondText)
    edit.replace(secondSelections, firstText)
  })

  cxt.subscriptions.push(exchangeWordsCommand)
}

export function deactivate() {

}
