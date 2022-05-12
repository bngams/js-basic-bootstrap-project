/** 
 * Comment déclencher un traitement
 * apres le chargement de la page
 **/

// Syntaxe DEPRECATED
// $(document).ready(callback)
// $(document).ready(function() {
//     alert("Script main.js chargé");
// });

// Document.ready Nouvelle syntaxe
// $ = JQuery
$(() => {
    chargerNews();
}); 

const chargerNews = () => {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET'
    })
    .done((data) => {
        for(let news of data) {
            ajouterNewsDynamique(news);
        }
    })
    .fail((error) => {
        alert('Erreur :' + error);
    });
}

const ajouterNewsDynamique = (news) => {
    $("#cartes-dynamiques").append(`
        <div class="card" style="width: 18rem;">
            <img src="https://picsum.photos/seed/${news.id}/300/200" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${news.title}</h5>
                <p class="card-text">${news.body}</p>
                <a href="#" class="btn btn-primary">See more...</a>
            </div>
        </div>
    `);
};