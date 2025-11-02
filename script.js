document.addEventListener('DOMContentLoaded', function () {
    // Menú móvil (igual que antes)
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuOverlay = document.createElement('div');
    menuOverlay.className = 'menu-overlay';
    document.body.appendChild(menuOverlay);
    
        // Refresh al hacer clic en el área del logo
    document.getElementById('logoArea').addEventListener('click', function(e) {
        // Evita que el evento se propague si se hace clic en elementos hijos
        e.stopPropagation();
        // Recarga la página
        window.location.reload();
    });

    function toggleMenu() {
        hamburgerMenu.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    }

    hamburgerMenu.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) {
                toggleMenu();
            }
        });
    });

    // Glosario
    const glossaryTerms = [
        {
            keyword: "Programming Paradigm",
            definition: "A fundamental style or way of building the structure and elements of computer programs.",
            hint: "Starts with 'P'",
            type: "Concept"
        },
        {
            keyword: "JavaScript (JS)",
            definition: "A lightweight, interpreted programming language that allows for dynamic interactivity and functionality on web pages.",
            hint: "The language you're learning",
            type: "Language"
        },
        {
            keyword: "Syntax (JavaScript)",
            definition: "The set of rules that define how instructions in JavaScript must be written for the interpreter to understand them.",
            hint: "Grammar rules for code",
            type: "Concept"
        },
        {
            keyword: "Browser Console",
            definition: "A development tool integrated into web browsers that allows for executing JavaScript code, debugging, and viewing error or output messages.",
            hint: "Developer tool in browsers",
            type: "Tool"
        },
        {
            keyword: "Interaction (in the browser)",
            definition: "JavaScript's ability to manipulate web page elements (HTML and CSS) in response to user actions or events.",
            hint: "User engagement with page",
            type: "Concept"
        },
        {
            keyword: "Comment (JavaScript)",
            definition: "Text in the code that the JavaScript interpreter ignores, used to explain or document the code. It can be single-line (//) or multi-line (/* */).",
            hint: "Notes in the code",
            type: "Syntax"
        },
        {
            keyword: "Data Type",
            definition: "A classification that specifies the type of value a variable can hold, determining the operations that can be performed with it.",
            hint: "Kind of data",
            type: "Concept"
        },
        {
            keyword: "Primitive Type",
            definition: "Basic categories of data in JavaScript that represent simple values (not objects). These include Number, String, Boolean, null, and undefined.",
            hint: "Basic value types",
            type: "Type"
        },
        {
            keyword: "Number (Data Type)",
            definition: "A primitive data type in JavaScript that represents numerical values, both integers and decimals.",
            hint: "Numeric values",
            type: "Primitive"
        },
        {
            keyword: "String (Data Type)",
            definition: "A primitive data type in JavaScript that represents sequences of characters, used for text. They are enclosed in quotes.",
            hint: "Text data",
            type: "Primitive"
        },
        {
            keyword: "Boolean (Data Type)",
            definition: "A primitive data type in JavaScript that represents a logical value: true or false.",
            hint: "Logical value",
            type: "Primitive"
        },
        {
            keyword: "null (Data Type)",
            definition: "A primitive data type that represents the intentional absence of any object value or a null object.",
            hint: "Intentional absence",
            type: "Primitive"
        },
        {
            keyword: "undefined (Data Type)",
            definition: "A primitive data type that indicates a variable has been declared but has not yet been assigned a value.",
            hint: "No value assigned",
            type: "Primitive"
        },
        {
            keyword: "Variable",
            definition: "A named container used to store a value in memory. Its value can change during program execution.",
            hint: "Value container",
            type: "Concept"
        },
        {
            keyword: "var (Variable Declaration)",
            definition: "An older keyword for declaring variables in JavaScript, with function scope.",
            hint: "Old variable declaration",
            type: "Keyword"
        },
        {
            keyword: "let (Variable Declaration)",
            definition: "A keyword for declaring block-scoped variables, introduced in ES6. Allows its value to be reassigned.",
            hint: "Modern variable declaration",
            type: "Keyword"
        },
        {
            keyword: "const (Variable Declaration)",
            definition: "A keyword for declaring block-scoped constants, introduced in ES6. Its value cannot be reassigned after initialization.",
            hint: "Constant declaration",
            type: "Keyword"
        }
    ];

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
                    <div class="term-type">${term.type}</div>
                    <h3 class="term-title">Term:</h3>
                    <p class="term-keyword">${term.keyword}</p>
                </div>
            </div>
        `;

        card.addEventListener('click', function () {
            this.classList.toggle('flipped');
        });

        cardsContainer.appendChild(card);
    });

    // Búsqueda
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
                card.style.display = (frontText.includes(searchTerm) || backText.includes(searchTerm)) ? 'block' : 'none';
                if (card.style.display === 'block') hasResults = true;
            });

            if (!hasResults && searchTerm !== '') {
                alert('No terms found matching your search');
            }
        }

        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keyup', e => {
            if (e.key === 'Enter') performSearch();
        });
    }
});
