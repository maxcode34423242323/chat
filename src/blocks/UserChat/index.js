import { useContext } from 'react'

import IsUserID from '../../component/IsUserID'
import WithoutUserID from '../../component/WithoutUserID'

import { Context } from '../../context/context'

import './s.css'

const UserChat = () => {
    const {state} = useContext(Context)
    return (
        <div className={'userChat'}>
            {state.isLoading ? null : state.choiceUser ? <IsUserID/> : <WithoutUserID/> }
        </div>
    )
}

export default UserChat