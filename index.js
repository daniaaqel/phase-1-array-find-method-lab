// code your solution here
function superbowlWin(array){
    var winner = array.find((element)=>{
        return element.result === 'W';
    });
    
    if(winner === undefined){
        return undefined
     } else {
        return winner.year;
     }
}