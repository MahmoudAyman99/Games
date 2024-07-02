export class Ui {
    displayDataGame(data){
        let gameCard =``
        for (let i = 0 ;i < data.length ; i++){
            gameCard += `<div class="col-md-6 col-lg-4 col-xl-3">
                        <div class="card bg-transparent"  data-id="${data[i].id}">
                            <div class="card-body">
                                <figure>
                                    <img src="${data[i].thumbnail}" class="card-img-top object-fit-cover h-100 " >
                                </figure>
                                <figcaption>
                                    <div class="hstack justify-content-between">
                                        <h3 class="h5">${data[i].title}</h3>
                                        <span class="badge text-bg-primary p-2">Free</span>
                                     </div>
                                     <p class="card-text  text-center truncate">
                                     ${data[i].short_description}
                                     </p>
                                </figcaption>
                            </div>
                            <footer class="card-footer  hstack justify-content-between">
   
                                <span class="badge badge-color">${data[i].genre}</span>
                                <span class="badge badge-color">${data[i].platform}</span>
                    
                             </footer>
                        </div>
                    </div>`
                    document.getElementById('gameData').innerHTML = gameCard;
        }
    }
    displayDetails(data){
        const content = `
    <div class="col-md-4">
                    <img src="${data.thumbnail}" class="w-100" alt="image details">
                 </div>
                 <div class="col-md-8">
                    <h3 class="h2">Title: ${data.title}</h3>
                    <p class="fs-4">Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
                    <p class="fs-4">Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
                    <p class="fs-4">Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
                    <p class="fs-5">${data.description}</p>
                    <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
                 </div>
    `;

    document.getElementById('detailsContent').innerHTML = content;
    }
    
}