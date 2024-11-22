// Fungsi untuk menampilkan hanya section yang dipilih
function showSection(sectionId) {
    // Ambil semua section
    const sections = document.querySelectorAll('section');

    // Sembunyikan semua section
    sections.forEach((section) => {
        section.classList.remove('active');
    });

    // Tampilkan section yang dipilih
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}
