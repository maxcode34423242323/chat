import './s.css'
import { useContext, useEffect, useRef } from 'react';
import { Context } from '../../context/context';
import Scrollbars from 'react-custom-scrollbars';


const self = 'self postItem'
const wrap = 'selfWrap postWrapper z-depth-1'

const Chat = () => {
    const {state:{posts, choiceUser}} = useContext(Context)
    const messageEnd = useRef(null)
    useEffect(()=>{
        messageEnd.current.scrollIntoView({block: "center", behavior: "smooth" })
    })
    return (
        <div className={'chat'}>
            <Scrollbars className={'Yremove'}>
            <div className={'chatScroll'}>
            {posts.map((e,i) => {
                const id = e.userId === 15
                return (
                    <div className={id ? self : 'postItem'} key={e.id}>
                        <div className={id ? wrap : 'postWrapper z-depth-1'}>
                            <span className={'chatName'}>{id ? 'Вы' : choiceUser.name}</span>
                            <div className={'chatText'}>{e.body}</div>
                            <div className={'chatDate'}>{new Date().toLocaleTimeString()}</div>
                        </div>
                    </div>
                )
            })}
            <div ref={messageEnd}></div>
            </div>
            </Scrollbars>
           
        </div>
    )
}
export default Chat