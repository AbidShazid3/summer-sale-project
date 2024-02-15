const cards = document.querySelectorAll('.card');
// for loop 
// for(let i=0; i< cards.length; i++){
//     const element = cards[i];
//     console.log(element);
// }
let titleCount = 1;
let totalPrice = 0;

for(const card of cards){
    card.addEventListener('click', function(){
        // get the title
        const title = card.querySelector('h3');
        const titleText = title.innerText;
        
        // to add the titleText to the new p
        const titleContainerShow = document.getElementById('title-container');
        
        const p = document.createElement('p');
        p.innerText = titleCount + '. ' + titleText;
        titleContainerShow.appendChild(p);
        titleCount++;

        // get the price
        const price = card.querySelector('span');
        const priceText = parseFloat(price.innerText.split(' ')[1]);
        
        // calculate price
        totalPrice = totalPrice + priceText;
        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
    })
}