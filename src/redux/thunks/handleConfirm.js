import { toast } from 'react-toastify';
import postServices from '../../services/postServices';
import { closeDialog } from '../features/dialog/confirmationSlice';

const handleConfirm = () => async (dispatch, getState) => {
    const { actionType, postId } = getState().confirmation;

    try {
        switch (actionType) {
            case 'DELETE_POST':
                await postServices.deletePost(postId);
                toast.success("Post deleted successfully");
                break;
            default:
                break;
        }
    } catch (error) {
        toast.error("Failed to delete post");
    }

    dispatch(closeDialog());
}

export default handleConfirm;