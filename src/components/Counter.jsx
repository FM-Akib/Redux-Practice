import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByAmount, increment, incrementByAmount } from "../redux/feature/counter/counterSlice";


const Counter = () => {
    const count = useSelector(state=> state.counter.value)
    const dispatch = useDispatch()
    return (
        <div className="bg-yellow-100 px-10 py-5 flex flex-col gap-5 justify-center items-center mt-20">
          
          
            <div className="">
            <button className="btn bg-emerald-700  px-4 py-2 rounded-md text-white"
            onClick={()=>dispatch(increment())}>
               Increment
            </button>

            <span className="px-6 py-2 font-semibold text-xl">{count}</span>

            <button className="btn bg-red-700 px-4 py-2 rounded-md text-white"
            onClick={()=>dispatch(decrement())}>
                Decrement
            </button>
            </div>


            <div className="">
            <button className="btn bg-fuchsia-700 mr-10 px-4 py-2 rounded-md text-white"
            onClick={()=>dispatch(incrementByAmount(5))}>
               Increment by 5 
            </button>
            
            <button className="btn bg-red-700 px-4  py-2 rounded-md text-white"
            onClick={()=>dispatch(decrementByAmount(5))}>
                Decrement by 5
            </button>
            </div>

        </div>
    );
};

export default Counter;