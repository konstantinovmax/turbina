import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <div className="root">
        <div className="root__content">
            <Header />
            <Main />
            <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
