import React from 'react';
import { Menu, Input, Row, Col } from "antd";
import Link from "next/link";
import styled from "styled-components";

const MenuItem = styled(Menu.Item)`
  font-size: 20px;
  font-weight: bolder;
`;

const Menubar = styled(Menu)`
  margin-top: 10px;
  width: 100%;
`;

const Nav = () => {
    return (
      <Menubar mode="horizontal">
          <MenuItem className="Home">
            <Link href="/">
              <a>Home</a>
            </Link>
          </MenuItem>
          <MenuItem className="Second">
            <Link href="/second">
              <a>Second Page</a>
            </Link>
          </MenuItem>
          <MenuItem className="Third">
            <Link href="/third">
              <a>Third Page</a>
            </Link>
          </MenuItem>
          <MenuItem className="Mypage">
            <Link href="/mypage">
              <a>Mypage</a>
            </Link>
          </MenuItem>
          <MenuItem className="SignUp">
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
          </MenuItem>
          <MenuItem className="SignIn">
            <Link href="/signin">
              <a>Sign In</a>
            </Link>
          </MenuItem>
      </Menubar>
    );
}

export default Nav;