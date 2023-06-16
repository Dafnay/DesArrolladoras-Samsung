
        <?php

        if($_POST){
            $nombre = $_POST['nombre'];
            $apellido = $_POST['apellido'];
            $email = $_POST['email'];

            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "Formulario";
            $conn = new mysqli($servername, $username, $password, $dbname, $port);

            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            } 
            

            $sql = "INSERT INTO usuarios (nombre, apellido, email) VALUES ('$nombre','$apellido','$email')";




            if($conn->query($sql)===TRUE) {
             echo "New record created succesfully";
            }else{
        echo "Error: " . $sql . "<br>" .$conn->error;
    }


    $conn->close();

        }
        ?>
    