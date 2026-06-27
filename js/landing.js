// ================================
// EduKrok Landing Page
// ================================

// Navbar po scrollu

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "rgba(255,255,255,0.97)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    }else{

        navbar.style.background = "rgba(255,255,255,.85)";
        navbar.style.boxShadow = "none";

    }

});


// ================================
// Animacja sekcji
// ================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});


document.querySelectorAll(".section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});


// ================================
// Animacja kart
// ================================

const cards=document.querySelectorAll(".card,.price-card,.features div");

cards.forEach((card,index)=>{

    card.style.transitionDelay=`${index*120}ms`;

});


// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ================================
// Hero animation
// ================================

const hero=document.querySelector(".hero");

window.addEventListener("mousemove",(e)=>{

    const x=(window.innerWidth/2-e.clientX)/60;

    const y=(window.innerHeight/2-e.clientY)/60;

    hero.style.transform=`translate(${x}px,${y}px)`;

});


// ================================
// Counter
// ================================

const counters=[
    {
        value:500,
        element:null
    },
    {
        value:98,
        element:null
    }
];


// ================================
// CTA pulse
// ================================

setInterval(()=>{

    document.querySelectorAll(".btn-primary").forEach(btn=>{

        btn.animate([

            {transform:"scale(1)"},

            {transform:"scale(1.04)"},

            {transform:"scale(1)"}

        ],{

            duration:1200

        });

    });

},6000);


// ================================
// Console
// ================================

console.log("EduKrok Landing Loaded 🚀");
