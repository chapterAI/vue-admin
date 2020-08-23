

export default {
    namespaced:true,
    state:{
        cacheViews:['About']
    },
    getters:{
        getCacheViews(state){
            return state.cacheViews
        }
    },
    mutations:{
        addCacheView(state,name){
            if(!name) return 
            if(!state.cacheViews.includes(name)){
                state.cacheViews.push(name)
            }
        },
        delCacheView(state,name){
            if(!name) return 
            const index = state.cacheViews.indexOf(name)
            if(index>=0){
                state.cacheViews.splice(index, 1)
            }
        }
    },
    actions:{
        
    }
}