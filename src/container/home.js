import * as React from 'react';
import Navbar from '../ui/Navbar';
import Jumbotron from '../ui/Jumbotron';
import Carousel from '../ui/Carousel';
import Nav from '../ui/Nav';
import Login from '../ui/Login';
import FaleConosco from '../ui/FaleConosco';
import Sobre from '../ui/Sobre';

const Home = () => {
   return (
      <div className="container-fluid" style={{ padding: '0%', margin: '0%', border: '0%' }}>
         <div className="header">
            <Navbar />
         </div>

         <div className="row">
            <Jumbotron />
            <Nav />
            <Carousel />
         </div>

         <footer className="row">
            <FaleConosco />
            <Sobre />
         </footer>

      </div>
   );
}

export default Home;