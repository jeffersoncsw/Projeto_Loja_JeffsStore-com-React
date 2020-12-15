import { useState, useEffect} from 'react';

import Produto from './Produto'
import {Container, Row} from 'react-bootstrap';
import Categorias from '../Categorias';

export default function Produtos(){

    const [produtos, setProdutos] = useState([])

    useEffect(()=> {
        async function fetchData(){
            const resposta = await fetch("http://localhost/react/jeffsstore/src/Components/Php/produtos.php")
            const dados = await resposta.json()
            setProdutos(dados);
        }
        fetchData();

    }, []);

    return(
        <Container>
            <Row>
                    <div className="container-fluid">
                        <div className="mt-2"><h2>Produtos</h2></div>
                        <hr className="my-2"/>
                    </div>

                    <div className="col-sm-3" id="categorias">
                        <Categorias />           
                    </div>
                    
                    <div className="produtos">
                        {produtos && produtos.map(item => 
                        <Produto 
                        key={item.IDPRODUTO} 
                        id={item.IDPRODUTO}
                        categoria={item.CATEGORIA} 
                        imagem={item.IMAGEM}
                        descricao={item.DESCRICAO}
                        preco={item.PRECO}
                        precofinal={item.PRECOFINAL} />)}
                    </div>
            </Row>
        </Container>
        
    )
}