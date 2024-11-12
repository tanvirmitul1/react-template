/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/features/counter/CounterSlice";
import PropTypes from "prop-types";
const Counter = ({ id }) => {
  const dispatch = useDispatch();
  const count = useSelector(
    (state) => state.counter.counters[`counter${id}`].value
  );
  return (
    <div>
      <span onClick={() => dispatch(increment(Number(id)))}> increase</span>{" "}
      {count}{" "}
      <span onClick={() => dispatch(decrement(Number(id)))}>decrease</span>
    </div>
  );
};

export default Counter;
Counter.propTypes = {
  id: PropTypes.number.isRequired,
};
