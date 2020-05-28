import React from 'react';
import './App.css';
import UsersProvider from './context/UsersContext';
import Showcase from './components/Showcase/Showcase';
import EditUserModal from './components/EditUserModal/EditUserModal';


function App() {
  return (
   <UsersProvider>
     <Showcase/>
     <EditUserModal/>
   </UsersProvider>
  );
}

export default App;
