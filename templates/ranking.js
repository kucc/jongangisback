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
            { user_id: 'user id', people: 'people 1', percentage: 0.17, store_id: 'store id 1', soju_quantity: 'soju_quantity', beer_quantity: 'beer_quantity 1', makguli_quantity: 'makguli_quantity 1' },
            { user_id: 'user id 2', people: 'people 2', percentage: 0.16, store_id: 'store id 2', soju_quantity: 'soju quantity2', beer_quantity: 'beer_quantity 2', makguli_quantity: 'makguli_quantity 2' },
            { user_id: 'user id 3', people: 'people 3', percentage: 0.17, store_id: 'store id 3', soju_quantity: 'soju', beer_quantity: 'beer_quantity 3', makguli_quantity: 'makguli_quantity 3' },
            { user_id: 'user id 4', people: 'people 4', percentage: 0.15, store_id: 'store id 4', soju_quantity: 'soju', beer_quantity: 'beer_quantity 4', makguli_quantity: 'makguli_quantity 4' },
        ];

        // 응답 데이터를 JSON 형식으로 파싱
        //onst data = await response.json();

        // 데이터를 사용하여 원하는 작업 수행

        //   console.log("User ID:", data1.user_id);
        //   console.log("Number of people:", data1.people);
        //   console.log("percentage:", data1.percentage);
        //   console.log("Store ID:", data1.store_id);
        //   console.log("Soju Quantity:", data1.soju_quantity);
        //   console.log("Beer Quantity:", data1.beer_quantity);
        //   console.log("Makguli Quantity:", data1.makguli_quantity);

        data1.forEach(item => {
            console.log("User ID:", item.user_id);
            console.log("People:", item.people);
            console.log("percentage:", item.percentage);
            console.log("Soju Quantity:", item.soju_quantity);
            console.log("Beer Quantity:", data1.beer_quantity);
            console.log("Makguli Quantity:", data1.makguli_quantity);
            console.log("-----------"); // 항목 간 구분을 위해 추가
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

            console.log("User ID:", sortedData[i].user_id);
            console.log("Percentage:", sortedData[i].percentage);
            console.log("Soju Quantity:", sortedData[i].soju_quantity);
            console.log("Beer Quantity:", sortedData[i].beer_quantity);
            console.log("Makguli Quantity:", sortedData[i].makguli_quantity);
            console.log("-----------");

            rankingContainer.appendChild(topUser);
        }





        // myid에 해당하는 데이터 출력
        const myUserData = sortedData.find(user => user.user_id === myid);
        if (myUserData) {
            const myRank = sortedData.indexOf(myUserData) + 1;

            console.log("Rank:", myRank);
            console.log("User ID:", myUserData.user_id);
            console.log("Percentage:", myUserData.percentage);
            console.log("Soju Quantity:", myUserData.soju_quantity);
            console.log("Beer Quantity:", myUserData.beer_quantity);
            console.log("Makguli Quantity:", myUserData.makguli_quantity);
            console.log("-----------");
        } else {
            console.log("User not found");
        }

        let myUser = document.createElement("div");
        myUser.setAttribute("class", "myUser");

        let myNum = document.createElement("div");
        myNum.setAttribute("class", "myNum");
        console.log(myRank);
        myNum.innerHTML = myRank;
        myUser.appendChild(myNum);

        let topName = document.createElement("div");
        myName.setAttribute("class", "myName");
        myName.innerHTML = myRank.user_id;
        myUser.appendChild(myName);

        let topPercent = document.createElement("div");
        topPercent.setAttribute("class", "topPercent");
        topPercent.innerHTML = myRank.percentage;
        myUser.appendChild(topPercent);

        let mySoju = document.createElement("div");
        mySoju.setAttribute("class", "mySoju");
        mySoju.innerHTML = myRank.soju_quantity;
        myUser.appendChild(mySoju);

        let myBeer = document.createElement("div");
        myBeer.setAttribute("class", "myBeer");
        myBeer.innerHTML = myRank.beer_quantity;
        myUser.appendChild(myBeer);

        let myMakguli = document.createElement("div");
        myMakguli.setAttribute("class", "topMakjuli");
        myMakguli.innerHTML = myRank.makguli_quantity;
        myUser.appendChild(myMakguli);

        //   sortedData.forEach(item => {
        //     console.log("sorted User ID:", item.user_id);
        //     console.log("percentage:", item.percentage);
        //     console.log("sorted Soju Quantity:", item.soju_quantity);
        //     console.log("-----------"); // 항목 간 구분을 위해 추가
        //   });
        //console.log('sortedData : '+sortedData);

        // 여기에서 데이터를 활용하여 추가 작업을 수행할 수 있습니다.
    } catch (error) {
        console.error('Error:', error);
    }
}

// fetchData 함수 호출
fetchData();

