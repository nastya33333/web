function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);}const Block = ({ HeaderTag = "h2", headerText, className = "", children }) => /*#__PURE__*/
React.createElement("div", { className: className }, /*#__PURE__*/
React.createElement(HeaderTag, null, headerText),
children);



const CountryFilter = ({ value, onChange, countries }) => /*#__PURE__*/
React.createElement(Block, { headerText: "\u0421\u0442\u0440\u0430\u043D\u0430" }, /*#__PURE__*/
React.createElement("select", { onChange: onChange, value: value }, /*#__PURE__*/
React.createElement("option", { value: "" }, "\u0412\u0441\u0435 \u0441\u0442\u0440\u0430\u043D\u044B"),
countries.map((n) => /*#__PURE__*/
React.createElement("option", { key: n }, n))));





const SizeFilter = ({ value, onChange, sizes }) => /*#__PURE__*/
React.createElement(Block, { headerText: "\u0420\u0430\u0437\u043C\u0435\u0440" },
sizes.map((n) => /*#__PURE__*/
React.createElement("label", { className: "size", key: n }, /*#__PURE__*/
React.createElement("input", {
  type: "checkbox",
  value: n,
  checked: value.includes(n),
  onChange: onChange }),

n)));





const PriceInput = ({ index, ...props }) => /*#__PURE__*/
React.createElement("input", _extends({ className: "price-input", "data-index": index }, props));


const PriceFilter = ({ value, onChange }) => /*#__PURE__*/
React.createElement(Block, { headerText: "\u0426\u0435\u043D\u0430" }, /*#__PURE__*/
React.createElement(PriceInput, { value: value[0], onChange: onChange, index: "0" }), "\xA0-\xA0", /*#__PURE__*/

React.createElement(PriceInput, { value: value[1], onChange: onChange, index: "1" }), "\xA0\u0440\u0443\u0431\xA0");




const GoodsList = ({ goods }) => /*#__PURE__*/
React.createElement("div", null,
goods.map((n) => /*#__PURE__*/
React.createElement(Block, { className: "good", HeaderTag: "h3", headerText: n.name, key: n.id }, /*#__PURE__*/
React.createElement("img", { src: n.image }), /*#__PURE__*/
React.createElement("p", null, n.cost, " \u0420"), /*#__PURE__*/
React.createElement("button", { "data-art": n.name }, "\u041A\u0443\u043F\u0438\u0442\u044C"))));





const App = ({ goods }) => {
  const countries = React.useMemo(
  () => [...new Set(goods.map(n => n.country))],
  [goods]);

  const sizes = React.useMemo(() => [...new Set(goods.map(n => n.size))], [
  goods]);


  const [country, setCountry] = React.useState("");
  const [size, setSize] = React.useState([]);
  const [price, setPrice] = React.useState(["", ""]);

  const onCountryChange = e => setCountry(e.target.value);
  const onSizeChange = ({ target: { checked, value } }) => {
    setSize(
    !size.includes(value) && checked ?
    [...size, value] :
    size.filter(n => n !== value));

  };
  const onPriceChange = ({
    target: {
      value,
      dataset: { index } } }) =>

  {
    setPrice(price.map((n, i) => i === +index ? value : n));
  };

  const filteredGoods = goods.filter(
  (n) =>
  (!country || n.country === country) && (
  !size.length || size.includes(n.size)) && (
  !price[0] || price[0] <= n.cost) && (
  !price[1] || price[1] >= n.cost));


  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { className: "filters" }, /*#__PURE__*/
    React.createElement(CountryFilter, {
      value: country,
      onChange: onCountryChange,
      countries: countries }), /*#__PURE__*/

    React.createElement(SizeFilter, { value: size, onChange: onSizeChange, sizes: sizes }), /*#__PURE__*/
    React.createElement(PriceFilter, { value: price, onChange: onPriceChange })), /*#__PURE__*/

    React.createElement(GoodsList, { goods: filteredGoods })));


};

