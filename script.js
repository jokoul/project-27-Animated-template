//Getting random user picture through random user generator api
fetch("https://randomuser.me/api/?results=4&inc=picture,name")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(data.results);

    data.results.forEach((element, index) => {
      console.log(`${index} : ${element}`);
      //DRY principles
      const userImg = document.getElementById(`user${index + 1}`);
      const userName = document.getElementById(`userName${index + 1}`);
      console.log(userImg);
      console.log(userName);
      userImg.src = element.picture.large;
      userImg.alt = `user${index + 1}`;
      userName.innerText = `${element.name.title} ${element.name.first} ${element.name.last}`;
    });
  });
