import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import Coin from './routes/coin';
import Coins from './routes/coins';
function Router() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/:coinId">
                    <Coin></Coin>
                </Route>
                <Route>
                    <Coins></Coins>
                </Route>
            </Switch>
        </HashRouter>
    );
}
export default Router;
