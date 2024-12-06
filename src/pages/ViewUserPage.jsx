import { useState, useEffect } from 'react';
import api from '../services/api';  // Import the API utility

const ViewUserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/admin/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto p-6 bg-white border rounded-md shadow-lg mt-10">
      <h1 className="text-3xl font-semibold mb-6">View Users</h1>
      <div className="space-y-4">
        {users.length > 0 ? (
          users.map((user, index) => (
            <div key={index} className="p-4 border rounded-md shadow-md bg-gray-50">
              <p>Name: {user.name}</p>
              <p>Roll Number: {user.rollNumber}</p>
              <p>Score: {user.score}</p>
            </div>
          ))
        ) : (
          <p>No users available</p>
        )}
      </div>
    </div>
  );
};

export default ViewUserPage;