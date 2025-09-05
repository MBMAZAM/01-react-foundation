import { useCounter } from "../hooks/useCounter"

export const CounterWithHook = () => {

  const { count, increaseBy } = useCounter({
    initialValue: 5
  });

  return (
    <>
      <div>Counter: <small>{count}</small></div>

      <div>
        <button onClick={() => increaseBy(+1)}>+1</button>
        &nbsp;
        <button onClick={() => increaseBy(-1)}>-1</button>
      </div>
    </>
  )
}
