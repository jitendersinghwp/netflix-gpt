import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser, clearUser } from "../utils/userSlice";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import logo from "../assets/images/logo.png";
const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSignOut = async () => await signOut(auth);

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
    }

    
  }, []);

  return (
    <div className="absolute w-8/12 mx-auto left-0 right-0 px-4 py-5 flex z-10 justify-between items-center">
      <div>
        <img className="h-16" src={logo} alt="logo" />
      </div>
      {user && <button className="px-4 py-2 text-[14px] bg-red-600 text-white rounded-[5px] cursor-pointer" onClick={handleSignOut}>Sign Out</button>}
    </div>
  );
};

export default Header;
