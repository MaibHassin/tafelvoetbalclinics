// BACK TO TOP SCRIPT

var mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


//  SMOOTH SCROLL SCRIPT


// Select all links with hashes

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  // close navmenu when clicked
  $("a").click(function(){
    if(document.getElementById("nav-toggle").checked){
      document.getElementById("nav-toggle").checked = false;
    }
  });

  // close nav menu when clicked tap outside of navmenu
  document.getElementById('home').onclick = () => {
    if(document.getElementById("nav-toggle").checked){
      document.getElementById("nav-toggle").checked = false;
    }
  }


  // Copyright year
  var date = new Date();
  document.getElementById('copyright-year').innerHTML = date.getFullYear();


  // Typewriter text for over mij section article heading

  const TypeWriter = function(textElement, words, waitTime = 3000) {
    this.textElement = textElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.waitTime = parseInt(waitTime, 10);
    this.type();
    this.isDeleting = false;
  }

  TypeWriter.prototype.type = function() {
    // current index of word
    const current = this.wordIndex % this.words.length;
    // get full text of current word
    const fullTxt = this.words[current];

    // check if deleting
    if(this.isDeleting) {
      // remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // insert txt into element
    this.textElement.innerHTML = `<span class="txt">${this.txt}</span>`

    // initial type speed
    let typeSpeed = 100;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    // if word is complete 
    if(!this.isDeleting && this.txt === fullTxt) {
      //this will make a pause at end
      typeSpeed = this.waitTime;
      // set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      // pause before start typing
      typeSpeed = 1000;
    }

    setTimeout(() => this.type(), typeSpeed)
  }

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    const textElement = document.querySelector('.ik-ben-type');
    const words = JSON.parse(textElement.getAttribute('data-words'));
    const wait = textElement.getAttribute('data-wait');
    //init typewriter
    new TypeWriter(textElement, words, wait);
  }
  

  
  $(document).ready(()=> {
    // close cookies banner
    document.getElementById('cookies-accept-button').onclick = () => {
      document.getElementById('cookies-banner').style.transform = 'translateY(100px)';
    }

    // Beat the pro tooltip
    // open popup
    document.getElementById('btp-tooltip').onclick = () => {
      document.getElementById('btp-popup-container').style.transform = 'scale(1)';
    }

    //close popup
    document.getElementById('close-btp-popup').onclick = () => {
      document.getElementById('btp-popup-container').style.transform = 'scale(0)';
    }

    document.getElementById('btp-popup-container').onclick = () => {
      document.getElementById('btp-popup-container').style.transform = 'scale(0)'
    }

    // Checkbox checked to add new form element
    const buyOptionCheckbox = document.getElementById('buy-package-option');
    buyOptionCheckbox.onchange = () => {
      if(buyOptionCheckbox.checked) {
        document.getElementById('selected-package').value = 'kies-optie';
        document.getElementById('select-option').style.display = 'flex';
      } else {
        document.getElementById('select-option').style.display = 'none ';
      }
    }
  });


