// const square = (x) =>{
//     return x * x;
// }

// console.log(square(3));

const event = {
    name : 'Birthday Party',
    printGuestList: function(){
        console.log('Guest list for ', this.name);
    }
}

event.preventDefault();