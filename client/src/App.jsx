import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Correlation from './components/Correlation/Correlation'
import Home from './components/Home/Home'
import NoPage from './components/NoPage'
import Topics from './components/Topics/Topics'
import Layout from './components/layout/Layout'
import SavedSolutions from './components/savedSolutions/savedSolutions'
import { useState, useEffect } from 'react'


const initialBsterSavedSolutions = JSON.parse(localStorage.getItem("BsterSavedSolutions")) || {};
// const initialBsterSavedSolutions = {};

function App() {

  const [savedSolutions, setSavedSolutions] = useState(initialBsterSavedSolutions);

  useEffect(() => {
    localStorage.setItem("BsterSavedSolutions", JSON.stringify(savedSolutions));

    console.log("From App Localstorage:", JSON.parse(localStorage.getItem("BsterSavedSolutions")));
    console.log("From App State:", savedSolutions);
    console.log("Object Entries:", Object.entries(savedSolutions));
  }, [savedSolutions]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Layout />}>
          <Route path='topics' element={<Topics />} />
          <Route path='correlation' element={<Correlation savedSolutions={savedSolutions} setSavedSolutions={setSavedSolutions} />} />
          <Route path='saved' element={<SavedSolutions savedSolutions={savedSolutions} setSavedSolutions={setSavedSolutions} />} />
        </Route>
        
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
