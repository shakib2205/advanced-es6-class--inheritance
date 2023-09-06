const user = {id: 1, name: 'Gorib Amir', job: 'actor'};
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified)

const shop ={ 
    owner: 'Alia',
    address: {
        street: 'kochukhet bhoot er goli',
        city: 'dhaka',
        country: 'Bangladesh'
    },
    products:[ 'laptop', 'mic', 'monitor','keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false 
}

console.log(shop); // showing obj
const shopJson = JSON.stringify(shop);
console.log(shopJson);// convert to string by using JSON stringify
const shopObj = JSON.parse (shopJson);
console.log(shopObj); //convert string to obj again 