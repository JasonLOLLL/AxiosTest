const url = 'http://10.0.0.25:8000/api/todos/';
document.getElementById('submit-button').addEventListener('click', submitRequest, false);
document.getElementById('submit-post').addEventListener('click', submitPost, false);

const postForm = document.getElementById('post-form');
const postPara = document.getElementById('post-para');
const para = document.getElementById('text-area');

let data = '';

function get(id) {
    axios.get(`${url}${id}/`)
    .then((r) => {
        console.log(r.data);
        para.innerText = JSON.stringify(r.data);
    }).catch((e) => {
        console.log(e);
        para.innerHTML = `error! id ${id} does not exist.`;
    })
}

function post(title, description, completed, some) {
    axios.post(url, {
        name: title,
        description: description,
        completed: completed,
    })
    .then(some)
    .catch(e => console.log(e));
}

function patch() {
    axios.patch(url, {
        completed: true,
    })
    .then(r=>console.log("Success"))
    .catch(e => console.log("error"));
}

function deleteRequest() {
    axios.delete(url)
}

function submitRequest(c) {
    c.preventDefault();

    const id = document.getElementById('id-input').value;
    get(id);
}

function submitPost(c) {
    c.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const completed = document.getElementById('completed').checked;

    const some = (r) => {
        postPara.innerText = "Success! The data id is: " + r.data.id;
    }

    post(title, description, completed, some)
    postForm.reset();
}