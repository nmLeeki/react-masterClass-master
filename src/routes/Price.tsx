import styled from 'styled-components';
import { PriceData } from './coin';

const PriceWrap = styled.ul`
    text-align: center;
`;
const PriceInfo = styled.li`
    background: ${(props) => props.theme.listBgColor};
    border-radius: 10px;
    margin-top: 15px;
    padding: 10px;
    &:first-child {
        margin-top: 0;
    }
    span {
        display: block;
    }
    span:first-child {
        color: ${(props) => props.theme.accentColor};
        font-weight: 500;
        font-size: 18px;
        line-height: 1.8;
    }
    span:last-child {
        line-height: 2;
        font-size: 35px;
        font-weight: bold;
    }
`;

function Price({ tickersData }: { tickersData: PriceData }) {
    console.log(tickersData?.quotes.USD.price.toFixed(0));
    return (
        <PriceWrap>
            <PriceInfo>
                <span>percent change</span>
                <span>[1 year]</span>
                <span>{tickersData.quotes.USD.percent_change_1y}</span>
            </PriceInfo>

            <PriceInfo>
                <span>percent change</span>
                <span>[30 days]</span>
                <span>{tickersData.quotes.USD.percent_change_30d}</span>
            </PriceInfo>

            <PriceInfo>
                <span>percent change</span>
                <span>[24 hour]</span>
                <span>{tickersData.quotes.USD.percent_change_24h}</span>
            </PriceInfo>

            <PriceInfo>
                <span>percent change</span>
                <span>[12 hour]</span>
                <span>{tickersData.quotes.USD.percent_change_12h}</span>
            </PriceInfo>

            <PriceInfo>
                <span>percent change</span>
                <span>[6 hour]</span>
                <span>{tickersData.quotes.USD.percent_change_6h}</span>
            </PriceInfo>

            <PriceInfo>
                <span>percent change</span>
                <span>[1 hour]</span>
                <span>{tickersData.quotes.USD.percent_change_1h}</span>
            </PriceInfo>

            <PriceInfo>
                <span>percent change</span>
                <span>[30 min]</span>
                <span>{tickersData.quotes.USD.percent_change_30m}</span>
            </PriceInfo>

            <PriceInfo>
                <span>percent change</span>
                <span>[15 min]</span>
                <span>{tickersData.quotes.USD.percent_change_15m}</span>
            </PriceInfo>
        </PriceWrap>
    );
}
export default Price;
