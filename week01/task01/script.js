const funFacts = [
    "We decided to become coders to make websites more user frinedly.",
    "Glichtes are kinda our weakness as we stuggle to fix those a lot.",
    "We're still rookie coders.",
  ];
  
  function changeFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    document.getElementById("funFact").textContent = funFacts[randomIndex];
  }
  
