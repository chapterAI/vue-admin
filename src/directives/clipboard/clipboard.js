import Clipboard from 'clipboard'

export default {
    bind(el, binding) {
        if (binding.arg === "success") {
            el._clipboard_success = binding.value
        } else if (binding.arg === "error") {
            el._clipboard_error = binding.value
        } else {
            const clipboard = new Clipboard(el, {
                text() { return binding.value },
                action() { return binding.arg === 'cut' ? 'cut' : 'copy' }
            })
            clipboard.on('success', e => {
                const callback = el._clipboard_success
                callback && callback(e)
            })
            clipboard.on('error', e => {
                const callback = el._clipboard_error
                callback && callback(e)
            })
            el._clipboard = clipboard
        }
    },
    update(el, binding) {
        if (binding.arg === "success") {
            el._clipboard_success = binding.value
        } else if (binding.arg === "error") {
            el._clipboard_error = binding.value
        } else {
            el._clipboard.text = ()=>  binding.value 
            el._clipboard.action = ()=> binding.arg === 'cut' ? 'cut' : 'copy' 
        }
    },
    unbind(el, binding) {
        if (binding.arg === "success") {
            delete el._clipboard_success
        }else if(binding.arg === "error"){
            delete el._clipboard_error 
        }else{
            el._clipboard.destroy()
            delete el._clipboard
        }
    }
}