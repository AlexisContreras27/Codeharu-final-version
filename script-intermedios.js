document.addEventListener('DOMContentLoaded', function() {
    // Menu functionality (same as before)
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuOverlay = document.createElement('div');

    // Refresh al hacer clic en el área del logo
    document.getElementById('logoArea').addEventListener('click', function(e) {
        // Evita que el evento se propague si se hace clic en elementos hijos
        e.stopPropagation();
        // Recarga la página
        window.location.reload();
    });
    
    menuOverlay.className = 'menu-overlay';
    document.body.appendChild(menuOverlay);
    
    function toggleMenu() {
        hamburgerMenu.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        
        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    hamburgerMenu.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                toggleMenu();
            }
        });
    });

    // Glossary terms data for Intermediate lessons (3-4)
    const glossaryTerms = [
        {
            keyword: "Array",
            definition: "An ordered collection of values, stored in a single variable.",
            hint: "Starts with 'A'",
            type: "Data Structure"
        },
        {
            keyword: "Object",
            definition: "A collection of key-value pairs, where keys are strings (or Symbols) and values can be any data type.",
            hint: "Starts with 'O'",
            type: "Data Structure"
        },
        {
            keyword: "Key (Object)",
            definition: "The unique identifier for a property within an object.",
            hint: "What you use to access object properties",
            type: "Concept"
        },
        {
            keyword: "Value (Object)",
            definition: "The data associated with a specific key in an object.",
            hint: "What you get when you access an object property",
            type: "Concept"
        },
        {
            keyword: "push() method",
            definition: "An array method that adds one or more elements to the end of an array and returns the new length of the array.",
            hint: "Adds to the end of an array",
            type: "Array Method"
        },
        {
            keyword: "pop() method",
            definition: "An array method that removes the last element from an array and returns that element.",
            hint: "Removes from the end of an array",
            type: "Array Method"
        },
        {
            keyword: "map() method",
            definition: "An array method that creates a new array populated with the results of calling a provided function on every element in the calling array.",
            hint: "Transforms array elements",
            type: "Array Method"
        },
        {
            keyword: "filter() method",
            definition: "An array method that creates a new array with all elements that pass the test implemented by the provided function.",
            hint: "Selects array elements based on condition",
            type: "Array Method"
        },
        {
            keyword: "First-Class Function",
            definition: "The idea that functions in JavaScript are like variables: they can be passed, returned, and assigned.",
            hint: "About how functions are treated",
            type: "Concept"
        },
        {
            keyword: "Callback Function",
            definition: "A function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of routine or action.",
            hint: "Function passed as argument",
            type: "Concept"
        },
        {
            keyword: "Scope",
            definition: "The current context of execution in which values and expressions are 'visible' or can be referenced.",
            hint: "About variable visibility",
            type: "Concept"
        },
        {
            keyword: "Global Scope",
            definition: "The outermost scope where variables are accessible from anywhere in the code.",
            hint: "Most accessible scope",
            type: "Concept"
        },
        {
            keyword: "Local Scope",
            definition: "A scope created by functions, where variables declared inside are only accessible within that function.",
            hint: "Function-level scope",
            type: "Concept"
        },
        {
            keyword: "Block Scope",
            definition: "A scope defined by curly braces where variables exist only inside that block.",
            hint: "Curly brace scope",
            type: "Concept"
        },
        {
            keyword: "Closure",
            definition: "The combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).",
            hint: "Function with its environment",
            type: "Concept"
        }
    ];

    // Render cards
    const cardsContainer = document.getElementById('cards-container');
    
    glossaryTerms.forEach(term => {
        const card = document.createElement('div');
        card.className = 'flip-card';
        
        card.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <p class="term-definition">${term.definition}</p>
                    <p class="term-hint">${term.hint}</p>
                </div>
                <div class="flip-card-back">
                    <span class="term-type">${term.type}</span>
                    <h3 class="term-title">Term:</h3>
                    <p class="term-keyword">${term.keyword}</p>
                </div>
            </div>
        `;
        
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
        
        cardsContainer.appendChild(card);
    });

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    
    if (searchInput && searchButton) {
        function performSearch() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            const cards = document.querySelectorAll('.flip-card');
            
            let hasResults = false;
            
            cards.forEach(card => {
                const frontText = card.querySelector('.flip-card-front').textContent.toLowerCase();
                const backText = card.querySelector('.flip-card-back').textContent.toLowerCase();
                
                if (frontText.includes(searchTerm) || backText.includes(searchTerm)) {
                    card.style.display = 'block';
                    hasResults = true;
                } else {
                    card.style.display = 'none';
                }
            });
            
            if (!hasResults && searchTerm !== '') {
                alert('No terms found matching your search');
            }
        }
        
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});