const Block = ({ HeaderTag = "h2", headerText, className = "", children }) => (
  <div className={className}>
    <HeaderTag>{headerText}</HeaderTag>
    {children}
  </div>
);

const CountryFilter = ({ value, onChange, countries }) => (
  <Block headerText="Страна">
    <select onChange={onChange} value={value}>
      <option value="">Все страны</option>
      {countries.map((n) => (
        <option key={n}>{n}</option>
      ))}
    </select>
  </Block>
);

const SizeFilter = ({ value, onChange, sizes }) => (
  <Block headerText="Размер">
    {sizes.map((n) => (
      <label className="size" key={n}>
        <input
          type="checkbox"
          value={n}
          checked={value.includes(n)}
          onChange={onChange}
        />
        {n}
      </label>
    ))}
  </Block>
);

const PriceInput = ({ index, ...props }) => (
  <input className="price-input" data-index={index} {...props} />
);

const PriceFilter = ({ value, onChange }) => (
  <Block headerText="Цена">
    <PriceInput value={value[0]} onChange={onChange} index="0" />
    &nbsp;-&nbsp;
    <PriceInput value={value[1]} onChange={onChange} index="1" />
    &nbsp;руб&nbsp;
  </Block>
);

const GoodsList = ({ goods }) => (
  <div>
    {goods.map((n) => (
      <Block className="good" HeaderTag="h3" headerText={n.name} key={n.id}>
        <img src={n.image} />
        <p>{n.cost} Р</p>
        <button data-art={n.name}>Купить</button>
      </Block>
    ))}
  </div>
);

const App = ({ goods }) => {
  const countries = React.useMemo(
    () => [...new Set(goods.map((n) => n.country))],
    [goods]
  );
  const sizes = React.useMemo(() => [...new Set(goods.map((n) => n.size))], [
    goods
  ]);

  const [country, setCountry] = React.useState("");
  const [size, setSize] = React.useState([]);
  const [price, setPrice] = React.useState(["", ""]);

  const onCountryChange = (e) => setCountry(e.target.value);
  const onSizeChange = ({ target: { checked, value } }) => {
    setSize(
      !size.includes(value) && checked
        ? [...size, value]
        : size.filter((n) => n !== value)
    );
  };
  const onPriceChange = ({
    target: {
      value,
      dataset: { index }
    }
  }) => {
    setPrice(price.map((n, i) => (i === +index ? value : n)));
  };

  const filteredGoods = goods.filter(
    (n) =>
      (!country || n.country === country) &&
      (!size.length || size.includes(n.size)) &&
      (!price[0] || price[0] <= n.cost) &&
      (!price[1] || price[1] >= n.cost)
  );

  return (
    <div>
      <div className="filters">
        <CountryFilter
          value={country}
          onChange={onCountryChange}
          countries={countries}
        />
        <SizeFilter value={size} onChange={onSizeChange} sizes={sizes} />
        <PriceFilter value={price} onChange={onPriceChange} />
      </div>
      <GoodsList goods={filteredGoods} />
    </div>
  );
};

