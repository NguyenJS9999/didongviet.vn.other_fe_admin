import React from 'react';
import './header.scss';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Input } from '@mui/material';

function HeaderComponent() {
	return (
		<>
			<div className="admin-header">
				<div className="admin-logo">
					<img src="https://themewagon.github.io/purple-react/static/media/logo.a76c464b.svg" alt="" />
				</div>
				<div className="admin-site-bar">
					<div className="btn admin-site-bar-btn-hamber">
						<MenuIcon />
					</div>
					<div className="admin-site-bar-search">
						<Input type="text" name="search" placeholder='Search' />

					</div>
					<div className="admin-site-bar-infor-user">user name</div>
					<div className="admin-site-bar-actions">actions</div>
				</div>
			</div>
			{/* <Button variant="contained">Hello world</Button>; */}
		</>
	);
}

export default HeaderComponent;
