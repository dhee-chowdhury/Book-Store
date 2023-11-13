import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import AddBook from "./pages/AddBook.jsx";
import DeleteBook from "./pages/DeleteBook.jsx";
import EditBook from "./pages/EditBook.jsx";
import BookDetails from "./pages/BookDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/books",
    element: <Books></Books>,
  },
  {
    path: "/books/add",
    element: <AddBook></AddBook>,
  },
  {
    path: "/books/delete/:id",
    element: <DeleteBook></DeleteBook>,
  },
  {
    path: "/books/edit/:id",
    element: <EditBook></EditBook>,
  },
  {
    path: "/books/details/:id",
    element: <BookDetails></BookDetails>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
