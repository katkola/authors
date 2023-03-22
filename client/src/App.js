import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "../src/components/Main";
import './App.css';
import NewAuthor from './components/NewAuthor';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route element={<Main/>} path="/" />
            <Route element={<Main/>} path="/index" />
            <Route element={<Main/>} path="/authors" />
            <Route element={<NewAuthor/>} path="/authors/new"/>
            <Route element={<Update/>} path="/authors/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
