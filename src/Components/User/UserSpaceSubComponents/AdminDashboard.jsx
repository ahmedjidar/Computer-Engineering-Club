import React, { useState } from "react";
import DataTable from "react-data-table-component";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import AdminRouting from "./AdminRouting";
import AdminHome from "./AdminHome";
import AdminCheckPosts from "./AdminCheckPosts";


function AdminDashboard() {

  return (
        <>
            <AdminHome/>
        </>
  );
}

export default AdminDashboard;
