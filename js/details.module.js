import { Ui } from "./ui.module.js";

export class Details {

    constructor(id) {
        this.ui = new Ui();
  
        document.getElementById("btnClose").addEventListener("click", () => {
           document.querySelector(".games").classList.remove("d-none");
           document.querySelector(".details").classList.add("d-none");
        });
        this.getDetails(id);
     }

    async getDetails(id){
        const loading = document.querySelector(".loading");
      loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a7651066bcmsh29668d81bc9a2bcp1fd80fjsneb0a11e88b40',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch( `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}` , options);
        const response = await api.json();
        
        loading.classList.add("d-none");
        this.ui.displayDetails(response);
    }
}