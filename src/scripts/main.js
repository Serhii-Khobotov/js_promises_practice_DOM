'use strict';

const firstPromise = new Promise((resolve, reject) => {
    resolve(`First promise was resolved`);
    setTimeout(() => {
        reject(new Error(`First promise was rejected`))
    },3000)
})

firstPromise.then(data => console.log(data))