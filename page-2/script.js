document.addEventListener("DOMContentLoaded", function () {
    fetch("footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Gagal memuat footer");
            }
            return response.text();
        })
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
        })
        .catch(error => console.error("Error:", error));
});
