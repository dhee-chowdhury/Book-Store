import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`https://book-store-psi-seven.vercel.app/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("book deleted successfully", {
          variant: "success",
          anchorOrigin: { vertical: "top", horizontal: "center" },
        });
        navigate("/");
      })
      .catch(() => {
        setLoading(false);
        enqueueSnackbar("Something went wrong. Try again.", {
          variant: "error",
          anchorOrigin: { vertical: "top", horizontal: "center" },
        });
      });
  };
  if (loading === true)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Spinner></Spinner>
      </div>
    );
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are You Sure You want to delete this book?</h3>

        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
