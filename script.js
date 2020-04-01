const dropdown = (numberOfDropdowns) => {
  const dropdown = {};

  dropdown.setup = (numberOfDropdowns) => {
    for (let i=1;i<=numberOfDropdowns;i++) {
      dropdownActivator = document.querySelector(".nav" + i + "-container");
      dropdownActivator.addEventListener( "mouseover", function(){ dropdown.dropdown(i) }, false );
      dropdownActivator.addEventListener( "mouseout", function(){ dropdown.collapse(i) }, false );
    };
  };

  dropdown.dropdown = (reference) => {
    dropdownList = document.querySelector(".nav" + reference);
    dropdownList.classList.add("visible");
  };

  dropdown.collapse = (reference) => {
    collapseList = document.querySelector(".nav" + reference);
    collapseList.classList.remove("visible");
  };

  dropdown.setup(numberOfDropdowns);
  return dropdown;
};

dropdown(3);
