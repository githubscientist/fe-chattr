import { useLoaderData } from "react-router";

const ProfilePage = () => {

    const { user } = useLoaderData();

    return (
        <div className="bg-gray-100">
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white p-16 rounded-lg shadow-2xl w-96">
                    <h2 className="text-3xl font-bold mb-10 text-center">Profile</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" className="mt-1 p-2 w-full border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed" disabled
                            value={user.name}
                        />

                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed" disabled
                            value={user.email}
                        />
                    </div>
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
                    disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50
                    " disabled>Save</button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;