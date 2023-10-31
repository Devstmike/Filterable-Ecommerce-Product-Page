const phones = document.querySelectorAll(".phone");
const clothes = document.querySelectorAll(".cloth");
const Shoes = document.querySelectorAll(".shoes");
const buttons = document.querySelectorAll(".buttons > span");
const ShowAll = document.querySelectorAll(".buttons > span")[0];


// console.log("woking")
buttons.forEach((button) => {
    button.onclick  = () => {
        let buttonText = button.innerHTML

//        alert(buttonText)
        switch(buttonText) {
            case "Phones":
              clothes.forEach((cloth) => {
                    cloth.style.display = "none"
                  })
                  Shoes.forEach((Shoe) => {
                    Shoe.style.display = "none"
                  })
                  phones.forEach((Phone) => {
                    Phone.style.display = "block"
                  })
                  buttons.forEach((currentbutton) => {
                    currentbutton.classList.remove("active")
                  })                 
                  button.classList.add("active");
              break;
            case "Clothes":
                clothes.forEach((cloth) => {
                    cloth.style.display = "block"
                  })
                  Shoes.forEach((Shoe) => {
                    Shoe.style.display = "none"
                  })
                  phones.forEach((Phone) => {
                    Phone.style.display = "none"
                  })
                  buttons.forEach((currentbutton) => {
                    currentbutton.classList.remove("active")
                  })                 
                  button.classList.add("active");
              break;
            case "Shoes":
                clothes.forEach((cloth) => {
                    cloth.style.display = "none"
                  })
                  Shoes.forEach((Shoe) => {
                    Shoe.style.display = "block"
                  })
                  phones.forEach((Phone) => {
                    Phone.style.display = "none"
                  })
                  buttons.forEach((currentbutton) => {
                    currentbutton.classList.remove("active")
                  })                 
                  button.classList.add("active");
              break;
            case "Show all":
                clothes.forEach((cloth) => {
                    cloth.style.display = "block"
                  })
                  Shoes.forEach((Shoe) => {
                    Shoe.style.display = "block"
                  })
                  phones.forEach((Phone) => {
                    Phone.style.display = "block"
                  })
                  buttons.forEach((currentbutton) => {
                    currentbutton.classList.remove("active")
                  })                 
                  button.classList.add("active");


              break;
                    
            default:
              // code block
          }
    }
})