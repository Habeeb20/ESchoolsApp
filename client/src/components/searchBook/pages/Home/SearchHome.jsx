import React from 'react';
import Header from "../../component/Header/Header"
import "./SearchHome.css"
import { Outlet } from 'react-router-dom';

const bodyStyle =[]
  

const SearchHome = () => {
  return (
    <main>
        <Header />
        <Outlet />
    </main>
  )
}

export default SearchHome
