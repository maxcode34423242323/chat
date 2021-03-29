import InputChat from "../InputChat"
import TitleChat from "../TitleChat"
import { Scrollbars } from 'react-custom-scrollbars';
import Chat from "../Chat";
import { Context } from "../../context/context";
import { useContext } from "react";

const IsUserID = () => {
    const {state: {choiceUser: {name}}} = useContext(Context)
    return (
        <>
            <TitleChat title={`Диалог с ${name}`}/>
            <Chat/>
            <InputChat/>
        </>
    )
}
export default IsUserID