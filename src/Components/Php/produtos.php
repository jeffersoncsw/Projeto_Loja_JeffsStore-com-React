<?php

    require_once "db_connect.php";

    $result = query(
        "SELECT * FROM produtos
	        inner join categoria_produto
		        on produtos.idproduto = categoria_produto.idproduto
	        inner join categoria
		        on categoria_produto.idcategoria = categoria.idcategoria;
    ");
    
    $produtos = [];

    while($row = mysqli_fetch_assoc($result)){
        $produtos[] = $row;
    }

    header("Access-Control-Allow-Origin:*");

    echo json_encode($produtos);

?>
