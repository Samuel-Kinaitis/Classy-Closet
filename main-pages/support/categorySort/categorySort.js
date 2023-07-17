function categorySort(category){
    if (!document.URL.includes(catalogLink)){
      localStorage.setItem("catalogSettings", category);
      document.location.href = catalogLink;
    } else {
      catalogSettings = category;
    }
  document.getElementById("categoryHeader").innerHTML = catalogSettings;
  catalogBuilder();
  }