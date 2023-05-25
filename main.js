
let newText = "https://api.spaceflightnewsapi.net/v4/articles/";
 async function showArticles() { 
  let response =  await fetch(newText);
  let data = await response.json();
  let results = data.results;
  console.log (data); 

  for (let i = 0; i< results.length ; i++) {
    let article = results [i];


    let div = document.createElement('div');
    let title = document.createElement ('h2');

title.textContent=article.title;
div.appendChild(title);

let summary = document.createElement ('p');
summary.textContent= article.summary;
div.appendChild(summary);

let img = document.createElement ('img');
img.src = article.image_url;
img.width = 500;
div.appendChild (img);
new simpleParallax (img, {
    orientation: 'right'
});

document.body.appendChild(div);
  }
}

showArticles();

