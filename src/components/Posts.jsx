// Dummy-posts-Data...........................
import { DummyPosts } from "../data/data";

// UseState...................................
import { useState } from "react";

// Components.................................
import PostItem from "./PostItem";
import Headpost from "./Headpost";

const Posts = () => {
    const [posts, setPosts] = useState(DummyPosts);

    return (
        <section className="posts">

            <div className="heade-post-aria">
                <Headpost />
            </div>

                {posts.length > 0 ? <div className="container posts-container">
                    {
                        posts.length > 0 &&
                        posts.map(({ Image, authorId, category, title, des, id }, index) => (
                            <PostItem
                                key={index}
                                Image={Image}
                                category={category}
                                authorId={authorId}
                                title={title}
                                des={des}
                                postId={id}
                            />
                        ))}
                </div> : <h2 className="error-center">No posts found</h2>
                }
        </section>
    );
};

export default Posts;
