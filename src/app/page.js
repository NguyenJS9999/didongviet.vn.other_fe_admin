'use client';
import { NextUIProvider } from '@nextui-org/react';

import { useEffect, useState } from 'react';
import HeaderComponent from '@/components/header/header';
import LeftSideBar from '@/components/leftSideBar/leftSideBar';
import UserList from '@/components/components-app/userList/userList';

import {
	Table,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell
} from '@nextui-org/react';

import './home.scss';

const Home = () => {
	const [typeNav, setTypeNav] = useState('Users');

	useEffect(() => {}, []);

	return (
		<NextUIProvider>
			<div className="admin-page">
				<HeaderComponent />
				<div className="admin-body">
					<LeftSideBar />
					{/* { typeNav && typeNav === 'Users' && <UserList row_data={rows} /> } */}
					{/* <UserList /> */}

					<Table aria-label="Example static collection table">
						<TableHeader>
							<TableColumn>NAME</TableColumn>
							<TableColumn>ROLE</TableColumn>
							<TableColumn>STATUS</TableColumn>
						</TableHeader>
						<TableBody>
							<TableRow key="1">
								<TableCell>Tony Reichert</TableCell>
								<TableCell>CEO</TableCell>
								<TableCell>Active</TableCell>
							</TableRow>
							<TableRow key="2">
								<TableCell>Zoey Lang</TableCell>
								<TableCell>Technical Lead</TableCell>
								<TableCell>Paused</TableCell>
							</TableRow>
							<TableRow key="3">
								<TableCell>Jane Fisher</TableCell>
								<TableCell>Senior Developer</TableCell>
								<TableCell>Active</TableCell>
							</TableRow>
							<TableRow key="4">
								<TableCell>William Howard</TableCell>
								<TableCell>Community Manager</TableCell>
								<TableCell>Vacation</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</div>
		</NextUIProvider>
	);
};

export default Home;
