// code your solution here
function saturdayFun(action = "roller-skate"){
    return `This Saturday, I want to ${action}!`
}
saturdayFun();

const mondayWork = function(action = "go to the office") {
    return `This Monday, I will ${action}.` 
} ;

mondayWork();

function wrapAdjective (vf){
    return function(parameter = "special") {
        return `You are ${vf}${parameter}${vf}!`;
    }
}

wrapAdjective();