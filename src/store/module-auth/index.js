import { tokenState, tokenGetters, tokenMutations, tokenActions } from './token'
import { levelState, levelGetters, levelMutations, levelActions } from './level'

export default {
    namespaced: true,
    state: {
        ...tokenState,
        ...levelState
    },
    getters: {
        ...tokenGetters,
        ...levelGetters
    },
    mutations: {
        ...tokenMutations,
        ...levelMutations
    },
    actions: {
        ...tokenActions,
        ...levelActions
    },
    modules: {

    }
}