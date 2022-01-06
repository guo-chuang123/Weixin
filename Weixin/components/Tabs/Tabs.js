// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItem(e) {
      let { index } = e.currentTarget.dataset
    //   let { tabs } = this.data
    //   tabs.forEach((item, i) =>
    //     i === index ? item.isActive = true : item.isActive = false)
    //   this.setData({
    //   tabs
    // })
      this.triggerEvent("itemChange",{index})

    }
  }
})
