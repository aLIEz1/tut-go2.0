Page({
    data: {
        categories: [{
            name: '匕首',
        },{
            name: '手枪'
        },{
            name: '步枪'
        },{
            name: '冲锋枪'
        },{
            name: '霰弹枪'
        },{
            name: '机枪'
        },{
            name: '手套'
        }],
        currentMenuIndex: 0,//当前选中的项
        categoryInfo: {}
    },
    changeCategory: function (event) {
        // console.log(event);
        var index = event.currentTarget.dataset.index;
        this.setData({
            currentMenuIndex: index
        });
    },
    onLoad: function (options) {

    }
});