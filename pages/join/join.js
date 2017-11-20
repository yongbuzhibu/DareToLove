//join.js
Page({
  data: {
    date: '1991-07-09',
    height:'160厘米',
    education:'本科',
    salary:'5000-10000元',
    heightArray: [],
    educationArray: ['高中及中专以下', '大专', '本科', '双学士', '硕士', '博士','博士后'],
    salaryArray: ['2000元以下', '2000-5000元', '5000-10000元', '10000-20000元', '20000-50000元', '50000元以上']
  },
  
  onLoad: function () {
    function generateHeightArray(){
      var heightTempArray = [];
      for (var i = 0; i <= 90; i++) {
        var height = 130 + i + '厘米';
        heightTempArray.push(height);
      }
      return heightTempArray;
    }
    this.setData({
      heightArray: generateHeightArray()
    })
  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindHeightChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      height: this.data.heightArray[e.detail.value]
    })
  },
  bindEducationChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      education: this.data.educationArray[e.detail.value]
    })
  },
  bindSalaryChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      salary: this.data.salaryArray[e.detail.value]
    })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var form = e.detail.value
    this.setData({
      house: form.house,
      phone: form.phone,
      selfdesc: form.selfdesc,
      sex: form.sex,
      marriageStatus: form.marriageStatus,
      userName: form.userName
    })
  
  console.log('form发生了submit事件，携带数据为：', this.data)
  }
})