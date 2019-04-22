require.config({
    paths: {
        "mui": "mui.min"
    }
})
require(['mui'], function(mui) {
    mui.ajax('/api/getfind', {
        data: {

        },
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        timeout: 10000, //超时时间设置为10秒；
        success: function(data) {
            var str = '';
            data.data.forEach(function(item) {
                str += `
               <tr>
                    <td>${item.data}</td>
                    <td>${item.fenlei}</td>
                    <td>${item.jine}</td>
                    <td>${item.chengyuan}</td>
                    <td>${item.beizhu}</td>
                </tr>
               `
            })
            document.querySelector('.inner').innerHTML = str;
        },
        error: function(xhr, type, errorThrown) {

        }
    });
})