"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = require("styled-components");
var api_1 = require("../api");
var Chart_1 = require("./Chart");
var Price_1 = require("./Price");
var react_query_1 = require("react-query");
var Title = styled_components_1["default"].h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-size: 48px;\n    color: ", ";\n"], ["\n    font-size: 48px;\n    color: ", ";\n"])), function (props) { return props.theme.accentColor; });
var Home = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: block;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    a {\n        padding: 10px;\n        background: rgba(0, 0, 0, 0.5);\n        border-radius: 10px;\n        display: block;\n        width: 100%;\n        height: 100%;\n    }\n"], ["\n    display: block;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    a {\n        padding: 10px;\n        background: rgba(0, 0, 0, 0.5);\n        border-radius: 10px;\n        display: block;\n        width: 100%;\n        height: 100%;\n    }\n"])));
var Loader = styled_components_1["default"].span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    text-align: center;\n    display: block;\n"], ["\n    text-align: center;\n    display: block;\n"])));
var Container = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    padding: 0px 20px;\n    max-width: 480px;\n    margin: 0 auto;\n"], ["\n    padding: 0px 20px;\n    max-width: 480px;\n    margin: 0 auto;\n"])));
var Header = styled_components_1["default"].header(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    height: 15vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    margin: 20px 0;\n"], ["\n    height: 15vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    margin: 20px 0;\n"])));
var Overview = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 10px 20px;\n    border-radius: 10px;\n"], ["\n    display: flex;\n    justify-content: space-between;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 10px 20px;\n    border-radius: 10px;\n"])));
var OverviewItem = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 33%;\n    span:first-child {\n        font-size: 10px;\n        font-weight: 400;\n        text-transform: uppercase;\n        margin-bottom: 5px;\n    }\n"], ["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 33%;\n    span:first-child {\n        font-size: 10px;\n        font-weight: 400;\n        text-transform: uppercase;\n        margin-bottom: 5px;\n    }\n"])));
var Description = styled_components_1["default"].p(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    margin: 20px 0px;\n    padding: 10px;\n    background-color: rgba(0, 0, 0, 0.5);\n    border-radius: 10px;\n"], ["\n    margin: 20px 0px;\n    padding: 10px;\n    background-color: rgba(0, 0, 0, 0.5);\n    border-radius: 10px;\n"])));
var Tabs = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    margin: 25px 0px;\n    gap: 10px;\n"], ["\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    margin: 25px 0px;\n    gap: 10px;\n"])));
var Tab = styled_components_1["default"].span(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    text-align: center;\n    text-transform: uppercase;\n    font-size: 12px;\n    font-weight: 400;\n    background-color: rgba(0, 0, 0, 0.5);\n    border-radius: 10px;\n    color: ", ";\n    a {\n        padding: 7px 0px;\n        display: block;\n    }\n"], ["\n    text-align: center;\n    text-transform: uppercase;\n    font-size: 12px;\n    font-weight: 400;\n    background-color: rgba(0, 0, 0, 0.5);\n    border-radius: 10px;\n    color: ", ";\n    a {\n        padding: 7px 0px;\n        display: block;\n    }\n"])), function (props) { return (props.isActive ? props.theme.accentColor : props.theme.textColor); });
function Coin() {
    var coinId = react_router_dom_1.useParams().coinId;
    // return <h1>Coin: {coinId}</h1>;
    var state = react_router_dom_1.useLocation().state;
    // const [loading, setLoading] = useState(true);
    // const [info, setInfo] = useState<InfoData>();
    // const [priceInfo, setPriceInfo] = useState<PriceData>();
    var priceMatch = react_router_dom_1.useRouteMatch('/:coinId/price');
    var chartMatch = react_router_dom_1.useRouteMatch('/:coinId/chart');
    // useEffect(() => {
    //     (async () => {
    //         const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
    //         const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json();
    //         setInfo(infoData);
    //         setPriceInfo(priceData);
    //         setLoading(false);
    //     })();
    // }, [coinId]);
    var _a = react_query_1.useQuery(['info', coinId], function () { return api_1.fetchCoinInfo(coinId); }), infoLoading = _a.isLoading, infoData = _a.data;
    var _b = react_query_1.useQuery(['tickers', coinId], function () {
        return api_1.fetchCoinTickers(coinId);
    }), tickersLoading = _b.isLoading, tickersData = _b.data;
    var loading = infoLoading || tickersLoading;
    return (React.createElement(Container, null,
        React.createElement(Header, null,
            React.createElement(Title, null, (state === null || state === void 0 ? void 0 : state.name) ? state.name : loading ? 'Loading...' : info === null || info === void 0 ? void 0 : info.name),
            React.createElement(Home, null,
                React.createElement(react_router_dom_1.Link, { to: "/" }, "\uD648\uC73C\uB85C"))),
        loading ? (React.createElement(Loader, null, "Loading...")) : (React.createElement(React.Fragment, null,
            React.createElement(Overview, null,
                React.createElement(OverviewItem, null,
                    React.createElement("span", null, "Rank:"),
                    React.createElement("span", null, info === null || info === void 0 ? void 0 : info.rank)),
                React.createElement(OverviewItem, null,
                    React.createElement("span", null, "Symbol:"),
                    React.createElement("span", null,
                        "$", info === null || info === void 0 ? void 0 :
                        info.symbol)),
                React.createElement(OverviewItem, null,
                    React.createElement("span", null, "Open Source:"),
                    React.createElement("span", null, (info === null || info === void 0 ? void 0 : info.open_source) ? 'Yes' : 'No'))),
            React.createElement(Description, null, info === null || info === void 0 ? void 0 : info.description),
            React.createElement(Overview, null,
                React.createElement(OverviewItem, null,
                    React.createElement("span", null, "Total Suply:"),
                    React.createElement("span", null, priceInfo === null || priceInfo === void 0 ? void 0 : priceInfo.total_supply)),
                React.createElement(OverviewItem, null,
                    React.createElement("span", null, "Max Supply:"),
                    React.createElement("span", null, priceInfo === null || priceInfo === void 0 ? void 0 : priceInfo.max_supply))),
            React.createElement(Tabs, null,
                React.createElement(Tab, { isActive: chartMatch !== null },
                    React.createElement(react_router_dom_1.Link, { to: "/" + coinId + "/chart" }, "Chart")),
                React.createElement(Tab, { isActive: priceMatch !== null },
                    React.createElement(react_router_dom_1.Link, { to: "/" + coinId + "/price" }, "Price"))),
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { path: "/" + coinId + "/price" },
                    React.createElement(Price_1["default"], null)),
                React.createElement(react_router_dom_1.Route, { path: "/" + coinId + "/chart" },
                    React.createElement(Chart_1["default"], null)))))));
}
exports["default"] = Coin;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
