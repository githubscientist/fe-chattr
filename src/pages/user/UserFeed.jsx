import { useNavigate } from "react-router";

const UserFeed = () => {

    const navigate = useNavigate();

    const handleCreatePost = () => {
        navigate("/dashboard/create-post");
    }

    return (
        <>
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