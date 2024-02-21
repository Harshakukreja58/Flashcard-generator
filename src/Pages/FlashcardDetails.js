import React from "react";
import { useLocation, Link } from "react-router-dom";
import SelectedFlashcard from "../components/SelectedFlashCard";
import noFlashcard from "../images/noData.png";

const FlashcardDetails = () => {
  //it has access to current location object
  const location = useLocation();
  const flashcardData = location.state;

  return (
    <>
      {flashcardData ? (
        <SelectedFlashcard location={location} flashcardData={flashcardData} />
      ) : (
        <div className="w-[100%] h-[80vh] rounded noFlashcard overflow-hidden relative font-semibold">
          <img
            className="absolute w-[100%] h-[100%]"
            src={noFlashcard}
            alt=""
          />
          <div className="text-5xl text-black-800 mt-32  backdrop-blur-sm w-[80%] m-auto">
            "You directly Jump to the Flashcard details page without selecting
            any card"
          </div>
          <br />
          <p className="text-xl mt-5  backdrop-blur-sm">
            Please go and select
            <i className=" text-amber-950 underline hover:text-teal-700  ">
              <Link to="/myflashcard"> Your FlashCard</Link>
            </i>
          </p>
        </div>
      )}
    </>
  );
};

export default FlashcardDetails;
