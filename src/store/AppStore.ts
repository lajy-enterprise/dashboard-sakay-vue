import { defineStore } from 'pinia';
import { AuthState, AuthProps } from '@/interface';

export const useAppStore = defineStore('app', {
    state: (): AuthState => ({
        auth: null,
        authenticated: false
    }),
    getters: {
        isAuthenticated: (state: AuthState) => {
            const isAuth = state?.authenticated;
            return isAuth;
        },
        getStores: (state: AuthState) => {
            return state?.auth?.user?.stores;
        },
        getCurrentStore: (state: AuthState) => {
            return state?.auth?.user?.current_store;
        },
        getUser: (state: AuthState) => {
            return state?.auth?.user;
        }
    },
    actions: {
        init(props: AuthProps) {
            this.$state.auth = props.auth;
            this.$state.authenticated = true;
        },
        clear() {
            this.$state.auth = null;
            this.$state.authenticated = false;
        }
    },
    persist: {
        storage: sessionStorage,
    },
})
