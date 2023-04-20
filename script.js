var margin = document.createElement("div");
margin.setAttribute("class","margin");
var row = document.createElement("div");
row.classList.add("row","modified","d-flex","justify-content-between");
margin.append(row);
var container2=document.createElement("div");
container2.setAttribute("class","col-sm-12 col-md-12 col-lg-3");
var container1=document.createElement("div");
container1.setAttribute("class","col col-sm-12 col-md-12 col-lg-8");
var container=document.createElement("form")
container.setAttribute("class","mt-3 mb-5 form-style");
container2.append(container);
var h1= document.createElement("h1");
h1.innerHTML="Form Submission";
container.append(h1);
var B1 = document.createElement("br");
container.append(B1);
var L1= label("label","for","firstname","First Name:");
container.append(L1);
var B1 = document.createElement("br");
container.append(B1);
var I1= input("input","type","text","id","firstname","name","firstname","class","form-control","placeholder","First Name");
container.append(I1);
var B1 = document.createElement("br");
container.append(B1);
var L2= label("label","for","lastname","Last Name:");
container.append(L2);
var B1 = document.createElement("br");
container.append(B1);
var I1= input("input","type","text","id","lastname","name","lastname","class","form-control","placeholder","Last Name");
container.append(I1);
var B1 = document.createElement("br");
container.append(B1);
var L3= label("label","for","address1","Address Line 1:");
container.append(L3);
var B1 = document.createElement("br");
container.append(B1);
var I1= input("input","type","text","id","address1","name","address1","class","form-control","placeholder","Address Line 1");
container.append(I1);
var B1 = document.createElement("br");
container.append(B1);
var L4= label("label","for","address2","Address Line 2:");
container.append(L4);
var B1 = document.createElement("br");
container.append(B1);
var I1= input("input","type","text","id","address2","name","address2","class","form-control","placeholder","Address Line 2");
container.append(I1);
var B1 = document.createElement("br");
container.append(B1);
var L5= label("label","for","pin","PIN:");
container.append(L5);
var B1 = document.createElement("br");
container.append(B1); 
var I1= input("input","type","number","id","pin","name","pin","class","form-control","placeholder","PIN");
container.append(I1);
var B1 = document.createElement("br");
container.append(B1);
var L6= label("label","for","gender","Gender:");
container.append(L6);
var B1 = document.createElement("br");
container.append(B1);
var I1= input("input","type","radio","id","gender","name","gender","value","male","class","gender m-2 mb-2","Male");
container.append(I1);
var span = document.createElement("span");
span.innerHTML="Male"
container.append(span);
var B1 = document.createElement("br");
container.append(B1);
var I1= input("input","type","radio","id","gender","name","gender","value","female","class","gender m-2 mb-2","Female");
container.append(I1);
var span = document.createElement("span");
span.innerHTML="Female"
container.append(span);
var B1 = document.createElement("br");
container.append(B1);
var L7= label("label","for","food","Choice of Food:");
container.append(L7);
var B1 = document.createElement("br");
container.append(B1);
var I1= input("input","type","checkbox","id","food","name","food","class","food m-2","value","North Indian");
container.append(I1);
var span = document.createElement("span");
span.innerHTML="North Indian"
container.append(span);
var B1 = document.createElement("br");
container.append(B1);
var I1= input("input","type","checkbox","id","food","name","food","class","food m-2","value","South Indian");
container.append(I1);
var span = document.createElement("span");
span.innerHTML="South Indian"
container.append(span);
var B1 = document.createElement("br");
container.append(B1);
var I1= input("input","type","checkbox","id","food","name","food","class","food m-2","value","Chinese");
container.append(I1);
var span = document.createElement("span");
span.innerHTML="Chinese"
container.append(span);
var B1 = document.createElement("br");
container.append(B1);
var I1= input("input","type","checkbox","id","food","name","food","class","food m-2","value","Japanese");
container.append(I1);
var span = document.createElement("span");
span.innerHTML="Japanese"
container.append(span);
var B1 = document.createElement("br");
container.append(B1);
var I1= input("input","type","checkbox","id","food","name","food","class","food m-2","value","Sea Food");
container.append(I1);
var span = document.createElement("span");
span.innerHTML="Sea Food"
container.append(span);
var B1 = document.createElement("br");
container.append(B1);
var L8= label("label","for","state","State:");
container.append(L8);
var B1 = document.createElement("br");
container.append(B1);
var I1= input("input","type","text","id","state","name","state","class","form-control","placeholder","State");
container.append(I1);
var B1 = document.createElement("br");
container.append(B1);
var L9= label("label","for","country","Country:");
container.append(L9);
var B1 = document.createElement("br");
container.append(B1);
var I1= input("input","type","text","id","country","name","country","class","form-control","placeholder","Country");
container.append(I1);
var B1 = document.createElement("br");
container.append(B1);
var button1 = document.createElement("button");
button1.setAttribute("class","form-control btn btn-secondary");
button1.setAttribute("type","button");
button1.setAttribute("id","button");
button1.innerHTML="SUBMIT";
container.append(button1);

