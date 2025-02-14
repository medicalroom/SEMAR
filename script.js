document.addEventListener('DOMContentLoaded', function() {
    // IMT Calculator
    const calculateButton = document.getElementById('calculate');
    if (calculateButton) {
        calculateButton.addEventListener('click', function() {
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value) / 100;
            const age = parseInt(document.getElementById('age').value);
            const gender = document.querySelector('input[name="gender"]:checked');

            if (weight && height && age && gender) {
                const imt = weight / (height * height);
                let interpretation = '';

                if (imt < 18.5) {
                    interpretation = 'Kurus';
                } else if (imt < 25) {
                    interpretation = 'Ideal';
                } else if (imt < 30) {
                    interpretation = 'Gemuk';
                } else {
                    interpretation = 'Obesitas';
                }

                document.getElementById('imt-result').textContent = imt.toFixed(2);
                document.getElementById('imt-interpretation').textContent = interpretation;
            } else {
                alert('Mohon isi semua data.');
            }
        });
    }

    function getFoodRecommendations(latitude, longitude) {
        // Placeholder function to simulate fetching food recommendations
        let cityName = 'Contoh Nama Kota';
        let foodRecommendation = 'Maaf, rekomendasi makanan tidak tersedia untuk lokasi Anda saat ini.';

        document.getElementById('city-name').textContent = cityName;
        document.getElementById('food-recommendation').textContent = foodRecommendation;
    }

    // Food Recommendation
    const detectLocationButton = document.getElementById('detect-location');
    if (detectLocationButton) {
        detectLocationButton.addEventListener('click', function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    const locationInfo = `Latitude: ${latitude}, Longitude: ${longitude}`;
                    document.getElementById('location-info').textContent = locationInfo;

                    // Construct search query URL
                    const searchQuery = `https://www.google.com/search?q=rekomendasi+makanan+sehat+di+dekat+${latitude},${longitude}`;

                    // Open search query in new tab
                    window.open(searchQuery, '_blank');

                }, function(error) {
                    document.getElementById('location-info').textContent = 'Gagal mendapatkan lokasi.';
                });
            } else {
                document.getElementById('location-info').textContent = 'Geolocation tidak didukung oleh browser Anda.';
            }
        });
    }

// Function to show/hide sections
    function showSection(sectionId) {
        console.log('showSection called with:', sectionId);
        const sections = ['welcome', 'features', 'imt-calculator', 'food-recommendation-section', 'nutrition-analysis-section', 'faq-section', 'hepatitis-b-diagnosis', 'disability-evaluation-section'];
        sections.forEach(id => {
            const section = document.getElementById(id);
             if (section) {
                if (sectionId === 'welcome') {
                    section.style.display = (id === 'welcome' || id === 'features') ? 'block' : 'none';
                } else {
                    section.style.display = (id === sectionId) ? 'block' : 'none';
                }
            }
        });
    }

    // Event listeners for buttons to show sections
    document.getElementById('imt-calculator-button').addEventListener('click', () => showSection('imt-calculator'));
    document.getElementById('food-recommendation-button').addEventListener('click', () => showSection('food-recommendation-section'));
    document.getElementById('nutrition-analysis-button').addEventListener('click', () => showSection('nutrition-analysis-section'));
    document.getElementById('faq-button').addEventListener('click', () => showSection('faq-section'));
    document.getElementById('disability-evaluation-button')?.addEventListener('click', () => showSection('disability-evaluation-section'));
    document.getElementById('diagnosis-tool-1').addEventListener('click', () => showSection('hepatitis-b-diagnosis'));

 // Home link functionality
    const homeLink = document.getElementById('home-link');
    if (homeLink) {
        homeLink.addEventListener('click', () => {
            console.log('Home link clicked');
            showSection('welcome');
        });
    }

    // Initial setup on DOMContentLoaded
    showSection('welcome');
});
