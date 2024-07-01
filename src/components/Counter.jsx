

const Counter = () => {
    return (
        <div className="bg-yellow-100 px-10 py-5 flex justify-center items-center mt-20">
            <button className="btn bg-emerald-700 px-4 py-2 rounded-md text-white">
                Increment
            </button>
            <span className="px-6 py-2 font-semibold text-xl">0</span>
            <button className="btn bg-red-700 px-4 py-2 rounded-md text-white">
                Decrement
            </button>
        </div>
    );
};

export default Counter;