import { Component } from 'react';
import { Container, HamburguerImg, Ul } from './style';
import hamburguer from '../../../assets/hambúrguer.jpg'
import hamburguer1 from '../../../assets/esse-e-o-delicioso-gauchos.jpg'
import { MdAddShoppingCart } from 'react-icons/md';

export default class Home extends Component {
    render() {
        return(
            <Container>
               <HamburguerImg>
                  <div>
                    <strong>Seja bem vindo/a à Burguerela</strong>
                    <p>Burguerela é o melhor sabor, prove e nunca mais se esquecerás dela</p>
                  </div>

                  <img src={hamburguer1} alt="Hambúrguer" />
               </HamburguerImg>
                
                <h1>Burguerela</h1>

                <Ul>
                    <li>
                        <img src={hamburguer} alt="Hambúrguer" />
                        <strong>Hambúrguer com todos os molhos.</strong>
                        <span>800kz</span>

                        <button>
                            <div>
                                <MdAddShoppingCart /> 2
                            </div>
                            <small>Adicionar ao Carrinho</small>
                        </button>
                    </li> 
                    
                     <li>
                        <img src={hamburguer} alt="Hambúrguer" />
                        <strong>Hambúrguer com todos os molhos.</strong>
                        <span>800kz</span>

                        <button>
                            <div>
                                <MdAddShoppingCart /> 2
                            </div>
                            <small>Adicionar ao Carrinho</small>
                        </button>
                    </li> 

                     <li>
                        <img src={hamburguer} alt="Hambúrguer" />
                        <strong>Hambúrguer com todos os molhos.</strong>
                        <span>800kz</span>

                        <button>
                            <div>
                                <MdAddShoppingCart /> 2
                            </div>
                            <small>Adicionar ao Carrinho</small>
                        </button>
                    </li>  

                     <li>
                        <img src={hamburguer} alt="Hambúrguer" />
                        <strong>Hambúrguer com todos os molhos.</strong>
                        <span>800kz</span>

                        <button>
                            <div>
                                <MdAddShoppingCart /> 2
                            </div>
                            <small>Adicionar ao Carrinho</small>
                        </button>
                    </li>

                    <li>
                        <img src={hamburguer} alt="Hambúrguer" />
                        <strong>Hambúrguer com todos os molhos.</strong>
                        <span>800kz</span>

                        <button>
                            <div>
                                <MdAddShoppingCart /> 2
                            </div>
                            <small>Adicionar ao Carrinho</small>
                        </button>
                    </li> 
                    
                     <li>
                        <img src={hamburguer} alt="Hambúrguer" />
                        <strong>Hambúrguer com todos os molhos.</strong>
                        <span>800kz</span>

                        <button>
                            <div>
                                <MdAddShoppingCart /> 2
                            </div>
                            <small>Adicionar ao Carrinho</small>
                        </button>
                    </li> 

                     <li>
                        <img src={hamburguer} alt="Hambúrguer" />
                        <strong>Hambúrguer com todos os molhos.</strong>
                        <span>800kz</span>

                        <button>
                            <div>
                                <MdAddShoppingCart /> 2
                            </div>
                            <small>Adicionar ao Carrinho</small>
                        </button>
                    </li>  

                     <li>
                        <img src={hamburguer} alt="Hambúrguer" />
                        <strong>Hambúrguer com todos os molhos.</strong>
                        <span>800kz</span>

                        <button>
                            <div>
                                <MdAddShoppingCart /> 2
                            </div>
                            <small>Adicionar ao Carrinho</small>
                        </button>
                    </li>                      
                </Ul>
            </Container>
        )
    }
}