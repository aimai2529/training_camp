const inviteBtn = document.querySelectorAll(".inviteBtn");

inviteBtn.forEach(button => {
    button.onclick = () => {
        button.innerText = "フレンドに送信しました！";
    };
});
