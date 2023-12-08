import { useCounter } from "@chakra-ui/counter";
import { CounterWrapper } from "./counter.styled";
import { CounterMinus, CounterPlus } from "../icons";

export const Counter = () => {
  const counter = useCounter({
    max: 99,
    min: 1,
    step: 1,
    defaultValue: 1,
  });

  return (
    <CounterWrapper>
      <button onClick={() => counter.increment()}>
        <CounterPlus />
      </button>
      <p>{counter.value}</p>
      <button onClick={() => counter.decrement()}>
        <CounterMinus />
      </button>
    </CounterWrapper>
  );
};
