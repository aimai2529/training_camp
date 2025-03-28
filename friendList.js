const inviteBtn = document.querySelectorAll(".inviteBtn");

inviteBtn.forEach(button => {
    button.onclick = () => {
        button.innerText = "フレンドに送信しました！";
        button.style.backgroundColor = "#FF9A42"
        button.style.color = "#fff"
    };
});

