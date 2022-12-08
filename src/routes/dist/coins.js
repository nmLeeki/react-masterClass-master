"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_query_1 = require("react-query");
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = require("styled-components");
var api_1 = require("../api");
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 0px 20px;\n"], ["\n    padding: 0px 20px;\n"])));
var Header = styled_components_1["default"].header(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    height: 15vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"], ["\n    height: 15vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])));
var CoinsList = styled_components_1["default"].ul(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
var Coin = styled_components_1["default"].li(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    background-color: ", ";\n    color: ", ";\n    border-radius: 15px;\n    margin-bottom: 10px;\n    a {\n        display: flex;\n        align-items: center;\n        padding: 20px;\n        transition: color 0.2s ease-in;\n    }\n    &:hover {\n        a {\n            color: ", ";\n        }\n    }\n"], ["\n    background-color: ", ";\n    color: ", ";\n    border-radius: 15px;\n    margin-bottom: 10px;\n    a {\n        display: flex;\n        align-items: center;\n        padding: 20px;\n        transition: color 0.2s ease-in;\n    }\n    &:hover {\n        a {\n            color: ", ";\n        }\n    }\n"])), function (props) { return props.theme.liBgColor; }, function (props) { return props.theme.bgColor; }, function (props) { return props.theme.accentColor; });
var Title = styled_components_1["default"].h1(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    font-size: 48px;\n    color: ", ";\n"], ["\n    font-size: 48px;\n    color: ", ";\n"])), function (props) { return props.theme.accentColor; });
var Loader = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    text-align: center;\n    display: block;\n"], ["\n    text-align: center;\n    display: block;\n"])));
var Img = styled_components_1["default"].img(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    width: 35px;\n    height: 35px;\n    margin-right: 10px;\n"], ["\n    width: 35px;\n    height: 35px;\n    margin-right: 10px;\n"])));
function Coins() {
    // const [coins, setcoins] = useState<ICoin[]>([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     (async () => {
    //         const response = await fetch('https://api.coinpaprika.com/v1/coins');
    //         const json = await response.json();
    //         setcoins(json.slice(0, 100));
    //         setLoading(false);
    //     })();
    // }, []);
    // console.log(coins);
    // 로드(mount) 시 1회만 실행
    var _a = react_query_1.useQuery(['allCoins'], api_1.fetchCoins), isLoading = _a.isLoading, data = _a.data;
    return (React.createElement(Container, null,
        React.createElement(Header, null,
            React.createElement(Title, null, "\uCF54\uC778")),
        isLoading ? (React.createElement(Loader, null, "'Loading...'")) : (React.createElement(CoinsList, null, data === null || data === void 0 ? void 0 : data.slice(0, 100).map(function (coin) { return (React.createElement(Coin, { key: coin.id },
            React.createElement(react_router_dom_1.Link, { to: {
                    pathname: "/" + coin.id,
                    state: { name: coin.name }
                } },
                React.createElement(Img, { src: "https://coinicons-api.vercel.app/api/icon/" + coin.symbol.toLowerCase() }),
                coin.name,
                " \u2192"))); })))));
}
exports["default"] = Coins;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
