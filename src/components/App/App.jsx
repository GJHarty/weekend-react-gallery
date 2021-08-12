import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Gallery from '../Gallery/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // declare gallery list 
  let [galleryList, setGalleryList] = useState([
    {
      img: 'https://images-na.ssl-images-amazon.com/images/I/81KjBiKs-AL.jpg',
      altText: "ATLA",
      description: "I love this show to death. My favorite character is Uncle Iroh.",
    },
    {
      img: 'https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.18169-9/22140868_1966075210077978_2605808106803939199_n.jpg?_nc_cat=106&ccb=1-4&_nc_sid=e3f864&_nc_ohc=mum16OHLZQ8AX-TJ85i&_nc_ht=scontent.ffcm1-2.fna&oh=1377272a5987f47d11d84039767cb2d4&oe=613ACDB4',
      altText: "Mississippi River in La Crosse",
      description: 'This is a picture I took of the Mississippi river in La Crosse, WI where I attended college.',
    },
    {
      img: 'https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.18169-9/13096087_10154099303440688_9109048322858345437_n.jpg?_nc_cat=104&ccb=1-4&_nc_sid=cdbe9c&_nc_ohc=_XU97YXEjWYAX8PLzW2&_nc_ht=scontent.ffcm1-2.fna&oh=898db2ebe734f1ec9ae68ebe03021c8f&oe=61395A61',
      altText: "End of the World, Portugal",
      description: 'A picture of me hiding behind a barrier at the "End of the World" in Portugal.',
    }
  ]);

  const galleryData = [
    {
      img: 'https://images-na.ssl-images-amazon.com/images/I/81KjBiKs-AL.jpg',
      description: "I love this show to death. My favorite character is Uncle Iroh.",
    },
    {
      img: 'https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.18169-9/22140868_1966075210077978_2605808106803939199_n.jpg?_nc_cat=106&ccb=1-4&_nc_sid=e3f864&_nc_ohc=mum16OHLZQ8AX-TJ85i&_nc_ht=scontent.ffcm1-2.fna&oh=1377272a5987f47d11d84039767cb2d4&oe=613ACDB4',
      description: 'This is a picture I took of the Mississippi river in La Crosse, WI where I attended college.',
    },
    {
      img: 'https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.18169-9/13096087_10154099303440688_9109048322858345437_n.jpg?_nc_cat=104&ccb=1-4&_nc_sid=cdbe9c&_nc_ohc=_XU97YXEjWYAX8PLzW2&_nc_ht=scontent.ffcm1-2.fna&oh=898db2ebe734f1ec9ae68ebe03021c8f&oe=61395A61',
      description: 'A picture of me hiding behind a barrier at the "End of the World" in Portugal.',
    }
  ]

  

  useEffect(() => {
    fetchGallery();
    // setGalleryList(galleryData);
  } ,[])

  const fetchGallery = () => {
    axios.get('/gallery')
      .then(response => {
        console.log('GET /gallery succeeded', response.data);
        console.log('in get', galleryData);
      })
      .catch(err => {
        console.log('GET /gallery failed', err);
      })
  }
    


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <Gallery 
          galleryList={galleryList}
        />
      </div>
    );
}

export default App;
