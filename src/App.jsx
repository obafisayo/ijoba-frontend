import React from 'react'
import { Router } from './routes/Router';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Router />
    </>
  )
}

export default App;