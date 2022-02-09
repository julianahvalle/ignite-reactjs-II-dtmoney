import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { useState } from 'react';
import { GlobalStyle } from "./styles/global";


export function Header(){
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false); 
  
  //ação do usuário (diego sempre começa com handle)
  function handleOpenNewTransactionModal(){
     setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false); 
  }
export function App() {
  return (
   <> 
    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
    <Dashboard/>
    <Modal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
        >
          <h2>Cadastrar transação</h2>
    </Modal>
    <GlobalStyle/>
   </>
  );
}
