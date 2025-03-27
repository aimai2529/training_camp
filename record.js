const pictureUpload = document.getElementById("pictureUpload"); // クリックするエリア
const imageInput = document.getElementById("imageInput"); // 画像選択ボタン（非表示）
const previewImage = document.getElementById("previewImage"); // プレビュー表示用の画像
const plusText = document.getElementById("plusText"); // 「＋写真を追加」のテキスト

// **クリックで画像選択を開く**
pictureUpload.addEventListener("click", () => {
    imageInput.click();
});

// **画像を選んだらプレビューを表示**
imageInput.addEventListener("change", (event) => {
    const file = event.target.files[0]; // 選択したファイルを取得
    if (file) {
        const reader = new FileReader(); // ファイルを読み込む
        reader.onload = (e) => {
            previewImage.src = e.target.result; // 画像をセット
            previewImage.style.display = "block"; // 画像を表示
            previewImage.style.width = "100%"; // 枠いっぱいにする
            previewImage.style.height = "100%";
            previewImage.style.objectFit = "cover"; // 画像をフィットさせる
            plusText.style.display = "none"; // 「＋写真を追加」を隠す
        };
        reader.readAsDataURL(file); // 画像を読み込む
    }
});
