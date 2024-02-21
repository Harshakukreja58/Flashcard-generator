import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DeleteModal(props) {
  const {
    showDeleteModal,
    setShowDeleteModal,
    flashCardData,
    setFlashCardData,
  } = props;
  return (
    <>
      {/* This modal will appear at time deleting flashcard*/}
      {showDeleteModal ? (
        <div
          className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
          id="modal-id"
        >
          <div className="absolute bg-black opacity-70 inset-0 z-0"></div>
          <div className="w-full max-w-lg relative mx-auto my-auto rounded-xl shadow-lg bg-white">
            <div className="">
              <div className="text-center p-5 flex-auto justify-center">
                <h2 className="text-xl font-bold py-4">Are you Sure?</h2>
                <p>
                  Do you really want to delete this flashcard? This action
                  cannot be reversed
                </p>
              </div>
              <div className="p-3 mt-2 text-center space-x-4 md:block">
                {/* //button for closing popup */}
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="mb-2 md:mb-0 bg-white-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-red-100"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    const newData = flashCardData.filter(
                      (elem) => elem !== props.deleteClickedItem
                    );

                    setFlashCardData(newData);
                    localStorage.setItem("flashcards", JSON.stringify(newData));
                    toast.error(`Flashcard deleated`, {
                      theme: "light",
                      icon: false,
                      pauseOnFocusLoss: false,
                    });
                  }}
                  className="mb-2 md:mb-0 bg-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-red-400"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default DeleteModal;
