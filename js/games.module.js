import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Games{
    constructor(){
        this.getGames('mmorpg');
        document.querySelectorAll("#navbarNavAltMarkup a").forEach((link) => {
            link.addEventListener("click", (e) => {
               document.querySelector("#navbarNavAltMarkup .active").classList.remove("active");
               e.target.classList.add("active");
               this.getGames(e.target.dataset.category);
            });
         });

         this.ui = new Ui();
    }


    async  getGames (category){
        const loading = document.querySelector('.loading');
        loading.classList.remove('d-none');

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a7651066bcmsh29668d81bc9a2bcp1fd80fjsneb0a11e88b40',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
    
        const api = await fetch( `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}` , options);
        const response = await api.json();
        loading.classList.add('d-none');
        this.ui.displayDataGame(response);
        this.startEvent();
        loading.classList.add("d-none");
        
    }
    startEvent(){
        document.querySelectorAll(".card").forEach((item) => {
            item.addEventListener("click", () => {
               const id = item.dataset.id;
               this.showDetails(id);
            });
         });
        
    }
     showDetails(gameId){
        const details = new Details(gameId);
      document.querySelector(".games").classList.add("d-none");
      document.querySelector(".details").classList.remove("d-none");
     }
}