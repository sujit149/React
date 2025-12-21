//  In react we use createElement method to create element in react it takes three arguments firsr is the type of element (ex. h1,div, etc) second is the attributes(ex. it is an object we can add the id ) and third is the content inside that element, also one key note it is an object
 // const heading = React.createElement('h1', {id: 'heading'}, 'Hello world from React');
 const parent = React.createElement('div',{id: 'parent'}, React.createElement('div', {id: 'child'}, [React.createElement('h1',{}, 'I am an h1 tag'), React.createElement('h2',{}, 'I am an h2 tag')]));
 const root = ReactDOM.createRoot(document.getElementById('root'));
 
 // below line will render the element on browser here parent object is converted to html by react and reactdom
 // root.render(heading); 
 root.render(parent);