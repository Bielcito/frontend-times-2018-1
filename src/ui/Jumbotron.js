import React from 'react';
import Carousel from '../ui/Carousel';

const Jumbotron = () => {
   return (
      <div className="container-fluid">
         <div class="jumbotron jumbotron-fluid bg-dark" style={{ backgroundColor: "", borderBottom: '0%', marginBottom: '0%' }}>
            <div class="container">
               <h1 class="display-auto" style={{ color: "white", fontFamily: 'helvetica', fontSize: '30px' }}>V Shop</h1>
               <p class="lead" style={{ color: "orange", fontSize: '22px' }}>Shopping Virtual em tendência</p>
            </div>
         </div>
      </div>
   );
}

export default Jumbotron;