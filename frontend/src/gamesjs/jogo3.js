// matriz (14x14)
const matrix = [
    ['A','T','E','N','C','A','O','M','Z','W','Q','E','T','Y'],
    ['B','C','A','E','N','A','Z','E','P','O','L','M','J','H'],
    ['H','C','X','A','D','O','V','T','N','M','Q','P','S','D'],
    ['F','O','C','A','D','O','G','O','J','K','L','A','X','C'],
    ['V','B','N','M','Q','W','E','D','T','Y','U','T','O','P'],
    ['L','E','I','T','U','R','A','O','X','C','V','I','N','M'],
    ['Q','W','E','R','T','Y','U','I','O','P','A','A','D','F'],
    ['G','H','J','K','L','E','S','T','U','D','O','Z','X','C'],
    ['D','F','B','C','A','E','A','V','B','N','M','Q','W','E'],
    ['R','T','Y','U','I','O','P','A','S','D','F','G','H','J'],
    ['C','U','L','T','U','R','A','C','I','E','N','C','I','A'],
    ['N','M','Q','W','E','R','T','Y','U','I','O','P','A','S'],
    ['R','E','S','P','E','I','T','O','D','F','G','H','J','K'],
    ['L','O','G','I','C','A','X','C','V','B','N','M','Q','W']
];

// posiç~çoes das palavras e posições reais para validar
const hiddenWords = {
    'ATENCAO':    [[0,0], [0,6]],
    'CIENCIA':    [[1,1], [1,7]],
    'METODO':     [[2,0], [2,5]],
    'FOCADO':     [[3,0], [3,5]],
    'LEITURA':    [[5,0], [5,6]],
    'ESTUDO':     [[7,5], [7,10]],
    'EMPATIA':    [[8,0], [8,6]],
    'CULTURA':    [[10,0], [10,6]],
    'RESPEITO':   [[12,0], [12,7]],
    'LOGICA':     [[13,0], [13,5]]
};

const gridElement = document.getElementById('grid');
const wordListElement = document.getElementById('word-list');

let selectedCells = [];
let isMouseDown = false;

// lista de palavras
const displayNames = {
    'ATENCAO': 'ATENÇÃO', 'CIENCIA': 'CIÊNCIA', 'METODO': 'MÉTODO', 
    'FOCADO': 'FOCADO', 'LEITURA': 'LEITURA', 'ESTUDO': 'ESTUDO', 
    'EMPATIA': 'EMPATIA', 'CULTURA': 'CULTURA', 'RESPEITO': 'RESPEITO', 
    'LOGICA': 'LÓGICA'
};

Object.keys(hiddenWords).forEach(word => {
    const li = document.createElement('li');
    li.textContent = displayNames[word];
    li.className = 'word-item';
    li.id = `word-${word}`;
    wordListElement.appendChild(li);
});

// tabela
matrix.forEach((row, rIdx) => {
    row.forEach((letter, cIdx) => {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.textContent = letter;
        cell.dataset.row = rIdx;
        cell.dataset.col = cIdx;

        // eventos para pc ---
        cell.addEventListener('mousedown', (e) => {
            isMouseDown = true;
            clearSelection();
            toggleSelect(cell);
        });

        cell.addEventListener('mouseenter', () => {
            if (isMouseDown) {
                toggleSelect(cell);
            }
        });

        gridElement.appendChild(cell);
    });
});

// finalização da seleção com o mouse
window.addEventListener('mouseup', () => {
    if (isMouseDown) {
        isMouseDown = false;
        checkSelectedWord();
    }
});


// para celular

// quando o usuário encosta o dedo nas palavras
gridElement.addEventListener('touchstart', (e) => {
    isMouseDown = true; 
    clearSelection();
    
    // descobre qual elemento foi tocado inicialmente
    const targetCell = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY);
    if (targetCell && targetCell.classList.contains('cell')) {
        toggleSelect(targetCell);
    }
});

// quando o usuário arrasta o dedo na tela
gridElement.addEventListener('touchmove', (e) => {
    if (!isMouseDown) return;

    e.preventDefault();

    // captura as coordenadas do ponto onde o dedo está passando
    const touchX = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;

    // detecta dinamicamente a célula abaixo do dedo
    const targetCell = document.elementFromPoint(touchX, touchY);

    if (targetCell && targetCell.classList.contains('cell')) {
        toggleSelect(targetCell);
    }
}, { passive: false }); // mecessário para permitir o e.preventDefault() funcionar no Chrome Mobile

// Quando o usuário levanta o dedo da tela
window.addEventListener('touchend', () => {
    if (isMouseDown) {
        isMouseDown = false;
        checkSelectedWord();
    }
});


// lógica do jogo

function toggleSelect(cell) {
    if (!cell.classList.contains('found') && !selectedCells.includes(cell)) {
        cell.classList.add('selected');
        selectedCells.push(cell);
    }
}

function clearSelection() {
    selectedCells.forEach(cell => cell.classList.remove('selected'));
    selectedCells = [];
}

function checkSelectedWord() {
    if (selectedCells.length === 0) return;

    const currentWord = selectedCells.map(cell => cell.textContent).join('');
    const reversedWord = currentWord.split('').reverse().join('');

    let foundWordKey = null;

    if (hiddenWords[currentWord]) {
        foundWordKey = currentWord;
    } else if (hiddenWords[reversedWord]) {
        foundWordKey = reversedWord;
    }

    if (foundWordKey) {
        selectedCells.forEach(cell => {
            cell.classList.remove('selected');
            cell.classList.add('found');
        });
        document.getElementById(`word-${foundWordKey}`).classList.add('found-word');
    } else {
        clearSelection();
    }
    selectedCells = [];
}