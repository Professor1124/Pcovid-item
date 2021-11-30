/*    function timeHandel(val) {
        return new Date()
    }*/
// 初始化对象，
// 初始化和定义表格数据
var uiduck2 = new uiduck('uiduck2', {
    // 表格挂载的位置为 id 为 table 的元素
    templateId: "tableOfChina",
    // 是否有分页功能
    page: true,
    // 每页展示的数据量
    pageOptions: {
        // 最少为 5个
        limit: 10,
        // 可以选择的展示数量
        limits: ['5', '10', '15', '20', '25']
    },
    /*
        表头数据，由下可得：
            - 表头为 index	icon name	email	wechat age sex school city like
            - 其中 computed 代表单元格的值只能是 computed 规定的值
     */
    fieldOptions: [
        {
            key: "地区",
            title: "地区",
            width: '150px'
        },
        {
            key: "新增",
            title: "新增",
            width: '150px'

        },
        {
            key: "现有",
            title: "现有",
            width: '150px'

        },
        {
            key: "累计",
            title: "累计",
            width: '150px'

        },
        {
            key: "治愈",
            title: "治愈",
            width: "150px"
        },
        {
            key: "死亡",
            title: "死亡",
            width: '150px'

        },
    ]
});
// 表格数据
var data = [
    {

        "地区": "香港",
        "新增": 16,
        "现有": 174,
        "累计": 11524,
        "治愈": 11145,
        "死亡": 205,
    },
    {

        "地区": "云南",
        "新增": 15,
        "现有": 66,
        "累计": 299,
        "治愈": 231,
        "死亡": 2,
    },
    {

        "地区": "云南",
        "新增": 15,
        "现有": 66,
        "累计": 299,
        "治愈": 231,
        "死亡": 2,
    },
    {

        "地区": "云南",
        "新增": 15,
        "现有": 66,
        "累计": 299,
        "治愈": 231,
        "死亡": 2,
    },
    {

        "地区": "云南",
        "新增": 15,
        "现有": 66,
        "累计": 299,
        "治愈": 231,
        "死亡": 2,
    },
    {
        "地区": "云南",
        "新增": 15,
        "现有": 66,
        "累计": 299,
        "治愈": 231,
        "死亡": 2,
    },
    {
        "地区": "云南",
        "新增": 15,
        "现有": 66,
        "累计": 299,
        "治愈": 231,
        "死亡": 2,
    },

    {
        "地区": "云南",
        "新增": 15,
        "现有": 66,
        "累计": 299,
        "治愈": 231,
        "死亡": 2,
    },

    {
        "地区": "云南",
        "新增": 15,
        "现有": 66,
        "累计": 299,
        "治愈": 231,
        "死亡": 2,
    },
    {
        "地区": "云南",
        "新增": 15,
        "现有": 66,
        "累计": 299,
        "治愈": 231,
        "死亡": 2,
    },
    {
        "地区": "云南",
        "新增": 15,
        "现有": 66,
        "累计": 299,
        "治愈": 231,
        "死亡": 2,
    },
    {
        "地区": "云南",
        "新增": 15,
        "现有": 66,
        "累计": 299,
        "治愈": 231,
        "死亡": 2,
    }



]
// 设置数据
uiduck2.setData(data, false);

