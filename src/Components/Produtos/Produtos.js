import { useState, useEffect} from 'react';

import Produto from './Produtos/Produto';
import {Container, Row} from 'react-bootstrap';
import Categorias from '../Categorias';

export default function Produtos(){

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const resposta = await fetch("http://localhost/Jefferson_Cesar_da_Silva_Wiltenburg-Projeto_LojaJeffsStore/php/api/produtos.php")
            const dados = await resposta.json()
            setProdutos(dados);
        }
        fetchData();

    },[]);

    return(
        <Container>
            <Row>
                <div className="container-fluid">
                    <div className="mt-2"><h2>Produtos</h2></div>
                    <hr className="my-2"/>
                </div>
                <Categorias/>
                <h1>Produto</h1>
                    {produtos && produtos.map(item => <Produto key={item.idproduto} categoria={item.categoria} 
                    imagem={item.imagem}
                    descricao={item.descricao}
                    preco={item.preco}
                    precofinal={item.precofinal} />)}
            </Row>
        </Container>
        
    )
}