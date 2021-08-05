import { useAppDispatch, useAppSelector } from "app/hooks";
import { RootState } from "app/store";
import CounterComponent from "components/CounterComponent";
import { decrement, increment } from "pages/Counter/slice";

const Counter: React.FC = () => {
    const count = useAppSelector((state: RootState) => state.counter.value)
    const dispatch = useAppDispatch();

    const incrementHandler = () => dispatch(increment())

    const decrementHandler = () => dispatch(decrement())

    return <CounterComponent count={count} increment={incrementHandler} decrement={decrementHandler} />
}

export default Counter;