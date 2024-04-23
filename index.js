// Add JavaScript below
function request(){
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
    .then(function(response){
        return response.json()
    })
    .then((response) => {
        var result = document.getElementById('result')
        var item = ''
        console.log(response)
        response.forEach(element => {
            item = 'postId:' + element.postId + "Id:" + element.id + "name:" + element.name + "email:" + element.email + "body:" + element.body + "<br><br>"
            console.log(item)
            result.append(item)

        });

    })
}
