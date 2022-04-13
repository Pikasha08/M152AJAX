<?php
$user;
$comm;
$medias;

try {
    if (isset($_POST['Post']))
    {
        for ($i = 0; $i < sizeof($_FILES['userfile']['error']); $i++)
        {
            if ($_FILES['userfile']['error'][$i] != 0) {
                header("Location: index.php");
                exit;
            }
        }

        if (!isset($_FILES['userfile']) ||
        !is_uploaded_file($_FILES['userfile']['tmp_name'][0])) {
            header("Location: index.php");
            exit;
        }
        else
        {
            $medias = array();

            $numberOfFiles = sizeof($_FILES['userfile']['name']);
            for ($i = 0; $i < $numberOfFiles; $i++)
            {
                $data = file_get_contents($_FILES['userfile']['tmp_name'][$i]);
                $mime = $_FILES['userfile']['type'][$i];

                array_push($medias, 'data:' . $mime . ';base64,' . base64_encode($data));
            }

            $_SESSION['email'] = 'sashawrc2004@gmail.com';
            if (isset($_SESSION['email']))
            {
                $comm = filter_input(INPUT_POST, 'Commentaire', FILTER_SANITIZE_STRING);
                $user = $_SESSION['email'];
                
                //addPost($_SESSION['email'], $commentaire, $srcs);
            }
        }
    }
}
catch (Exception $e) {
    echo $e->getMessage();
}

?>

<script src="./js/posts.js"></script>