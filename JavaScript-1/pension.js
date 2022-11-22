// function calc() {
    //   let age = document.getElementById("age").value;
    //   let gender = document.getElementById("gender").checked;
    //   if (age <= 60) {
    //     let pro;
    //     if (gender == true) {
    //       pro = "He";
    //     } else {
    //       pro = "She";
    //     }
    //     console.log(pro + " doesn't deserve pensions");
    //   } else {
    //     if (gender == true) {
    //         pro = "He";
    //       } else {
    //         pro = "She";
    //       }
    //     if (gender == true && age > 60) {
    //       console.log(pro + " deserves " + ((age - 60) * 1000) + "LE");
    //     }
    //     else if(gender == false && age > 60){
    //         console.log(pro + " deserves " +((age - 60) * 2000) + "LE");
    //     }
    //   }
    // }
    function calc() {
      let age = document.getElementById("age").value;
      let gender = document.getElementById("gender").checked;
      if (age <= 60) {
        //gender ? :means if gender==true then display HE.. otherwise display SHE 
        console.log((gender ? "He" : "She") + " doesn't deserve pensions");
      } else if (gender) {
        console.log("He deserves " + (age - 60) * 1000 + "LE");
      } else {
        console.log("She deserves " + (age - 60) * 2000 + "LE");
      }
    }