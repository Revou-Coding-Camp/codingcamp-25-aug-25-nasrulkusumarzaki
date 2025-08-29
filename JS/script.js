document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("formPesan");
  const output = document.getElementById("output");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Ambil nilai input
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Tampilkan output
    document.getElementById("outputName").textContent = name;
    document.getElementById("outputEmail").textContent = email;
    document.getElementById("outputMessage").textContent = message;

    output.style.display = "block";

    // Reset form jika mau
    form.reset();
  });
});

function scrollGallery(direction) {
  const row = document.getElementById("galleryRow");
  const scrollAmount = 320; // lebar 1 item + gap
  row.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}