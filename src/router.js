import { Switch, Route } from 'react-router-dom';
import Home from './components/page/Home/index';
import Cart from './components/page/Cart/index';

export default function Routes () {
    return(
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/cart' component={Cart} />
        </Switch>
    );
}