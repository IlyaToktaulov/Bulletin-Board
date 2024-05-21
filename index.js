const postTitleInputNode = document.querySelector('.js-post-title-input');
const postTextInputNode = document.querySelector('.js-post-text-input');
const newPostBtnNode = document.querySelector('.js-new-post-btn');
const postsNode = document.querySelector('.js-posts');
const errorsNode = document.querySelector('.js-errors');

let posts = [];

newPostBtnNode.addEventListener('click', function() {

    const postFromUser = getPostFromUser();

    addPost(postFromUser);

    renderPost();

    postTitleInputNode.value = '';
    postTextInputNode.value = '';

});

function getPostFromUser() {
    const title = postTitleInputNode.value;
    const text = postTextInputNode.value;

    if (title.length > 100 && text.length > 500) {
        renderErrorsPost();
    } 
    else if (title.length > 100) {
        renderErrorsTitle();
    }
    else if (text.length > 500) {
        renderErrorsText();
    }else {
        return {
            title: title,
            text: text,
        }
    }
};

function addPost({title, text}) {
    const datePost = new Date().toLocaleString();

    posts.push({
        title: title,
        text: text,
        date: datePost,
    });
};

function getPosts() {
    return posts;
};

function renderPost() {
    const posts = getPosts();

    let postsHTML = '';

    posts.forEach(post => {
        postsHTML += `
        <div class='post'>
            <p class='post__date'>${post.date}</p>
            <p class='post__title'>${post.title}</p>
            <p class='post__text'>${post.text}</p>
        </div>
        <br>
        `;
    });

    postsNode.innerHTML = postsHTML;
};

function renderErrorsPost() {
    let errorPost = 'Длинна Описания и Заголовка превышает допустимое кол-во символов';

    errorsNode.innerHTML = errorPost;
};

function renderErrorsTitle() {
    let errorPost = 'Длинна заголовка больше 100 символов';

    errorsNode.innerHTML = errorPost;
};

function renderErrorsText() {
    let errorPost = 'Длинна описания больше 500 символов';

    errorsNode.innerHTML = errorPost;
};



