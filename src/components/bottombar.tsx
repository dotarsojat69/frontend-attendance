import { Link } from "react-router-dom";

const Bottombar = () => {
    return (
        <div className="sticky z-10 bottom-0 inset-x-0 h-12 p-1 bg-[#E57B5C] flex items-center">
          <Link to={'/'} className="grow flex flex-col items-center font-semibold text-sm">
            <img 
            src="/assets/icons/Home.svg"
            alt="home"
            className="flex flex-col items-center w-[40px] h-[40px]"
            />
          </Link>
          <Link to={'/take-picture'} className="grow flex flex-col items-center font-semibold text-sm">
            <img 
            src="/assets/icons/take-picture.svg"
            alt="take picture"
            className="flex flex-col items-center w-20"
            />
          </Link>
          <Link to={'/profile'} className="grow flex flex-col items-center font-semibold text-sm">
            <img 
            src="/assets/icons/profile.svg"
            alt="profile"
            className="flex flex-col items-center w-[40px] h-[40px]"
            />
          </Link>

        </div>
      )
    }

export default Bottombar;