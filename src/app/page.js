"use client"
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


import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import './home.scss';


import { useEffect, useState } from 'react';
import HeaderComponent from '@/components/header/header';
import TableSortSelect from '@/components/table/tableSortSelect';
import LeftSideBar from '@/components/leftSideBar/leftSideBar';


function createData( id, name, description, price, quantity, image_url, color, created_at, updated_at ) {
  return {  id, name, description, price, quantity, image_url, color, created_at, updated_at  }
}

const rows = [
  createData(1, 'Iphone 14', "iPhone 14 Pro Max 128GB Chính hãng (VN/A)", 26590000, 30, 'url img', 'gold', '08/03/2024', '09/03/2024'),
  createData(2, 'Iphone 15', "iPhone 15 Pro Max 128GB Chính hãng (VN/A)", 35000000, 40, 'url img', 'red', '08/03/2024', '09/03/2024'),
]

const Home = () => {

  useEffect(() => {

  }, []);

  function deleteItem (id_item) {
    console.log('deleteItem id_item: ', id_item);
  }
  function editItem (id_item) {
    console.log('editItem id_item: ', id_item);
  }

  function handleCheckItem(id_item) {
    console.log('handleCheckItem id_item: ', id_item);
  }

	return (
    <div className="admin-page">
      <HeaderComponent />
      <div className="admin-body">
        <LeftSideBar />
        <TableSortSelect row_data={rows} />
      </div>
    </div>
	);
};

export default Home;
