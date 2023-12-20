import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function DetailUser() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await axios.get(`https://reqres.in/api/users/${id}`);
          setUser(response && response.data && response.data.data ? response.data.data : {});
          console.log('check res user:', response);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();

    // Cleanup function (equivalent to componentWillUnmount)
    return () => {
      console.log('Component will unmount');
    };
  }, [id]);

  console.log('User Data:', user);

  const isEmptyObject = Object.keys(user).length === 0;

  

  return (
    <>
      <div>hello world from user: {id}</div>
      {!isEmptyObject && (
        <>
          <div>User's name: {user.first_name} - {user.last_name}</div>
          <div>User's email: {user.email}</div>
          <div>
            <img src={user.avatar} alt="User Avatar" />
          </div>
          <button type="button"  onClick={() => navigate('/user')} > going back</button>
        </>
      )}
    </>
  );
}

export default DetailUser;
