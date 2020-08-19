import React, { useCallback } from 'react';
import Nav from 'react-bootstrap/Nav';
import { useDispatch, useSelector } from "react-redux";
import {showModalSignUpAction} from '../actions/signAction';
import {showModalSignInAction} from '../actions/signAction';


const Navbar = () =>{
    const dispatch = useDispatch();
    const showModalSignUp = useCallback(() => {
        dispatch(showModalSignUpAction(true))
    })

    const showModalSignIn = useCallback(() => {
        dispatch(showModalSignInAction(true))
    })
    return(
            <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/" >logo</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>second</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link >third</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link onClick={showModalSignUp}>Sign Up</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={showModalSignIn}>Sign In</Nav.Link>
            </Nav.Item>
            </Nav>  
    )
}

export default Navbar;
