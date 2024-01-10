# Campflix - Lukman Rambe

This is a project for Campaign Technical Assignment. A website to list all TV Shows from an API.

## Technical Assignment Details ##

### What to Make? ###

* Use HTML and Javascript
* Call this api http://api.tvmaze.com/search/shows?q=girls and use the json from it. The main properties are url and name, you can use other properties as creative as you want. But the main properties must displayed in UI  
* Display the data using this design https://imgur.com/MtilNpm
* Explanation of design in above url (https://imgur.com/MtilNpm) : 
* 1 Hardcode text Campflix bold style
* 2 Textbox for search and profile name / user name just fill your name e.g budi erwanto
* 3 Display a picture from the api using url property can be 1st image in array or any random up to you
* 4 Display all tv shows from this api http://api.tvmaze.com/search/shows?q=girls, scrollable to the right
* 5 Bonus if you can implement search api, but not mandatory 

### Main Quest ###

* Use any of these library reactJs / nextJs
* Implement features from what to make above using one of these library
* tips : 
* 1. read the documentation from the website
* 2. try to understand the concept 
* 3. start implement
* for example if you choose react as the library then :
* 1.  go to this site https://reactjs.org/docs/getting-started.html read and try to understand
* 2.  after that go to the Main Concept section and follow the guide and hands on so you can understand what is react
* 3.  try to implement what you know from reading the docs
* output : 
* 1. Functional page displaying list of tvs and search function but using library reactJs / nextJs ( one of this not all )
* 2. UI section without api call got 50% score
* 3. UI with api call got 100% score
* good luck and have fun.

## Getting Started

To run this example, simply do:

```sh
npm install
npm run dev
```

Then you will see a simple web app page like this:

<img src="https://cdn.discordapp.com/attachments/1188272418310070282/1194599530478436462/image.png?ex=65b0f082&is=659e7b82&hm=add25102d73e0c9c19e267f5f25a678be658491ac77948d8c2138d6d899f25e3&" width="100" alt="Campflix Banner">

## IDE setup

VSCode is highly preferred. Please ensure you have installed these extensions:

- Prettier

## Useful Commands

```sh
#to run in dev mode
npm run dev

#to run in qa or production env. Expect to run this in docker
npm run start
```