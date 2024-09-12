import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../redux/reducers/postsSlice";

export const Posts = () => {
  const { status, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (status === "loading") {
    return <h1>LOADING . . .</h1>;
  }

  if (status === "failed") {
    return <h1>Error{error}</h1>;
  }

  return <>
  <ul>
    {
    posts.map((post, i) => (
      <li className="border-b-1 my-4" key={post.id}>
        <h2>Post Number: {i+1}</h2>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </li>
    )
      
      )
    }
  </ul>
  
  </>;
};
