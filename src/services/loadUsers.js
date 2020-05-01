import api from './api';

async function loadUsers({ setUsers }) {
  const response = await api.get('users');

  setUsers(response.data);
}

export default loadUsers;
