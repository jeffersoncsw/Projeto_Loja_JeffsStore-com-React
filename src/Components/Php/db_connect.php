<?php

    function query($sql) {
        $servidor = "192.168.15.40";
        $usuario  = "jeffsstore";
        $senha    = "Jeffsstore123!";
        $banco    = "jeffsstore_react";

        $connect = mysqli_connect($servidor, $usuario, $senha, $banco);
        $resultado = mysqli_query($connect, $sql);
        mysqli_close($connect);
        return $resultado;
    }

    function nonquery($sql) {
        $servidor = "192.168.15.40";
        $usuario  = "jeffsstore";
        $senha    = "Jeffsstore123!";
        $banco    = "jeffsstore_react";

        $connect = mysqli_connect($servidor, $usuario, $senha, $banco);
        $resultado = mysqli_query($connect, $sql);
        mysqli_close($connect);
    }

?>