import GalleryItem from "../GalleryItem/GalleryItem";

function Gallery ({
    galleryList
}) {
    console.log('Gallery List', galleryList);
    return (
        <>
            <h1>Test</h1>
            <div>
                {galleryList.map(imageObject => (
                    <GalleryItem 
                        key={imageObject.id}
                        data={imageObject}
                    />
                ))}
            </div>
        </>    
    )
}

export default Gallery;