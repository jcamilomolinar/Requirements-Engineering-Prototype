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
    allowsSpecification(eleSpec[i],"open"+eleSpec[i][0].toUpperCase()+eleSpec[i].substring(1))
}
