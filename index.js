function shakeImage() {
    var unnamedImage = document.getElementById('unnamed-img');
    unnamedImage.classList.add('shaking');
  }
  
  
  function requestLuck() {
    var upperTattoos = [1,2,7,8,9,10,11,19,21,22,24,30,32,40,45,50,54,55,57,58,60,64,65,66,68,69,74,78,79,80,87,89,92,93,97,98,99,100];
    var middleTattoos = [3,5,12,13,16,18,20,23,26,27,28,29,31,33,34,35,36,37,39,41,42,43,44,46,48,51,52,53,56,61,62,63,67,71,72,73,75,76,77,81,82,83,84,85,86,88,90,91,94,95];
    var lowerTattoos = [4,6,14,15,17,25,38,47,49,59,70,96];
  
    var unnamedImage = document.getElementById('unnamed-img');
    unnamedImage.style.display = 'block';
    shakeImage();
    // Hiển thị hình ảnh "unnamed-img"
    unnamedImage.style.display = "inline-block";
    // Ẩn các hình ảnh khác
  
    // Lấy số ngẫu nhiên từ mảng tương ứng
    var randomTattoo;
    var tattooType;
  
    // Kiểm tra xăm thượng
    if (upperTattoos.length > 0) {
      randomTattoo = upperTattoos[Math.floor(Math.random() * upperTattoos.length)];
      tattooType = "Xăm thượng";
      // Xử lý cho xăm thượng
    }
  
    // Kiểm tra xăm trung
    else if (middleTattoos.length > 0) {
      randomTattoo = middleTattoos[Math.floor(Math.random() * middleTattoos.length)];
      tattooType = "Xăm Trung";
      // Xử lý cho xăm trung
    }
  
    // Kiểm tra xăm hạ
    else if (lowerTattoos.length > 0) {
      randomTattoo = lowerTattoos[Math.floor(Math.random() * lowerTattoos.length)];
      tattooType = "Xăm Hạ";
      // Xử lý cho xăm hạ
    }
  
    // Hiển thị thông báo thành công
    setTimeout(function() {
      unnamedImage.style.display = 'none';
      unnamedImage.classList.remove('shaking');
      alert("Xin xăm may mắn thành công!\nBạn được xăm: " + tattooType + " - " + randomTattoo);
    }, 3000);
  
  }
  
  
      function displaySelectedFoods() {
    clearTimeout(foodTimer); // Clear any existing timers
  
    // Remove all previously displayed food items
    var existingFood = document.querySelectorAll(".food-wrapper");
    existingFood.forEach(function (food) {
      food.remove();
      var foodId = food.getAttribute("foodId");
      var index = selectedFoods.indexOf(foodId);
      if (index !== -1) {
        selectedFoods.splice(index, 1);
      }
    });
  
    // Loop through the selected food items and display them
    selectedFoods.forEach(function (foodId) {
      placeFood(foodId);
    });
  
    // Set a timer to remove the food items from the display after 30 seconds
    foodTimer = setTimeout(function () {
      var foodToRemove = document.querySelectorAll(".food-wrapper");
      foodToRemove.forEach(function (food) {
        food.remove();
        var foodId = food.getAttribute("foodId");
        var index = selectedFoods.indexOf(foodId);
        if (index !== -1) {
          selectedFoods.splice(index, 1);
        }
      });
    }, 30000); // Set the display time to 30 seconds
  }
  
  function performAction() {
    lightIncense('incense-stick-1');
    sendPrayer();
    displaySelectedFoods(); // Display all selected food items
  
    // Set a timer to remove all food items after 30 seconds
    setTimeout(function () {
      var foodToRemove = document.querySelectorAll(".food-wrapper");
      foodToRemove.forEach(function (food) {
        food.remove();
        var foodId = food.getAttribute("foodId");
        var index = selectedFoods.indexOf(foodId);
        if (index !== -1) {
          selectedFoods.splice(index, 1);
        }
      });
    }, 30000);
  }
  
  
  
  function clearSelectedFoods() {
    // Xóa tất cả các món ăn đã hiển thị
    var foodToRemove = document.querySelectorAll(".food-wrapper");
    foodToRemove.forEach(function (food) {
      food.remove();
      var foodId = food.getAttribute("foodId");
      var index = selectedFoods.indexOf(foodId);
      if (index !== -1) {
        selectedFoods.splice(index, 1);
      }
    });
  }
  

  
  function placeFood(foodId) {
    var existingFood = document.querySelectorAll(".placed-food");
  
    // Check if the maximum of 3 food items is already placed
    if (existingFood.length >= 3) {
      // Check if this is the 4th food item
      if ((existingFood.length + 1) % 4 === 0) {
        // Do something when the 4th food item is placed
      }
    }
  
    // Code to place the food item on the altar
    var foodElement = document.createElement("img");
    var foodItemId = "food-" + Date.now(); // Generate a unique identifier
    foodElement.dataset.foodId = foodItemId;
    foodElement.src = foodId + ".png";
    foodElement.alt = "Đồ ăn";
    foodElement.classList.add("placed-food");
    foodElement.style.width = "70px";
    foodElement.style.height = "auto"; // Maintain aspect ratio
  
    var foodWrapper = document.createElement("div");
    foodWrapper.classList.add("food-wrapper");
    foodWrapper.appendChild(foodElement);
  
    // Find the first available food slot
    var foodSlots = document.querySelectorAll(".food-slot");
    var nextSlot = Array.from(foodSlots).find(slot => slot.childElementCount === 0);
    if (nextSlot) {
      nextSlot.appendChild(foodWrapper);
    } else {
      console.log("No available food slots.");
      return;
    }
  }
  
  
  function sendPrayer() {
    // Display all the selected food items from the array
    selectedFoods.forEach(function (foodId) {
      placeFood(foodId);
    });
  }
  
  
  
  
  
  
      
      function lightIncense(incenseId) {
    var incenseStick = document.getElementById(incenseId);
    incenseStick.src = "caunguyen2.png";
    animateSmoke(incenseStick);
    setTimeout(function() {
      extinguishIncense(incenseStick);
    }, 30000);
    var audio = document.getElementById("myAudio");
        audio.play();
  }
  
  
  
  function animateSmoke(incenseStick) {
    var smoke = document.createElement("div");
    smoke.className = "smoke";
    incenseStick.parentElement.appendChild(smoke);
  
    setTimeout(function() {
      smoke.remove();
    }, 3000);
  }
  
  function extinguishIncense(incenseStick) {
    incenseStick.src = "caunguyen.png";
  }
  function sendPrayer() {
    var prayerText = prompt("Nhập lời cầu nguyện của bạn:");
    //var userEmail = prompt("Nhập địa chỉ email của bạn:");
  
    if (prayerText && userEmail) {
      var templateParams = {
        to_email: userEmail,
        message: prayerText
      };
  
      emailjs.send('service_uibihku', 'template_23nfjeb', templateParams, 'IjpHyHNfwv3PSYOy4')
        .then(function(response) {
          console.log('Email sent:', response);
        }, function(error) {
          console.error('Error sending email:', error);
        });
    }
  }