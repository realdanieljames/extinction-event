//   The first step is our ol
//   the lis in their should all have an event listener on them 
//      that give them a line-through effect on them when they are clicked.



const orderedList = document.querySelectorAll("ol li")

const lineThrough = function (event) {
    const itemClicked = event.target
    itemClicked.style.textDecorationLine = 'line-through'

}


for (const list of orderedList) {
    list.addEventListener('click', lineThrough)
}




const ulItems = document.querySelectorAll('ul li');

const fade = function (event) {
    const item = event.target;
    item.style.opacity = 0;
}

const pictures = document.querySelectorAll('#row img');
const collapse = function (event) {
    event.target.style.width = '0px'
}

for (const picture of pictures) {
    picture.addEventListener('click', collapse)
}




const meteor = document.querySelector('#destroy-all')

const destroyEverything = function (){
    for(const item of orderedList ){
        item.style.textDecorationLine = 'line-through'
    }

    for(const item of ulItems ){
        item.style.opacity = 0;
    }
    
    for(const picture of pictures ){
        picture.style.width = '0px'
    }


}

meteor.addEventListener('click', destroyEverything)
