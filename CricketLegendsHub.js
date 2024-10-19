gsap.from(".nav .left1",{
    y:-20,
    duration:0.8,
    opacity:0
})
gsap.from(".nav .right1 h4",{
    y:-20,
    opacity:0,
    duration:0.5,
    stagger:0.2,
    delay:0.5
})
gsap.from(".page1 .film h1",{
    x:-1100,
    duration:2,
    delay:0.8,
    opacity:0
})
gsap.from(".page1 .film p",{
    x:1100,
    duration:2,
    delay:0.8,
    opacity:0
})
gsap.from(".page1 .film #butt",{
    y:300,
    duration:2,
    delay:0.8,
    opacity:0
})
var cricketPlayers = [
    {
        name: "Sachin Tendulkar",
        Image: "https://w0.peakpx.com/wallpaper/795/693/HD-wallpaper-sachin-cricket-god-cricketgod-god-of-cricket-player-sachin-tendulkar-sports-tendulkar-thumbnail.jpg",
        country: "India",
        matches: 663,
        runs: 34347,
        achievements: [
            "First player to score 100 international centuries",
            "Most runs in international cricket"
        ]
    },
    {
        name: "Ricky Ponting",
        Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Ricky_Ponting_2015.jpg/330px-Ricky_Ponting_2015.jpg",
        matches: 543,
        runs: 27082,
        achievements: [
            "Most successful captain in cricket history (won 2 World Cups)",
            "Wisden Cricketer of the Year (2006)"
        ]
    },
    {
        name: "Brian Lara",
        Image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Brian_Lara_at_2012_Mumbai_Marathon_pre_bash.jpg",
        country: "West Indies",
        matches: 430,
        runs: 22658,
        achievements: [
            "Highest individual score in a Test match (400*)",
            "Multiple world records in scoring"
        ]
    },
    {
        name: "Wasim Akram",
        Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Wasim-akram-gesf-2018-7878.jpg/330px-Wasim-akram-gesf-2018-7878.jpg",
        country: "Pakistan",
        matches: 104,
        runs: 2898,
        achievements: [
            "Highest wicket-taker for Pakistan in ODIs",
            "Two-time World Cup winner"
        ]
    },
    {
        name: "Shane Warne",
        Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Shane_Warne_February_2015.jpg/330px-Shane_Warne_February_2015.jpg",
        country: "Australia",
        matches: 145,
        runs: 3000,
        achievements: [
            "Most Test wickets (708)",
            "Revolutionized leg-spin bowling"
        ]
    },
    // New Players
    {
        name: "Virat Kohli",
        Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg/330px-Virat_Kohli_in_PMO_New_Delhi.jpg",
        country: "India",
        matches: 462,
        runs: 23801,
        achievements: [
            "Most runs in T20 internationals",
            "Fastest century in ODIs"
        ]
    },
    {
        name: "AB de Villiers",
        Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/AB_de_villiers_%28cropped%29.jpg/330px-AB_de_villiers_%28cropped%29.jpg",
        country: "South Africa",
        matches: 421,
        runs: 9577,
        achievements: [
            "Fastest century in ODIs (31 balls)",
            "Multiple IPL records"
        ]
    },
    {
        name: "Jacques Kallis",
        Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Jacques_Kallis_6.jpg/330px-Jacques_Kallis_6.jpg",
        country: "South Africa",
        matches: 166,
        runs: 13289,
        achievements: [
            "Most runs by a South African in Test cricket",
            "One of the greatest all-rounders"
        ]
    },
    {
        name: "Virender Sehwag",
        Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Virender_Sehwag_at_the_NDTV_Marks_for_Sports_event_13.jpg/330px-Virender_Sehwag_at_the_NDTV_Marks_for_Sports_event_13.jpg",
        country: "India",
        matches: 204,
        runs: 8586,
        achievements: [
            "Fastest double century in Test cricket",
            "Multiple records for aggressive batting"
        ]
    },
    {
        name: "Muttiah Muralitharan",
        Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Photograph_of_Muttiah_Muralitharan.jpg/330px-Photograph_of_Muttiah_Muralitharan.jpg",
        country: "Sri Lanka",
        matches: 495,
        runs: 1267,
        achievements: [
            "Highest wicket-taker in Test cricket (800 wickets)",
            "World Cup winner"
        ]
    },
    {
        name: "Imran Khan",
        Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Imran_Khan%2C_Chairman_of_the_PTI%2C_in_2023.jpg/330px-Imran_Khan%2C_Chairman_of_the_PTI%2C_in_2023.jpg",
        country: "Pakistan",
        matches: 263,
        runs: 7516,
        wickets: 544,
        achievements: [
            "Led Pakistan to their first World Cup victory in 1992",
            "Inducted into the ICC Cricket Hall of Fame"
        ]
    }
];

