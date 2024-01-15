import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

// Pages
import Home from "../pages/Home.jsx";
import UserProfile from "../pages/UserProfile";
import Register from "../pages/Register";
import PostDetail from "../pages/PostDetail";
import Logout from "../pages/Logout";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import EditPost from "../pages/EditPost";
import DeletePost from "../pages/DeletePost";
import Dashboard from "../pages/Dashboard";
import CreatePosts from "../pages/CreatePosts";
import CategoryPosts from "../pages/CategoryPosts";
import AuthorPosts from "../pages/AuthorPosts";
import Author from "../pages/Author";

import React from "react";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<UserProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/posts/:id/edit" element={<EditPost />} />
        <Route path="/myposts/:id" element={<Dashboard />} />
        <Route path="/posts/:id/delete" element={<DeletePost />} />
        <Route path="/create" element={<CreatePosts />} />
        <Route path="/posts/categories/:category" element={<CategoryPosts />} />
        <Route path="/authors" element={<Author />} />
        <Route path="/posts/user/:id" element={<AuthorPosts />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
