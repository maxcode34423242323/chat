import { useReducer } from 'react';
import './App.css';
import UserChat from './blocks/UserChat';
import UserList from './blocks/UserList';
import Loader from './component/Loader';
import { Context } from './context/context';
import reducer, { stateInit } from './context/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, stateInit)
  return (
    <Context.Provider value={{state, dispatch}}>
      <div className="main grey lighten-5">
        <UserList/>
        <UserChat/>
        
      </div>
      {state.isLoading && <Loader/>}
    </Context.Provider>
  );
}

export default App;
