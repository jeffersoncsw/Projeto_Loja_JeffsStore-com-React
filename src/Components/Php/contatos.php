<?php

    header("Access-Control-Allow-Origin:*");

    require_once 'db_connect.php';

    if($_SERVER['REQUEST_METHOD'] === 'GET'){

        $sql = "SELECT * FROM contatos";
        $resultado = query($sql);
        $contatos = [];
        

        while($row = mysqli_fetch_assoc($resultado)){
            $contatos[] = $row;
        }

        echo json_encode($contatos);

    } else if($_SERVER['REQUEST_METHOD'] === 'POST'){

        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $mensagem = $_POST['mensagem'];
        $datacontato = $_POST['datacontato'];

        $sql = "INSERT INTO contatos VALUES(null, '$nome', '$email', '$mensagem', now());";

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