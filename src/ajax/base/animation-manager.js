/** 存放所有动画 */
const animations = {}

/** 选中请求动画 */
export let requestAnimation = null;

/** 选中响应动画 */
export let responseAnimation = null;

/** 注册动画 */
export function registAnimation(name,reqfn,resfn){
    if(animations[name]){
        return 
    }else{
        animations[name] = {
            requestAnimation:reqfn,
            responseAnimation:resfn
        }
    }
}

/** 注销动画 */
export function unregistAnimation(){
    if(animations[name]){
        delete animations[name]
    }
}

/** 设定使用的动画 */
export function setAnimation(name){
    const targetAnimation = animations[name]
    requestAnimation = targetAnimation && targetAnimation.requestAnimation
    responseAnimation = targetAnimation && targetAnimation.responseAnimation
}

/** 清除使用的动画 */
export function clearAnimation(){
    requestAnimation = null;
    responseAnimation = null;
}
