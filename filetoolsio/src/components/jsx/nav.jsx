import '../css/nav.css';
import React from 'react';
import Logo from './logo';
import SearchBar from './searchBar';
import SigninButton from './signinButton';

function Nav() {
        return (
            <>
               <nav className='navbar'>
                        <Logo />
                        <SearchBar />
                        <SigninButton />
                </nav>
            </>
        );
     }
     
export default Nav;
     