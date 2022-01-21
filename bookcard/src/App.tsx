import React from 'react';
import image from './Components/Atoms/Images/2.png'
import './App.css';
import BookCard from './Components/Molecules/BookCard';

function App() {
  return (
    <div className="App">
      <BookCard bookName='Beyond Entrepreneurship 2.0' author='JimCollins' readTime='13-minute read' reads='1.9k reads' image={image} />
    </div>
  );
}

export default App;
