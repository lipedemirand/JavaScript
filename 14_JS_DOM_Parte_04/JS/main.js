// Método querySelector
const btn = document.querySelector('.btn');
btn.style.background = 'red';

// Método addEventListener
myForm.addEventListener('submit', onsubmit);

// Função onSubmit
function onSubmit(e) 
    e.preventDefault();
    // console.log(nameInput.value);
    if (nameInput.value === '' || emailInput.value === '') {
        // alert('Por favor, preencha os dados.');
        msg.classList.add('error');
        msg.innerHTML = 'Por favor, preencha os dados.';
        setTimeout(() => msg.remove(), 3000);
        } else {}
        // console.log('sucess');
        const li = document.createElement('li');
        li.appendChild(
            document.createTextNode(
                `${nameInput.value} : ${emailInput.value} : ${horario.value}`
            )
        );
        userList.appendChild(li);
        // Limpa o formulário
        nameInput.value = '';
        emailInput.value = '';
        horario.getElementsByTagName('option')[0].selected = 'selected';
        nameInput.focus(); //Coloca o foco no elemento

    // validando e-mail
    emailInput.addEventListener('change', (e) => {
        let padrao = new RedExp(/.*@.*\..*/i);
        if (!padrao.test(emailInput.value)) {
            // alert('Por favor, inserir um e-mail válido.');
            msg_email.classList.add('error');
            msg_email.innerHTML = 'Por favor, insira um e-mail váido.';
            setTimeout(() => msg.remove(), 3000);
        }
    });