document.getElementById("displayShopName").textContent = localStorage.getItem("shopName") || "未記入";
    document.getElementById("displayLocation").textContent = localStorage.getItem("location") || "未記入";
    document.getElementById("displayDate").textContent = localStorage.getItem("date") || "未記入";
    document.getElementById("displayWithWhom").textContent = localStorage.getItem("withWhom") || "未記入";
    document.getElementById("displayDetails").textContent = localStorage.getItem("details") || "未記入";

    
    const storedImage = localStorage.getItem("uploadedImage");
    if (storedImage) {
        document.getElementById("previewImage").src = storedImage;
        document.getElementById("previewImage").style.display = "block";
    }