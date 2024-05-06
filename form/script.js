first_name.onblur = function() {
    if (first_name.value ==='') {
      first_name.classList.add('invalid');
        error_name.innerHTML = "Пожалуйста, введите правильное имя";
        }
      };
      
first_name.onfocus = function() {
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        error_name.innerHTML = "";
        }
      };

surname.onblur = function() {
    if (surname.value ==='') {
        surname.classList.add('invalid');
        error_surname.innerHTML = "Пожалуйста, введите правильную фамилию";
        }
      };
      
surname.onfocus = function() {
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        error_surname.innerHTML = "";
        }
      };

phone.onblur = function() {
    if (phone.value ==='') {
      phone.classList.add('invalid');
        error_phone.innerHTML = "Пожалуйста, введите правильный номер телефона";
        }
      };
      
phone.onfocus = function() {
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        error_phone.innerHTML = "";
        }
      };

function handleFormSubmit(event) {
  if (phone.value ==='' || first_name.value ==='' || surname.value ==='') {
      error_submit.innerHTML = "Обязательные поля не заполнены!";
      
      }
  event.preventDefault()
  console.log('Отправка!')
}

const applicantForm = document.getElementById('form-example')
applicantForm.addEventListener('submit', handleFormSubmit)