import React, { useState } from 'react'

import Collapse from '@mui/material/Collapse';

import './leftSideBar.scss';


function LeftSideBar() {


  const [navItemActive, setNavItemActive] = useState('Dashboard');
	const [statusCollapsedCategories, setStatusCollapsedCategories] = useState(false);
	const [statusCollapsedProducts, setStatusCollapsedProducts] = useState(false);
	const [statusCollapsedOrders, setStatusCollapsedOrders] = useState(false);

  const [productType, setProductType] = useState('');


  function handleSetNav(type_nav) {
    if (type_nav) {
      console.log('type_nav', type_nav);
      setNavItemActive(type_nav)
    }
  }

	const navHandleToggle  = (type_collapsed, statusCollapsed) => {
		setIsCollapsedName(type_collapsed)
    setStatusCollapsed(!statusCollapsed);
  };

	function handleSelectNavItem(product_type) {
    if(product_type) {
      setProductType(product_type)
      // Điều hướng url luôn rừ trả về product_type
      console.log('product_type', product_type);
    }
  }

	return (

		<>
			<div className="admin-body-menu-bar">
        <div className="admin-body-menu-bar-component">
          {/*  */}
          <div className="admin-body-menu-bar-collapse">
            <div
              className={`link-custom admin-body-menu-bar-collapse-title`}
              onClick={() => handleSetNav('Dashboard')}variant="contained" color="primary"
            >
              <span className={`${navItemActive === 'Dashboard' && 'nav-item-link-active'} nav-item-link `} />
              <span>Dashboard</span>
            </div>
          </div>
          {/*  */}
					<div className="admin-body-menu-bar-collapse">
            <div
              className={`link-custom admin-body-menu-bar-collapse-title`}
              onClick={() => setStatusCollapsedCategories(!statusCollapsedCategories)} variant="contained" color="primary"
            >
              <span className={`${navItemActive === 'Categories' && 'nav-item-link-active'} nav-item-link `} />
              <span>Categories</span>
            </div>
            <Collapse in={statusCollapsedCategories} className='admin-body-menu-bar-collapse-list-item'>
              <div className='link-custom nav-link' onClick={() => {handleSelectNavItem('iphone'); handleSetNav('Categories')} }>Iphone</div>
              <div className='link-custom nav-link' onClick={() => {handleSelectNavItem('ipad'); handleSetNav('Categories')} }>Ipad</div>
            </Collapse>
          </div>
          {/*  */}
          <div className="admin-body-menu-bar-collapse">
            <div
              className={`link-custom admin-body-menu-bar-collapse-title`}
              onClick={() => setStatusCollapsedProducts(!statusCollapsedProducts)} variant="contained" color="primary"
            >
              <span className={`${navItemActive === 'Products' && 'nav-item-link-active'} nav-item-link `} />
              <span>Products</span>
            </div>
            <Collapse in={statusCollapsedProducts} className='admin-body-menu-bar-collapse-list-item'>
              <div className='link-custom nav-link' onClick={() => {handleSelectNavItem('iphone'); handleSetNav('Products')} }>Iphone</div>
              <div className='link-custom nav-link' onClick={() => {handleSelectNavItem('ipad'); handleSetNav('Products')} }>Ipad</div>
            </Collapse>
          </div>
          {/*  */}
          <div className="admin-body-menu-bar-collapse">
            <div
              className={`link-custom admin-body-menu-bar-collapse-title`}
              onClick={() => setStatusCollapsedOrders(!statusCollapsedOrders)} variant="contained" color="primary"
            >
              <span className={`${navItemActive === 'Orders' && 'nav-item-link-active'} nav-item-link `} />
              <span>Orders</span>
            </div>
            <Collapse in={statusCollapsedOrders} className='admin-body-menu-bar-collapse-list-item'>
              <div className='link-custom nav-link' onClick={() => {handleSelectNavItem('iphone'); handleSetNav('Orders')} }>Iphone</div>
              <div className='link-custom nav-link' onClick={() => {handleSelectNavItem('ipad'); handleSetNav('Orders')} }>Ipad</div>
            </Collapse>
          </div>
          {/*  */}
          <div className="admin-body-menu-bar-collapse">
            <div
              className={`link-custom admin-body-menu-bar-collapse-title`}
              onClick={() => handleSetNav('Reviews')}variant="contained" color="primary"
            >
              <span className={`${navItemActive === 'Reviews' && 'nav-item-link-active'} nav-item-link`} />
              <span>Reviews</span>
            </div>
          </div>

        </div>
      </div>
		</>
	)
}

export default LeftSideBar