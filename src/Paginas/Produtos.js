import { useState, useEffect} from 'react';

import Produto from '../Components/Produto';
import {Container, Row} from 'react-bootstrap';

export default function Produtos(props){

    const [ produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const resposta = await fetch("http://localhost/Jefferson_Cesar_da_Silva_Wiltenburg-Projeto_LojaJeffsStore/php/api/produtos.php")
            const dados = await resposta.json()
            setProdutos(dados);
        }
        fetchData();
        
    },[]);

    let idproduto = [];
    let categoria = [];
    let imagem = [];
    let descricao = [];
    let preco = [];
    let precofinal = [];

    {produtos && produtos.map(item =>(idproduto.push(item.idproduto)))}

    {produtos && produtos.map(item =>(categoria.push(item.categoria)))}

    {produtos && produtos.map(item =>(imagem.push(item.imagem)))}

    {produtos && produtos.map(item =>(descricao.push(item.descricao)))}

    {produtos && produtos.map(item =>(preco.push(item.preco)))}

    {produtos && produtos.map(item =>(precofinal.push(item.precofinal)))}

    let row = [];

    if(produtos.length > 0){
        for(let i = 0; i < idproduto.length; i++ ){
            row.push(
                <Produto
                    idproduto = {idproduto[i]}
                    categoria = {categoria[i]}
                    imagem = {imagem[i]}
                    descricao = {descricao[i]}
                    preco = {preco[i]}
                    precofinal = {precofinal[i]}
                />
            )
        }
    }

    return(
        <div>
            {row}
        </div>
    )
}