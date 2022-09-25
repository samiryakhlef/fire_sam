import React from 'react';
import { Icon } from '@iconify/react';
import './navbar.scss';


const NavBar = () => {
    return (
        <nav className='navbar'>
        
            <div className='iconleft'>
                <a href="/" className='icon_items_thumbnails'> User</a>
                <a href="/" className='icon_items_thumbnails'> <Icon icon="line-md:search"  className='big_icon'/></a>
                <a href="/" className='icon_items_thumbnails'> <Icon icon="line-md:home-simple"  className='big_icon'/></a>
                <a href="/" className='icon_items_thumbnails'> <Icon icon="bx:tv" className='big_icon' /></a>
                <a href="/" className='icon_items_thumbnails'> <Icon icon="bi:bookmark" className='big_icon' /></a>
            </div>

            <div className='iconright'>
                <a href="/" className='icon_items_rigth'> Explore</a>
                <a href="/" className='icon_items_rigth'> Activity</a>
                <a href="/" className='icon_items_rigth'> Profile</a>
                <a href='/' className='icon_items_rigth'><Icon icon="ci:settings-filled" /></a>
            </div>
        </nav>
    );
}

export default NavBar;