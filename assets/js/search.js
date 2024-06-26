// script.js

// Fonction pour exécuter la recherche
function performSearch() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase().trim();
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = '';

    if (searchInput === '') {
        // Si la recherche est vide, ne rien faire
        return;
    }

    // Filtrer les résultats en fonction de la correspondance avec les mots-clés
    const filteredResults = keywordLinks.filter(item =>
        item.keywords.some(keyword => keyword.includes(searchInput))
    ).sort((a, b) => {
        // Trier par priorité des premiers mots-clés trouvés
        const aIndex = a.keywords.findIndex(keyword => keyword.includes(searchInput));
        const bIndex = b.keywords.findIndex(keyword => keyword.includes(searchInput));
        return aIndex - bIndex;
    });

    if (filteredResults.length === 0) {
        modalBody.innerHTML = '<p>Aucun résultat trouvé.</p>';
    } else {
        filteredResults.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML = `
                <h3><a href="${item.url}">${item.title}</a></h3>
                <p>${item.description}</p>
            `;
            modalBody.appendChild(resultItem);
        });
    }

    // Afficher la modal
    $('#searchModal').modal('show');
}

// Écouter l'événement 'keydown' sur le champ de recherche
document.getElementById('searchInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});