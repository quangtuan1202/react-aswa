import styled from "styled-components";

interface Props {
  count: number;
  increment: Function;
  decrement: Function;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  flex-direction: column;
`;

const Button = styled.button`
    margin: 10px;
    background: #ffffff;
    border: 1px solid #9b9b9b;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    color: #555555;
`;

const CounterComponent: React.FC<Props> = ({ count, increment, decrement }) => (
  <Container>
    <h1>{count}</h1>
    <div>
      <Button onClick={() => decrement()}>Decrement</Button>
      <Button onClick={() => increment()}>Increment</Button>
    </div>
  </Container>
);

export default CounterComponent;
