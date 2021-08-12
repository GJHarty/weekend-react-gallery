function GalleryItem({
    data
}) {
    console.log(data);
    return (
        <>
            <div className="galleryItemDiv">
                <img src={data.img} alt={data.altText} style={{width:250}}/>
            </div>    
        </>
    )
}

export default GalleryItem;