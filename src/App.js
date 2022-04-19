
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div className="App">
      <h1>My own Data : {users.length}</h1>
      <ul>
        {
          users.map(user => <li key={user.id}>id: {user.id} Name:{user.name} email: {user.email}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
