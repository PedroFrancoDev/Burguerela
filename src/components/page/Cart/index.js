import { Component } from 'react';
import { Container, ProductTable, Total } from './style';
import Hambúrguer from '../../../assets/hambúrguer.jpg';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

export default class Carricho extends Component {
   render() {
       return(
            <Container>
                <ProductTable>
                    <thead>
                        <tr>
                            <th />
                            <th>Produto</th>
                            <th>Quantidade</th>
                            <th>Subtotal</th>
                            <th />
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <img src={Hambúrguer} alt="Hambúrguer" />
                            </td>

                            <td>
                                <strong>Hambúrguer com todos os molhos</strong>
                                <span>8.00kz</span>
                            </td>

                            <td>
                                <div>
                                    <button type='button'>
                                        <MdRemoveCircleOutline size={20} color='#FD704D'/>
                                    </button>

                                    <input type="number" readOnly value={2} />

                                    <button type='button'>
                                        <MdAddCircleOutline size={20} color='#FD704D' />
                                    </button>
                                </div>
                            </td>

                            <td>
                                <strong>1.600kz</strong>
                            </td>

                            <td>
                                <button type='button'>
                                    <MdDelete size={20} color='#FD704D'/>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </ProductTable>

                <footer>
                    <button type='button'>Finalizar pedido</button>

                    <Total>
                        <span>Total</span>
                        <strong>1.600kz</strong>
                    </Total>
                </footer>
            </Container>
        );
   }
}