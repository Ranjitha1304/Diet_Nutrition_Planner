const nutrientData = [
    {
      desc: "Most fruits are low in fat, sodium and calories. Fruits do not have cholesterol"
    },
    {
      desc: "Fruits have many essential nutrients that many people don't get enough of it. Some examples include potassium, fiber and folate."
    },
    {
      desc: "Diet rich in potassium may help maintain healthy blood pressure."
    },
    {
      desc: "Dietary fiber from fruits, as part of an overall healthy diet, helps reduce blood cholesterol level."
    },
    {
      desc: "Vitamin C6 is important for the growth and repair of all body."
    }
  ];

  let current = 0;

  function updateSlide(index) {
    document.getElementById("nutrient-title").textContent = nutrientData[index].title;
    document.getElementById("nutrient-description").textContent = nutrientData[index].desc;

    document.querySelectorAll(".dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    current = index;
  }

  function nextSlide() {
    current = (current + 1) % nutrientData.length;
    updateSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + nutrientData.length) % nutrientData.length;
    updateSlide(current);
  }

  function goToSlide(index) {
    updateSlide(index);
  }
