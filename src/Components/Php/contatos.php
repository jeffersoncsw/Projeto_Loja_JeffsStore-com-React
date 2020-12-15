<?php

    header("Acess-Control-Allow-Origin:*");

    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        echo json_encode(array("msg" => "Método GET Efetuado"));
    } else if($_SERVER['REQUEST_METHOD'] === 'POST'){
        echo json_encode(array("msg" => "Método POST Efetuado"));
    } else if($_SERVER['REQUEST_METHOD'] === 'PUT'){
        echo json_encode(array("msg" => "Método PUT Efetuado"));
    } else if($_SERVER['REQUEST_METHOD'] === 'DELETE'){
        echo json_encode(array("msg" => "Método DELETE Efetuado"));
    } else {
        echo "Falha no processamento de dados.";
    }

    // require_once "php/actions/db_connect.php";

    // if (isset($_POST['nome']) && isset($_POST['mensagem'])){
    //     $nome = $_POST['nome'];
    //     $mensagem = $_POST['mensagem'];

    //     $sql = "INSERT INTO contatos (nome, mensagem) VALUES ('$nome','$mensagem')";
    //     $result = $connect->query($sql);

    //     header("Location: ./contatos.php");
    // }
?>

<?php
    // $sql = "SELECT * FROM contatos";

    // $result = $connect->query($sql);

    // if($result->num_rows > 0){
    //     while($rows = $result->fetch_assoc()){
    //     echo "Data: ", $rows['data'], "<br>";
    //     echo "Nome: ", $rows['nome'], "<br>";
    //     echo "Mensagem: ", $rows['mensagem'], "<br>";
    //     echo "<hr>";
    //     }
    // }else{
    //     echo "Nenhuma mensagem ainda.";
    // }
?>