import React, { useState } from "react";
import DeleteModal from "../components/DeleteModal";
import { ToastContainer } from "react-toastify";
import { MdClose } from "react-icons/md";
import spareimg from "../images/spareimg.png";
import noData from "../images/noData.png";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";

const MyFlashcards = () => {
  {
    /*this is page for displaying all flashcards which users create*/
  }

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [flashCardData, setFlashCardData] = useState(
    localStorage.getItem("flashcards")
      ? JSON.parse(localStorage.getItem("flashcards"))
      : []
  );

  const [deleteClickedItem, setDeleteClickedItem] = useState(null);
  //import useNavigate for navigating to page
  const navigate = useNavigate();
  const [ShowCard, setShowCard] = useState(6);
  const handleViewCradsClick = (elem) => {
    navigate("/flashcardDetails", { state: elem });
  };

  //for deleting flashcard if user doesn't wants
  const deleteFlashcard = (deleteClickedItem) => {
    setDeleteClickedItem(deleteClickedItem);
    setShowDeleteModal(true);
  };
  return (
    <>
      <div className="myFlashcardDiv w-[78%] m-auto mt-3">
        <DeleteModal
          showDeleteModal={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
          flashCardData={flashCardData}
          setFlashCardData={setFlashCardData}
          deleteClickedItem={deleteClickedItem} //to pass clicked flashcard to modal
        />
        <ToastContainer />
        <div className="absolute pr-10 overflow-visible text-sm font-semibold text-right text-gray-500 totalCrads right-24">
          {!flashCardData.length
            ? null
            : `Total FlashCards : ${flashCardData.length}`}
        </div>
        <div
          name="displayFlashcardDiv"
          className="Flex flex-wrap m-auto overflow-hidden"
        >
          {flashCardData.length !== 0 ? (
            flashCardData.slice(0, ShowCard).map((elem, index) => (
              <div
                key={index}
                name="childCards"
                className="commonBorder childCards flex flex-col m-auto bg-white w-[300px] h-[200px] p-[8px] rounded mt-[50px] relative mb-[10px]"
              >
                <button
                  className="absolute hidden text-3xl text-gray-500 del -right-3 -top-5 hover:text-4xl hover:text-red-700"
                  onClick={() => {
                    deleteFlashcard(elem, index);
                  }}
                >
                  <MdClose />
                </button>

                {/*Image component*/}
                <img
                  className="border-2 bg-slate-400 w-[70px] h-[70px] m-auto rounded-full absolute -top-12 left-[39.3%] mb-10"
                  src={elem.groupImage ? elem.groupImage : spareimg}
                  alt=""
                />
                <h1 className="mt-4 font-semibold">{elem.groupName}</h1>
                <h2 className="h-10 mt-1 text-gray-800">
                  {elem.groupDescription.length > 60
                    ? elem.groupDescription.slice(0, 60) + "..."
                    : elem.groupDescription}
                </h2>
                <h2 className="mt-8 font-semibold text-gray-500">
                  {elem.term.length} Cards
                </h2>
                {/*View card component*/}
                <button
                  className="w-40 h-10 m-auto font-medium text-red-700 duration-300 border-2 border-red-500 rounded hover:bg-red-500 hover:text-white"
                  onClick={() => handleViewCradsClick(elem)}
                >
                  View Cards
                </button>
              </div>
            ))
          ) : (
            <div className="w-[100%] h-[80vh] rounded noFlashcard overflow-hidden relative font-semibold">
              <img className="absolute w-[40%] h-[50%] " src={noData} alt="" />

              <br />
              <p className="mt-5 text-xl ">
                Please
                <i className="underline text-red-600 hover:text-teal-700">
                  <Link to="/createflashcard"> Create New FlashCard</Link>
                </i>
              </p>
            </div>
          )}

          {/*See some and see all button if we have more than 6 flashcard*/}
          {flashCardData && flashCardData.length > 6 ? (
            <div className="w-[100%]">
              <div className="mt-5 text-right">
                {flashCardData.length === ShowCard ? (
                  <button
                    onClick={() => {
                      setShowCard(6);
                    }}
                    className="w-24 mx-5 mb-24 font-semibold text-red-700"
                  >
                    See Less
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setShowCard(flashCardData.length);
                    }}
                    className="w-24 mx-5 mb-24 font-semibold text-red-700"
                  >
                    See All
                  </button>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default MyFlashcards;
