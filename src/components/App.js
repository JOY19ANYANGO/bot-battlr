import React from 'react';
import { ToastContainer } from "react-toastify";
import BotCollection from './BotCollection';
import HeroSection from './HeroSection';
function App() {
  return (
    <>
    <HeroSection/>
    <BotCollection/>
    <ToastContainer />
    </>
  );
}

export default App;