const DATA = [
  {
    sex: "male",
    name: "Рубашка №1",
    cost: 4990,
    country: "France",
    image:
      "https://henderson.ru/uimages/catalog/product/SHL-2706-N/SHL-2706-N-WHITE-5-9.jpg",
    size: "S"
  },
  {
    sex: "male",
    name: "Рубашка №2",
    cost: 4490,
    country: "Turkey",
    image:
      "https://henderson.ru/uimages/catalog/product/SHL-3985-SL/SHL-3985-SL-WHITE-6-8.jpg",
    size: "M"
  },
  {
    sex: "male",
    name: "Рубашка №3",
    cost: 4990,
    country: "China",
    image:
      "https://henderson.ru/uimages/catalog/product/SHL-1969-N/SHL-1969-N-DGREY-5-2.jpg",
    size: "L"
  },
  {
    sex: "male",
    name: "Рубашка №4",
    cost: 4490,
    country: "Turkey",
    image:
      "https://henderson.ru/uimages/catalog/product/SHL-1968-N/SHL-1968-N-BEIGE-5-2.jpg",
    size: "XL"
  },
  {
    sex: "male",
    name: "Рубашка №5",
    cost: 3490,
    country: "Turkey",
    image:
      "https://henderson.ru/uimages/catalog/product/SHL-1998-S/SHL-1998-S-NAVY-5-4.jpg",
    size: "XL"
  },
  {
    sex: "male",
    name: "Рубашка №6",
    cost: 1990,
    country: "Italy",
    image:
      "https://henderson.ru/uimages/catalog/product/SHL-1663-X/SHL-1663-X-NAVY-6-1.jpg",
    size: "M"
  },
  {
    sex: "male",
    name: "Рубашка №7",
    cost: 2590,
    country: "Spain",
    image:
      "https://henderson.ru/uimages/catalog/product/SHS-0668-S/SHS-0668-S-DNAVY-5-1.jpg",
    size: "S"
  },
  {
    sex: "male",
    name: "Рубашка №8",
    cost: 2990,
    country: "Italy",
    image:
      "https://henderson.ru/uimages/catalog/product/HSS-0137/HSS-0137-OBLUE-5-1.jpg",
    size: "M"
  },
  {
    sex: "male",
    name: "Рубашка №9",
    cost: 4990,
    country: "Spain",
    image:
      "https://henderson.ru/uimages/catalog/product/SHS-0684-S/SHS-0684-S-RED-5-3.jpg",
    size: "S"
  },
  {
    sex: "male",
    name: "Рубашка №10",
    cost: 4490,
    country: "Italy",
    image:
      "https://henderson.ru/uimages/catalog/product/HSS-0134/HSS-0134-NAVY-5-1.jpg",
    size: "M"
  },
  {
    sex: "male",
    name: "Рубашка №11",
    cost: 3490,
    country: "Spain",
    image:
      "https://henderson.ru/uimages/catalog/product/SHL-2043-R/SHL-2043-R-BLUE-5-1.jpg",
    size: "XXL"
  },
  {
    sex: "male",
    name: "Рубашка №12",
    cost: 2990,
    country: "China",
    image:
      "https://henderson.ru/uimages/catalog/product/SHS-0686-S/SHS-0686-S-PINK-5-3.jpg",
    size: "L"
  },
  {
    sex: "male",
    name: "Рубашка №13",
    cost: 1990,
    country: "Russia",
    image:
      "https://henderson.ru/uimages/catalog/product/SHS-0685-X/SHS-0685-X-GREEN-5-3.jpg",
    size: "XL"
  },
  {
    sex: "male",
    name: "Рубашка №14",
    cost: 3490,
    country: "Spain",
    image:
      "https://henderson.ru/uimages/catalog/product/SHL-1990-S/SHL-1990-S-GREEN-5-5.jpg",
    size: "L"
  },
  {
    sex: "male",
    name: "Рубашка №15",
    cost: 2990,
    country: "Russia",
    image:
      "https://henderson.ru/uimages/catalog/product/SHS-0662-S/SHS-0662-S-BEIGE-5-1.jpg",
    size: "S"
  },
  {
    sex: "male",
    name: "Рубашка №16",
    cost: 4990,
    country: "Germany",
    image:
      "https://henderson.ru/uimages/catalog/product/SHL-1833-S/SHL-1833-S-BORDO-6-3.jpg",
    size: "XXL"
  },
  {
    sex: "male",
    name: "Рубашка №17",
    cost: 3490,
    country: "Germany",
    image:
      "https://henderson.ru/uimages/catalog/product/SHL-1540/SHL-1540-BORDO-6-7.jpg",
    size: "S"
  },
  {
    sex: "male",
    name: "Рубашка №18",
    cost: 4490,
    country: "Italy",
    image:
      "https://henderson.ru/uimages/catalog/product/SHL-1950-X/SHL-1950-X-NAVY-6-3.jpg",
    size: "L"
  },
  {
    sex: "male",
    name: "Рубашка №19",
    cost: 2990,
    country: "Russia",
    image:
      "https://henderson.ru/uimages/catalog/product/SHL-1796-X/SHL-1796-X-NAVY-5-1.jpg",
    size: "M"
  },
  {
    sex: "male",
    name: "Рубашка №20",
    cost: 2590,
    country: "Russia",
    image:
      "https://henderson.ru/uimages/catalog/product/SHL-1916-X/SHL-1916-X-BLACK-5-3.jpg",
    size: "XXL"
  }
].map((n, i) => ({ ...n, id: i + 1 }));

ReactDOM.render(<App goods={DATA} />, document.getElementById("app"));
