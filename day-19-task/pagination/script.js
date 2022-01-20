document.body.innerHTML=`<div class="main-container">
<h1 id="title">Pagination</h1>
<p id="description">Displaying the content of users in table using pagination</p>
<div class="table-responsive">
<table id="table" class="table table-bordered">
    <thead id="thead">
     <th>ID</th>
     <th>Name</th>
     <th>Email</th>
    </thead>
    <tbody id="tbody"></tbody>
  </table>
</div>
<div class="d-flex justify-content-center" id="buttons">
<div id="pagination">
<a href="javascript:firstPage()" id="first">First</a>
<a href="javascript:prevPage()" id="previous">Previous</a>
<a class="active"id="btn1"><span>1</span></a>
<a class="active"id="btn2"><span>2</span></a>
<a class="active"id="btn3"><span>3</span></a>
<a class="active"id="btn4"><span>4</span></a>
<a class="active"id="btn5"><span>5</span></a>
<a href="javascript:nextPage()" id="next" >Next</a>
<a href="javascript:LastPage()" id="last" >Last</a>
</div>
</div>
</div>
`;
var current_page=1;
var total_page=10;
var btn_1=document.getElementById("btn1");
var btn_2=document.getElementById("btn2");
var btn_3=document.getElementById("btn3");
var btn_4=document.getElementById("btn4");
var btn_5=document.getElementById("btn5");
btn_1.addEventListener("click",getJson1);
btn_2.addEventListener("click",getJson2);
btn_3.addEventListener("click",getJson3);
btn_4.addEventListener("click",getJson4);
btn_5.addEventListener("click",getJson5);

//inserting the fetch data into table
var insertIntoTable=(data)=>{
  var tbody=document.querySelector("#tbody");
  tbody.innerHTML="";
  data.forEach((ele)=>{
    var newRow = tbody.insertRow(tbody.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = ele.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = ele.name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = ele.email;
  });
}

async function getJson1(){
   try{
    const data = await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json").then((response)=>response.json()).then((data)=>data);
    value=btn_1.innerHTML;
    if(value==1){var record=data.slice(0,10);}else if(value==2){var record=data.slice(10,20);}else if(value==3){var record=data.slice(20,30);}else if(value==4){var record=data.slice(30,40);}else if(value==5){var record=data.slice(40,50);}else if(value==6){var record=data.slice(50,60);};
    insertIntoTable(record);
   }catch(error){
     console.log(error);
   }
}


async function getJson2(){
  try{
    const data = await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json").then((response)=>response.json()).then((data)=>data);
    value=btn_2.innerHTML;
    console.log(value);
    if(value==2){var record=data.slice(10,20);}else if(value==3){var record=data.slice(20,30);}else if(value==4){var record=data.slice(30,40);}else if(value==5){var record=data.slice(40,50);}else if(value==6){var record=data.slice(50,60);}else if(value==7){var record=data.slice(60,70);};
    insertIntoTable(record);
   }catch(error){
     console.log(error);
   }
}

async function getJson3(){
  try{
    const data = await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json").then((response)=>response.json()).then((data)=>data);
    value=btn_3.innerHTML;
    if(value==3){var record=data.slice(20,30);}else if(value==4){var record=data.slice(30,40);}else if(value==5){var record=data.slice(40,50);}else if(value==6){var record=data.slice(50,60);}else if(value==7){var record=data.slice(60,70);}else if(value==8){var record=data.slice(70,80);};
    insertIntoTable(record);
   }catch(error){
     console.log(error);
   }
}

async function getJson4(){
  try{
    const data = await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json").then((response)=>response.json()).then((data)=>data);
    value=btn_4.innerHTML;
    if(value==4){var record=data.slice(30,40);}else if(value==5){var record=data.slice(40,50);}else if(value==6){var record=data.slice(50,60);}else if(value==7){var record=data.slice(60,70);}else if(value==8){var record=data.slice(70,80);}else if(value==9){var record=data.slice(80,90);};
    insertIntoTable(record);
   }catch(error){
     console.log(error);
   }
}

async function getJson5(){
  try{
    const data = await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json").then((response)=>response.json()).then((data)=>data);
    value=btn_5.innerHTML;
    if(value==5){var record=data.slice(40,50);}else if(value==6){var record=data.slice(50,60);}else if(value==7){var record=data.slice(60,70);}else if(value==8){var record=data.slice(70,80);}else if(value==9){var record=data.slice(80,90);}else if(value==10){var record=data.slice(90,100);};
    insertIntoTable(record);
   }catch(error){
     console.log(error);
   }
}


//code for firstPage
var firstPage=()=>{
  if(current_page>1){
    current_page=1;
    changePage(current_page);
  }
}
//code for previousPage
var prevPage=()=>{
   if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}
//code for nextPage
var nextPage=()=>{
    if (current_page < 6) {
        current_page++;
        changePage(current_page);
    }
}
//code for lastPage
var LastPage=()=>{
  if (current_page < 6) {
     current_page=6;
    changePage(current_page);
   }
}

//function to change the pages
var changePage=(page)=>{
    
    // Validate page
    if (page < 1) page = 1;
    if (page > total_page) page = total_page;
    btn_1.innerHTML=page;
    btn_2.innerHTML=page+1;
    btn_3.innerHTML=page+2;
    btn_4.innerHTML=page+3;
    btn_5.innerHTML=page+4;
      
}
//code to set the page to 1 on every reload
window.onload = ()=> {
    changePage(1);
};