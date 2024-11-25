import { defineStore } from 'pinia';

interface State {
    auth: AuthData | null
    authenticated: Boolean | null

}
interface AuthData {
    name: string
    age: number
}

export const useAppStore = defineStore('app', {
    state: () => ({
        auth: null,
        authenticated: false
    }),
    getters: {
        isAuthenticated: (state) => {
            const isAuth = state?.$state?.authenticated;
            return isAuth;
        },
        getStores: (state) => {
            return state?.$state?.auth?.user?.stores;
        },
        getCurrentStore: (state) => {
            return state?.$state?.auth?.user?.current_store;
        },
        getUser: (state) => {
            return state?.$state?.auth?.user;
        }
    },
    actions: {
        init(props) {
            this.$state.auth = props.auth;
            this.$state.authenticated = true;
        },
        clear() {
            this.$state.auth = null;
            this.$state.authenticated = false;
        }
    },
    persist: [{
        storage: sessionStorage,
    }],
});
