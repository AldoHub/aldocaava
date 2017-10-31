const express = require("express");
const route= express.Router();
const axios = require("axios");


//set the route
route.get("/",(req, res)=>{
   
        let $firstLetter=[];
        //get the my repos form the GitHub Restful API
        axios.get("https://api.github.com/users/AldoHub/repos")
        .then(response =>{
             //if the request returns "ok" or "200"
             //get the repositories
             let $repos= response.data;
                
             console.log(`------- STATUS CODE: ${response.status} -------`);

             $repos.forEach(function(element) {
                $firstLetter.push(element["name"].charAt(0,1));
             }, this);
             console.log($firstLetter);
                    
                    
             res.render("main",{
             repos: $repos,
             letters: $firstLetter
             });
                    

               
            
        }).catch((err) =>{
            // if the response comes back as a error
            console.log(err.response.status);
            res.render("main");
            
        });
        
    

    }


    
);

module.exports = route;
