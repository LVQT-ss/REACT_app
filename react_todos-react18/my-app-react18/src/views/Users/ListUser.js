import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ListUser.scss';

function ListUser() {
  const [listUsers, setListUsers] = useState([]);
  const navigate = useNavigate();

  // xong r chạy tới đây
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get('https://reqres.in/api/users?page=1');
        setListUsers(res && res.data && res.data.data ? res.data.data : []);
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    };

    fetchData();

    // Cleanup function (equivalent to componentWillUnmount)
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  const handleViewDetailUser = (user) => {
    // Use the 'navigate' function to navigate to `/user/{user.id}`
    navigate(`/user/${user.id}`);
  };

  // render lần 1
  return (
    <div className="list-user-container">
      <div className="title">Fetch all list users</div>
      <div className="list-user-content">
        {listUsers && listUsers.length > 0 &&
          listUsers.map((item, index) => (
            <div
              className="child"
              key={item.id}
              onClick={() => handleViewDetailUser(item)}
            >
              {index + 1} - {item.first_name} {item.last_name}
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default ListUser;
