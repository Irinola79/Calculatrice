const buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
    
    });
});
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.value;
        switch (value) {
            case '=':
                
                screen.textContent = eval(screen.textContent);
                break;
            case 'C':
                
                screen.textContent = '';
                break;
            default:
            
                screen.textContent += value;
        }
    });
});
