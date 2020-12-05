import {Form, Row, Button} from 'react-bootstrap';

import Email from '../Components/Produto/Img/imagem-email.png';
import Whatsapp from '../Components/Produto/Img/imagem-whatsapp.png';

import '../App.css';

export default function Contatos(){
   return(
    <div className="container-fluid" >
        <div className="mt-2"><h2>Contatos</h2></div>
        <hr className="my-2"/>
        <div className="row menuContatos">   
            <div class="col-sm-6">
                <img src={Email} alt="Email" style={{width: "10%", height: "50px"}}/>
                    contato@jeffsstore.com.br
            </div>
            <div class="col-sm-6">
                <img src={Whatsapp} alt="WhatsApp" style={{width: "10%", height: "50px"}}/>
                    (11) 98888-9999
            </div>
        </div>
        <div className="container-fluid col-md-6 mx-auto jumbotron p-3 my-3 align-items-center">
            <Form className="form" method="POST" action="">
                <Form.Group>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" name="nome" placeholder="Nome" />
                </Form.Group>
                <Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Mensagem: </Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Digite aqui sua mensagem" />
                    </Form.Group>
                </Form.Group>
                <Button type="submit" variant="primary" name="enviar" onclick="enviar()">Enviar</Button>
            </Form>
        </div>
    </div>
   )
}