const DATA = [
{
  sex: "male",
  name: "Рубашка №1",
  cost: 4990,
  country: "France",
  image:
  "https://henderson.ru/uimages/catalog/product/SHL-2706-N/SHL-2706-N-WHITE-5-9.jpg",
  size: "S" },

{
  sex: "male",
  name: "Рубашка №2",
  cost: 4490,
  country: "Turkey",
  image:
  "https://henderson.ru/uimages/catalog/product/SHL-3985-SL/SHL-3985-SL-WHITE-6-8.jpg",
  size: "M" },

{
  sex: "male",
  name: "Рубашка №3",
  cost: 4990,
  country: "China",
  image:
  "https://henderson.ru/uimages/catalog/product/SHL-1969-N/SHL-1969-N-DGREY-5-2.jpg",
  size: "L" },

{
  sex: "male",
  name: "Рубашка №4",
  cost: 4490,
  country: "Turkey",
  image:
  "https://henderson.ru/uimages/catalog/product/SHL-1968-N/SHL-1968-N-BEIGE-5-2.jpg",
  size: "XL" },

{
  sex: "male",
  name: "Рубашка №5",
  cost: 3490,
  country: "Turkey",
  image:
  "https://henderson.ru/uimages/catalog/product/SHL-1998-S/SHL-1998-S-NAVY-5-4.jpg",
  size: "XL" },

{
  sex: "male",
  name: "Рубашка №6",
  cost: 1990,
  country: "Italy",
  image:
  "https://henderson.ru/uimages/catalog/product/SHL-1663-X/SHL-1663-X-NAVY-6-1.jpg",
  size: "M" },

{
  sex: "male",
  name: "Рубашка №7",
  cost: 2590,
  country: "Spain",
  image:
  "https://henderson.ru/uimages/catalog/product/SHS-0668-S/SHS-0668-S-DNAVY-5-1.jpg",
  size: "S" },

{
  sex: "male",
  name: "Рубашка №8",
  cost: 2990,
  country: "Italy",
  image:
  "https://henderson.ru/uimages/catalog/product/HSS-0137/HSS-0137-OBLUE-5-1.jpg",
  size: "M" },

{
  sex: "male",
  name: "Рубашка №9",
  cost: 4990,
  country: "Spain",
  image:
  "https://henderson.ru/uimages/catalog/product/SHS-0684-S/SHS-0684-S-RED-5-3.jpg",
  size: "S" },

{
  sex: "male",
  name: "Рубашка №10",
  cost: 4490,
  country: "Italy",
  image:
  "https://henderson.ru/uimages/catalog/product/HSS-0134/HSS-0134-NAVY-5-1.jpg",
  size: "M" },

{
  sex: "male",
  name: "Рубашка №11",
  cost: 3490,
  country: "Spain",
  image:
  "https://henderson.ru/uimages/catalog/product/SHL-2043-R/SHL-2043-R-BLUE-5-1.jpg",
  size: "XXL" },

{
  sex: "male",
  name: "Рубашка №12",
  cost: 2990,
  country: "China",
  image:
  "https://henderson.ru/uimages/catalog/product/SHS-0686-S/SHS-0686-S-PINK-5-3.jpg",
  size: "L" },

{
  sex: "male",
  name: "Рубашка №13",
  cost: 1990,
  country: "Russia",
  image:
  "https://henderson.ru/uimages/catalog/product/SHS-0685-X/SHS-0685-X-GREEN-5-3.jpg",
  size: "XL" },

{
  sex: "male",
  name: "Рубашка №14",
  cost: 3490,
  country: "Spain",
  image:
  "https://henderson.ru/uimages/catalog/product/SHL-1990-S/SHL-1990-S-GREEN-5-5.jpg",
  size: "L" },

{
  sex: "male",
  name: "Рубашка №15",
  cost: 2990,
  country: "Russia",
  image:
  "https://henderson.ru/uimages/catalog/product/SHS-0662-S/SHS-0662-S-BEIGE-5-1.jpg",
  size: "S" },

{
  sex: "male",
  name: "Рубашка №16",
  cost: 4990,
  country: "Germany",
  image:
  "https://henderson.ru/uimages/catalog/product/SHL-1833-S/SHL-1833-S-BORDO-6-3.jpg",
  size: "XXL" },

{
  sex: "male",
  name: "Рубашка №17",
  cost: 3490,
  country: "Germany",
  image:
  "https://henderson.ru/uimages/catalog/product/SHL-1540/SHL-1540-BORDO-6-7.jpg",
  size: "S" },

{
  sex: "male",
  name: "Рубашка №18",
  cost: 4490,
  country: "Italy",
  image:
  "https://henderson.ru/uimages/catalog/product/SHL-1950-X/SHL-1950-X-NAVY-6-3.jpg",
  size: "L" },

{
  sex: "male",
  name: "Рубашка №19",
  cost: 2990,
  country: "Russia",
  image:
  "https://henderson.ru/uimages/catalog/product/SHL-1796-X/SHL-1796-X-NAVY-5-1.jpg",
  size: "M" },

{
  sex: "male",
  name: "Рубашка №20",
  cost: 2590,
  country: "Russia",
  image:
  "https://henderson.ru/uimages/catalog/product/SHL-1916-X/SHL-1916-X-BLACK-5-3.jpg",
  size: "XXL" }].

map((n, i) => ({ ...n, id: i + 1 }));

ReactDOM.render( /*#__PURE__*/React.createElement(App, { goods: DATA }), document.getElementById("app"));