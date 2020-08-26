import Auth from './auth'

const install = function(Vue){
    Vue.directive('auth',Auth)
}

Auth.install = install

if(window.Vue){
    window.auth = Auth
    Vue.use(install);
}

export default Auth