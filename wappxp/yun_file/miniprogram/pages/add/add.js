// miniprogram/pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  upload: function(event) {
    // 1. 选择相片里的图片
    // 2. 上传到云服务器
    // 3. 数据库记录
    wx.chooseImage({
      count: 4, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function(res){
        // success
        //console.log(res);
        const  tempFilePaths=res.tempFilePaths
        for(let file of temFilePaths){
          let randString= Math.floor(Math.random()*1000000.toStrint() +'.png'
          wx.cloud.uploadFile({
            cloudpath: randString,
            filePath:tempfilePaths[i],
            success:res =>{
              console.log(res);
            }
          }))
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
