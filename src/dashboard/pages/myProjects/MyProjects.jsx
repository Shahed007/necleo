import { useEffect, useState } from "react";
import { fetchData } from "../../../utility/fetchData";
import Loading from "../../../components/button/loading.jsx/Loading";
import ImageCard from "../../../components/card/ImageCard";
import Modal from "../../../components/modal/Modal";

const MyProjects = () => {
  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState("");
  const [open, setOpen] = useState(false);
  const handleModal = () => setOpen(!open);
  const imageApi = "https://picsum.photos/v2/list?page=1&limit=6";
  const getRandomImage = async () => {
    try {
      const response = await fetch("https://picsum.photos/400/300");
      const randomImageUrl = response.url;
      setImageUrl(randomImageUrl);
    } catch (error) {
      console.error("Error fetching random image:", error);
    }
  };
  useEffect(() => {
    fetchData(imageApi, setLoading, setImages);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getRandomImage();
    }, 8000);

    return () => clearInterval(interval);
  }, []);
  if (loading) return <Loading></Loading>;

  const handleCreateProjectModal = () => {
    setImage(imageUrl);
    handleModal();
  };

  return (
    <>
      <div className="px-12 py-4 ">
        <h2 className="text-[40px] font-semibold text-black mb-6">
          My projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 mb-6">
          <div
            onClick={handleCreateProjectModal}
            className="bg-white px-[22px]   rounded-md"
          >
            <figure className=" flex justify-center py-[14px]  items-center  rounded-md">
              <img className="rounded-md" src={imageUrl} alt="image" />
            </figure>
            <div className="py-2">
              <h3 className="text-center text-base font-semibold text-black">
                Create a new project
              </h3>
              <h5 className="text-[12px] font-semibold text-black text-center">
                or try a <span className="text-primary">sample project</span>
              </h5>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {images?.map((image, idx) => (
            <ImageCard key={idx} image={image}></ImageCard>
          ))}
        </div>
      </div>
      <Modal handleModal={handleModal} open={open} image={image}></Modal>
    </>
  );
};

export default MyProjects;
