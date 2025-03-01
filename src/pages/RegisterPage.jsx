import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { selectEmail, selectName, selectPassword, setEmail, setName, setPassword } from "../redux/features/auth/registerSlice";
import authServices from "../services/authServices";
import { toast } from "react-toastify";

const RegisterPage = () => {

    const name = useSelector(selectName);
    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        // handle the registration here
        authServices.register({ name, email, password })
            .then((response) => {
                toast.success(response.data.message);

                // clear the form
                dispatch(setName(""));
                dispatch(setEmail(""));
                dispatch(setPassword(""));

                setTimeout(() => {
                    navigate("/login");
                }, 500);
            })
            .catch((err) => {
                toast.error(err.response.data.message);
            })
    }

    return (
        <div className="container mt-5 text-center">
            <h1 className="text-4xl text-gray-800">Register for Chattr!</h1>
            <h4 className="text-xl text-gray-600">A simple chat application</h4>

            <div className="max-w-2xl mx-auto mt-5 bg-white shadow-md p-5 rounded-lg overflow-hidden border border-gray-200 px-5 py-5">
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => dispatch(setName(e.target.value))}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => dispatch(setEmail(e.target.value))}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="*********"
                            value={password}
                            onChange={(e) => dispatch(setPassword(e.target.value))}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <p className="text-center text-gray-600 text-md mt-3">
                    Already have an account? <Link to="/login" className="text-blue-500 hover:text-blue-700">Login</Link>
                </p>
            </div>
        </div>
    )
}

export default RegisterPage;