import { CHOICE_USER, HIDE_LOADER, POST_USER, SHOW_LOADER, POST, USER_ID } from "./type"

export const stateInit = {
    choiceUser: null,
    isLoading: false,
    posts: null,
    id: null
}

const reducer = (state = stateInit, action) => {
    switch (action.type) {
        case CHOICE_USER:
            return {
                ...state, choiceUser: action.payload
            }
        case SHOW_LOADER:
            return {
                ...state, isLoading: true
            }
        case HIDE_LOADER:
            return {
                ...state, isLoading: false
            }
        case POST_USER:
            return {
                ...state, posts: action.payload
            }
        case POST:
            return {
                ...state, posts: [...state.posts, action.payload]
            }
        case USER_ID:
            return {
                ...state, id:  action.payload
            }
        default:
            return state;
    }
}
export default reducer