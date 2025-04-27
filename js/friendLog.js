const btn = document.querySelectorAll(".btn");


btn.forEach(button => {
    button.onclick = () => {
        button.innerText = "フレンドに送信しました！";
        button.style.backgroundColor = "#fff";
        button.style.border = "#FF9A42 solid 2px"
        button.style.color = "#FF9A42";
        console.log("クリック");
    };
});