import { useDispatch, useSelector } from "react-redux";
import { closeDialog } from "../redux/features/dialog/confirmationSlice";
import handleConfirm from '../redux/thunks/handleConfirm';

const ConfirmationDialog = () => {
    const dispatch = useDispatch();
    const { isOpen, message } = useSelector(state => state.confirmation);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <h2 className="text-lg font-semibold">Confirm Action</h2>
                <p className="mt-2 text-gray-600">{message}</p>
                <div className="mt-4 flex justify-end space-x-2">
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded-lg"
                        onClick={() => {
                            dispatch(handleConfirm());
                            dispatch(closeDialog());
                        }}
                    >
                        Confirm
                    </button>
                    <button
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg"
                        onClick={() => dispatch(closeDialog())}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationDialog;