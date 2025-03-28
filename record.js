document.getElementById("pictureUpload").addEventListener("click", function() {
    document.getElementById("imageInput").click();
});

document.getElementById("imageInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageData = e.target.result;
            localStorage.setItem("uploadedImage", imageData); // Base64データを保存
            document.getElementById("previewImage").src = imageData;
            document.getElementById("previewImage").style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});


document.getElementById("saveBtn").addEventListener("click", function() {
    const shopName = document.getElementById("shopName").value;
    const location = document.getElementById("location").value;
    const date = document.getElementById("date").value;
    const withWhom = document.getElementById("withWhom").value;
    const details = document.getElementById("details").value;

    localStorage.setItem("shopName", shopName);
    localStorage.setItem("location", location);
    localStorage.setItem("date", date);
    localStorage.setItem("withWhom", withWhom);
    localStorage.setItem("details", details);

    window.location.href = "log.html";
});
