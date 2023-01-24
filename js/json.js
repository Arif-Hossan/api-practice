//JavaScript Object Notation ==>> JSON
const user = { id: "John Doe", title: "Web Developer", number: 123456789 };
//convert user object to JSON String
const userJSON = JSON.stringify(user);

console.log(user);
//{ id: 'John Doe', title: 'Web Developer', number: 123456789 }
console.log(userJSON);
//{"id":"John Doe","title":"Web Developer","number":123456789}
//Number and Boolean will not covered block quote in JSON

const shop = {
  owner: "John Doe",
  name: "Creative House",
  address: {
    street: "Kochukhet Vuter Goli",
    city: "Dhaka",
    country: "BD",
  },
  product: ['Web Design','Email Template','Boucher'],
  isOpen: true,
  isNew: false,
};
//convert shop object to JSON String
const shopJSON = JSON.stringify(shop);
console.log("shop = ", shop);
console.log(`typeof shop = `,typeof shop);//object
/*
shop =  {
  owner: 'John Doe',
  name: 'Creative House',
  address: { street: 'Kochukhet Vuter Goli', city: 'Dhaka', country: 'BD' },
  product: [ 'Web Design', 'Email Template', 'Boucher' ],
  isOpen: true,
  isNew: false
}*/
console.log("shopJSON = ", shopJSON);//string
/*
shopJSON =  {"owner":"John Doe","name":"Creative House","address":{"street":"Kochukhet Vuter Goli","city":"Dhaka","country":"BD"},"product":["Web Design","Email Template","Boucher"],"isOpen":true,"isNew":false}
*/
console.log(`typeof shopJSON = `,typeof shopJSON);
// const shopObj
//convert JSON String to JS Object
const shopObject=JSON.parse(shopJSON);
console.log(shopObject);
/*
{
  owner: 'John Doe',
  name: 'Creative House',
  address: { street: 'Kochukhet Vuter Goli', city: 'Dhaka', country: 'BD' },
  product: [ 'Web Design', 'Email Template', 'Boucher' ],
  isOpen: true,
  isNew: false
}
*/
console.log(`typeOf shopObject`,typeof shopObject);//object