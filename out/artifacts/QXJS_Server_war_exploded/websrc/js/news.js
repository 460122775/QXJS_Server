/**
 * Created by cj on 16/4/1.
 */
/**
 * Created by cj on 16/3/31.
 */
// 添加组合
function addNews() {
    var addPicture = $('#addPictureForm').serialize();
    var url = url;
    $.ajax({
        type: 'POST',
        url: url,
        data: addPicture,
        success: function (data) {
            console.log(data);
        },
        error: function () {
            alert("异常！");
        }
    })
}
//删除组合
function deleteNews(newsId) {
    var url = url;
    $.ajax({
        type: 'POST',
        url: url,
        data: {newsId:newsId},
        success: function (data) {
            console.log(data);
        },
        error: function () {
            alert("异常！");
        }
    })
}
//修改管系列-获取当前选中行信息
function updateGetNews(newsId){
    var url = url;
    $.ajax({
        type: 'POST',
        url: url,
        data: {newsId:newsId},
        success: function (data) {
            console.log(data);
        },
        error: function () {
            alert("异常！");
        }
    })
}
//修改系列
function updateNews(){
    var updateNews = $('#updateNewsForm').serialize();
    var url = url;
    $.ajax({
        type: 'POST',
        url: url,
        data: updateNews,
        success: function (data) {
            console.log(data);
        },
        error: function () {
            alert("异常！");
        }
    })
}
//查询系列
function selectNews(){
    var url = url;
    $.ajax({
        type: 'POST',
        url: url,
        success: function (data) {
            console.log(data);
        },
        error: function () {
            alert("异常！");
        }
    })
}