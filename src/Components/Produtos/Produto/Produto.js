import './Produto.css';

export default function Produto(props){    

    return(
        <figure className={props.categoria}>
            <img src={require(`./img/${props.imagem}`).default} alt="Imagem Produto"/>
            <figcaption>
                <p className="produtoName">{props.descricao}</p>
                <hr />
                <p className="produtoPrecoAntigo">De: R$ {props.preco}</p>
                <p className="produtoPreco">POR: R$ {props.precofinal}</p>
            </figcaption>
        </figure>
        
    )
}