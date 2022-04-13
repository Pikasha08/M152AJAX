<?php
header(
    "Content-Type: application/json",
);

require_once './db/posts.php';

$input = json_decode(file_get_contents('php://input'), true);

if (isset($input['submit']) && $input['submit'] === true)
{
    if (shm_has_var($input, 'username'))
    {
        $username = filter_var($inpue, 'username', FILTER_SANITIZE_STRING);

        echo json_encode(getAllPostsFrom($username));
    }
    else
    {
        echo json_encode(getAllPosts());
    }
}
else
{
    echo json_encode(array("result" => null));
    exit;
}