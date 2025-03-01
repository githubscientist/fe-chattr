import { toast } from "react-toastify";

const HomePage = () => {
    return (
        <div>
            <button
                className="btn btn-primary btn-lg btn-block border-0"
                onClick={() => {
                    toast.success("Hello, world!");
                }}
            >Toast</button>
        </div>
    )
}

export default HomePage;