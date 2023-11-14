import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";

import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../components/Home/BooksTable";
import BooksCard from "../components/Home/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [showType, setShowType] = useState("table");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  if (loading === true)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Spinner></Spinner>
      </div>
    );
  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          onClick={() => setShowType("table")}
          className="bg-sky-400 hover:bg-sky-600 px-4 py-2 text-white font-semibold rounded-lg"
        >
          Table
        </button>
        <button
          onClick={() => setShowType("card")}
          className="bg-sky-400 hover:bg-sky-600 px-4 py-2 text-white font-semibold rounded-lg"
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books</h1>
        <Link to="/books/add">
          <MdOutlineAddBox className="text-sky-700 text-4xl"></MdOutlineAddBox>
        </Link>
      </div>
      {showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
