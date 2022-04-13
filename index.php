<?php
require './db/posts.php';
/*
try {
    if (isset($_POST['Post']))
    {
        
    }
}
catch (Exception $e) {
    echo $e->getMessage();
}


if (!empty($_GET['user'])) {
    $email = filter_input(INPUT_GET, 'user', FILTER_SANITIZE_STRING);
    $posts = getAllPostsFrom($email);
}
else {
    $posts = getAllPosts();
}*/

include './models/header.php';
?>

<body>
    <!-- top nav -->
    <?php include './models/nav.php'; ?>
    <!-- /top nav -->

    <div class="padding">
        <div class="full col-sm-9">
            <!-- content -->
            <div class="row">
                <!-- main col left -->
                <div class="col-sm-5">
                    <div class="panel panel-default">
                        <div class="panel-thumbnail"><img src="img/Ussr.png" class="img-responsive"></div>
                        <div class="panel-body">
                            <p class="lead">Motherland</p>
                            <p>69 Followers, 1256 Posts</p>
                            <p>
                                <img src="img/uFp_tsTJboUY7kue5XAsGAs28.png" height="28px" width="28px">
                            </p>
                        </div>
                    </div>

                    <?php include './models/addPostForm.php'; ?>
                </div>

                <!-- main col right -->
                <div id="posts-container" class="col-sm-7" onload="getAllPosts()">
                    
                </div>
            </div>
            <!--/row-->
        </div>
        <!-- /col-9 -->
    </div>
    <!-- /padding -->

    <?php include './models/footer.php'; ?>

    <!--post modal-->
    <div id="postModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">�</button>
                    Update Status
                </div>
                <div class="modal-body">
                    <form class="form center-block">
                        <div class="form-group">
                            <textarea class="form-control input-lg" autofocus="" placeholder="What do you want to share?"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <div>
                        <button class="btn btn-primary btn-sm" data-dismiss="modal" aria-hidden="true">Post</button>
                        <ul class="pull-left list-inline">
                            <li><a href=""></a></li>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <script src="./js/posts.js"></script>
</body>
</html>