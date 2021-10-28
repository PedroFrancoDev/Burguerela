import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './components/global/style';
import Header from './components/Header/index';

export default function App() {
    return(
        <BrowserRouter>
        <Header />
            <GlobalStyle />
            <Router />
        </BrowserRouter>
    );
}