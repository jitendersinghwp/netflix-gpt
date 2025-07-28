import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { setUser, clearUser } from "../utils/userSlice";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/profile.png";
import { toggleSearchGPT } from "../utils/configSlice";
const Header = () => {
  const user = useSelector((store) => store.user);
  const searchGPT = useSelector(store => store.config.searchGPT);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async (e) => {
    e.preventDefault();
    await signOut(auth)
  };

  const handleToggleSearchGPT = () => {
     dispatch(toggleSearchGPT());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(setUser({ uid, displayName, email }));
        navigate("/browse");
      } else {
        dispatch(clearUser());
        navigate("/login");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="absolute w-8/12 mx-auto left-0 right-0 px-4 py-5 flex z-10 justify-between items-center">
      <div>
        <img className="h-16" src={logo} alt="logo" />
      </div>
      {user && (
        <div className="flex gap-4 items-center">
        <button 
        className="bg-purple-500 text-white px-4 py-2 rounded-[5px] text-[14px] cursor-pointer"
        onClick={handleToggleSearchGPT}
        >{searchGPT ? 'Movies' : 'GPT Search'}</button>
        <div className="relative inline-block group">
          <button className="flex gap-1.5 items-center">
            <img src={profile} className="rounded-[5px]" alt="Profile" />
            <span className="inline-block align-middle w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-white"></span>
          </button>
          <div className="absolute left-0 top-[calc(100%+10px)] w-40 text-white bg-black border border-gray-400 rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-10">
            <Link to="#" className="block px-4 py-2 text-[12px] hover:underline">
              User 1
            </Link>
            <Link to="#" className="block px-4 py-2 text-[12px] hover:underline">
              User 2
            </Link>
            <Link to="#" className="block px-4 py-2 text-[12px] hover:underline">
              User 3
            </Link>
            <hr className="border-gray-500" />
            <Link to="#" onClick={handleSignOut} className="block px-4 py-2 text-[12px] hover:underline">
              Sign out of Netflix
            </Link>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Header;
