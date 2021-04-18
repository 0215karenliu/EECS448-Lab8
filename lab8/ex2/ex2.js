document.addEventListener("DOMContentLoaded", () => {
    let pictures = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
    let x = 0;
    document.querySelector("#prev").addEventListener("click", () => {
        if (x == 0) {
            x = 4;
        }else if (x == 1) {
            x = 0;
        }else if (x == 2) {
            x = 1;
        }else if (x == 3) {
            x = 2;
        }else if (x == 4) {
            x = 3;
        }document.getElementById("m_img").src = pictures[x];
    })
    document.querySelector("#next").addEventListener("click", () => {
        if (x == 0) {
            x = 1;
        }else if (x == 1) {
            x = 2;
        }else if (x == 2) {
            x = 3;
        }else if (x == 3) {
            x = 4;
        }else if (x == 4) {
            x = 0;
        }document.getElementById("m_img").src = pictures[x];
    })
});
