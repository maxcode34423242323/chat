import TitleChat from '../../component/TitleChat'
import './s.css'
import { useHttp } from './../../hooks/http.hook';
import { useContext, useEffect, useState } from 'react';
import UserItems from '../../component/UsersItem';
import { USER_ID } from '../../context/type'
import { Context } from '../../context/context';

const UserList = () => {
    const { request } = useHttp()
    const [users, setUsers] = useState()
    const {dispatch} = useContext(Context)
    const getUsers = async () => {
        try {
            const uri = 'http://3-dev.ru/api/testChat'

            const {id, list} = await request(uri,'GET', null, {
                    'Authorization': 'Basic ' + window.btoa('Agafonov_S:Agafonov_S_1141')
            })
            setUsers(list)
            dispatch({type: USER_ID, payload: id})
        } catch (e) {}
    }
    useEffect(()=> {
        getUsers()
    },[])

    return (
        <div className={'userList'}>
            <TitleChat title={'Ваши контакты'}/>
            <UserItems users={users} />
        </div>
    )
}

export default UserList