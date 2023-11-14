import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleAddBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book added successfully", {
          variant: "success",
          anchorOrigin: { vertical: "top", horizontal: "center" },
        });
        navigate("/");
      })
      .catch(() => {
        setLoading(false);
        enqueueSnackbar("Something went wrong", {
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
      <h1 className="text-3xl my-4">Add a book</h1>
      {/* {loading ? <Spinner /> : ""} */}
      <div className="flex flex-col border-2 border-sky-500 rounded-xl w-[800px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button onClick={handleAddBook} className="p-2 bg-sky-500 m-8">
          Add
        </button>
      </div>
    </div>
  );
};

export default AddBook;
