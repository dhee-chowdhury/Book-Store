/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed bg-black bg-opacity-60 inset-0 z-50 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[600px] h-[400px] max-w-full bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          onClick={onClose}
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl"></PiBookOpenTextLight>
          <h2 className="my-1 font-semibold text-lg">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl"></BiUserCircle>
          <h2 className="my-1">{book.author}</h2>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
