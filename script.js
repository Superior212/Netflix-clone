const signIn =()=>{
    window.location.href="profile.html"
}




const users = ["Murat","Umut","Kemal","Çocuk"];

const memberDiv = document.querySelector(".memberDiv");
const addIcon = document.querySelector(".addIcon");

const  userIcons = () =>{
    users.map((currentElement)=>{
        users.reverse()
        memberDiv.insertAdjacentHTML("afterbegin",`
        <button class="btn"><span>${currentElement}</span></button>
        `);
    })
}
addIcon.addEventListener("click", ()=>{
    let userName = prompt("Please enter your name");
    if (userName !== null && !users.includes(userName)) {
        users.push(userName)
        console.log(users);
        memberDiv.insertAdjacentHTML("afterbegin",`
        <button class="btn"><span>${userName}</span></button>
        `);
    }else{
        alert("username already exist");
    }
})
userIcons();