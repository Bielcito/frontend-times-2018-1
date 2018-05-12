import React from 'react';

const FaleConosco = () => {
   return (
      <div className="container-fluid bg-dark" style={{alignContent: 'center' , backgroundColor: '#737373'}}>
         <div className="row">
            <div className="col-12" style={{ verticalAlign: 'center', margin: '0 auto' }}>
               <h1 style={{ textAlign: 'center', color: 'white', paddingTop: '2%' }}>FaleConosco</h1>
               <form style={{ alignContent: 'center', color: 'green' }} style={{ marginRight: '30%', marginLeft: '30%' }}>
                  <div className="form-group">
                     <label style={{ color: 'white' }} for="exampleFormControlInput1">Assunto</label>
                     <input style={{ width: '100%' }} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Sugestão" />
                  </div>
                  <div className="form-group">
                     <label style={{ color: 'white' }} for="exampleFormControlInput1">Nome</label>
                     <input style={{ width: '100%' }} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ourobarg" />
                  </div>
                  <div className="form-group">
                     <label style={{ color: 'white' }} for="exampleFormControlInput1">E-mail</label>
                     <input style={{ width: '100%' }} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Ourobarg@example.com" />
                  </div>
                  <div className="form-group">
                     <label style={{ color: 'white' }} for="exampleFormControlTextarea1">Assunto</label>
                     <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <button style={{ marginBottom: '8%' }} type="submit" className="btn btn-primary">Enviar</button>
               </form>
            </div>
         </div>
      </div>
   );
}

export default FaleConosco;