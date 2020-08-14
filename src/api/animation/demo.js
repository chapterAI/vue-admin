import { registAnimation } from '@/util/adminRequestAnimation'

registAnimation(
    'demo',
    (config) => {
        console.log(config)
    },
    (data)=>{
        console.log(data)
    }
)