const card = $("#card");
const englishWord = $("#englishWord");
const turkishWord = $("#turkishWord");
const next = $("#next");

next.click(function(){
    const rand = Math.floor(Math.random() * 3108);

    $.getJSON("words.json", function (data){
        console.log(data.length);
        for (var i = 0; i < data.length; i++) {
            if (i == rand) {
                englishWord.html(data[i].İNGİLİZCE);
                turkishWord.html(data[i].TÜRKÇE);
            }
            
        }
    })
})




$(".card-front").click(function(){
    $(this).css("z-index","0");
    $(".card-back").css("z-index","1");
    
})
$(".card-back").click(function(){
    $(this).css("z-index","0");
    $(".card-front").css("z-index","1");
})