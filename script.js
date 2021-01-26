
function compute_grade(){
    console.log("hi")
};

function add_row(){
    let table_length = document.getElementsByClassName("grade-row").length;
    console.log("adding row...")
    let row = document.createElement("TR");
    row.setAttribute("class","grade-row");
    row.setAttribute("id", `${table_length + 1}`)
    document.getElementById("table-body").appendChild(row);

    let data = document.createElement("TD");
    data.innerHTML = table_length + 1;
    document.getElementById(table_length + 1).appendChild(data);

    // Creates a TD input for grade by first creating a TD then putting input inside
    let grade_data = document.createElement("TD");
    grade_data.setAttribute("id", `g${table_length + 1}`)
    document.getElementById(table_length + 1).appendChild(grade_data);

    let grade_input = document.createElement("INPUT");
    grade_input.setAttribute("class", "grade");
    grade_input.setAttribute("type", "text");
    document.getElementById(`g${table_length + 1}`).appendChild(grade_input);
    
    // Creates a TD input for weight by first creating a TD then putting input inside
    let weight_data = document.createElement("TD");
    weight_data.setAttribute("id", `w${table_length + 1}`)
    document.getElementById(table_length + 1).appendChild(weight_data);

    let weight_input = document.createElement("INPUT");
    weight_input.setAttribute("class", "weight");
    weight_input.setAttribute("type", "text");
    document.getElementById(`w${table_length + 1}`).appendChild(weight_input);
}

let compute_button = document.getElementById("compute");

document.getElementById("compute").addEventListener("click", compute_grade);
document.getElementById("add-row").addEventListener("click", add_row);