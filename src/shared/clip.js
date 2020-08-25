import Clipboard from 'clipboard'

export default function clip(text, event, action, success, fail) {
    const clipboard = new Clipboard(event.target, {
        text: () => text,
        action: () => action
    })
    clipboard.on('success',function(e){
        success && success(e)
        clipboard.destroy()
    })
    clipboard.on('error',function(e){
        fail && fail(e)
        clipboard.destroy()
    })
    clipboard.onClick(event)
}