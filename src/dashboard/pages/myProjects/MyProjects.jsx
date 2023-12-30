import { useEffect, useState } from "react";
import { fetchData } from "../../../utility/fetchData";
import Loading from "../../../components/button/loading.jsx/Loading";
import ImageCard from "../../../components/card/ImageCard";

const MyProjects = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const imageApi = "https://picsum.photos/v2/list?page=1&limit=6";
  useEffect(() => {
    fetchData(imageApi, setLoading, setImages);
  }, []);
  if (loading) return <Loading></Loading>;

  return (
    <div className="px-12 py-4 ">
      <h2 className="text-[40px] font-semibold text-black mb-6">My projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-1">
          
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {images?.map((image, idx) => (
          <ImageCard key={idx} image={image}></ImageCard>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
