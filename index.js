const projects = [
    "001_ExpandingCards",
    "002_ProgressSteps",
    "003_RotatingNavigationMenu",
    "004_HiddenSearchWidget",
    "005_BlurryLoading",
    "006_ScrollAnimation",
    "007_SplitLandingPage",
    "008_FormWaveAnimation",
    "009_SoundBoard",
    "010_FetchRandomDadJoke",
    "100_FontDraw",
    "101_ReactiveNav"
];

const penList = document.getElementById("penList");

projects.forEach(project => {
    let pen = document.createElement("li");
    pen.className = "pen";
    let frameElement = document.createElement("iframe");
    frameElement.src = project + "/index.html";
    let penBottom = document.createElement("div");
    penBottom.className = "penBottom";
    let title = document.createElement("a");
    title.className = "title";
    title.href = project + "/index.html";
    title.innerText = project;
    
    penBottom.appendChild(title);
    pen.appendChild(frameElement);
    pen.appendChild(penBottom);
    penList.appendChild(pen);
})
