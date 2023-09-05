console.log('Hello World');

// 點擊後自動滾動至新區域
const moreBtn = document.getElementById('moreBtn');
const targetSection = document.getElementById('(#introduction');

moreBtn.addEventListener('click', function(e) {
  e.preventDefault();
  const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
});