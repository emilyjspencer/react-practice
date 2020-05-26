import React from 'react';
import logo from './logo.svg';
import './App.css';
import BucketList from './components/BucketList';

function App() {
  return (
    <div className="bucket-list">
     <h2>Bucket List</h2>
     <ul className="items">
       <li>Karen Blixen Museum, Kenya</li>
       <li>Bali</li>
       <li>NYC</li>
       <li>Northern Lights</li>
     </ul>
     
    </div>
  );
}

export default App;
