export default {
    state:{
        collapse:false,
        refresh:false
    },
    getters:{
        getCollapse(state){
            return state.collapse
        },
        getRefresh(state){
            return state.refresh
        }
    },
    mutations:{
        toggleCollapse(state){
            if(state.collapse){
                state.collapse = false
            }else{
                state.collapse = true
            }
        },
        refresh(state){
            if(state.refresh){
                state.refresh = false
            }else{
                state.refresh = true
            }
        }
    },
    actions:{

    },
    namespaced:true
}