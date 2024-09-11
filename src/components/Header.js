import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { addGptPageLang } from "../utils/appConfigSlice";

const Header = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const user = useSelector((store) => store.user);
  const showGptPage = useSelector((store) => store?.gptSearch?.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const language = useRef(null);

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser(null));
        navigate("/");
      }
    });
    return () => unsubscribed();
  }, []);

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
        className="w-48 my-2 mx-16 cursor-pointer"
        src={LOGO}
        alt="logo"
        onClick={() => navigate("/")}
      />

      {user && (
        <div className="flex items-center mx-20 cursor-pointer">
          <div>
            {showGptPage && (
              <select
                className="m-4 p-2 rounded bg-gray-600 text-white"
                onChange={(e) => {
                  dispatch(addGptPageLang(e.target.value));
                }}
              >
                {SUPPORTED_LANGUAGE.map((lang) => (
                  <option
                    ref={language}
                    key={lang.idenifier}
                    value={lang.idenifier}
                  >
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="text-white mr-6 bg-purple-800 py-2 px-4 rounded"
              onClick={() => dispatch(toggleGptSearchView())}
            >
              {!showGptPage ? "GPT Search" : "HomePage"}
            </button>
          </div>
          <img
            className="w-10 h-10 my-8 mx-2"
            src={user?.photoURL}
            alt="user_logo"
            onClick={() => setIsDropDownOpen((prev) => !prev)}
          />
          {!isDropDownOpen ? (
            <TiArrowSortedDown className="text-white" />
          ) : (
            <TiArrowSortedUp className="text-white" />
          )}
          {isDropDownOpen && (
            <div className=" px-4 py-2 w-[100px] absolute top-20 bg-neutral-800 text-white right-[80px]">
              <ul>
                <li>
                  <button onClick={handleSignOut}>Sign out</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
