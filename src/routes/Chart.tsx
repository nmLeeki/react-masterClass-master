import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';

interface IHistorical {
    time_open: number;
    time_close: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: number;
}

interface ChartProps {
    coinId: string;
}
function Chart({ coinId }: ChartProps) {
    const { isLoading, data } = useQuery<IHistorical[]>(['ohlcv', coinId], () => fetchCoinHistory(coinId), {
        refetchInterval: 10000,
    });
    const candlesTickData = data?.map((price) => ({
        x: new Date(price.time_close * 1000).toUTCString(),
        y: [parseFloat(price.open), parseFloat(price.high), parseFloat(price.low), parseFloat(price.close)],
    }));
    return (
        <div>
            {isLoading ? (
                'Loading chart...'
            ) : (
                <>
                    <ApexChart
                        type="line"
                        series={[
                            {
                                name: 'Price',
                                data: data?.map((price) => parseFloat(price.close)) ?? [],
                            },
                        ]}
                        options={{
                            theme: {
                                mode: 'dark',
                            },
                            chart: {
                                height: 300,
                                width: 500,
                                toolbar: {
                                    show: false,
                                },
                                background: 'transparent',
                            },
                            grid: { show: false },
                            stroke: {
                                curve: 'smooth',
                                width: 4,
                            },
                            yaxis: {
                                show: false,
                            },
                            xaxis: {
                                axisBorder: { show: false },
                                axisTicks: { show: false },
                                labels: { show: false },
                            },
                        }}
                    />
                    <ApexChart
                        type="candlestick"
                        series={
                            [
                                {
                                    data: candlesTickData,
                                },
                            ] as unknown as number[]
                        }
                        options={{
                            theme: {
                                mode: 'dark',
                            },
                            chart: {
                                type: 'candlestick',
                                height: 350,
                                width: 500,
                                toolbar: {
                                    show: false,
                                },
                                background: 'transparent',
                            },
                            stroke: {
                                curve: 'smooth',
                                width: 2,
                            },
                            yaxis: {
                                show: false,
                            },
                            xaxis: {
                                type: 'datetime',
                                categories: data?.map((price) => new Date(price.time_close * 1000).toUTCString()),
                                labels: {
                                    show: false,
                                },
                            },
                            plotOptions: {
                                candlestick: {
                                    colors: {
                                        upward: '#fc6603',
                                        downward: '#74db93',
                                    },
                                },
                            },
                        }}
                    />
                </>
            )}
        </div>
    );
}

export default Chart;
