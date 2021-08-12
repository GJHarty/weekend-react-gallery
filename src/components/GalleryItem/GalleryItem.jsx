import { useState } from "react";
import { Container, Row, Col, CardColumns} from "react-bootstrap";

function GalleryItem({
    data
}) {
    console.log(data);
    let [imgShowing, setImageShowing] = useState(true);

    const onImgClick = () => {
        if (imgShowing){
            setImageShowing(!imgShowing);
        } else {
            setImageShowing(!imgShowing);
        }
    }

    return (
        <>
            {
            imgShowing ? 
                <Col className="card">
                    <div className="test" onClick={onImgClick} >
                        <img className="imageClass" src={data.img} alt={data.altText}/>
                    </div>
                </Col> :
                <Col className="card">
                        <div onClick={onImgClick}>
                            <p className="description">{data.description}</p>
                        </div>
                </Col>
            }
        </>
    )
}

export default GalleryItem;