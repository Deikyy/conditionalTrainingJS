// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let season = prompt('what moon is it?'); 

if (season === 'september' || season === 'october' || season === 'november' ) {
    console.log('the season is autumn')
} else if (season === 'january' || season === 'december' || season === 'february') {
    console.log('the season is winter')
} else if (season === 'march' || season === 'april' || season === 'may') {
    console.log('the season is spring')
} else if (season === 'june' || season === 'july' || season === 'august'){
    console.log('the season is summer')
} 


