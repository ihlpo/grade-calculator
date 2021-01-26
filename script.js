
function compute_grade(){
    let grades = document.getElementsByClassName("grade");
    let weights = document.getElementsByClassName("weight");
    let results = [];
    let total_weights = [];

    for (let i = 0; i < grades.length; i++){
        results.push((grades[i].value * (weights[i].value / 100)));
        total_weights.push(Number(weights[i].value));
    }

    //computes the sum
    let sum_of_grades = results.reduce((a,b) => a + b);
    let sum_of_weights = total_weights.reduce((a,b) => a + b);

    output = document.createElement("P");
    output.innerHTML = 
    `You have an average grade of ${sum_of_grades.toFixed(2)},
    with ${sum_of_weights}% of the course completed.`

    document.getElementById("grade-result").appendChild(output);

};

function generate_grade(){
    
    let grade_output = document.getElementById("grade-result");
    if (grade_output.hasChildNodes()){
        grade_output.removeChild(grade_output.lastChild);
        compute_grade();
    }
    else{
        compute_grade();
    }

}

function add_row(){
    let table_length = document.getElementsByClassName("grade-row").length;
    console.log("Adding row...")
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

function remove_row(){
    console.log("Removing last row...")
    let table_body = document.getElementById("table-body");
    table_body.removeChild(table_body.lastChild);

    generate_grade();
}

function clear_output(){

}

document.getElementById("compute").addEventListener("click", generate_grade);
document.getElementById("add-row").addEventListener("click", add_row);
document.getElementById("remove-row").addEventListener("click", remove_row);