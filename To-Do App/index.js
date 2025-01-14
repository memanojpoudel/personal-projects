const { error } = require("console");
const express = require("express");
const app = express();
const fs = require("fs");
const { parse } = require("path");

let todo = [];
let result = [];

async function fetchData(){
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await data.json();
    todo = json;
    writeJSON();
}

// readfile from JSON
function readJSON(){
    fs.readFile("todos.json","utf-8", function(err, data){
        if (err) throw err;

        result   = JSON.parse(data);
    })
}

// write file to json
function writeJSON(){
    const data = JSON.stringify(todo);
    fs.writeFile("todos.json", data, err => {
        // Checking for errors 
        if (err) throw err;

        // Success 
        console.log("Done writing");
});
}

//delete a single file from json ref: id 
// YET TO COMPLETE
function deleteJSON(){
    readJSON()
    setTimeout(function (){
        console.log(result.length)
    },5000);
}

deleteJSON();