import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/header/Header";
import {EmployeesPage} from "./pages/employees/Employees";
import {CompaniesPage} from "./pages/companies/companies";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path={'/employees'} element={<EmployeesPage title='Employees'/>}/>
              <Route path={'/companies'} element={<CompaniesPage title='Companies'/>}/>
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
