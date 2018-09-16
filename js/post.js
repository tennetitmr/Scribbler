var count = 1;
function likePost() {
    var template = count + ' person likes this!';
    count++;
    document.getElementById('likePara').innerHTML = template;
    document.getElementsByClassName('likeButton')[0].innerHTML = '<i class = "fa fa-thumbs-up"></i>' + "Liked!";
}

function allCommt(id) {
        var templateFirst = 'All Comments';
        document.getElementsByClassName('allCommt')[0].innerHTML = templateFirst;
        var div = document.getElementsByClassName('showCommt')[0];
        var node = document.createElement('textarea'); 
        node.className = "textStyle"; 
        node.disabled = true;           
        var textnode = document.createTextNode(id.value);      
        node.appendChild(textnode);
        div.insertBefore(node, div.childNodes[0]) ; 
}

var counter = 0;
function editPost() {
    if(counter === 0){
        document.getElementById("blogBody").contentEditable = true;
        document.getElementById("blogTitleNew").contentEditable = true;
        document.getElementsByClassName('editButton')[0].innerHTML = "Save" + '<i class = "fa fa-save"></i>';
        counter++;
    }else{
        document.getElementById("blogBody").contentEditable = false; 
        document.getElementById("blogTitleNew").contentEditable = false;
        document.getElementsByClassName('editButton')[0].innerHTML = "Edit";
        counter = 0;
    }
}
