
        <?php

        if($_POST){
            $nombre = $_POST['name'] ?? '';
            $apellido1 = $_POST['flastname'] ?? '';
            $apellido2 = $_POST['slastname'] ?? '';
            $email = $_POST['email'] ?? '';
            $login= $_POST['login'] ?? '';
            $userPassword = $_POST['pass'] ?? '';

            $hasErrors = false;


            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "CursoSQL";
            $conn = new mysqli($servername, $username, $password, $dbname, $port);

            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            } 
            
            if (empty($nombre) || empty($apellido1) || empty($apellido2) || empty($email) || empty($login) || empty($userPassword)) {
                echo "Por favor, rellene todos los campos.";
            } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                echo "El email no es válido.";
            } elseif (strlen($userPassword) < 4 || strlen($userPassword) > 8) {
                echo "La contraseña debe tener entre 4 y 8 caracteres.";
            } else {
                $sql = "INSERT INTO formulario (nombre, apellido1, apellido2, email, login, password ) VALUES ('$nombre', '$apellido1', '$apellido2', '$email', '$login', '$userPassword')";
                if($conn->query($sql)===TRUE) {
                    echo "New record created succesfully";
                }else{
                    echo "Error: " . $sql . "<br>" .$conn->error;
                }
                $conn->close();
            }
        }
        ?>
    