const availablewods = [
    'HTML',
    'CSS',
    'Java Tutorials',
    'JavaScript Tutorials',
    'Web Designing',
    'Learn Web Development in 1 min'
];

const resultbox = document.querySelector(".result-box");
const inputbox = document.getElementById("input-box");

inputbox.onkeyup = function(){
    let result =[];
    let input = inputbox.value;
    if(input.length > 0){
        result = availablewods.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }
    display(result);
}

function display(result){
    const content = result.map((list) => {
        return "<li onclick = selectinput(this)>" + list + "</li>"; 
    });
    resultbox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectinput(list){
    inputbox.value = list.innerHTML;
    resultbox.innerHTML = ' ';
}
