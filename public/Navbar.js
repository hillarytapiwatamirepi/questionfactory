
// start coding the navbar here
var nav = document.createElement("nav");
nav.id = "nav"


// create the navbar brand

var nav_bar_brand = document.createElement("a")
nav_bar_brand.id ="navbar-brand"
// nav_bar_brand.className = "navbar-brand"

// add image to the brand
var nav_bar_image = document.createElement("img")
nav_bar_image.src = "ekologo.jpg"

nav_bar_brand.appendChild(nav_bar_image)

// add the navbar brand to the navbar

nav.appendChild(nav_bar_brand)

var root = document.getElementById("root")

root.appendChild(nav)


