import React from 'react';

const Nav = () => {
   return (
      <div className="container-fluid">
      <ul class="nav nav-pills nav-fills" style={{backgroundColor: '#ff8c1a'}}>
         <li class="nav-item">
            <a class="nav-link" style={{color: 'white', fontSize: '26px'}} href="#">Categorias</a>
         </li>
         <li class="nav-item" style={{backgroundColor: '#ff3300'}}>
            <a class="nav-link" style={{color: 'white', fontSize: '26px'}} href="#">Ofertas do dia</a>
         </li>
         <li class="nav-item">
            <a class="nav-link" style={{color: 'white', fontSize: '26px'}} href="#">Fale Conosco</a>
         </li>
         <li class="nav-item">
            <a class="nav-link disabled" style={{color: 'white', fontSize: '26px'}} href="#">Sobre</a>
         </li>
      </ul>
      </div>
   );
}

export default Nav;