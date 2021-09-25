import GalleryItem from "../GalleryItem/GalleryItem";
import {Container, Row, } from "react-bootstrap";
import { data } from "jquery";

function Gallery ({
    galleryList,
    onAddLike
}) {
    console.log('Gallery List', galleryList);

    return (
        <>
            <Container>
                <Row className="rowClass">
                    {galleryList.map(imageObject => (
                        <GalleryItem 
                            key={imageObject.id}
                            idVal={imageObject.id}
                            data={imageObject}
                            setLike={onAddLike}
                        />
                    ))}
                </Row>
            </Container>
            
        </>    
    )
}

export default Gallery;