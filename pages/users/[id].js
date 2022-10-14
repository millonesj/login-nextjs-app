import React from 'react';
import { useRouter } from 'next/router';

const User = () => {
  const router = useRouter();

  return <div>User with id: {router.query.id}</div>;
};

export default User;
