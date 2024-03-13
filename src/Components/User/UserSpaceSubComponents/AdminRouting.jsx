import React from 'react'
import AdminHome from './AdminHome'
import AdminCheckPosts from './AdminCheckPosts'
import AdminCheckUsers from './AdminCheckUsers'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'

function AdminRouting() {
  return (
    <div>
        <AdminHome></AdminHome>
    </div>
  )
}

export default AdminRouting;