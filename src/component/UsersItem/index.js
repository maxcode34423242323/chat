import av from './img/av.png'
import './s.css'
import { Scrollbars } from 'react-custom-scrollbars';
import { useHttp } from '../../hooks/http.hook';
import { useContext } from 'react';
import { Context } from '../../context/context';
import { CHOICE_USER, POST_USER } from '../../context/type';
const a = 'Зачем скрывать контент сайта от индексации? Контент на сайте скрывается от поисковых систем для достижения различных целей. '

const UserItems = ({users}) => {
   const {request} = useHttp()
   const {dispatch} = useContext(Context)
    
    const ckickHandler = async (id) => {
        const data = await request(`https://jsonplaceholder.typicode.com/posts?userId=${id.id}`, 'GET')
        dispatch({type: POST_USER, payload: data})
        dispatch({type: CHOICE_USER, payload: id})
    }
    return (
        <Scrollbars>
            <ul className="collection">
                    {users && users.map((e, i)=> {
                        return (
                            <li onClick={()=>ckickHandler(e)} key={e.id} className="collection-item avatar d-flex">
                                <img src={av} alt="" className="circle img"/>
                                <div className={'textBlock'}>
                                    <div className={'groupTitle'}>
                                        <span className="title">{e.name}</span>
                                        <div className={'listDate'}>{new Date().toLocaleDateString()}</div>
                                    </div>
                                    <p className={"text"}>{a}</p>
                                </div>
                            </li>
                        )
                    })}
            </ul>
        </Scrollbars>
    )
}
export default UserItems