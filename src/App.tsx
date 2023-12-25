import {Product} from "./components/Product";
import './index'
import {useProducts} from "./hooks/Products";
import {Modal} from "./components/Modal";
import ModalCreate from "./components/ModalCreate";
import {useContext, useState} from "react";
import {ModalContext} from "./context/ModalContext";



function App() {
    const {products,loading} = useProducts()
    const {modal,open,close} = useContext(ModalContext)
  return (

   <div className='App'>
       <button style={{
           padding:'10px 10px',
           background:'red',
           border:'none',
           borderRadius:'20px',
           position:'fixed',
           right:60}} onClick={open}>
           +
       </button>

       <div className='Container'>

          { loading && <p>loadin....  </p> }

          { products.map(product => <Product product={product} key={product.id}/>) }
           
          {modal &&<Modal title={'Add new product'} onClose={close}>
              <ModalCreate onCreate={close}/>
          </Modal>}

      </div>

   </div>
  );


}

export default App;
