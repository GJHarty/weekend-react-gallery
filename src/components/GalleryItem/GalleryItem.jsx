import { useState } from "react";
import { Container, Row, Col, CardColumns} from "react-bootstrap";

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
                    <button id={idVal} onClick={onLikeClick}>Like this Photo</button>
                </Col> :
                <Col className="card">
                    <div onClick={onImgClick}>
                        <p className="description">{data.description}</p>
                    </div>
                    <p className="likes">{numberOfLikes} people like this!</p>
                    <button>Like this Photo</button>
                </Col>
            }
        </>
    )
}

export default GalleryItem;