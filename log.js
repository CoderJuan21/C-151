AFRAME .registerComponent("log",{
    schema:{
        message:{type:"string", default:"gTRRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHhiusdf"}
    },
    init:function(){
    console.log(this.data.message)    
    }
})