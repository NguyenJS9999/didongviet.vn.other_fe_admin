"use client"
import React from 'react'

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

import './tableSortSelect.scss';
import { useState } from 'react';


function createData( id, name, description, price, quantity, image_url, color, created_at, updated_at ) {
  return {  id, name, description, price, quantity, image_url, color, created_at, updated_at  }
}

const row_data = [
  createData(1, 'Iphone 14', "iPhone 14 Pro Max 128GB Chính hãng (VN/A)", 26590000, 30, 'url img', 'gold', '08/03/2024', '09/03/2024'),
  createData(2, 'Iphone 15', "iPhone 15 Pro Max 128GB Chính hãng (VN/A)", 35000000, 40, 'url img', 'red', '08/03/2024', '09/03/2024'),
]

function TableSortSelect({}) {
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

	return (
		<>
		<div className="admin-body-content-bar">
          <div className="admin-body-content-bar-container">
            <div className="admin-content-component">
              <div className="admin-tables">
                <div className="admin-table-component">
                <div className="admin-table-title">Product</div>

								<Breadcrumbs aria-label="breadcrumb">
									<Link underline="hover" color="inherit" href="/">
										Home
									</Link>
									<Typography color="text.primary">Product</Typography>
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

								<TableContainer component={Paper}>
									<Table sx={{ minWidth: 650 }} aria-label="simple table">
										<TableHead>
											<TableRow>
												<TableCell><Checkbox /></TableCell>
												<TableCell>STT</TableCell>
												<TableCell align="right">Tên</TableCell>
												<TableCell align="right">Mô tả</TableCell>
												<TableCell align="right">Giá</TableCell>
												<TableCell align="right">Số lượng</TableCell>
												<TableCell align="right">Ảnh</TableCell>
												<TableCell align="right">Màu</TableCell>
												<TableCell align="right">Ngày tạo</TableCell>
												<TableCell align="right">Ngày cập nhập</TableCell>
												<TableCell align="right">Hành động</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{row_data.map(row => (
												<TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }} >
													<TableCell><Checkbox onClick={() => handleCheckItem(row.id)}/></TableCell>
													<TableCell align="right">{row.id}</TableCell>
													<TableCell align="right">{row.name}</TableCell>
													<TableCell align="right">{row.description}</TableCell>
													<TableCell align="right">{row.price}</TableCell>
													<TableCell align="right">{row.quantity}</TableCell>
													<TableCell align="right">
														<Avatar src="https://cdn-v2.didongviet.vn/files/products/2023/8/29/1/1695953606803_thumb_iphone_15_pro_didongviet.jpg" alt="" />
													</TableCell>
													<TableCell align="right">{row.color}</TableCell>
													<TableCell align="right">{row.created_at}</TableCell>
													<TableCell align="right">{row.updated_at}</TableCell>
													<TableCell align="right">
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

export default TableSortSelect;