import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Hero from './Component/Hero/Hero';
import Main from './Component/Main/Main';
import Testimonials from './Component/Sidebar/Sidebar';
import FAQ from './Component/faq/faq';
import ContactForm from './Component/contact/contacs';
import HomePage from './Component/Homepage/Homepage';
function App() {
  return (
    <div className="App">
      
        <Hero/>
        <HomePage />
        <Header></Header>
        <Main></Main>
        <Testimonials></Testimonials>
        <FAQ></FAQ>
        <ContactForm></ContactForm>
         
    </div>
  );
}

export default App;
