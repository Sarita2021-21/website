window.addEventListener('load', function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.nav-container');

    
    if(hamburger){
        hamburger.addEventListener('click', function () {
            menu.classList.toggle('change');
            hamburger.removeEventListener('click', function () {
                menu.classList.toggle('change');
            }); 
        });
    }

    // Add event listeners for submenu toggles
    // const dropdownToggles = document.querySelectorAll('.nav-link.dropdown-toggle');
    // dropdownToggles.forEach((toggle) => {
    //     toggle.addEventListener('click', (e) => {
    //         e.currentTarget.nextElementSibling.classList.toggle('active');
    //     });
    // });
});

// const hamburger = document.querySelector('.hamburger-menu');
// const menu = document.querySelector('.nav-container');

// if(hamburger){

//     hamburger.addEventListener('click', () => {
//         console.log("Hiiiiiiiiiii")
//         menu.classList.toggle('change');
//     });
// }
// document.addEventListener('DOMContentLoaded', function () {
  
// });



window.onload = function () {

    // const hamburger = document.querySelector('.hamburger-menu');
    // const menu = document.querySelector('.nav-container');

    // if(hamburger){
    //     hamburger.addEventListener('click', () => {
    //         console.log("Hiiiiiiiiiii")
    //         menu.classList.toggle('change');
    //     });
    // }

    // Add event listeners for submenu toggles
    // const dropdownToggles = document.querySelectorAll('.nav-link.dropdown-toggle');
    // dropdownToggles.forEach((toggle) => {
    //     toggle.addEventListener('click', (e) => {
    //         e.currentTarget.nextElementSibling.classList.toggle('active');
    //     });
    // });
    // const hamburger = document.querySelector('.hamburger-menu');
    // const menu = document.querySelector('.nav-container');
    
    // if(hamburger){
    //     hamburger.addEventListener('click', function () {
    //         menu.classList.toggle('change');
    //     });

    //     // To remove the event listener, you can use the same function reference:
    //     hamburger.removeEventListener('click', function () {
    //         menu.classList.toggle('change');
    //     }); 
    // }



    let history = document.getElementById("history");
    if (history) {
        history.onclick = function () {
            location.href = "./history.html";
        };
    }
    let principal = document.getElementById("principal");
    if (principal) {
        principal.onclick = function () {
            location.href = "./principal.html";
        };
    }
    let vice = document.getElementById("vice-principal");
    if (vice) {
        vice.onclick = function () {
            location.href = "./vice.html";
        };
    }
    let director = document.getElementById("director");
    if (director) {
        director.onclick = function () {
            location.href = "./director.html";
        };
    }
    let mission = document.getElementById("mission");
    if (mission) {

        mission.onclick = function () {
            location.href = "./mission.html";
        };
    }
    let vision = document.getElementById("vision");
    if (vision) {
        vision.onclick = function () {
            location.href = "./vision.html";
        };
    }
    let curricular = document.getElementById("curricular");
    if (curricular) {
        curricular.onclick = function () {
            location.href = "./curricular.html";
        };
    }
    let aims = document.getElementById("aims");
    if (aims) {
        aims.onclick = function () {
            location.href = "./aims.html";
        };
    }
    let staff = document.getElementById("staff");
    if (staff) {
        staff.onclick = function () {
            location.href = "./staff.html";
        };
    }
    let classrooms = document.getElementById("classrooms");
    if (classrooms) {
        classrooms.onclick = function () {
            location.href = "./classrooms.html";
        };
    }
    let physics = document.getElementById("physics");
    if (physics) {
        physics.onclick = function () {
            location.href = "./physics.html";
        };
    }
    let chemistry = document.getElementById("chemistry");
    if (chemistry) {
        chemistry.onclick = function () {
            location.href = "./chemistry.html";
        };
    }
    let biology = document.getElementById("biology");
    if (biology) {
        biology.onclick = function () {
            location.href = "./biology.html";
        };
    }
    let computer = document.getElementById("computer");
    if (computer) {
        computer.onclick = function () {
            location.href = "./computer.html";
        };
    }
    let maths = document.getElementById("maths");
    if (maths) {
        maths.onclick = function () {
            location.href = "./maths.html";
        };
    }
    let medical = document.getElementById("medical");
    if (medical) {
        medical.onclick = function () {
            location.href = "./medical.html";
        };
    }
    let art = document.getElementById("art");
    if (art) {
        art.onclick = function () {
            location.href = "./art.html";
        };
    }
    let music = document.getElementById("music");
    if (music) {
        music.onclick = function () {
            location.href = "./dance.html";
        };
    }
    let atal = document.getElementById("atal");
    if (atal) {
        atal.onclick = function () {
            location.href = "./atal.html";
        };
    }
    let library = document.getElementById("library");
    if (library) {
        library.onclick = function () {
            location.href = "./library.html";
        };
    }
}



