const input = document.getElementById("input");

input.addEventListener("input", () => {
   const searchValue = input.value;
   const listaItems = document.querySelectorAll("#ul li");

   listaItems.forEach((item) => {
      let text = item.textContent;
      if (text.toLowerCase().includes(searchValue.toLowerCase())) {
         item.style.display = "";
      } else {
         item.style.display = "none";
      }
   });
});


// demo2 
const input2 = document.getElementById("input2");

input2.addEventListener("input", () => {
   const search = input2.value.toLowerCase();
   const items = document.querySelectorAll("#ul2 li");

   items.forEach((item) => {
      let text = item.textContent.toLowerCase();
      if (text.includes(search)) {
         item.style.display = "block";
      } else {
         item.style.display = "none";
      }

      if (search === "") {
         item.style.display = ("none");
      }
   });
});