import Sticky from './sticky'

const install = function(Vue){
    Vue.directive('sticky',Sticky)
}

if(window.Vue){
    window.sticky = Sticky
    Vue.use(install);
}

Sticky.install = install

export default Sticky