var h2=document.createElement("h1");
h2.innerHTML="Temporary Database";
container1.append(h2);
var table=document.createElement("table");
table.setAttribute("class","table table-striped");
container1.append(table);
var thead = document.createElement("thead");
thead.setAttribute("class","bg-dark text-light");
table.append(thead);
var tr = document.createElement("tr");
thead.append(tr);

var td= document.createElement("td");
td.innerHTML="Firstname";
tr.append(td);
var td= document.createElement("td");
td.innerHTML="Lastname";
tr.append(td);
var td= document.createElement("td");
td.innerHTML="Address";
tr.append(td);
var td= document.createElement("td");
td.innerHTML="PIN";
tr.append(td);
var td= document.createElement("td");
td.innerHTML="Gender";
tr.append(td);
var td= document.createElement("td");
td.innerHTML="Food";
tr.append(td);
var td= document.createElement("td");
td.innerHTML="State";
tr.append(td);
var td= document.createElement("td");
td.innerHTML="Country";
tr.append(td);

var tbody = document.createElement("tbody");
tbody.setAttribute("class","tbody");
tbody.setAttribute("id","tbody");
table.append(tbody);

row.append(container2,container1);
document.body.append(margin);


function label(tagname,attrname,attrvalue,content){
  var ele=document.createElement(tagname);
  ele.setAttribute(attrname,attrvalue);
  ele.innerHTML=content;
  return ele;
}

function input(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3,attrname4,attrvalue4){
  var ele=document.createElement(tagname);
  ele.setAttribute(attrname,attrvalue);
  ele.setAttribute(attrname1,attrvalue1);
  ele.setAttribute(attrname2,attrvalue2);
  ele.setAttribute(attrname3,attrvalue3);
  ele.setAttribute(attrname4,attrvalue4);
  return ele;
}


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let submit = document.getElementById("button")
submit.addEventListener("click",function(e){
    e.preventDefault();
    let address = [];
    address.push(address1.value)
    address.push(address2.value)

    let gender = document.getElementsByName("gender")
    let genderValue;
    for(let i=0;i<gender.length;i++){
        if(gender[i].checked){
            genderValue = gender[i].value
        }
    }
    
    let food = document.getElementsByName("food")
    let foodList = []
    let foodCount = 0;
    console.log(food)
    for(let i=0;i<food.length;i++){
        if(food[i].checked){
            foodList.push(food[i].value)
            foodCount++
        }
    }
    if(foodList.length>=2){
        result = foodList.join(", ")
    }else{
        result = alert("Choose atleast 2 options out of 5 in food")
    }

    createTable(fname.value,lname.value,address.join(" "),pin.value,genderValue,result,state.value,country.value)
    fname.value = ""
    lname.value = ""
    address1.value = ""
    address2.value = ""
    pin.value = ""
    gender.value = ""
    foodList = [];
    state.value = ""
    country.value = ""
})

let fname = document.getElementById("firstname")
let lname = document.getElementById("lastname")
let address1 = document.getElementById("address1")
let address2 = document.getElementById("address2")
let pin = document.getElementById("pin")
let gender = document.getElementById("gender")
let food = document.getElementById("food")
let state = document.getElementById("state")
let country = document.getElementById("country")


function createTable(fname,lname,address,pincode,gender,food,state,country){
    let tbody = document.getElementById("tbody")
    let tr1 = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    let td7 = document.createElement("td")
    let td8 = document.createElement("td")
    td1.innerHTML = fname;
    td2.innerHTML = lname;
    td3.innerHTML = address;
    td4.innerHTML = pincode;
    td5.innerHTML = gender;
    td6.innerHTML = food;
    td7.innerHTML = state;
    td8.innerHTML = country;
    tr1.append(td1)
    tr1.append(td2)
    tr1.append(td3)
    tr1.append(td4)
    tr1.append(td5)
    tr1.append(td6)
    tr1.append(td7)
    tr1.append(td8)
    tbody.append(tr1)
}

