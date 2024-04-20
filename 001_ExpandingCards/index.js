window.onload = function(){
    const images = ["photo-1595433502559-d8f05e6a1041.png",
                            "photo-1603048675767-6e79ff5b8fc1.png",
                            "photo-1606059100151-b09b22709477.png",
                            "photo-1606838830438-5f380a664a4e.png",
                            "photo-1610212570473-6015f631ae96.png"
    ];
    const panels = document.querySelectorAll(".panel");
    
    init();
    
    function init() {
        panels.forEach((panel, index) => {
            panel.style.backgroundImage = `url('./images/${images[index]}')`;
            let h3 = document.createElement("h3");
            h3.innerText = "Explore the world";
            panel.appendChild(h3);
        });
    }
    
    panels.forEach((panel) => {
        panel.addEventListener("click", function() {
            removeActiveClasses();
            panel.classList.add("active");
        })
    })
    
    const removeActiveClasses = () => {
        panels.forEach((panel) => {
            panel.classList.remove("active");
        })
    }
}