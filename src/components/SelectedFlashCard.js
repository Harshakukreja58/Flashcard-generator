import React, { useState } from "react";
import ShareModal from "./ShareModal";
import PdfDownload from "./PdfDownloader";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoMdShare } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { FiPrinter } from "react-icons/fi";

const SelectedFlashCard = (props) => {
  const { flashcardData } = props;
  const [term, setTerm] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const nextCard = () => {
    if (flashcardData.term.length - 1 !== term) {
      setTerm(term + 1);
    }
  };
  const previousCard = () => {
    if (term !== 0) {
      setTerm(term - 1);
    }
  };
  return (
    <div>
      {/* sharemodal will appear if user clicks share button*/}
      <ShareModal showModal={showModal} setShowModal={setShowModal} />
      <div className="flashcardDetailsPage m-auto mx-[10%] mt-5">
        {/*The div will show flashcard group name, details of selected flashcard and there is also back arrow to visit my flashcards page*/}
        <div>
          {
            <Link to="/myflashcard">
              <IoArrowBackSharp className="text-2xl cursor-pointer hover:text-red-500" />
            </Link>
          }
        </div>
        <div className="relative p-2 mx-4 text-left -top-5">
          <h1 className="mb-1 text-2xl font-semibold">
            {flashcardData.groupName}
          </h1>
          <h2 className="text-gray-500">{flashcardData.groupDescription}</h2>
        </div>
      </div>

      <div className="flex flex-row gap-6 midBox">
        {/*Flashcard term component which will contain all terms */}
        <div className="flashcardDiv commonBorder bg-slate-50 pl-2 w-[20%] text-left overflow-hidden ">
          <h2 className="p-1 font-semibold text-gray-600">Flashcards</h2>
          <hr className="border-gray-300 w-[90%] mb-2" />
          <div className="ml-1 termDiv ">
            {flashcardData.term.map((elem, i) => (
              <div
                key={i}
                className={`p-1 cursor-pointer ${
                  term === i
                    ? "text-red-600 font-bold"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                <button onClick={() => setTerm(i)}>{elem.termName}</button>
              </div>
            ))}
          </div>
        </div>

        {/*  component will show the selected term card image if it has any and term details*/}
        <div className="displayTermBox commonBorder flex flex-row p-5 bg-white w-[60%] h-[300px] justify-around">
          <p
            className={`${
              !flashcardData.term[term].termImage
                ? "hidden"
                : "dImg w-[50%] h-[100%]"
            }`}
          >
            <img
              className=" commonBorder max-w-[100%]  h-[100%] m-auto"
              src={flashcardData.term[term].termImage}
              alt=""
            />
          </p>
          <p
            className={`${
              !flashcardData.term[term].termImage
                ? " w-[90%] "
                : "descScroll w-[50%] h-[100%]  ml-4 text-gray-600 text-left overflow-y-auto"
            }`}
          >
            {flashcardData.term[term].termDefinition}
          </p>
        </div>
        <div className="shareBtnsDiv">
          {/*This div has share download and print buttons*/}
          {/*share button*/}
          <button
            className="rounded-md commonBorder shareBtns"
            onClick={() => {
              setShowModal(true);
            }}
          >
            {<IoMdShare className="shareIcons" />} Share
          </button>
          {/*flashcard download button and function*/}
          <div className="commonBorder shareBtns">
            {<MdOutlineFileDownload classname="shareIcons" />}
            <PdfDownload
              buttonLabel="Download"
              flashcardData={flashcardData}
              //pdf download component
            />
          </div>
          {/*Flashcard print button*/}
          <button
            className="commonBorder shareBtns"
            onClick={() => window.print()}
          >
            <FiPrinter className="shareIcons" /> Print
          </button>
        </div>
      </div>

      <p className="mx-auto  h-3 w-60 bg-black opacity-5 mt-3 rounded-[100%] shadow-xl"></p>
      {/*Pagination buttons will help viewing different term cards*/}
      <div className="cursolBtn flex justify-center items-center">
        <MdNavigateBefore
          className="text-5xl cursor-pointer dark:text-gray-400 hover:text-red-500 "
          onClick={previousCard}
        />
        <span className="ml-10">{term + 1}/</span>
        <span className="mr-10">{flashcardData.term.length}</span>
        <MdNavigateNext
          className="text-5xl cursor-pointer dark:text-gray-400 hover:text-red-500 "
          onClick={nextCard}
        />
      </div>
    </div>
  );
};

export default SelectedFlashCard;
