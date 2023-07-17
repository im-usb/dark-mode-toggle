function themeToggle() {
    const body = document.body;
    const container = document.getElementById('container');
    const modeToggle = document.querySelector('#mode');
    
    // Add click event listener to the light mode button
    modeToggle.addEventListener('input', function() {
        const value = modeToggle.value;
        if (value==0){
            body.classList.remove('dark-mode');
            modeToggle.classList.remove('dark-mode');
        } else if (value==1) {
            body.classList.add('dark-mode');
            modeToggle.classList.add('dark-mode');
        }
    });
}


themeToggle();