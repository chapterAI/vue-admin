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

export function isHttpRequest(link){
    return /http[s]?:.*/.test(link)
}

export function matchHttp(link){
    return link.match(/http[s]?:.*/)[0]
}