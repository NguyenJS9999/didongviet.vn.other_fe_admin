"use client"

import React from 'react'
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableSortLabel from '@mui/material/TableSortLabel';

import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import Pagination from '@mui/material/Pagination';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FilterAltIcon from '@mui/icons-material/FilterAlt';


import './userList.scss';

import { getListUser } from "@/services/apiUser";

function createData( id, profile, name, email, phone, total_buy, status, role, join_on, action ) {
  return { id, profile, name, email, phone, total_buy, status, role, join_on, action  }
}

const row_data = [
  createData(1, 'Ảnh 1', "Admin", 'admind@gmail.com', '0123456789', '-', 'admin', '-', '09/03/2024'),
  createData(2, 'Ảnh 2', "Client01", 'client01@gmail.com', '0123456789', '200000000', 'client', 'Đã kích hoạt', '09/03/2024'),
]

//
function UserList({}) {
	// console.log('row_data: ', row_data);

	function deleteItem (id_item) {
    console.log('deleteItem id_item: ', id_item);
  }
  function editItem (id_item) {
    console.log('editItem id_item: ', id_item);
  }

  function handleCheckItem(id_item) {
    console.log('handleCheckItem id_item: ', id_item);
  }

	// Lọc
	const [anchorEl, setSortAnchorEl] = useState(null);
	const [valueSelectSort, setValueSelectSort] = useState(null);

  const open = Boolean(anchorEl);
  const handleSelectSort = (event, type_select) => {
		console.log('handleSelectSort event', event);
		console.log('handleSelectSort type_select', type_select);

    setSortAnchorEl(event.currentTarget);
  };
  const handleClose = (value_select) => {
		console.log('value_select', value_select);
		setValueSelectSort(value_select)
    setSortAnchorEl(null);
  };

	function deleteItem (id_item) {
    console.log('deleteItem id_item: ', id_item);
  }
  function editItem (id_item) {
    console.log('editItem id_item: ', id_item);
  }

  function handleCheckItem(id_item) {
    console.log('handleCheckItem id_item: ', id_item);
  }

	function renderText(text) {
		if (text) {
			return (<>{text}</>)
		}
		return null;
  }

	const initListUser = async () => {
	// 		const response = await getListUser();
	// 		console.log('getListUser response: ', response);
	// 		const users = await response.json();
	// 		if (response.ok || response.status === 200) {
	// 			const dataUser = users.data;
	// 			console.log('handleLogin dataUser', dataUser, typeof dataUser);
	// 			setUsers(dataUser);
	// 		}
		const response = await fetch(`http://localhost:3001/users/list`);
		console.log('getListUser response: ', response);
	};

  initListUser();

	return (
		<>
			<div className="admin-body-content-bar">
				<div className="admin-body-content-bar-container">
					<div className="admin-content-component">
						<div className="admin-tables">
							<div className="admin-table-component">
							<div className="admin-table-title">Danh sách người dùng</div>

							<Breadcrumbs aria-label="breadcrumb">
								<Link underline="hover" color="inherit" href="/">
									Bảng điều khiển
								</Link>
								<Typography color="text.primary">Danh sách người dùng</Typography>
							</Breadcrumbs>

							<div className="admin-table-actions">
								<Button
									id="select-sort-button"
									aria-controls={open ? 'basic-sort' : undefined}
									aria-haspopup="true"
									aria-expanded={open ? 'true' : undefined}
									onClick={(event) => handleSelectSort(event, 'sort')}
								>
									<FilterAltIcon />
								</Button>
								<Menu
									id="basic-sort"
									anchorEl={anchorEl}
									open={open}
									onClose={handleClose}
									MenuListProps={{
										'aria-labelledby': 'select-sort-button',
									}}
								>
									<MenuItem onClick={() => handleClose('profile')}>Profile</MenuItem>
									<MenuItem onClick={() => handleClose('my_account')}>My account</MenuItem>
									<MenuItem onClick={() => handleClose('logout')}>Logout</MenuItem>
								</Menu>

							</div>
							<div className="admin-table">
								{/* {UiTable()} */}
								<TableContainer component={Paper}>
									<Table sx={{ minWidth: 650 }} aria-label="simple table">
										<TableHead>
											<TableRow>
												<TableCell align="center">
													<Checkbox />
												</TableCell>
												<TableCell align="center">STT</TableCell>

												<TableCell align="center">Hồ sơ</TableCell>
												<TableCell align="center">Tên</TableCell>
												<TableCell align="center">E-mail</TableCell>
												<TableCell align="center">Điện thoại</TableCell>

												<TableCell align="center">Tổng số tiền mua</TableCell>
												<TableCell align="center">Quyền</TableCell>
												<TableCell align="center">Trạng thái</TableCell>
												<TableCell align="center">Ngày tham gia</TableCell>

												<TableCell align="center">Hành động</TableCell>

											</TableRow>
										</TableHead>

										<TableBody>
											{row_data.map(row => (
												<TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }} >
													<TableCell align="center">
														<Checkbox onClick={() => handleCheckItem(row.id)}/>
													</TableCell>
													<TableCell align="center">{row.id}</TableCell>

													<TableCell align="center">
														<Avatar src="https://cdn-v2.didongviet.vn/files/products/2023/8/29/1/1695953606803_thumb_iphone_15_pro_didongviet.jpg" alt="" />
														{/* {row.profile} */}
													</TableCell>
													<TableCell align="center">{renderText(row.name)}</TableCell>
													<TableCell align="center">{renderText(row.email)}</TableCell>
													<TableCell align="center">{renderText(row.phone)}</TableCell>

													<TableCell align="center">{renderText(row.total_buy)}</TableCell>
													<TableCell align="center">{renderText(row.status)}</TableCell>
													<TableCell align="center">{renderText(row.role)}</TableCell>
													<TableCell align="center">{renderText(row.join_on)}</TableCell>

													<TableCell align="center">
														<Button onClick={() => deleteItem(row.id)}><DeleteIcon /></Button>
														<Button onClick={() => editItem(row.id)}><EditNoteIcon /></Button>
													</TableCell>

												</TableRow>
											))}
										</TableBody>

									</Table>
								</TableContainer>
							</div>

							<div className="admin-table-pagination">
								<Pagination count={11} defaultPage={6} boundaryCount={2} />
							</div>

						</div>
					</div>

					</div>
				</div>
			</div>

		</>
	)
}

export default UserList;