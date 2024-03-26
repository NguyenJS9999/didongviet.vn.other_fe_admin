"use client"

import React from 'react';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Input } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

import './header.scss';
import { useState } from 'react';

function HeaderComponent() {
	const [ authenticated, setAuthenticated] = useState(false);

	function handleNotiMenu() {
		console.log('handleLogin');
	}

	function handleSettingMenu() {
		console.log('handleLogin');
	}

	function handleLogout() {
		console.log('handleLogout');
	}

	async function handleLogin() {
		console.log('handleLogin');
	}


	return (
		<>
			<div className="admin-header">
				<div className="admin-logo">
					<img src="https://themewagon.github.io/purple-react/static/media/logo.a76c464b.svg" alt="" />
				</div>
				<div className="admin-navbar-static-top">

					<div className="search-form">
						<div className="sidebar-toggler" id="sidebar-toggler">
							<MenuIcon />
						</div>
						<div className="btn-custom admin-site-bar-search">
							<Input type="text" name="search" placeholder='Search' />
						</div>
					</div>

					<div className="navbar-right">
						<div className="btn-custom admin-dropdown-user-menu">
							<img src="https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-admin/assets/img/user/user.png" alt="" />
						</div>
						<div className="admin-site-bar-actions">
							<NotificationsIcon onClick={handleNotiMenu} className='btn-custom ' />
							<SettingsIcon onClick={handleSettingMenu} className='btn-custom ' />
							{ authenticated && authenticated ?
								<LogoutIcon onClick={handleLogout} className='btn-custom ' />
								:
								<LoginIcon onClick={handleLogin} className='btn-custom ' />
							}
						</div>
					</div>

				</div>
			</div>
			{/* <Button variant="contained">Hello world</Button>; */}
		</>
	);
}

export default HeaderComponent;
