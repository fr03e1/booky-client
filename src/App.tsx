import React from 'react';
import './scss/style.scss';
import './style.css';
import './assets/bootstrap.5.1.1.min.css'
import './assets/fonts/flaticon.scss';
import AppRouter from "./components/AppRouter/AppRouter";


function App() {
  return (
    <div className="shoe">
      <AppRouter/>
    </div>
  );
}

export default App;
