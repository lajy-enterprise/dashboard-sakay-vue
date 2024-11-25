import { DefineStoreOptions, StoreDefinition } from 'pinia';

export interface AuthData {
    user: any | null
}
export interface AuthState {
    auth: AuthData | null
    authenticated: Boolean | null

}
export interface AuthProps {
    auth: AuthData | null
}
export interface AuthGetters {
    isAuthenticated: (state: AuthState) => Boolean,
    getStores: (state: AuthState) => Array<any>,
    getCurrentStore: (state: AuthState) => Array<any>
    getUser: (state: AuthState) => Array<any>
}
export interface AuthActions {
    init: (props: AuthProps) => void
    clear: () => void
}
// export type AuthStoreOptions = DefineStoreOptions<'app', AuthState, AuthGetters, AuthActions> & {
//     persist?: {
//         storage: Storage
//     }
// }
export type AuthStore = StoreDefinition<'app', AuthState, AuthGetters, AuthActions> & {
    persist?: {
        storage: Storage
    }
}
