import {Form, Button, Col} from 'react-bootstrap';
import {useEffect, useState} from 'react';

import ListarPedidos from '../Components/Pedidos/ListarPedidos.js';

export default function Pedidos(){
    const [ pedidos, setPedidos ] = useState([])

    const controleEnvio = async (e) => {

        const url = "http://localhost/react/jeffsstore/src/Components/Php/enviar_pedidos.php";
        const dados = new FormData(e.target);

        const resposta = await fetch(url, {
            method: 'POST',
            body: dados,
        });

        const resultado = await resposta.json();
        
        console.log(resultado)

    }

    useEffect(() => {
        async function listaPedidos(){
            const url = "http://localhost/react/jeffsstore/src/Components/Php/enviar_pedidos.php";
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            setPedidos(resultado);
        }
        listaPedidos();
    },[pedidos]);

    return(
        <div className="container">
            <div className="col-md-6 mx-auto jumbotron p-3 my-3 align-items-center">
                <p className="display-4">Pedidos</p>
                <hr className="my-2" />
                <Form onSubmit={controleEnvio}>
                    <Form.Group>
                        <div className="mt-2"><h4>Envio de Pedidos</h4></div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control  type="text" name="nome"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Endereço:</Form.Label>
                        <Form.Control  type="text" name="endereco" />
                    </Form.Group>
                    <Form.Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Telefone: </Form.Label>
                                <Form.Control  type="number" name="telefone" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Label>Produto: </Form.Label>
                            <Form.Control  type="text" name="produto" />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Valor unitário: </Form.Label>
                                <Form.Control  type="text" name="valor_unitario" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Label>Quantidade: </Form.Label>
                            <Form.Control  type="number" name="quantidade" />
                        </Col>
                        <Col>
                            <Form.Label>Valor Total: </Form.Label>
                            <Form.Control type="text" name="valor_total" />
                        </Col>
                    </Form.Row>
                    <Button type="submit" variant="primary">Finalizar Pedido</Button>
                </Form>
            </div>
            <div className="row">
                <div className="mx-auto"><h2>Lista de Pedidos</h2></div>
                <div className="col-lg-12 col-md-12 mx-auto">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td></td>
                                <td>Nome Cliente</td>
                                <td>Produto</td>
                                <td>Valor (R$)</td>
                                <td>Qtd.</td>
                                <td>Valor Total (R$)</td>
                            </tr>
                        </thead>
                        <tbody>
                            {pedidos && pedidos.map(item => <ListarPedidos 
                            key={item.idpedido}
                            idpedido={item.idpedido} 
                            nome_cliente={item.nome_cliente} 
                            nome_produto={item.nome_produto}
                            valor_unitario={item.valor_unitario}
                            quantidade={item.quantidade}
                            valor_total={item.valor_total}
                            />)}
                        </tbody>
                    </table>
                </div>
            </div> 
        </div>
    )
}