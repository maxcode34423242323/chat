import { useCallback, useContext} from 'react'
import { Context } from '../context/context'
import { HIDE_LOADER, SHOW_LOADER } from '../context/type'

export const useHttp = () => {
    const {dispatch} = useContext(Context)
    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        dispatch({type: SHOW_LOADER})
        try {
            const res = await fetch(url, {
                method,
                headers,
                body
            })
            
            const data = await res.json()
            if(!res.ok) {
                throw new Error('Fetch error!')
            }
            dispatch({type: HIDE_LOADER})
            return data
        } catch (e) {
            dispatch({type: HIDE_LOADER})
            throw e
        }
    },[dispatch])
    return { request }
}