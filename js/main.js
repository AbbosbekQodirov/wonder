function burgerMenu() {
    const burgerList = document.querySelector('.burger-menu-list');
    const burger = document.querySelector('.burger');


    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        burgerList.classList.toggle('hidden');
    });
}
burgerMenu();



const cursor=document.querySelector(".cursor")

document.addEventListener("mousemove", (e)=>{
    let x=e.pageX
    let y = e.pageY

    cursor.style.top=y+"px"
    cursor.style.left = x + "px";
  cursor.style.display = "block";

})
document.addEventListener("mouseout", (e) => {
  cursor.style.display = "none"
});
document.addEventListener("scroll", (e) => {
  cursor.style.display = "none";
});