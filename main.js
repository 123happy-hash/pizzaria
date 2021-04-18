menu_list_array = ["Cheese Pizza",
                   "pepperoni Pizza", 
                   "Sausage Pizza", 
                   "Meatball Pizza", 
                   "Vegan Pizza"]

function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0; i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>' + menu_list_array[i] + '<li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}
function add_Item(){
    var htmldata;
    var Item=document.getElementById("add_Item").value;
    menu_list_array.push(Item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menu_list_array.length;i++){

        htmldata=htmldata+'<div class="cards">' +'<img src="images/pizza.png"/>' + menu_list_array[i] + '<div>'
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}