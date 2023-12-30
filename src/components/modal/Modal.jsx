import PropTypes from "prop-types";
import Button from "../button/Button";
import Input from "../input/Input";

const Modal = ({ open, handleModal, image }) => {
  return (
    <>
      <div
        className={`absolute top-0 left-0 w-full h-full z-30 bg-gray-500/15 cursor-pointer ${
          open ? "scale-100 duration-200" : "scale-0 duration-0"
        }`}
      ></div>
      <div
        className={`absolute top-0 left-0 z-50 w-full h-full flex justify-center items-center ${
          open ? "scale-100 duration-300" : "scale-0 duration-300"
        }`}
      >
        <div className="w-3/4 lg:w-1/2 rounded-md shadow-sm border border-gray-100 p-6 mx-auto bg-white overflow-y-auto h-[400px] ">
          <Input
            label="Image URL"
            type="text"
            placeholder="Enter image url"
            defaultValue={image}
          ></Input>
          <button onClick={handleModal}>Cancel</button>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleModal: PropTypes.func.isRequired,
  image: PropTypes.any,
};

export default Modal;
