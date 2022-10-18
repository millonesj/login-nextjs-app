import React from 'react';
import Link from 'next/link';
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <menu>
        <Link href="/login" prefetch={false}>
          <a>Login</a>
        </Link>
        <Link href="/">
          <a>User List</a>
        </Link>
      </menu>
    </nav >
  );
};

export default Navbar;
