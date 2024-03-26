document.addEventListener('DOMContentLoaded', function() {
    var containers = document.querySelectorAll('.container');
    
    function isVisible(element) {
      var elementTop = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
      return elementTop - windowHeight <= 0;
    }
    
    function handleScroll() {
      containers.forEach(function(container) {
        if (isVisible(container) && !container.classList.contains('active')) {
          container.classList.add('active');
        }
      });
    }
    
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
  });
  