import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App () {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTranstionModal () {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTranstionModal () {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTranstionModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTranstionModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}

