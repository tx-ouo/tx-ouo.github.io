$(function(){
    $(".nav li").click(function(){
        $(this).css({"color":"#f18a10"});
        $(this).siblings('li').css({"color":"white"});  
    });

  // 为类名为.nav_t1, .nav_t2, .nav_t3, .nav_t4的元素绑定点击事件
$(".nav_t1, .nav_t2, .nav_t3, .nav_t4").click(function(){
    // 获取被点击元素的数据属性target的值，用于确定要加载的内容
    var targetClass = $(this).data("target");
    // 从lwshigong.html中加载指定类名的内容，目标内容将替换#head_top元素的内容
    $("#head_top").load("lwshigong.html ." + targetClass, function(){
        // 隐藏所有可能的头部子元素，确保只有目标内容被显示
        $(".head_top_lwpq, .head_top_jzcb, .head_top_jzsg, .head_top_zzrz").css("display","none");
        // 显示目标内容
        $("." + targetClass).css("display","block");
    });
});
});
$(function(){
    $(document).on("click",".btn0",function(){
        if($(".head_top_lwpq").css('display')!=='none'){
            $.ajax({
                // type:"get"
                type:"get",
                url:"../static/tx-cs.txt",
                async:true,
                data:{ 
                    // 确保数据格式正确
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
                    $(".table_lwpq").append(op);
                },
                error:function(b){
                    console.error("请求失败:", b);
                    alert("失败");
                }
            }); 
        }       
    });

    // $(document).on("click",".btn1",function(){
    //     $.get("../static/tx-cs.txt",{},function(c){
    //         var obj =JSON.parse(c)
    //         var po=$("<li></li>");
    //         obj.forEach(i => {
    //             var li="<li>"+"编号："+i.userId+"，"+"施工队名："+i.userName+"，"+"人数："+i.userNum+"，"+"施工地："+i.userAddress+"，"+"状态："+i.userstuts+"</li>";
    //             po.append(li);
    //         });
    //         $(".table_lwpq").append(po);
    //     });
    // });

    //清空按钮
    $(document).on("click",".btn2",function(){  
        //清空所有
       // $(".sj").html('');

       $(".table_lwpq li").remove();
       var len =$(".table_lwpq li").length;
       if (len==0) {
        alert("已完成");
       } else {
        alert("程序出错");
       }  
    });


    $(document).on("click", ".btn1", function () {
        $.get("../static/tx-cs.txt", {}, function (c) {
            var obj = JSON.parse(c);
            var currentPage = 1; // 初始化当前页码
            var rowsPerPage = 10; // 每页显示的行数

            function displayTable(page) {
                var table = $("<table></table>");
                var thead = $("<thead><tr><th>队伍ID</th><th>队伍名</th><th>人数</th><th>入场时间</th><th>施工地</th><th>费用</th><th>施工状态</th><th>操作</th></tr></thead>");
                var tbody = $("<tbody></tbody>");

                var start = (page - 1) * rowsPerPage;
                var end = start + rowsPerPage;
                obj.slice(start, end).forEach(i => {
                    var row = $("<tr></tr>");
                    row.append($("<td></td>").text(i.userId));
                    row.append($("<td></td>").text(i.userName));
                    row.append($("<td></td>").text(i.userNum));
                    row.append($("<td></td>").text(i.entryTime)); // 假设数据中有入场时间字段
                    row.append($("<td></td>").text(i.userAddress));
                    row.append($("<td></td>").text(i.cost));
                    row.append($("<td></td>").text(i.userstuts));
                    var actionCell = $("<td class='action-buttons'></td>");
                    actionCell.append($("<button>编辑</button>"));
                    actionCell.append($("<button>删除</button>"));
                    row.append(actionCell);
                    tbody.append(row);
                });

                table.append(thead);
                table.append(tbody);
                $(".table_lwpq").empty().append(table);
            }

            //创建了 displayTable 函数来根据当前页码显示相应的数据
            displayTable(currentPage);

            $(document).on("click", ".paging_btn", function () {
                if ($(this).text() === "上一页") {
                    if (currentPage > 1) {
                        currentPage--;
                        displayTable(currentPage);
                    }
                } else if ($(this).text() === "下一页") {
                    if (currentPage * rowsPerPage < obj.length) {
                        currentPage++;
                        displayTable(currentPage);
                    }
                }
            });

            $(document).on("click", "#goToPage", function () {
                var pageNumber = parseInt($("#pageInput").val());
                if (!isNaN(pageNumber) && pageNumber > 0 && pageNumber <= Math.ceil(obj.length / rowsPerPage)) {
                    currentPage = pageNumber;
                    displayTable(currentPage);
                } else {
                    alert("请输入有效的页码");
                }
            });
        });
    });
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




