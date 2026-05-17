let _deleteId = null;

function openModal(id, nome) {
  _deleteId = id;
  document.getElementById('modalMsg').textContent = `Você está prestes a remover "${nome}". Essa ação não pode ser desfeita.`;

  const confirmBtn = document.getElementById('modalConfirm');
  confirmBtn.onclick = () => {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = `/alunos/${_deleteId}/deletar`;
    document.body.appendChild(form);
    form.submit();
  };

  document.getElementById('modalOverlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  _deleteId = null;
}

document.getElementById('modalOverlay').addEventListener('click', (e) => {
  if (e.target.id === 'modalOverlay') closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Menu mobile
const burger = document.getElementById('burger');
const navMobile = document.getElementById('navMobile');
if (burger && navMobile) {
  burger.addEventListener('click', () => navMobile.classList.toggle('open'));
}

// Contato
function submitContato(e) {
  e.preventDefault();
  const fb = document.getElementById('formFeedback');
  if (fb) {
    fb.textContent = '✓ Mensagem enviada com sucesso!';
    e.target.reset();
    setTimeout(() => { fb.textContent = ''; }, 4000);
  }
}
