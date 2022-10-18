import { useEffect, useState } from 'react';

const HomePage = () => {
  const [userList, setUserList] = useState<TUser[]>([])

  useEffect(() => {
    window.fetch('api/user').then(response => response.json()).then(({ data, length }) => setUserList(data))

    return () => {
      userList
    }
  }, [])


  return (
    <div>
      <h1>User List</h1>
      <div>
        {userList.map(user => <div key={user.id}>{user.name}</div>)}
      </div>
    </div>
  );
};

export default HomePage;
