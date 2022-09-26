$(function(){
    $(".btn0").click(function(){
        $.ajax({
            type:"get",
            url:"../static/tx-cs.txt",
            async:true,
            data:{ 
            },
            //要服务器返回json形式数据
            dataType:"json",
            // contentType:'',
            //a=内容
            success:function(a){
                console.log(a);
                // var obj =JSON.parse(a);
                // console.log(obj);
                var op=$("<li></li>");
                a.forEach(i => {
                    var li="<li>"+i.userName+"</li>";
                    op.append(li);
                });
                $(".sj").append(op);
            },
            error:function(b){
                alert("失败");
            }
        });      
    }); 
});
$(function(){
    $(".btn1").click(function(){
        // alert("6666");
        $.get("../static/tx-cs.txt",{},function(c){
            var obj =JSON.parse(c)
            var po=$("<li></li>");
            obj.forEach(i => {
                var li="<li>"+i.userId+","+i.userName+","+i.userNum+","+i.userAddress+","+i.userstuts+"</li>";
                po.append(li);
            });
            $(".sj").append(po);
        });
    });
})



