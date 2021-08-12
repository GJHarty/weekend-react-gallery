import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Gallery from '../Gallery/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // declare gallery list 
  let [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    fetchGallery();
    // setGalleryList(galleryData);
  } ,[])

  const fetchGallery = () => {
    axios.get('/gallery')
      .then(response => {
        console.log('GET /gallery succeeded', response.data);
        setGalleryList(response.data);
      })
      .catch(err => {
        console.log('GET /gallery failed', err);
      })
  }

  const putLike = (newLikes) => {
    console.log('In post Like', newLikes);

    axios.put(`/gallery/like/` + newLikes.id, {likes: newLikes.count + 1})
      .then(response => {
        console.log('Put /gallery succeed', response);
        fetchGallery();
      })
      .catch(error => {
        console.log('Put /gallery error');
      })
  }
    


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <Gallery 
          galleryList={galleryList}
          onAddLike={putLike}
        />
      </div>
    );
}

export default App;
