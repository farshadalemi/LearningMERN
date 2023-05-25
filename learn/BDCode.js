function printBirthdayMessage() {
  const today = new Date();
  const birthdate = new Date(1989, 5, 30);
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();

  if (currentMonth === 4 && currentDay === 30) {
    console.log("Happy Birthday! Eng. Divband");
  }

  function age(birthdate) {
    const today = new Date();
    const age =
      today.getFullYear() -
      birthdate.getFullYear() -
      (today.getMonth() < birthdate.getMonth() ||
        (today.getMonth() === birthdate.getMonth() &&
          today.getDate() < birthdate.getDate()));
    return age;
  }

  const ageValue = age(birthdate);
  const newAge = ageValue + 1;
  console.log(`U R ${newAge} Years Old :) wish U all The Best`);
}

// Call the function once to check if it's May 30th
printBirthdayMessage();

// Set an interval to check every day if it's May 30th
setInterval(printBirthdayMessage, 24 * 60 * 60 * 1000); // Check once every 24 hours
