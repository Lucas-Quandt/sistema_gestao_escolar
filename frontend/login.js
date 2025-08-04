document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');
    const toastContainer = document.getElementById('toast-container');

    function showToast(message, type = 'error') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        if(toastContainer) toastContainer.appendChild(toast);
        setTimeout(() => toast.remove(), 5000);
    }

    if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        // Limpa interações de erro anteriores
        loginForm.classList.remove('form-shake');
        
        const email = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email, senha: password })
            });

            const data = await response.json();
            
            if (!data.success) { // Verifica a propriedade 'success'
                throw data; // Lança o objeto de erro para o catch
            }

            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('currentUser', JSON.stringify(data.user));
            window.location.href = 'index.html';

        } catch (error) {
            // Aqui a mágica acontece!
            showToast(error.message || 'Credenciais inválidas.');
            
            if (error.code === 'INVALID_CREDENTIALS') {
                // Adiciona a classe que faz o formulário tremer
                loginForm.classList.add('form-shake');
            }
        }
    });
}
});