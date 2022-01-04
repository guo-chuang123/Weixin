Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    msg: 'Oscar',
    person: {
      name: 'Peter',
      age: 18,
      sex:"男"
    },
    list: [
      {
        id: 0,
        name:"元吉"
      },
      {
        id: 1,
        name:"元芳"
      },
      {
        id: 2,
        name:"元也"
      },
      {
        id: 3,
        name:"元文"
      }
    ],
    isCheck: true,
    num:0
  },
  add(e) {
    this.setData({num:e.detail.value})
  },
  handle(e) {
    let targ = e.currentTarget.dataset.operation
    this.setData({
      num:this.data.num + targ
    })
  }
})