// Function to create player cards
function createPlayerCard(player) {
    const card = document.createElement("div");
    card.classList.add("card");

    const dp = document.createElement("div");
    dp.classList.add("dp");
    const img = document.createElement("img");
    img.src = player.Image;
    dp.appendChild(img);
    card.appendChild(dp);

    const name = document.createElement("h2");
    name.innerText = player.name;
    card.appendChild(name);

    const info = document.createElement("p");
    info.innerText = `Country: ${player.country || "N/A"} | Matches: ${player.matches} | Runs: ${player.runs}`;
    card.appendChild(info);

    const achievementsList = document.createElement("ul");
    player.achievements.forEach(achievement => {
        const listItem = document.createElement("li");
        listItem.innerText = achievement;
        achievementsList.appendChild(listItem);
    });
    card.appendChild(achievementsList);

    const button = document.createElement("button");
    button.innerText = "View Details";
    button.id = "cardbutton";
    card.appendChild(button);

    document.querySelector(".cards").appendChild(card);
}

cricketPlayers.forEach(player => createPlayerCard(player));

// Fan Zone Submission
const fanForm = document.getElementById('fan-form');
const submissionsList = document.getElementById('submissions-list');

fanForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const playerName = fanForm.querySelector('input').value;
    const listItem = document.createElement('li');
    listItem.textContent = playerName;
    submissionsList.appendChild(listItem);
    fanForm.reset(); // Clear the input field
});






























// var cricketPlayers = [
//     {
//         name: "Sachin Tendulkar",
//         Image:"https://w0.peakpx.com/wallpaper/795/693/HD-wallpaper-sachin-cricket-god-cricketgod-god-of-cricket-player-sachin-tendulkar-sports-tendulkar-thumbnail.jpg",
//         country: "India",
//         matches: 663,
//         runs: 34347,
//         achievements: [
//             "First player to score 100 international centuries",
//             "Most runs in international cricket"
//         ]
//     },
//     {
//         name: "Ricky Ponting",
//         Image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Ricky_Ponting_2015.jpg/330px-Ricky_Ponting_2015.jpg",
//         matches: 543,
//         runs: 27082,
//         achievements: [
//             "Most successful captain in ODI cricket",
//             "Two-time World Cup winner"
//         ]
//     },
//     {
//         name: "Brian Lara",
//         Image:"https://static.toiimg.com/photo/61977767.cms",
//         country: "West Indies",
//         matches: 430,
//         runs: 22658,
//         achievements: [
//             "Highest individual score in a Test match (400*)",
//             "Multiple world records in scoring"
//         ]
//     },
//     {
//         name: "Wasim Akram",
//         Image:"https://upload.wikimedia.org/wikipedia/commons/3/31/Wasim_Akram_%28cropped%29.jpg",
//         country: "Pakistan",
//         matches: 104,
//         runs: 2898,
//         achievements: [
//             "Highest wicket-taker for Pakistan in ODIs",
//             "Two-time World Cup winner"
//         ]
//     },
//     {
//         name: "Shane Warne",
//         Image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Shane_Warne_2006.jpg/220px-Shane_Warne_2006.jpg",
//         country: "Australia",
//         matches: 145,
//         runs: 3000,
//         achievements: [
//             "Most Test wickets (708)",
//             "Revolutionized leg-spin bowling"
//         ]
//     }
// ];

// function createPlayerCard(player) {
//     const card = document.createElement("div");
//     card.classList.add("card");

//     const dp = document.createElement("div");
//     dp.classList.add("dp");
//     const img = document.createElement("img");
//     img.src = player.Image;
//     dp.appendChild(img);
//     card.appendChild(dp);

//     const name = document.createElement("h2");
//     name.innerText = player.name;
//     card.appendChild(name);

//     const info = document.createElement("p");
//     info.innerText = `Country: ${player.country || "N/A"} | Matches: ${player.matches} | Runs: ${player.runs}`;
//     card.appendChild(info);

//     const achievementsList = document.createElement("ul");
//     player.achievements.forEach(achievement => {
//         const listItem = document.createElement("li");
//         listItem.innerText = achievement;
//         achievementsList.appendChild(listItem);
//     });
//     card.appendChild(achievementsList);

//     const button = document.createElement("button");
//     button.innerText = "View Details";
//     button.id = "cardbutton";
//     card.appendChild(button);

//     document.querySelector(".cards").appendChild(card);
// }

// cricketPlayers.forEach(player => createPlayerCard(player));

// // Fan Zone Submission
// const fanForm = document.getElementById('fan-form');
// const submissionsList = document.getElementById('submissions-list');

// fanForm.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const playerName = fanForm.querySelector('input').value;
//     const listItem = document.createElement('li');
//     listItem.textContent = playerName;
//     submissionsList.appendChild(listItem);
//     fanForm.reset(); // Clear the input field
// });
