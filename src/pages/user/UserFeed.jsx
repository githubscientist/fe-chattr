import { useLoaderData, useNavigate } from "react-router";
import { HeartIcon as OutlineHeart } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeart } from "@heroicons/react/24/solid";
import { useState } from "react";
import postServices from "../../services/postServices";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { openDialog } from "../../redux/features/dialog/confirmationSlice";

const UserFeed = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, posts } = useLoaderData();

    const [filled, setFilled] = useState(posts.map(post => {
        return post.likes.includes(user.user._id);
    }));

    const handleCreatePost = () => {
        navigate("/dashboard/create-post");
    }

    const handleLike = (index) => {
        const newFilled = [...filled];
        newFilled[index] = !newFilled[index];
        setFilled(newFilled);

        // call the api to like or unlike the post
        postServices.likePost(posts[index]._id)
            .then(() => {
                toast.success("Post liked successfully");

                // reload the loader data
                // navigate("/dashboard/feed", { replace: true });
            })
            .catch((error) => {
                toast.error("Failed to like post");
            });
    }

    const handleDelete = (index) => {
        dispatch(openDialog({
            message: "Are you sure you want to delete this post?",
            actionType: 'DELETE_POST',
            postId: posts[index]._id,
        }));
    }

    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold my-4">User Feed</h1>
                <div className="w-1/2">
                    {posts.map((post, index) => (
                        <div key={post._id} className="bg-white p-4 my-4 shadow-lg rounded-lg">
                            <h2 className="text-xl font-bold">{post.title}</h2>
                            <p className="text-gray-600">{post.content}</p>

                            <div className="flex justify-between mt-4">
                                <p className="text-gray-500">posted by: {post.author.name}</p>
                                <p className="text-gray-500">{new Date(post.createdAt).toDateString()}</p>
                            </div>

                            <div className="flex justify-between mt-4">
                                <div className="flex items-center"
                                    onClick={() => handleLike(index)}
                                >
                                    {
                                        filled[index] ? <SolidHeart className="text-red-600 h-6 w-6" /> : <OutlineHeart className="w-6 h-6 text-black" />
                                    }
                                    <p className="ml-2">{post.likes.length}</p>
                                </div>

                                <div className="flex justify-end">
                                    <span className="text-blue-600 cursor-pointer hover:underline">Edit</span>
                                    <span className="text-red-600 cursor-pointer hover:underline ml-4"
                                        onClick={() => handleDelete(index)}
                                    >Delete</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >

            <div className="fixed bottom-10 right-10">
                <button
                    className="bg-blue-600  text-white px-4 py-1 rounded-lg shadow-lg hover:bg-blue-700 transition"
                    onClick={handleCreatePost}
                >
                    Create Post
                </button>
            </div>
        </>
    )
}

export default UserFeed;