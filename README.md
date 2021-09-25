# Gallery of my Life

This displays images of your life in a neat card format using bootstrap. Users can click on the image to reveal a description and add likes to each photo. This runs on a Node.js server but no database functionality was added.

## Setup

Simply clone the respository and install the node modules. This is a React app so you will have to run the server and client seperately
```
npm install
npm run server
npm run client
```
If you would like to customize this yourself, simply edit the galleryItem paths in /modules/gallery.data.js
```
const  galleryItems = [
	{
		id:  1,
		path:  'images/PATH_TO_YOUR_PHOTO',
		altText:  "ALT_TEXT",
		description:  "DESCRIPTION",
		likes:  0,
	},
	...
}
```

<a href="https://imgur.com/C0I0JYd"><img src="https://i.imgur.com/C0I0JYd.png" title="source: imgur.com" /></a>







