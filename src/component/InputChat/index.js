import { useContext, useState } from 'react'
import { Context } from '../../context/context'
import { POST } from '../../context/type'
import './s.css'

const InputChat = () => {
    const [value, setValue] = useState('')
    const {state, dispatch} = useContext(Context)

    const formHandler = (e) => {
        e.preventDefault()
        dispatch({type: POST, payload: {body:value, id: Date.now(), userId: 15}})
        setValue('')
    }
    return (
        <form onSubmit={(e)=> formHandler(e)} className={'inputChat'}>
            <div className="input-field col s6">
                <input autoComplete="off" onChange={(e)=> setValue(e.target.value)} id="icon_prefix" value={value} type="text" className="validate chatInput"/>
                <label htmlFor="icon_prefix">Введите сообщение</label>
            </div>
        </form>
    )
}

export default InputChat