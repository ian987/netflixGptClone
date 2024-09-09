import React, { useState } from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const Header = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-full z-10 flex justify-between">
      <img
        className="w-48 my-2 mx-24"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div
          className="flex items-center mx-20 cursor-pointer"
          onMouseEnter={() => setIsDropDownOpen(true)}
          onMouseLeave={() => setIsDropDownOpen(false)}
        >
          <img
            className="w-10 h-10 my-8 mx-2"
            src={user?.photoURL}
            alt="user_logo"
          />
          {!isDropDownOpen ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
          {isDropDownOpen && (
            <div className=" px-4 py-2 w-[100px] absolute top-20 bg-neutral-800 text-white right-[80px]">
              <ul>
                <li>
                  <button onClick={handleSignOut}>Sign out</button>
                </li>
              </ul>
            </div>
          )}

          {/*  */}
        </div>
      )}
    </div>
  );
};

export default Header;
