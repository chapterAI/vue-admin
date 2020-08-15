import { registAnimation } from '@/ajax/base/animation-manager'

registAnimation(
    'demo',
    (config) => {
        console.log(config)
    },
    (data)=>{
        console.log(data)
    }
) 