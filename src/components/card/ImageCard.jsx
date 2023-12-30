import PropTypes from "prop-types";

const ImageCard = ({ image }) => {
  const { id, author, width, height, url, download_url } = image || {};
  console.log(image);
  return (
    <div className="p-3">
      <figure>
        <img src={download_url} alt={`image id: ${id}`} />
      </figure>
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.object,
};

export default ImageCard;
