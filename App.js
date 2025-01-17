import React, { useState } from 'react';
import './App.css'; // Importing the CSS file for styling
import logo from './images/react-icon.png'; // Corrected the path to the logo image

// Importing components if needed
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import Card from './components/Card'; 
import ButtonComponent from './components/ButtonComponent'; 
import ModalComponent from './components/ModalComponent';

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      {/* Navbar Component */}
      <Navbar />

      {/* Header Section */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <button className="modal-btn" onClick={toggleModal}>Show Modal</button>
      </header>

      {/* Card Section */}
      <div className="cards">
        <Card title="Learn React" description="Start by editing App.js" />
        <Card title="Components" description="Build reusable UI pieces" />
        <Card title="Props and State" description="Manage dynamic content" />
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <ModalComponent toggleModal={toggleModal} />
        </div>
      )}

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
