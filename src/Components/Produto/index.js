import './Produto.css';

export default function Produto(props){    

    return(
        <div className={props.categoria}>
            <img src={require(`./Img/${props.imagem}`)} alt="descricao"/>
            <p className="produtoName">{props.descricao}</p>
            <hr />
            <p className="produtoPrecoAntigo">De: R$ {props.preco}</p>
            <p className="produtoPreco">POR: R$ {props.precofinal}</p><br></br>
        </div>
    )
}