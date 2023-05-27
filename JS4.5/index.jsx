function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = ["Помыть полы", "Сходить в магазин", "Заправить машину", "Свозить кота на прививку","Посмотреть фильм"];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);