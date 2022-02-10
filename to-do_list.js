function clickedadd()
{
    console.log("Adding to the list....");
    taskt=document.getElementById('tasktitle').value;
    taskd=document.getElementById('taskdescription').value;

    if(localStorage.getItem('itemsJson')==null)
    {
        itemJsonArray=[];
        itemJsonArray.push([taskt, taskd]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    }
    else
    {
        itemJsonArrayStr=localStorage.getItem('itemsJson');
        itemJsonArray=JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([taskt, taskd]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    }

    update();

}

function update()
{
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = []; 
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    } 
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr); 
    }

//populate the table
let tablebody=document.getElementById("tablebody");
let str="";
itemJsonArray.forEach((element, index) => {
    str += `
    <tr>
    <td>${index+1}</td>
    <td>${element[0]}</td>
    <td>${element[1]}</td>
    <td><button class="btn2" onclick="deletein(${index})">Delete it</button></td>
    </tr>
    `;
});
tablebody.innerHTML=str;
}

// add = document.getElementById("add");
// add.addEventListener("click", clickedadd);
// update();

function deletein(itemIndex)
{
    console.log("Deleting the ",itemIndex);
    itemJsonArrayStr=localStorage.getItem('itemsJson');
    itemJsonArray=JSON.parse(itemJsonArrayStr);

    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();

}

function clickeddel()
{
    if (confirm("Do you areally want to clear?")){
        console.log('Clearing the storage')
        localStorage.clear();
        update();
    }
}
