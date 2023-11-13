import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch } from './actions';

function App() {
  const dispatch = useDispatch() ;
  const users = useSelector(state => state.myFirstReducer.users);


  return (
    <>
    <button onClick={() => dispatch(getUsersFetch())}>Get Users</button>
    <div>Users: {users.map((users => (<div>{users.name}</div>)))}</div>
      
    </>
  );
}

export default App
