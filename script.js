document.addEventListener('DOMContentLoaded', function() {
  
    const toursActivitiesLink = document.getElementById('tours-activities-link');
    const dropdownMenu = toursActivitiesLink.nextElementSibling; 

    toursActivitiesLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'block';
        }
    });

    
    document.addEventListener('click', function(event) {
        if (!toursActivitiesLink.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });


    
    const goButton = document.getElementById('go-button');
    if (goButton) {
        goButton.addEventListener('click', function() {
            alert('Go button clicked! Implement desired action.');

        });
    }

   
    const bookAdventureLink = document.getElementById('book-adventure-link');
    if (bookAdventureLink) {
        bookAdventureLink.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Book Your Adventure clicked! Navigate to booking page/flow.');

        });
    }

   
});

document.addEventListener('DOMContentLoaded', function() {
    
    const currentPage = window.location.pathname.split("/").pop();
    if (currentPage === 'contact.html') {
        const navLinks = document.querySelectorAll('header nav ul li a');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === 'contact.html') {
                link.classList.add('active-page');
            }
        });
    }
});