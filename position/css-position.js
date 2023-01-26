const showCss = () => {
  const changeTag = document.getElementsByClassName("change")[0];
  const selectElement = document.getElementById("orange");
  console.log(typeof selectElement.style.bottom);
  changeTag.innerHTML = `<pre>
  #orange{
      position : ${selectElement.style.position};
     ${
       selectElement.style.top !== ""
         ? "top : " + selectElement.style.top + ";"
         : ""
     }
     ${
       selectElement.style.left !== ""
         ? "left : " + selectElement.style.left + ";"
         : ""
     }
    
     ${
       selectElement.style.right !== ""
         ? "right : " + selectElement.style.right + ";"
         : ""
     }
     ${
       selectElement.style.bottom !== ""
         ? "bottom : " + selectElement.style.bottom + ";"
         : ""
     }
  }
  </pre>`;
};
////////////////////////////////
const selectElement = document.getElementById("orange");
selectElement.style.position = "relative";
/////////////////////////////////
const changeTag = document.getElementsByClassName("change")[0];

changeTag.innerHTML = `<pre>
#orange{
    position : ${selectElement.style.position};
   ${
     selectElement.style.top !== ""
       ? "top : " + selectElement.style.top + ";"
       : ""
   }
   ${
     selectElement.style.left !== ""
       ? "left : " + selectElement.style.left + ";"
       : ""
   }
  
   ${
     selectElement.style.right !== ""
       ? "right : " + selectElement.style.right + ";"
       : ""
   }
   ${
     selectElement.style.bottom !== ""
       ? "bottom : " + selectElement.style.bottom + ";"
       : ""
   }
}
</pre>`;
////////////////////////
const positionHandler = (pos, selectElement, userChoiceValue) => {
  const selectElementTag = document.getElementById(selectElement);
  selectElementTag.style[pos] = userChoiceValue + "px";
  showCss();
};

const topInput = document.getElementById("top");
const rightInput = document.getElementById("right");
const leftInput = document.getElementById("left");
const bottomInput = document.getElementById("bottom");

let ISTOP = false;
let ISBOTTOM = false;
topInput.addEventListener("change", () => {
  ISTOP = true;
  if (ISTOP && ISBOTTOM) {
    alert("You should not insert both top & bottom");
    window.location.reload();
  }
  positionHandler("top", "orange", topInput.value);
});

bottomInput.addEventListener("change", () => {
  ISBOTTOM = true;
  if (ISTOP && ISBOTTOM) {
    alert("You should not insert both top & bottom");
    window.location.reload();
  }
  positionHandler("bottom", "orange", bottomInput.value);
});

let ISLEFT = false;
let ISRIGHT = false;
leftInput.addEventListener("change", () => {
  ISLEFT = true;
  if (ISLEFT && ISRIGHT) {
    alert("You should not insert both left & right");
    window.location.reload();
  }

  positionHandler("left", "orange", leftInput.value);
});

rightInput.addEventListener("change", () => {
  ISRIGHT = true;
  if (ISLEFT && ISRIGHT) {
    alert("You should not insert both left & right");
    window.location.reload();
  }

  positionHandler("right", "orange", rightInput.value);
});

/////////////////////////////
