import{getPosts} from '.utils.js';
const myForm=document.querySelector('.postForm');

const url=`https://jsonplaceholder.typicode.com/posts/`;

const createPosts=async (e)=>{
    e.preventDefault()

    const obj={
           title:myForm.title.value,
           body:myForm.body.value
    }

    const posts=await getPosts(url,{
        method:'POST',
        body: JSON.stringify(obj),
          headers: { 'Content-Type': 'application/json' }
    });
     window.location.replace('/');//redirect to homepAGE

}

myForm.addEventListener('submit',createPosts);

