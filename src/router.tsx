import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Coin from './routes/coin';
import Coins from './routes/coins';
function Router() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/:coinId">
                    <Coin></Coin>
                </Route>
                <Route>
                    <Coins></Coins>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default Router;
