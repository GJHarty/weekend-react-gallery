import { useState } from "react";
import { Col, Button } from "react-bootstrap";

function GalleryItem({
    idVal,
    data,
    setLike
}) {

    let [imgShowing, setImageShowing] = useState(true);
    let [numberOfLikes, setNumberOfLikes] = useState(0);

    const onImgClick = () => {
        if (imgShowing){
            setImageShowing(!imgShowing);
        } else {
            setImageShowing(!imgShowing);
        }
    }

    const onLikeClick = (event) => {
        console.log(event.target.id);
        let newLikes = {
            id: event.target.id,
            count: numberOfLikes + 1
        }
        setNumberOfLikes(numberOfLikes + 1);
        setLike(newLikes);
    }

    return (
        <>
            {
            imgShowing ? 
                <Col className="card">
                    <div className="test" onClick={onImgClick} >
                        <img className="imageClass" src={data.img} alt={data.altText}/>
                    </div>
                    <p className="likes">{numberOfLikes} people like this!</p>
                    <Button className="likeButton" id={idVal} onClick={onLikeClick}>Like this Photo</Button>
                </Col> :
                <Col className="card">
                    <div onClick={onImgClick}>
                        <p className="description">{data.description}</p>
                    </div>
                    <p className="likes">{numberOfLikes} people like this!</p>
                    <Button id={idVal} onClick={onLikeClick}>Like this Photo</Button>
                </Col>
            }
        </>
    )
}

export default GalleryItem;