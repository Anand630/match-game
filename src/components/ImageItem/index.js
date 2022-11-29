import './index.css'

const ImageItem = props => {
  const {imageDetails} = props
  const {id, imageUrl, thumbnailUrl, category} = imageDetails
  return (
    <li className="thumbnail-image-container">
      <img className="thumbnail-image" src={thumbnailUrl} />
    </li>
  )
}

export default ImageItem
