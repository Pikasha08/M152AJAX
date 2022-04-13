//document.getElementById("posts-container").addEventListener("load", getAllPosts);
var postsContainer = document.getElementById("posts-container");

postsContainer.onload(getAllPosts);


function getAllPosts()
{
    console.log("aha");

    fetch('./getAllPosts.php', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"submit": true})
    }).then(function (res) {
        return res.json();
    }).then(function (myJson) {
        console.log(myJson);
        postsContainer.innerHTML = makeAllPosts(myJson);
    });
}

function addPost(id, comm, medias)
{
    fetch('./addPost.php')
    {
        
    }
}

function editPost(id, text, media)
{

}

function deletePost(id)
{
    console.log("Supprimer -> " + id);
}

function makeAllPosts(posts)
{
    htmlData = "";
    posts.forEach(post => {
        htmlData += '<div class="panel panel-default"><div class="panel-heading">';
        htmlData += '<h4><a href="index.php?user="' + post['nickname'] + '">' + post['nickname'] + '</a><div style="font-size: smaller; display: inline-block; padding-left: 10px">il y a ';

        var interval = new Date(Date.now() - Date.parse(post['dateCrea']));

        if (interval.getFullYear() - 1970 > 0)
        {
            htmlData += interval.getFullYear() + " y";
        }
        else if (interval.getMonth() > 0)
        {
            htmlData += interval.getMonth() + " m";
        }
        else if (interval.getDate() > 0)
        {
            htmlData += interval.getDate() + " d";
        }
        else if (interval.getHours() > 0)
        {
            htmlData += interval.getHours() + " h";
        }
        else if (interval.getMinutes() > 0)
        {
            htmlData += interval.getMinutes() + " min";
        }
        else
        {
            htmlData += interval.getSeconds() + " s";
        }

        htmlData += '</div></h4>' +
        '</div><div class="panel-body"><p><img src="';

        if (post['avatar'] === "")
        {
            htmlData += './img/150x150.gif';
        }
        else
        {
            htmlData += post['avatar'];
        }

        htmlData += '" class="img-circle pull-right"></p><div class="clearfix">';
        htmlData += post['comm'];
        htmlData += '</div><hr>';
    
        imagesBalises = "";

        if (Array.isArray(post['dataMedia']))
        {
            sizeOfMedia = Array.length(post['dataMedia']);

            for (i = 0; i < sizeOfMedia; i++)
            {
                let type = post['dataMedia'][i]['dataMedia'].substr(5, 10);
                
                if (type.indexOf('image') !== false)
                {
                    imagesBalises += '<img src="' + post['dataMedia'][i]['dataMedia'] + '" width="200px">';
                }
                else if (type.indexOf('audio') !== false)
                {
                    imagesBalises += '<audio src="' + post['dataMedia'][i]['dataMedia'] + '" width="200px">';
                }
                else if (type.indexOf('video') !== false)
                {
                    imagesBalises += '<video width="200px" controls autoplay muted loop>';
                    imagesBalises += '<source src="' + post['dataMedia'][i]['dataMedia'] + '"></video>';
                }
            }
        }
        else
        {
            type = post['dataMedia'].substr(5, 10);

            if (type.indexOf('image') !== -1)
            {
                imagesBalises += '<img src="' + post['dataMedia'] + '" width="200px">';
            }
            else if (type.indexOf('audio') !== -1)
            {
                imagesBalises += '<audio src="' . post['dataMedia'] + '" width="200px">';
            }
            else if (type.indexOf('video') !== -1)
            {
                imagesBalises += '<video width="200px" controls autoplay muted loop>';
                imagesBalises += '<source src="' + post['dataMedia'] + '"></video>';
            }
        }

        htmlData += imagesBalises;
        
        htmlData += '<hr>' +
        '<button data-toggle="modal" class="btn btn-default btn-sm" href="#delete' + post['idPost'] + '">' +
        '<span class="bi bi-trash"></span></button>' +
        '<div class="modal" id="delete' + post['idPost'] + '">' +
            '<div class="modal-dialog">' +
                '<div class="modal-content">' +
                    '<div class="modal-header">' +
                        '<button type="button" class="close" data-dismiss="modal">&times;</button>' +
                        '<h4 class="modal-title">Voulez-vous vraiment supprimer ce post ?</h4>' +
                    '</div>' +
                    '<div class="modal-body">' +
                        '<p>' + post['comm'] + ' : </p>' +
                    '</div>' +
                    '<div class="modal-footer">' +
                        '<button onclick="deletePost(' + post['idPost'] + ')">' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +

        '<a class="btn btn-default btn-sm" href="editpost.php?id=' + post['idPost'] + '">' +
        '<span class="bi bi-pen"></span></a>' +
    '</div>' +
'</div>';
                
    });

    return htmlData;
}