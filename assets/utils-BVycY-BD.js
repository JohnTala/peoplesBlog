async function s(r,t={}){try{return await(await fetch(r,t)).json()}catch(e){return console.error("Request failed",e),null}}export{s as g};
