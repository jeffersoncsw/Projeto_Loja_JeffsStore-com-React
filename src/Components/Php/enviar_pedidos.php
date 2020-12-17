<?php

    header("Access-Control-Allow-Origin:*");

    require_once 'db_connect.php';

    if($_SERVER['REQUEST_METHOD'] === 'GET'){

        $sql = "SELECT * FROM pedidos";
        $resultado = query($sql);
        $pedidos = [];
        

        while($row = mysqli_fetch_assoc($resultado)){
            $pedidos[] = $row;
        }

        echo json_encode($pedidos);

    } else if($_SERVER['REQUEST_METHOD'] === 'POST'){

        $nome_cliente = $_POST['nome'];
        $endereco = $_POST['endereco'];
        $telefone = $_POST['telefone'];
        $nome_produto = $_POST['produto'];
        $valor_unitario = $_POST['valor_unitario'];
        $quantidade = $_POST['quantidade'];
        $valor_total = $_POST['valor_total'];

        $sql = "INSERT INTO pedidos VALUES(null, '$nome_cliente', 
        '$endereco', '$telefone', '$nome_produto', '$valor_unitario', '$quantidade', '$valor_total');";

        nonquery($sql);

        echo json_encode(array("msg" => "Método POST Efetuado"));

    } else if($_SERVER['REQUEST_METHOD'] === 'PUT'){

        echo json_encode(array("msg" => "Método PUT Efetuado"));

    } else if($_SERVER['REQUEST_METHOD'] === 'DELETE'){

        echo json_encode(array("msg" => "Método DELETE Efetuado"));

    } else {

        echo "Falha no processamento de dados.";

    }

?>