$(function(){
    $(".nav li").click(function(){
        $(this).css({"color":"#f18a10"});
        $(this).siblings('li').css({"color":"black"});  
    });
    $(".nav_t1").click(function(){
		$("#head_top").load("lwshigong.html .head_top_lwpq",function(){
			$(".head_top_lwqp").css("display","block");
			$(".head_top_jzcb").css("display","none");
            $(".head_top_jzsg").css("display","none");
            $(".head_top_zzrz").css("display","none");
		});
	});
    $(".nav_t2").click(function(){
		$("#head_top").load("lwshigong.html .head_top_jzcb",function(){		
            $(".head_top_lwpq").css("display","none");
            $(".head_top_jzcb").css("display","block");
            $(".head_top_jzsg").css("display","none");
            $(".head_top_zzrz").css("display","none");
		});
    });
    $(".nav_t3").click(function(){
		$("#head_top").load("lwshigong.html .head_top_jzsg",function(){		
            $(".head_top_lwpq").css("display","none");
            $(".head_top_jzcb").css("display","none");
            $(".head_top_jzsg").css("display","block");
            $(".head_top_zzrz").css("display","none");
		});
    });
    $(".nav_t4").click(function(){
		$("#head_top").load("lwshigong.html .head_top_zzrz",function(){		
            $(".head_top_lwpq").css("display","none");
            $(".head_top_jzcb").css("display","none");
            $(".head_top_jzsg").css("display","none");
            $(".head_top_zzrz").css("display","block");
		});
	});
});


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
                var li="<li>"+"编号："+i.userId+"，"+"施工队名："+i.userName+"，"+"人数："+i.userNum+"，"+"施工地："+i.userAddress+"，"+"状态："+i.userstuts+"</li>";
                po.append(li);
            });
            $(".sj").append(po);
        });
    });

    //清空按钮
    $(".btn2").click(function(){  
        //清空所有
       // $(".sj").html('');

       $(".sj li").remove();
       var len =$(".sj li").length;
       if (len==0) {
        alert("已完成");
       } else {
        alert("程序出错");
       }  
    })
});

$(function(){
    const v = new Vue({
        el:'#root',
        data(){
           return{
            name:'鲸鲨队',
            address:"河南",
            url:"../index.html",
            nowTime:"",
          }
        },     
        methods:{
            getTime(){
                let year = new Date().getFullYear();
                let month = new Date().getMonth()+1;
                let day = new Date().getDate();
                let hour = new Date().getHours();
                let minute = new Date().getMinutes();
                let second = new Date().getSeconds();
                this.nowTime = year+"-"+month+"-"+day+"-"+hour+":"+minute+":"+second;    
            },           
        },
        //在mounted钩子函数中调用nowTimes函数 
        mounted(){
            this.getTime()
        },    
    });
    // v.$mount('#root');

    // let 变量={属性：值，，}
    // Object.defineProperty(变量,新添的属性名,新添{
    //     value:,
    //     enumerable:true,控制属性是否可以枚举
    //     writable:true,是否可以被修改
    //     configurable:true,被删除
    // get()
    // set()
    // })
    
  
})




