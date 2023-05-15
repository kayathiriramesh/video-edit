import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './SideBar'

function Portal() {
  return (
  <>
    <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <div id="container-fluid">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
    </div>
  </>
  );
}

export default Portal