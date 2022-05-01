function clicked(){
    let addload=document.getElementById("address").value;
    let nameload=document.getElementById("addname").value;

    if(addload.startsWith("https://") === false){
        alert("http 형식에 맞게 입력 해주세요");
    }else{
        alert("바로가기 버튼이 만들어졌어요");
        let ht=`<a href="${addload}"target="_blank">${nameload} 바로가기</a>`;
        // let ht=`<a href="` + addload + `"target="_blank">` + nameload + `바로가기</a>`;
        let ht2 = document.getElementById("aBtn").innerHTML += ht;
    }
};