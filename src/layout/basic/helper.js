export function hasShowingChild(routes){
    return  routes.some((route)=>{
        return !route.hidden
    })
}

export function reslovePath(basicPath,relativePath){
    if(relativePath[0] === '/'){
        return relativePath
    }else{
        if(basicPath[basicPath.length-1] === '/'){
            return basicPath + relativePath
        }else{
            return basicPath + '/' + relativePath
        }
    }
}