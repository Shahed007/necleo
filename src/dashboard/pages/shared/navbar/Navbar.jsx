import avatar from "../../../../assets/image/avatar.png";
import { TiArrowSortedDown } from "react-icons/ti";
import Button from "../../../../components/button/Button";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Navbar = ({ handleCollapse }) => {
  const [avatarToggle, setAvatarToggle] = useState(false);

  const handleBodyClick = (event) => {
    if (avatarToggle && !event.target.closest(".avatar")) {
      setAvatarToggle(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleBodyClick);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, [avatarToggle]);

  return (
    <nav className="h-16 max-w-screen-xl xl:px-0 px-4 py-2 mx-auto flex justify-between items-center">
      <button onClick={handleCollapse} className="active:scale-95">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div className="flex gap-[14px] ">
        <div className="flex flex-col gap-2">
          <p className="text-black gap-[11px] items-center flex">
            <span className="text-sm font-medium">Free Trial</span>{" "}
            <span className="text-sm font-medium">|</span>{" "}
            <span className="text-[10px]">2days left</span>
          </p>
          <p className="text-sm text-primary font-medium">Extend free trail</p>
        </div>
        <div
          onClick={() => setAvatarToggle(!avatarToggle)}
          className={`flex items-center gap-3 border avatar   px-2 rounded-full duration-150 ease-in-out hover:border-gray-100 hover:shadow-sm  cursor-pointer ${
            avatarToggle ? "border-gray-100 shadow-sm " : "border-transparent"
          }`}
        >
          <img src={avatar} alt="avatar" />
          <TiArrowSortedDown className="text-[12] text-black" />
        </div>
        <div
          className={`absolute bg-white shadow-sm border-l border-t border-gray-100 border-b h-40 p-4 w-60 top-16 right-0 duration-300 ease-in-out flex flex-col gap-6 ${
            avatarToggle ? "opacity-100" : "opacity-0 -right-full"
          }`}
        >
          <div>
            <h3 className="text-center text-xl font-semibold border-b border-b-gray-100">
              MD Shahed
            </h3>
            <h4 className="text-base text-center text-black">Web Developer</h4>
          </div>
          <Button>Logout</Button>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  handleCollapse: PropTypes.func.isRequired,
};

export default Navbar;
