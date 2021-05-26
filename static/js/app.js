// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function createTable(data) {
    tbody.html("")
data.forEach((sightingReport) => {
    var row = tbody.append("tr");
    Object.entries(sightingReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

createTable(tableData);

var filterObject = {};

function createObject() {
    
    var element=d3.select(this).select("input");
    var changedValue = element.property("value");
    var id = element.attr("id");

    console.log(changedValue)

    if (changedValue) {
        filterObject[id] = changedValue;

    }
    else{
        delete filterObject[id];
    }
    console.log(filterObject);
    filterTable();
}

function filterTable (){
    d3.event.preventDefault();
    Object.entries(filterObject).forEach(([key,value])=> {
        filterData= tableData.filter(row => row[key] === value);
    })
    console.log(filterData);
    console.log(filterObject);
    createTable(filterData);
}

d3.selectAll(".filter").on("change", createObject);




  