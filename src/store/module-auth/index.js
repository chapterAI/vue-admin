import { tokenState, tokenGetters, tokenMutations, tokenActions } from './token'
import { levelState, levelGetters, levelMutations, levelActions } from './level'
import { routesState, routesGetters, routesMutations, routesActions } from './routes'

export default {
    namespaced: true,
    state: {
        ...tokenState,
        ...levelState,
        ...routesState
    },
    getters: {
        ...tokenGetters,
        ...levelGetters,
        ...routesGetters
    },
    mutations: {
        ...tokenMutations,
        ...levelMutations,
        ...routesMutations
    },
    actions: {
        ...tokenActions,
        ...levelActions,
        ...routesActions
    },
    modules: {

    }
}