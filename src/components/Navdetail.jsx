import Design from "./Design";

const Navdetail = ({ title, des }) => {

    return (
        <div className="flex flex-col text-center items-center">
            <h2 className="relative group">
                <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 via-gray-900 to-blue-800 dark:from-blue-500 dark:via-white dark:to-blue-500 bg-clip-text text-transparent leading-tight tracking-tight">
                    {title}
                </span>
            </h2>
            <p className="text-lg mt-2 text-gray-600 dark:text-gray-300 max-w-3xl font-medium">
                {des}
            </p>
            <Design />
        </div>
    );
};

export default Navdetail;
