import instance from "./instance";

const postServices = {
    createPost: async (post) => {
        return await instance.post("/posts", post);
    },
    fetchPosts: async () => {
        return await instance.get("/posts");
    },
    fetchPost: async (postId) => {
        return await instance.get(`/posts/${postId}`);
    },
    updatePost: async (postId, post) => {
        return await instance.put(`/posts/${postId}`, post);
    },
    deletePost: async (postId) => {
        return await instance.delete(`/posts/${postId}`);
    },
    likePost: async (postId) => {
        return await instance.post(`/posts/${postId}/like`);
    }
}

export default postServices;