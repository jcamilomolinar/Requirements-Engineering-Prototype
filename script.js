//Functions for alpha's visualization
function putOverlay() {
    let window = document.getElementById("overlay");
    window.style.display = "block";
}

function quitOverlay() {
    let window = document.getElementById("overlay");
    window.style.display = "none";
}

function openWindow(id) {
    let window = document.getElementById(id);
    window.style.display = "block";
    putOverlay();
}

function closeWindow(id) {
    let window = document.getElementById(id);
    window.style.display = "none";
    quitOverlay();
}

//Functions for beta's visualization
const eleSpec = ["stealsBall", "passesBall", "modifiesScoreboard", "modifiesPlayerStatistic",
"modifiesTeamStatistic", "purchasesTicket", "admonishesPlayer", "commitsFoul", "defendsBasket", "selectsTeam",
"makingRevenue", "promotingEvent", "improvingPlayerStatistic", "PlayerScoresBasket", "TicketSold", 
"SpectatorEntersSystem", "TeamStatisticVisualized", "CoachDirectsPlayer", "PlayerStatisticIncreased", 
"TeamStatisticUpdated", "TicketAvailable", "FoulTypePersonalOrTechnical"];


function allowsSpecification(idElement, idWindow) {
    let div = document.getElementById(idElement);
    div.addEventListener("contextmenu", function(event) {
        event.preventDefault();
        openWindow(idWindow);
    });
}

for(let i = 0; i < eleSpec.length; i++){
    allowsSpecification(eleSpec[i],"spec"+eleSpec[i][0].toUpperCase()+eleSpec[i].substring(1))
}

// LocalStorage

let EP = {
    Scorer: {Name: 0, Duty: 0},
    Referee: {Name: 0, Duty: 0},
    DatabaseAdministrator: {Name: 0, Salary: 0},
    Foul: {Type: 0},
    NationalBasketballAssociation: {
        Sponsorship: 0,
        Revenue: 0,
        Administration: {
            VicePresident: 0,
            Commissioner: {Name: 0}
        },
        Conference: {
            Championship: 0,
            East: {Division: 0},
            West: {Division: 0}
        },
        Season: {
            Champion: 0,
            SeasonStatistic: {Point: 0, Rebound: 0, Assist: 0, Steal: 0, Block: 0, ThreePoint: 0},
            StartDate: 0,
            FinishDate: 0,
            MostValuablePlayer: 0,
            Event: {
                Final: 0,
                Playoff: 0,
                Draft: 0,
                AllStarWeekend: {AllStarGame: 0, Contest: 0}
            },
            Game: {
                Duration: 0,
                Highlight: 0,
                Date: 0,
                Winner: 0,
                Loser: 0,
                Official: {Salary: 0},
                Scoreboard: {Score: 0},
                Arena: {Name: 0},
                Spectator: {Money: 0, Name: 0},
                Ticket: {Availability: 0, IdentificationNumber: 0, Price: 0},
                Equipment: {Basket: 0, Ball: 0},
                Team: {
                    Sponsorship: 0,
                    Symbol: 0,
                    Name: 0,
                    Quantity: 0,
                    Trainer: {Name: 0},
                    Coach: {Name: 0},
                    Governor: {Name: 0},
                    TeamStatistic: {FieldGoal: 0, FreeThrow: 0, Rebound: 0, Assist: 0, Steal: 0, Block: 0, ThreePoint: 0},
                    Player: {
                        Name: 0, 
                        Salary: 0, 
                        Position: 0,
                        BibNumber: 0,
                        PlayerStatistic: {FieldGoal: 0, FreeThrow: 0, Rebound: 0, Assist: 0, Steal: 0, Block: 0, ThreePoint: 0, Pass: 0, PersonalFoul: 0},
                    }
                }
            }
        }
    }
};

function downloadEP(){
    localStorage.setItem("EP", JSON.stringify(EP, null, 4))
    var link = document.createElement('a');
    link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(localStorage.getItem("EP")));
    link.setAttribute('download', 'AttributesValues.txt');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
