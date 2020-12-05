import {Form, Button, Col} from 'react-bootstrap';
import {useState} from 'react';

export default function Pedidos(){
    const [ form, setForm ] = useState ({
        name: "",
        endereco: "",
        telefone: "",
        produto: "",
        valor_unitario: "",
        quantidade: "",
        valor_total: ""
    });

    const controleMudanca = (e) => {
        console.log(e.target.value)
        setForm({
            ...form,
            [e.target.id]: e.target.value
        })
    }

    const controleEnvio = async (e) => {
        e.preventDefault();
        const valor_total = parseFloat(form.valor_unitario) * parseFloat(form.quantidade);
        document.getElementById("valor_total").value = `R$ ${valor_total}`;

        setForm({
            ...form,
            valor_total: valor_total
        })

        const json = JSON.stringify(form);

        const opc = {
            crossDomain: true,
            mode: 'cors',
            method: 'POST',
            headers: { 
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        }

        const resposta = await fetch("http://localhost/Jefferson_Cesar_da_Silva_Wiltenburg-Projeto_LojaJeffsStore/php/api/enviar_pedidos.php", 
        opc);
        const dados = await resposta.json()
        console.log(dados);

    }

    return(
        <div className="col-md-6 mx-auto jumbotron p-3 my-3 align-items-center">
            <p className="display-4">Pedidos</p>
            <hr className="my-2" />
            <Form onSubmit={controleEnvio}>
                <Form.Group>
                    <div className="mt-2"><h4>Envio de Pedidos</h4></div>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control onChange={controleMudanca} type="text" id="name"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Endereço:</Form.Label>
                    <Form.Control onChange={controleMudanca} type="text" id="endereco" />
                </Form.Group>
                <Form.Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Telefone: </Form.Label>
                            <Form.Control onChange={controleMudanca} type="number" id="telefone" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Label>Produto: </Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="produto" />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Valor unitário: </Form.Label>
                            <Form.Control onChange={controleMudanca} type="text" id="valor_unitario" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Label>Quantidade: </Form.Label>
                        <Form.Control onChange={controleMudanca} type="number" id="quantidade" />
                    </Col>
                    <Col>
                        <Form.Label>Valor Total: </Form.Label>
                        <Form.Control disabled type="text" id="valor_total" />
                    </Col>
                </Form.Row>
                
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </div>
    )
}