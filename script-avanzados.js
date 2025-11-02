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

    // Glossary terms data for Advanced lessons (5-6)
    const glossaryTerms = [
        {
            keyword: "Asynchronous JavaScript",
            definition: "A style of programming that allows certain tasks to run independently of the main program flow.",
            hint: "About non-blocking operations",
            type: "Concept"
        },
        {
            keyword: "Promise",
            definition: "An object representing the eventual completion or failure of an asynchronous operation and its resulting value.",
            hint: "Represents async operation result",
            type: "Object/Concept"
        },
        {
            keyword: "async function",
            definition: "A function declared with the async keyword, which always returns a Promise. It allows for the use of the await keyword.",
            hint: "Function that returns a Promise",
            type: "Keyword/Function"
        },
        {
            keyword: "await operator",
            definition: "An operator that can only be used inside an async function to pause the execution of the function until a Promise settles and returns its result.",
            hint: "Used with async functions",
            type: "Operator"
        },
        {
            keyword: "Fetch API",
            definition: "A modern interface for making HTTP requests in web browsers, returning Promises.",
            hint: "For HTTP requests",
            type: "API"
        },
        {
            keyword: "Destructuring Assignment",
            definition: "A JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.",
            hint: "Unpacking values",
            type: "Syntax"
        },
        {
            keyword: "Spread Syntax (...)",
            definition: "An operator that expands an iterable (like an array or string) where one or more elements or arguments are expected.",
            hint: "Three dots operator",
            type: "Operator/Syntax"
        },
        {
            keyword: "Rest Parameters (...)",
            definition: "A syntax that allows a function to accept an indefinite number of arguments as an array.",
            hint: "For variable arguments",
            type: "Syntax"
        },
        {
            keyword: "Class (JavaScript)",
            definition: "A blueprint for creating objects. Classes encapsulate data with code to work on that data.",
            hint: "Object-oriented programming",
            type: "Syntax/Concept"
        },
        {
            keyword: "Inheritance (JavaScript)",
            definition: "A mechanism in object-oriented programming where one class can inherit properties and methods from another class.",
            hint: "Extending functionality",
            type: "Concept"
        },
        {
            keyword: "Module (ES Modules)",
            definition: "A reusable code unit that groups related functionalities in one file for better organization.",
            hint: "Code organization",
            type: "Concept"
        },
        {
            keyword: "import statement",
            definition: "Used to import bindings which are exported by another module.",
            hint: "Brings in external code",
            type: "Keyword"
        },
        {
            keyword: "export statement",
            definition: "Used to export functions, objects, or primitive values from a module so they can be used by other programs.",
            hint: "Makes code available externally",
            type: "Keyword"
        },
        {
            keyword: "Error Handling (JavaScript)",
            definition: "The process of anticipating, detecting, and resolving errors or exceptions that occur during program execution.",
            hint: "Dealing with exceptions",
            type: "Concept"
        },
        {
            keyword: "try...catch statement",
            definition: "A control structure that allows you to test a block of code for errors, and then handle those errors if they occur.",
            hint: "Error handling syntax",
            type: "Syntax"
        },
        {
            keyword: "Event Loop",
            definition: "A single-threaded loop that moves events from the callback queue to the call stack when it's empty.",
            hint: "JavaScript runtime mechanism",
            type: "Concept"
        },
        {
            keyword: "Web Workers",
            definition: "A JavaScript API that allows scripts to run in the background, separate from the main execution thread of a web page.",
            hint: "Background execution",
            type: "API"
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