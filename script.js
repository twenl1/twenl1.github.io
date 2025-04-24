
document.addEventListener('DOMContentLoaded', function() {
    const container = document.createElement('div');
    container.className = 'container mt-5';
    container.innerHTML = `
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-body">
                        <h3 class="card-title text-center mb-4">Форма обратной связи</h3>
                        <form id="feedbackForm">
                            <div class="mb-3">
                                <label for="name" class="form-label">Имя:</label>
                                <input type="text" class="form-control" id="name" placeholder="Введите ваше имя">
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email:</label>
                                <input type="email" class="form-control" id="email" placeholder="Введите ваш email">
                            </div>
                            <div class="mb-3">
                                <label for="comment" class="form-label">Комментарий:</label>
                                <textarea class="form-control" id="comment" rows="3" placeholder="Введите ваш комментарий"></textarea>
                            </div>
                            <div class="d-grid gap-2">
                                <button type="submit" class="btn btn-primary">Отправить</button>
                            </div>
                        </form>
                        <div id="errorMessage" class="alert alert-danger mt-3 d-none"></div>
                        <div id="greetingMessage" class="alert alert-success mt-3 d-none"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(container);
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    document.getElementById('feedbackForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const comment = document.getElementById('comment').value.trim();
        
        const errorMessage = document.getElementById('errorMessage');
        const greetingMessage = document.getElementById('greetingMessage');
        
        let errors = [];
        
        if (!name) errors.push('Поле "Имя" обязательно для заполнения');
        if (!email) {
            errors.push('Поле "Email" обязательно для заполнения');
        } else if (!isValidEmail(email)) {
            errors.push('Введите корректный email');
        }
        if (!comment) errors.push('Поле "Комментарий" обязательно для заполнения');
        
        if (errors.length > 0) {
            errorMessage.innerHTML = errors.join('<br>');
            errorMessage.classList.remove('d-none');
            greetingMessage.classList.add('d-none');
        } else {
            errorMessage.classList.add('d-none');
            greetingMessage.innerHTML = `
                <h4 class="alert-heading">Спасибо, ${name}!</h4>
                <p>Мы свяжемся с вами по адресу <b>${email}</b></p>
                <hr>
                <p class="mb-0">Ваш комментарий: "${comment}"</p>
            `;
            greetingMessage.classList.remove('d-none');
            this.reset();
        }
    });
});