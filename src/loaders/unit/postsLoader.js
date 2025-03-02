import postServices from "../../services/postServices";

const postsLoader = async () => {
    try {
        const response = await postServices.fetchPosts();
        return response.data;
    } catch (error) {
        return [];
    }
}

export default postsLoader;