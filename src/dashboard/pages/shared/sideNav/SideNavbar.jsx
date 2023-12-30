import { Link, NavLink } from "react-router-dom";
import logo from "../../../../assets/logo/logo.png";

const SideNavbar = () => {
  return (
    <div className="absolute top-0 left-0 w-1/5 bg-white border-r border-gray-100 shadow-sm h-full  px-5 py-4">
      <div className=" pb-7 border-b flex justify-center items-center">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className=" mb-auto flex flex-col gap-28 ">
        <div>
          <ul className="mt-8 space-y-7 border-b pb-7 ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-primary flex items-center gap-2 "
                    : "font-semibold text-color_secondary flex items-center gap-2 duration-150 transition-colors hover:text-primary"
                }
              >
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
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
                <span className="text-sm">My Projects</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sample-projects"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-primary flex items-center gap-2  "
                    : " font-semibold text-color_secondary flex items-center gap-2 duration-150 transition-colors hover:text-primary"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    className="fill-current "
                    d="M12.5902 5.41804C12.5902 2.70188 14.792 0.5 17.5082 0.5H23.8033C23.9119 0.5 24 0.588075 24 0.696721V6.9918C24 9.70795 21.7981 11.9098 19.082 11.9098H12.5902V5.41804Z"
                  />
                  <path
                    className="fill-current "
                    d="M12.5902 19.582C12.5902 22.2981 14.792 24.5 17.5082 24.5H23.8033C23.9119 24.5 24 24.4119 24 24.3033V18.0082C24 15.292 21.7981 13.0902 19.082 13.0902H12.5902V19.582Z"
                  />
                  <path
                    className="fill-current "
                    d="M11.4098 5.41804C11.4098 2.70188 9.20796 0.5 6.4918 0.5H0.196722C0.0880756 0.5 0 0.588075 0 0.696721V6.9918C0 9.70795 2.20188 11.9098 4.91803 11.9098H11.4098V5.41804Z"
                  />
                  <path
                    className="fill-current "
                    d="M11.4098 19.582C11.4098 22.2981 9.20796 24.5 6.4918 24.5H0.196722C0.0880756 24.5 0 24.4119 0 24.3033V18.0082C0 15.292 2.20188 13.0902 4.91803 13.0902H11.4098V19.582Z"
                  />
                </svg>
                <span className="text-sm">Sample Projects</span>
              </NavLink>
            </li>
          </ul>
          <ul className="mt-8 space-y-7  ">
            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-primary flex items-center gap-2 "
                    : "font-semibold text-color_secondary flex items-center gap-2 duration-150 transition-colors hover:text-primary"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    className="fill-current"
                    d="M21.5744 2.71825L25.2828 6.42681C26.308 7.45194 26.308 9.114 25.2828 10.1391L22.2677 13.1537C23.5312 13.3432 24.5 14.4332 24.5 15.7496V21.8745C24.5 23.3242 23.3247 24.4995 21.875 24.4995H6.125C4.67525 24.4995 3.5 23.3242 3.5 21.8745V6.12453C3.5 4.67478 4.67525 3.49953 6.125 3.49953H12.25C13.567 3.49953 14.6576 4.46955 14.8462 5.73416L17.862 2.71825C18.8872 1.69312 20.5492 1.69312 21.5744 2.71825ZM5.25 21.8745C5.25 22.3578 5.64176 22.7495 6.125 22.7495L13.1238 22.7487L13.125 14.8746L5.25 14.8737V21.8745ZM14.8738 22.7487L21.875 22.7495C22.3582 22.7495 22.75 22.3578 22.75 21.8745V15.7496C22.75 15.2663 22.3582 14.8746 21.875 14.8746L14.8738 14.8737V22.7487ZM12.25 5.24953H6.125C5.64176 5.24953 5.25 5.64127 5.25 6.12453V13.1237H13.125V6.12453C13.125 5.64127 12.7332 5.24953 12.25 5.24953ZM14.875 10.8604V13.1246L17.1383 13.1237L14.875 10.8604ZM19.0994 3.95568L15.3909 7.66425C15.0492 8.00595 15.0492 8.55998 15.3909 8.90169L19.0994 12.6103C19.4411 12.952 19.9951 12.952 20.3369 12.6103L24.0455 8.90169C24.3872 8.55998 24.3872 8.00595 24.0455 7.66425L20.3369 3.95568C19.9951 3.61398 19.4411 3.61398 19.0994 3.95568Z"
                  />
                  <path
                    className="fill-current"
                    d="M19.0994 3.95568L15.3909 7.66425C15.0492 8.00595 15.0492 8.55998 15.3909 8.90169L19.0994 12.6103C19.4411 12.952 19.9951 12.952 20.3369 12.6103L24.0455 8.90169C24.3872 8.55998 24.3872 8.00595 24.0455 7.66425L20.3369 3.95568C19.9951 3.61398 19.4411 3.61398 19.9C4 3.61398 4 3.61398 19.0994 3.95568Z"
                  />
                </svg>
                <span className="text-sm">Apps</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/intro-necleo"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-primary flex items-center gap-2  "
                    : " font-semibold text-color_secondary flex items-center gap-2 duration-150 transition-colors hover:text-primary"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="text-sm">Intro to Necleo</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <ul className=" space-y-7   ">
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-primary flex items-center gap-2 "
                  : "font-semibold text-color_secondary flex items-center gap-2 duration-150 transition-colors hover:text-primary"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="text-sm">Help & Support</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/intro-necleo"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-primary flex items-center gap-2  "
                  : " font-semibold text-color_secondary flex items-center gap-2 duration-150 transition-colors hover:text-primary"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <g clipPath="url(#clip0_101_48)">
                  <path
                    d="M23.3334 2.33333H4.66671C3.37754 2.33333 2.34504 3.37749 2.34504 4.66666L2.33337 25.6667L7.00004 21H23.3334C24.6225 21 25.6667 19.9558 25.6667 18.6667V4.66666C25.6667 3.37749 24.6225 2.33333 23.3334 2.33333ZM15.1667 16.3333H12.8334V14H15.1667V16.3333ZM15.1667 11.6667H12.8334V7H15.1667V11.6667Z"
                    className="fill-current"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_101_48">
                    <rect
                      width="28"
                      height="28"
                      fill="noone"
                      className="fill-current"
                    />
                  </clipPath>
                </defs>
              </svg>

              <span className="text-sm">Intro to Necleo</span>
            </NavLink>
          </li>
          <li>
            <button className="flex items-center gap-2 text-sm font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M9.54941 14.7L10.9473 15.9232C11.2383 16.1778 11.2678 16.62 11.0132 16.911C10.7586 17.2019 10.3164 17.2313 10.0254 16.9768L7.22542 14.5268C7.07351 14.394 6.98637 14.2019 6.98637 14C6.98637 13.7982 7.07351 13.6061 7.22542 13.4732L10.0254 11.0232C10.3164 10.7686 10.7586 10.7981 11.0132 11.0891C11.2678 11.38 11.2383 11.8222 10.9473 12.0768L9.54938 13.3H14.7C15.0866 13.3 15.4 13.6134 15.4 14C15.4 14.3867 15.0866 14.7 14.7 14.7H9.54941ZM25.2001 19.6C25.2001 21.1464 23.9465 22.4 22.4001 22.4H5.60005C4.05365 22.4 2.80005 21.1464 2.80005 19.6V8.40001C2.80005 6.85361 4.05365 5.60001 5.60005 5.60001H22.4001C23.9465 5.60001 25.2001 6.85361 25.2001 8.40001V19.6ZM16.8 21V7.00001H5.60005C4.82686 7.00001 4.20005 7.6268 4.20005 8.40001V19.6C4.20005 20.3732 4.82686 21 5.60005 21H16.8Z"
                  fill="#212121"
                />
              </svg>
              <span>Collapse</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
