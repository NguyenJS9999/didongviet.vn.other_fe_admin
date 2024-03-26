import React, { useState } from 'react'

import Collapse from '@mui/material/Collapse';

import './leftSideBar.scss';


function LeftSideBar() {
  const [navItemActive, setNavItemActive] = useState('Users');
	const [statusCollapsedCategories, setStatusCollapsedCategories] = useState(false);
	const [statusCollapsedUser, setStatusCollapsedUser] = useState(false);
	const [statusCollapsedProducts, setStatusCollapsedProducts] = useState(false);
	const [statusCollapsedOrders, setStatusCollapsedOrders] = useState(false);

  const [productType, setProductType] = useState('');


  function handleSetNav(type_nav) {
    if (type_nav) {
      console.log('type_nav: ', type_nav);
      setNavItemActive(type_nav)
    }
  }

	const navHandleToggle  = (type_collapsed, statusCollapsed) => {
		setIsCollapsedName(type_collapsed)
    // setStatusCollapsed(!statusCollapsed);
  };

	function handleSelectNavItem(product_type) {
    if(product_type) {
      setProductType(product_type)
      // Điều hướng url luôn rừ trả về product_type truyền qua redux
      console.log('product_type', product_type);
    }
  }

	return (

		<>
			<div className="admin-body-menu-bar">
        <div className="admin-body-menu-bar-component">
          {/* 1 */}
          <div className="admin-body-menu-bar-collapse">
            <div
              className={`link-custom admin-body-menu-bar-collapse-title`}
              onClick={() => handleSetNav('Dashboard')}variant="contained" color="primary"
            >
              <span className={`${navItemActive === 'Dashboard' && 'nav-item-link-active'} nav-item-link `} />
              <span>Bảng điều khiển</span>
            </div>
          </div>
          {/* 2 */}
					<div className="admin-body-menu-bar-collapse">
            <div
              className={`link-custom admin-body-menu-bar-collapse-title`}
              onClick={() => setStatusCollapsedCategories(!statusCollapsedCategories)} variant="contained" color="primary"
            >
              <span className={`${navItemActive === 'Categories' && 'nav-item-link-active'} nav-item-link `} />
              <span>Danh mục</span>
            </div>
            <Collapse in={statusCollapsedCategories} className='admin-body-menu-bar-collapse-list-item'>
              <div className='link-custom nav-link' onClick={() => { handleSelectNavItem('iphone'); handleSetNav('Categories')} } >
                Danh mục Iphone
              </div>
              <div className='link-custom nav-link' onClick={() => { handleSelectNavItem('ipad'); handleSetNav('Categories')} } >
                Danh mục Ipad
              </div>
            </Collapse>
          </div>
          {/* 3 */}
          <div className="admin-body-menu-bar-collapse">
            <div
              className={`link-custom admin-body-menu-bar-collapse-title`}
              onClick={() => setStatusCollapsedUser(!statusCollapsedUser)} variant="contained" color="primary"
            >
              <span className={`${navItemActive === 'Users' && 'nav-item-link-active'} nav-item-link `} />
              <span>Người dùng</span>
            </div>
            <Collapse in={statusCollapsedUser} className='admin-body-menu-bar-collapse-list-item'>
              <div className='link-custom nav-link' onClick={() => {handleSetNav('Users'); handleSelectNavItem('List user')} }>
                Danh sách người dung
              </div>
              <div className='link-custom nav-link' onClick={() => {handleSetNav('Users'); handleSelectNavItem('Users Profile')} }>
                Hồ sơ người dùng
              </div>
              <div className='link-custom nav-link' onClick={() => {handleSetNav('Users'); handleSelectNavItem('Authorization')} }>
                Phân quyền
              </div>

            </Collapse>
          </div>
          {/* 4 Products */}
          <div className="admin-body-menu-bar-collapse">
            <div
              className={`link-custom admin-body-menu-bar-collapse-title`}
              onClick={() => setStatusCollapsedProducts(!statusCollapsedProducts)} variant="contained" color="primary"
            >
              <span className={`${navItemActive === 'Products' && 'nav-item-link-active'} nav-item-link `} />
              <span>Sản phẩm</span>
            </div>
            <Collapse in={statusCollapsedProducts} className='admin-body-menu-bar-collapse-list-item'>
              <div className='link-custom nav-link' onClick={() => {handleSetNav('Products'); handleSelectNavItem('List product')} }>
                Danh sách sản phẩm
              </div>
              <div className='link-custom nav-link' onClick={() => {handleSetNav('Products'); handleSelectNavItem('Add product')} }>
                Thêm sản phẩm
              </div>
            </Collapse>
          </div>
          {/*  */}
          <div className="admin-body-menu-bar-collapse">
            <div
              className={`link-custom admin-body-menu-bar-collapse-title`}
              onClick={() => setStatusCollapsedOrders(!statusCollapsedOrders)} variant="contained" color="primary"
            >
              <span className={`${navItemActive === 'Orders' && 'nav-item-link-active'} nav-item-link `} />
              <span>Đơn hàng</span>
            </div>
            <Collapse in={statusCollapsedOrders} className='admin-body-menu-bar-collapse-list-item'>
              <div className='link-custom nav-link' onClick={() => {handleSetNav('Orders'); handleSelectNavItem('iphone')} }>
                Danh sách đơn hàng
              </div>
            </Collapse>
          </div>
          {/*  */}
          <div className="admin-body-menu-bar-collapse">
            <div
              className={`link-custom admin-body-menu-bar-collapse-title`}
              onClick={() => handleSetNav('Reviews list')}variant="contained" color="primary"
            >
              <span className={`${navItemActive === 'Reviews' && 'nav-item-link-active'} nav-item-link`} />
              <span>Đánh giá</span>
            </div>
          </div>

        </div>
      </div>
		</>
	)
}

export default LeftSideBar