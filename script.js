

// script.js
function agendarEvento() {
  const eventTitle = encodeURIComponent('Nome do Evento');
  const eventLocation = encodeURIComponent('Local do Evento');
  const eventDetails = encodeURIComponent('Detalhes do Evento');
  const startDate = '2024-06-01T09:00:00';
  const endDate = '2024-06-01T10:00:00';

  const googleCalendarUrl = `https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ36060K4NjcT34a9FUtaP9gTdicCg92z12engUs5J3gc2yP50WlL27tWtIfdi-up_0wsauOJjuJ`;

  window.open(googleCalendarUrl, '_blank');
}



var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul');
var menuItems = document.querySelectorAll('.ul li a'); // Seleciona todos os itens do menu

// Adiciona o evento de clique ao ícone do menu
menuIcon.addEventListener('click', () => {
    if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo');
        document.querySelector('.menu-icon img').src = 'icons8-cardápio.png';
    } else {
        ul.classList.add('ativo');
        document.querySelector('.menu-icon img').src = 'fecha-menu.png';
    }
});

// Adiciona o evento de clique a cada item do menu
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        ul.classList.remove('ativo'); // Fecha o menu ao clicar em um item
        document.querySelector('.menu-icon img').src = 'icons8-cardápio.png'; // Restaura o ícone do menu
    });
});
























