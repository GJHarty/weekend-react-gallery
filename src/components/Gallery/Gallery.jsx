import GalleryItem from "../GalleryItem/GalleryItem";
import {Container, Row, } from "react-bootstrap";

function Gallery ({
    galleryList
}) {
    console.log('Gallery List', galleryList);
    return (
        <>
            <Container>
                <Row>
                    {galleryList.map(imageObject => (
                        <GalleryItem 
                            key={imageObject.id}
                            data={imageObject}
                        />
                    ))}
                </Row>
            </Container>
            
        </>    
    )
}

export default Gallery;