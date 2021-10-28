import { Component } from 'react';
import { Container, Cart } from './styled';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import { FaHamburger } from 'react-icons/fa'


export default class Header extends Component {
    render() {
        return(
            <Container>
                <Link to='/'>
                    <div>
                        <strong>Hambúrguer</strong>
                        <span>Encomende já!</span>
                    </div>
                    
                    <FaHamburger />
                </Link>

                <Cart to='/cart'>
                    <div>
                        <strong>Meu carrinho</strong>
                        <span>3 itens</span>
                    </div>
                    <MdShoppingCart />
                </Cart>
            </Container>
        );
    }
}