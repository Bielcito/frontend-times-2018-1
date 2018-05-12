import React from 'react';
import Search from 'react-icons/lib/go/search';
import Login from 'react-icons/lib/md/account-box';
import Carrinho from 'react-icons/lib/md/local-grocery-store';

const Navbar = () => {
   return (
      <header className="row">
         <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#ff8c1a' }}>
               <form className="form-inline input-group" style={{ width: '60%', marginRight: '30%' }}>
                  <input className="form-control form-control-lg mr-sm-0 input" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-dark my-2 my-sm-0 btn-lg" style={{ marginLeft: '2%' }}type="submit" value="salvar"><Search />
                  </button>
               </form>
               <button class="btn btn-dark my-2 my-sm-0 btn-lg col-md-0" data-toggle="collapse" href="#collapseEntrar" role="button" aria-haspopup="true" aria-expanded="false" aria-controls="collapseEntrar" style={{ marginRight: '1%' }}>
                  Login <Login />
                </button>
               <button className="btn btn-dark my-2 my-sm-0 btn-lg col-md-0" type="submit" value="salvar"><Carrinho />
               </button>
            </nav>
         </div>
      </header>
   );
}

export default Navbar;