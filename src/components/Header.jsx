import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import logo from "../assets/images/logo.png";
const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  console.log(user);
  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/login");
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="absolute w-8/12 mx-auto left-0 right-0 px-4 py-5 flex z-10 justify-between items-center">
      <div>
        <img className="h-16" src={logo} alt="logo" />
      </div>
      {user && <button className="px-4 py-2 text-[14px] bg-red-600 text-white rounded-[5px]" onClick={handleSignOut}>Sign Out</button>}
    </div>
  );
};

export default Header;
