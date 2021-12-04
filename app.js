const buttons = document.querySelectorAll('.btn');
const members = document.querySelectorAll('.team-member');
let activeBotton = "Core";
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetActiveBtn();
        activeNewButton(btn.id);
        btn.classList.add('active');
    });
});
function resetActiveBtn(){
    buttons.forEach((btn) => {
        btn.classList.remove('active');
    });
}
function activeNewButton(newBotton){
    activeBotton = newBotton;
    members.forEach((item) => {
        if(item.classList.contains(activeBotton)){
            item.style.display = "grid";
        } else {
            item.style.display = "none";
        }
    });
}
activeNewButton(activeBotton);