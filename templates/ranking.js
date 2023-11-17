function doAction() {
  alert("참가하셨습니다!");
}

async function fetchData() {
  try {
    // Fetch API를 사용하여 데이터를 가져옴
    //const response = await fetch('URL_TO_YOUR_API_ENDPOINT'); // 여기에 실제 API 엔드포인트를 넣어주세요.

    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }
    const myid = "user id 4";
    const data1 = [
      {
        user_id: "user id",
        people: "people 1",
        percentage: 0.17,
        store_id: "store id 1",
        soju_quantity: "soju_quantity",
        beer_quantity: "beer_quantity 1",
        makguli_quantity: "makguli_quantity 1",
      },
      {
        user_id: "user id 2",
        people: "people 2",
        percentage: 0.16,
        store_id: "store id 2",
        soju_quantity: "soju quantity2",
        beer_quantity: "beer_quantity 2",
        makguli_quantity: "makguli_quantity 2",
      },
      {
        user_id: "user id 3",
        people: "people 3",
        percentage: 0.17,
        store_id: "store id 3",
        soju_quantity: "soju",
        beer_quantity: "beer_quantity 3",
        makguli_quantity: "makguli_quantity 3",
      },
      {
        user_id: "user id 4",
        people: "people 4",
        percentage: 0.15,
        store_id: "store id 4",
        soju_quantity: "soju",
        beer_quantity: "beer_quantity 4",
        makguli_quantity: "makguli_quantity 4",
      },
    ];

    data1.forEach((item) => {
      console.log("User ID:", item.user_id);
      console.log("People:", item.people);
      console.log("percentage:", item.percentage);
      console.log("Soju Quantity:", item.soju_quantity);
      console.log("Beer Quantity:", data1.beer_quantity);
      console.log("Makguli Quantity:", data1.makguli_quantity);
      console.log("-----------");
    });

    const sortedData = data1.sort((a, b) => b.percentage - a.percentage);
    let rankingContainer = document.querySelector("#ranking-container");

    console.log("Top 3 Users:");
    for (let i = 0; i < 3; i++) {
      let topUser = document.createElement("div");
      topUser.setAttribute("class", `rank-${i + 1}`);

      let topNum = document.createElement("div");
      topNum.setAttribute("class", "topNum");
      topNum.innerHTML = i + 1;
      topUser.appendChild(topNum);

      let myName = document.createElement("div");
      myName.setAttribute("class", "myName");
      myName.innerHTML = sortedData[i].user_id;
      topUser.appendChild(myName);

      let myPercent = document.createElement("div");
      myPercent.setAttribute("class", "myPercent");
      myPercent.innerHTML = sortedData[i].percentage;
      topUser.appendChild(myPercent);

      let mySoju = document.createElement("div");
      mySoju.setAttribute("class", "mySoju");
      mySoju.innerHTML = sortedData[i].soju_quantity;
      topUser.appendChild(mySoju);

      let topBeer = document.createElement("div");
      topBeer.setAttribute("class", "topBeer");
      topBeer.innerHTML = sortedData[i].beer_quantity;
      topUser.appendChild(topBeer);

      let myMakguli = document.createElement("div");
      myMakguli.setAttribute("class", "topMakjuli");
      myMakguli.innerHTML = sortedData[i].makguli_quantity;
      topUser.appendChild(myMakguli);

      if (rankingContainer) {
        rankingContainer.appendChild(topUser);
      } else {
        console.error("Container not found");
        return;
      }
    }

    // myid에 해당하는 데이터 출력
    const myUserData = sortedData.find((user) => user.user_id === myid);
    const myRankNum = sortedData.indexOf(myUserData) + 1;
    console.log("MyRank");
    console.log("-----------");
    console.log("Rank:", myRankNum);
    console.log("User ID:", myUserData.user_id);
    console.log("Percentage:", myUserData.percentage);
    console.log("Soju Quantity:", myUserData.soju_quantity);
    console.log("Beer Quantity:", myUserData.beer_quantity);
    console.log("Makguli Quantity:", myUserData.makguli_quantity);
    console.log("-----------");

    let myUser = document.createElement("div");
    myUser.setAttribute("class", "myUser");

    let myNum = document.createElement("div");
    myNum.setAttribute("class", "myNum");
    myNum.innerHTML = myRankNum;
    myUser.appendChild(myNum);

    let myName = document.createElement("div");
    myName.setAttribute("class", "myName");
    myName.innerHTML = myUserData.user_id;
    myUser.appendChild(myName);

    let topPercent = document.createElement("div");
    topPercent.setAttribute("class", "topPercent");
    topPercent.innerHTML = myUserData.percentage;
    myUser.appendChild(topPercent);

    let mySoju = document.createElement("div");
    mySoju.setAttribute("class", "mySoju");
    mySoju.innerHTML = myUserData.soju_quantity;
    myUser.appendChild(mySoju);

    let myBeer = document.createElement("div");
    myBeer.setAttribute("class", "myBeer");
    myBeer.innerHTML = myUserData.beer_quantity;
    myUser.appendChild(myBeer);

    let myMakguli = document.createElement("div");
    myMakguli.setAttribute("class", "topMakjuli");
    myMakguli.innerHTML = myUserData.makguli_quantity;
    myUser.appendChild(myMakguli);

    rankingContainer.appendChild(myUser);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
