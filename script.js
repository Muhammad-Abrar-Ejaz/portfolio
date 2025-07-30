// script.js - Modern Animations for Portfolio

// ===== PROFESSIONAL ANIMATIONS & EFFECTS =====

// 1. Scroll Animation for Sections
function handleScrollAnimations() {
  const sections = document.querySelectorAll('.section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    observer.observe(section);
  });
}

// 2. Cursor Trail Effect - REMOVED
// function createCursorTrail() {
//   let trailElements = [];
//   
//   document.addEventListener('mousemove', (e) => {
//     const trail = document.createElement('div');
//     trail.className = 'cursor-trail';
//     trail.style.left = e.pageX + 'px';
//     trail.style.top = e.pageY + 'px';
//     document.body.appendChild(trail);
//     
//     trailElements.push(trail);
//     
//     // Remove trail elements after animation
//     setTimeout(() => {
//       if (trail.parentNode) {
//         trail.parentNode.removeChild(trail);
//       }
//       trailElements = trailElements.filter(el => el !== trail);
//     }, 1000);
//     
//     // Limit number of trail elements
//     if (trailElements.length > 10) {
//       const oldTrail = trailElements.shift();
//       if (oldTrail && oldTrail.parentNode) {
//         oldTrail.parentNode.removeChild(oldTrail);
//       }
//     }
//   });
// }

// 3. Skill Bars Animation - Updated for new dynamic skills
function animateSkillBars() {
  const skillProgressBars = document.querySelectorAll('.skill-progress');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetWidth = entry.target.getAttribute('data-width');
        entry.target.style.setProperty('--target-width', targetWidth + '%');
        entry.target.classList.add('animate');
        
        // Remove animation class after animation completes
        setTimeout(() => {
          entry.target.classList.remove('animate');
          entry.target.style.width = targetWidth + '%';
        }, 1500);
      }
    });
  }, { threshold: 0.3 });

  skillProgressBars.forEach(bar => {
    observer.observe(bar);
  });
}

// 3.1 Floating Skills Cards Animation
function animateFloatingSkills() {
  const floatingCards = document.querySelectorAll('.floating-skill-card');
  
  floatingCards.forEach((card, index) => {
    card.addEventListener('mouseenter', function() {
      this.style.animationPlayState = 'paused';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.animationPlayState = 'running';
    });
    
    // Add click effect
    card.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    });
  });
}

// 3.2 Education Progress Bars Animation
function animateEducationProgress() {
  const progressBars = document.querySelectorAll('.progress-fill');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetProgress = entry.target.getAttribute('data-progress');
        entry.target.style.width = targetProgress + '%';
      }
    });
  }, { threshold: 0.5 });

  progressBars.forEach(bar => {
    observer.observe(bar);
  });
}

// 3.3 Education Timeline Animation
function animateEducationTimeline() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'slideInLeft 0.8s ease forwards';
      }
    });
  }, { threshold: 0.3 });

  timelineItems.forEach(item => {
    observer.observe(item);
  });
}

// 4. Enhanced Button Effects
function enhanceButtons() {
  const buttons = document.querySelectorAll('.hero-btn, .contact-btn-pro');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// 5. Parallax Effect for Hero Section
function initParallax() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });
}

// 6. Enhanced Contact Form
function enhanceContactForm() {
  const inputs = document.querySelectorAll('.contact-form-pro input, .contact-form-pro textarea');
  
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.style.transform = 'scale(1)';
    });
  });
}

// 7. Smooth Scrolling for Navigation
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// 8. Enhanced Social Icons
function enhanceSocialIcons() {
  const socialIcons = document.querySelectorAll('.social-icons a');
  
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    icon.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) rotate(0deg)';
    });
  });
}

// 9. Project Cards Enhancement
function enhanceProjectCards() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
      this.style.boxShadow = '0 20px 40px rgba(230, 57, 70, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 2px 12px rgba(0,0,0,0.12)';
    });
  });
}

// 11. Skills Section Enhancement - Updated for new dynamic skills
function enhanceSkillsSection() {
  const languageItems = document.querySelectorAll('.language-item');
  
  languageItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px) scale(1.01)';
      this.style.boxShadow = '0 10px 20px rgba(230, 57, 70, 0.1)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    });
  });
}

// 3.4 Language Skill Bars Animation
function animateLanguageSkills() {
  const languageSkillBars = document.querySelectorAll('.skill-fill, .chart-fill');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetWidth = entry.target.getAttribute('data-width');
        entry.target.style.width = targetWidth + '%';
      }
    });
  }, { threshold: 0.5 });

  languageSkillBars.forEach(bar => {
    observer.observe(bar);
  });
}

