//Have you ever wondered, why we search on any serach bar example : Netflix
//how the list of movies occures ??
// and every time it will change the content dynamically 
// well In this chapter you will understand everything.


//#How to create a dynamic HTML element using JS?

let containerElement = document.createElement("div");
containerElement.textContent = "I'm a dynamic container";
document.body.appendChild(containerElement);

//always remeber we write the HTML element inside the body tag. so here we follow the same.

// Now we have create the conatiner , now lets add a heaidng 

let headingElement = document.createElement("h1");
headingElement.textContent = "I'm a heading";
containerElement.appendChild(headingElement);

//Now lets create a para element 

let paraEl = document.createElement("p");
paraEl.textContent = "I'm just a paragraph";
containerElement.appendChild(paraEl);


// Now how it will shown in HTML page , or when you see the inspect element , you will get the below structure 

{/* <div>
    <h1> I'm a heading</h1>
    <p> I'm a paragraph</p>
</div> */}

//so if you creating an application where dynamic page creation required , you can use this method.


//I hope you like this tutorial.






