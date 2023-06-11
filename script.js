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

// Dynamic Relationship Code
function modifiesScoreboard() {
    const element1 = document.getElementById("Scoreboard.Score");
    const element2 = document.getElementById("Score");
    element2.value = element1.value
    alert("Changes applied")
}


// LocalStorage

function pullValue(id){
    let ele = document.getElementById(id);
    return ele.value;
}

function genEP() {
    let EP = {
        Scorer: {Name: pullValue("NameScorer"), Duty: pullValue("DutyScorer")},
        Referee: {Name: pullValue("NameReferee"), Duty: pullValue("DutyReferee")},
        DatabaseAdministrator: {Name: pullValue("NameDatabaseAdministrator"), Salary: pullValue("SalaryDatabaseAdministrator")},
        Foul: {Type: pullValue("Type")},
        NationalBasketballAssociation: {
            Sponsorship: pullValue("SponsorshipNationalBasketballAssociation"),
            Revenue: pullValue("Revenue"),
            Administration: {
                Vicepresident: pullValue("Vicepresident"),
                Commissioner: {Name: pullValue("NameCommissioner")}
            },
            Conference: {
                Championship: pullValue("Championship"),
                East: {Division: pullValue("EastDivision")},
                West: {Division: pullValue("WestDivision")}
            },
            Season: {
                Champion: pullValue("Champion"),
                SeasonStatistic: {Point: pullValue("Point"), Rebound: pullValue("SeasonRebound"), Assist: pullValue("SeasonAssist"), Steal: pullValue("SeasonSteal"), Block: pullValue("SeasonBlock"), ThreePoint: pullValue("SeasonSteal")},
                StartDate: pullValue("StartDate"),
                FinishDate: pullValue("FinishDate"),
                MostValuablePlayer: pullValue("MostValuablePlayer"),
                Event: {
                    Final: pullValue("Final"),
                    Playoff: pullValue("Playoff"),
                    Draft: pullValue("Draft"),
                    AllStarWeekend: {AllStarGame: pullValue("AllStarGame"), Contest: pullValue("Contest")}
                },
                Game: {
                    Duration: pullValue("Duration"),
                    Highlight: pullValue("Highlight"),
                    Date: pullValue("Date"),
                    Winner: pullValue("Winner"),
                    Loser: pullValue("Loser"),
                    GameClock: pullValue("GameClock"),
                    Official: {Salary: pullValue("SalaryOfficial")},
                    Scoreboard: {Score: pullValue("Score")},
                    Arena: {Name: pullValue("NameArena")},
                    Spectator: {Money: pullValue("Money"), Name: pullValue("NameSpectator")},
                    Ticket: {Availability: pullValue("Availability"), IdentificationNumber: pullValue("ID"), Price: pullValue("Price")},
                    Equipment: {Basket: pullValue("Basket"), Ball: pullValue("Ball")},
                    Team: {
                        Sponsorship: pullValue("SponsorshipTeam"),
                        Symbol: pullValue("Symbol"),
                        Name: pullValue("NameTeam"),
                        Quantity: pullValue("Quantity"),
                        Trainer: {Name: pullValue("NameTrainer")},
                        Coach: {Name: pullValue("NameCoach")},
                        Governor: {Name: pullValue("NameGovernor")},
                        TeamStatistic: {FieldGoal: pullValue("TeamFieldGoal"), FreeThrow: pullValue("TeamFreeThrow"), Rebound: pullValue("TeamRebound"), Assist: pullValue("TeamAssist"), Steal: pullValue("TeamSteal"), Block: pullValue("TeamBlock"), ThreePoint: pullValue("TeamThreePoint")},
                        Player: {
                            Name: pullValue("NamePlayer"), 
                            Salary: pullValue("SalaryPlayer"), 
                            Position: pullValue("Position"),
                            BibNumber: pullValue("BibNumber"),
                            PlayerStatistic: {FieldGoal: pullValue("PlayerFieldGoal"), FreeThrow: pullValue("PlayerFreeThrow"), Rebound: pullValue("PlayerRebound"), Assist: pullValue("PlayerAssist"), Steal: pullValue("PlayerSteal"), Block: pullValue("PlayerBlock"), ThreePoint: pullValue("PlayerThreePoint"), Pass: pullValue("Pass"), PersonalFoul: pullValue("PersonalFoul")},
                        }
                    }
                }
            }
        }
    }
    return EP
}


function downloadEP(){
    localStorage.setItem("EP", JSON.stringify(genEP(), null, 4))
    var link = document.createElement('a');
    link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(localStorage.getItem("EP")));
    link.setAttribute('download', 'AttributesValues.txt');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
