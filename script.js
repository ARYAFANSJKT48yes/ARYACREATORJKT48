document.getElementById('whatsapp-btn').addEventListener('click', function() {
    window.location.href = 'https://wa.me/?text=ASSALAMUALAIKUM%20BANG';
});

// Simpan data pengunjung ke database
fetch('save_visitor.php')
    .then(response => response.text())
    .then(data => {
        document.getElementById('visitor-info').innerHTML = data;
    });