// 3.5 Language Cards Animation
function animateLanguageCards() {
  const languageCards = document.querySelectorAll('.language-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
      }
    });
  }, { threshold: 0.3 });

  languageCards.forEach(card => {
    observer.observe(card);
  });
}

// 3.7 Contact Form Animations
function animateContactForm() {
  const contactCards = document.querySelectorAll('.contact-form-card, .contact-info-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.3 });
  
  contactCards.forEach(card => {
    observer.observe(card);
  });
}

// 3.8 Contact Methods Animation
function animateContactMethods() {
  const contactMethods = document.querySelectorAll('.contact-method');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }, index * 100);
      }
    });
  }, { threshold: 0.5 });
  
  contactMethods.forEach(method => {
    method.style.opacity = '0';
    method.style.transform = 'translateX(-20px)';
    method.style.transition = 'all 0.5s ease';
    observer.observe(method);
  });
}

// 3.9 Contact Stats Animation
function animateContactStats() {
  const contactStats = document.querySelectorAll('.contact-stats .stat-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 150);
      }
    });
  }, { threshold: 0.3 });
  
  contactStats.forEach(stat => {
    observer.observe(stat);
  });
}

// 3.10 Contact CTA Animation
function animateContactCTA() {
  const contactCTA = document.querySelector('.contact-cta');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.3 });
  
  if (contactCTA) {
    observer.observe(contactCTA);
  }
}

// 3.11 Contact Form Input Animations
function enhanceContactForm() {
  const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
  
  formInputs.forEach(input => {
    // Add focus animation
    input.addEventListener('focus', function() {
      this.parentElement.style.transform = 'scale(1.02)';
      this.parentElement.style.transition = 'transform 0.3s ease';
    });
    
    // Remove focus animation
    input.addEventListener('blur', function() {
      this.parentElement.style.transform = 'scale(1)';
    });
    
    // Add typing animation
    input.addEventListener('input', function() {
      if (this.value.length > 0) {
        this.style.borderColor = 'rgba(230, 57, 70, 0.6)';
      } else {
        this.style.borderColor = 'rgba(230, 57, 70, 0.2)';
      }
    });
  });
}

// 3.12 Contact Method Hover Effects
function enhanceContactMethods() {
  const contactMethods = document.querySelectorAll('.contact-method');
  
  contactMethods.forEach(method => {
    method.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(10px) scale(1.02)';
      this.style.boxShadow = '0 8px 25px rgba(230, 57, 70, 0.2)';
    });
    
    method.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0) scale(1)';
      this.style.boxShadow = 'none';
    });
  });
}

// 3.13 Contact CTA Button Animations
function enhanceContactCTA() {
  const ctaButtons = document.querySelectorAll('.cta-btn');
  
  ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
    
    // Add click animation
    button.addEventListener('click', function() {
      this.style.transform = 'translateY(-2px) scale(0.98)';
      setTimeout(() => {
        this.style.transform = 'translateY(-5px) scale(1.05)';
      }, 150);
    });
  });
}

// 10. Initialize All Animations
function initAllAnimations() {
  handleScrollAnimations();
  // createCursorTrail(); // REMOVED
  animateSkillBars();
  animateFloatingSkills();
  animateEducationProgress();
  animateEducationTimeline();
  animateLanguageSkills();
  animateLanguageCards();
  animateContactForm();
  animateContactMethods();
  animateContactStats();
  animateContactCTA();
  enhanceContactForm();
  enhanceContactMethods();
  enhanceContactCTA();
  enhanceButtons();
  initParallax();
  initSmoothScrolling();
  enhanceSocialIcons();
  enhanceProjectCards();
  enhanceSkillsSection();
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initAllAnimations();
  
  // Add loading animation to profile photo
  const profilePhoto = document.querySelector('.hero-profile-photo');
  if (profilePhoto) {
    profilePhoto.style.animation = 'imageLoad 0.8s ease-out, profileFloat 4.5s ease-in-out infinite 0.8s';
  }

  // Hamburger menu toggle for mobile navbar
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    // Close menu when a link is clicked (on mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 700) {
          navToggle.classList.remove('active');
          navLinks.classList.remove('active');
        }
      });
    });
  }
});

// Enhanced Back to Top Button
const backToTopBtn = document.getElementById('backToTopBtn');
if (backToTopBtn) {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });
  
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  });
}

// Enhanced Success Popup
const contactForm = document.querySelector('.contact-form-pro');
const successPopup = document.getElementById('successPopup');

if (contactForm && successPopup) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show success popup with enhanced animation
    successPopup.classList.add('show');
    contactForm.reset();
    
    setTimeout(() => {
      successPopup.classList.remove('show');
    }, 3000);
  });
} 