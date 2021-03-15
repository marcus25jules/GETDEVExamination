'use strict'


import { BASE_URL as baseURL, IS_STATIC_DEVICE } from "@env";
import axios from "axios";

export class Api{

  constructor() {
     axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
     axios.defaults.baseURL = baseURL;
  }


  get(data, url){
      if(data === null){
        data = "";
      }

      console.log("url here: ", url + data);

      return axios.get(url + data)
         .then(response => {
            if(Number(response.status,2) === 200){
                  return response.data;
            }
         })
         .catch(error => {

         });
    };

    //add post method here

}

// The singleton variable
export let api = new Api()
