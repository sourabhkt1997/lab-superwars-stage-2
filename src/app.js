const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
     for(let i=0;i<players.length;i++)
    {
    
        const player={
            name:players[i],
            strength:getRandomStrength(),
            image:"images/super-"+(i+1)+".png",
            type:i%2==0?"hero":"villain",
        };
        detailedPlayers.push(player)

    }

   console.log(detailedPlayers);


    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.ceil(Math.random()*100);
}
const htmlTemplate= (player)=>{
    return `<div class="player">
    <img src="${player.image}" alt="">
    <div class="name">${player.name}</div>
    <div class="strength">${player.strength}</div>
 </div>
 `
}
const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    for(let i=0;i<players.length;i++)
    {
      if(players[i].type==type)
      {
          fragment=fragment.concat(htmlTemplate(players[i]));
      }
    }
    console.log(fragment)
    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}
