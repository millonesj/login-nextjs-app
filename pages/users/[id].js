import React from 'react';
import { useRouter } from 'next/router';

const User = () => {
  const {
    query: { id },
  } = useRouter();

  return <div>User with id: {id}</div>;
};

export default User;
