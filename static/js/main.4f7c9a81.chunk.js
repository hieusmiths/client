(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(21)},16:function(e,t,a){},17:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),i=a.n(s),o=(a(16),a(1)),l=a(2),c=a(4),m=a(3),d=a(5),u=(a(17),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("div",{className:"jumbotron text-center p-2"},r.a.createElement("h1",{className:"display-5"},"Qu\u1ea3n L\xfd Nh\xe2n S\u1ef1"),r.a.createElement("hr",{className:"my-1"}),r.a.createElement("p",{className:"lead"},"D\u1eef Li\u1ec7u Json")))}}]),t}(n.Component)),p=a(6),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).isChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(p.a)({},t,n))},a.getData=function(){var e={};e.id=a.state.id,e.name=a.state.fName,e.tel=a.state.fTel,e.permission=a.state.fPermission,a.props.getDataEdit(e),a.props.getDataEdit(e),a.props.displayFormEdit()},a.state={id:a.props.dataUpdate.id,fName:e.dataUpdate.name,fTel:a.props.dataUpdate.tel,fPermission:a.props.dataUpdate.permission},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.dataUpdate;return r.a.createElement("div",{className:"col"},r.a.createElement("form",null,r.a.createElement("div",{className:"card text-white bg-warning mb-3"},r.a.createElement("div",{className:"card-header"},"Th\xeam M\u1edbi Nh\xe2n S\u1ef1"),r.a.createElement("div",{className:"card-body text-info"},r.a.createElement("label",{htmlFor:"true",className:"font-italic"},"Full Name"),r.a.createElement("input",{onChange:function(t){return e.isChange(t)},defaultValue:t.name,className:"form-control",name:"fName",placeholder:"Nh\u1eadp Full Name"}),r.a.createElement("label",{htmlFor:"true",className:"font-italic"},"Full SDT"),r.a.createElement("input",{onChange:function(t){return e.isChange(t)},defaultValue:t.tel,className:"form-control",name:"fTel",placeholder:"Nh\u1eadp SDT"}),r.a.createElement("label",{htmlFor:"true",className:"font-italic"},"Ch\u1ecdn authority"),r.a.createElement("select",{onChange:function(t){return e.isChange(t)},defaultValue:t.permission,className:"form-control form-control-sm custom-select",name:"fPermission",id:"true",required:!0},r.a.createElement("option",{value:1},"Admin"),r.a.createElement("option",{value:2},"Moder"),r.a.createElement("option",{value:3},"Normal"))),r.a.createElement("div",{onClick:function(){return e.getData()},className:"card-footer bg-transparent border-dark text-center"},r.a.createElement("input",{type:"reset",className:"btn btn-info",value:"Update"})))))}}]),t}(n.Component),h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).tao=function(){return!0===a.props.displayForm?"X\xf3a":"Th\xeam M\u1edbi"},a.isChange=function(e){a.setState({tempValue:e.target.value}),a.props.search(e.target.value)},a.isSubmit=function(){console.log(a.state.tempValue),console.log(a.props.dataUpdate+" data b\xean \xe1p qua search")},a.displayFormEdit=function(){if(a.props.displayFormEditStatus)return r.a.createElement(f,{displayFormEditStatus:a.props.displayFormEditStatus,displayFormEdit:function(){return a.props.displayFormEdit()},dataUpdate:a.props.dataUpdate,getDataEdit:function(e){return a.props.getDataEdit(e)}})},a.state={tempValue:""},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"search"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"btn-group "},r.a.createElement("div",{onClick:function(){return e.props.changeStatus()},className:"btn btn-outline-info"},this.tao()),r.a.createElement("div",{className:"btn btn-outline-dark"},"  ")),r.a.createElement("div",{className:"form-group d-flex justify-content-end"},r.a.createElement("div",{className:"btn-group "},r.a.createElement("input",{onChange:function(t){return e.isChange(t)},type:"text",name:"look",className:"form-control",placeholder:"T\xecm Ki\u1ebfm..."}),r.a.createElement("button",{onClick:function(t){return e.props.search(e.state.tempValue)},type:"submit",className:"btn btn-info"},"Submit"))))),r.a.createElement("div",{className:"row"},this.displayFormEdit())))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).checkPermission=function(e){return 1===e?"Admin":2===e?"Moder":"D\xe2n \u0110en"},a.checkPermissionWayTwo=function(){return 1===a.props.permission?"Admin":2===a.props.permission?"Moder":"D\xe2n \u0110en"},a.edit=function(){a.props.editUser(),a.props.displayFormEdit()},a.deleteById=function(e){console.log(e)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"}," ",this.props.stt+1),r.a.createElement("td",null,this.props.name),r.a.createElement("td",null,this.props.numberPhone),r.a.createElement("td",null," ",this.checkPermission(this.props.permission)),r.a.createElement("td",null,r.a.createElement("div",{className:"btn-group"},r.a.createElement("div",{onClick:function(){return e.edit()},className:"btn btn-dark edit"}," ",r.a.createElement("i",{className:"fa fa-edit"}),"Edit"),r.a.createElement("div",{onClick:function(){return e.props.deleteById(e.props.id)},className:"btn btn-warning delete"}," ",r.a.createElement("i",null),"Delete"))))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).tableFunction=function(){return a.props.dataProps.map(function(e,t){return r.a.createElement(E,{stt:t,name:e.name,id:e.id,deleteById:function(e){return a.props.deleteById(e)},numberPhone:e.tel,permission:e.permission,key:t,editUser:function(t){return a.props.editUser(e)},displayFormEdit:function(){return a.props.displayFormEdit()}})})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"table"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Number Phone"),r.a.createElement("th",{scope:"col"},"authority"),r.a.createElement("th",{scope:"col",width:"170"},"Chang"))),r.a.createElement("tbody",null,this.tableFunction())))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).isChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(p.a)({},t,n))},a.pushAddInformationuser=function(){var e={};e.id=a.state.id,e.name=a.state.fName,e.tel=a.state.fTel,e.permission=a.state.fPermission,a.setState({dulieunen:e})},a.displayForm=function(){if(!0===a.props.displayForm)return r.a.createElement("div",{className:"col"},r.a.createElement("form",null,r.a.createElement("div",{className:"card border-dark mb-3",style:{maxWidth:"18rem"}},r.a.createElement("div",{className:"card-header"},"Th\xeam M\u1edbi Nh\xe2n S\u1ef1"),r.a.createElement("div",{className:"card-body text-info"},r.a.createElement("label",{htmlFor:"true",className:"font-italic"},"Full Name"),r.a.createElement("input",{onChange:function(e){a.isChange(e)},className:"form-control",name:"fName",placeholder:"Nh\u1eadp Full Name"}),r.a.createElement("label",{htmlFor:"true",className:"font-italic"},"Full SDT"),r.a.createElement("input",{onChange:function(e){a.isChange(e)},className:"form-control",name:"fTel",placeholder:"Nh\u1eadp SDT"}),r.a.createElement("label",{htmlFor:"true",className:"font-italic"},"Ch\u1ecdn authority"),r.a.createElement("select",{onChange:function(e){a.isChange(e)},defaultValue:a.state.fSelect,className:"form-control form-control-sm custom-select",name:"fPermission",id:"true",required:!0},r.a.createElement("option",{value:1},"Admin"),r.a.createElement("option",{value:2},"Moder"),r.a.createElement("option",{value:3},"Normal"))),r.a.createElement("div",{onClick:function(e,t,n){return a.props.getNewUser2(a.state.fName,a.state.fTel,a.state.fPermission)},className:"card-footer bg-transparent border-dark text-center"},r.a.createElement("input",{type:"reset",className:"btn btn-info",value:"Add New"})))))},a.state={fSelect:3,id:"",fName:"",fTel:"",fPermission:""},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card-add-user"},r.a.createElement("div",{className:"btn-group mb-4"}),this.displayForm())}}]),t}(n.Component),g=a(9),v=a(18),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).changeStatus=function(){a.setState({displayForm:!a.state.displayForm})},a.displayFormEdit=function(){a.setState({displayFormEdit:!a.state.displayFormEdit})},a.getDataEdit=function(e){console.log(e.id),a.state.dataUser.find(function(t){return t.id===e.id&&(t.name=e.name,t.tel=e.tel,t.permission=e.permission),!0}),localStorage.setItem("User",JSON.stringify(a.state.dataUser))},a.deleteById=function(e){var t=a.state.dataUser;t=t.filter(function(t){return t.id!==e}),console.log(t),a.setState({dataUser:t}),localStorage.setItem("User",JSON.stringify(t))},a.conectForSearch=function(e){a.setState({textForSearch:e}),console.log(a.state.textForSearch)},a.getNewUser2=function(e,t,n){var r={};r.id=v(),r.name=e,r.tel=t,r.permission=n;var s=a.state.dataUser;s.push(r),a.setState({dataUser:s}),localStorage.setItem("User",JSON.stringify(s))},a.getNewUser=function(e){console.log(e.name)},a.editUser=function(e){a.setState({dataUpdate:e})},a.state={displayForm:!1,dataUser:[],textForSearch:"",displayFormEdit:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){if(0===localStorage.getItem("User"))localStorage.setItem("User",JSON.stringify(g));else{var e=JSON.parse(localStorage.getItem("User"));this.setState({dataUser:e})}}},{key:"render",value:function(){var e=this;console.log(this.state.dataUser);var t=[];return this.state.dataUser.forEach(function(a){-1!==a.name.indexOf(e.state.textForSearch)&&t.push(a)}),r.a.createElement("div",{className:"container-fluid"},r.a.createElement(u,null),r.a.createElement(h,{search:function(t){e.conectForSearch(t)},dataUpdate:this.state.dataUpdate,changeStatus:function(){return e.changeStatus()},displayFormEditStatus:this.state.displayFormEdit,displayFormEdit:function(){return e.displayFormEdit()},getDataEdit:function(t){return e.getDataEdit(t)},displayForm:this.state.displayForm}),r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(b,{dataProps:t,editUser:function(t){return e.editUser(t)},displayFormEdit:function(){return e.displayFormEdit()},deleteById:function(t){return e.deleteById(t)}})),r.a.createElement(N,{getNewUser2:function(t,a,n){return e.getNewUser2(t,a,n)},getNewUser:function(t){return e.getNewUser(t)},displayForm:this.state.displayForm})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e){e.exports=[{id:1,name:"Minh Hi\u1ebfu 1",tel:"0972715306",permission:1},{id:2,name:"Minh Hi\u1ebfu 2",tel:"0972715306",permission:2},{id:3,name:"Minh Hi\u1ebfu 3",tel:"0972715306",permission:3},{id:4,name:"Minh Hi\u1ebfu 4",tel:"0972715306",permission:1},{id:5,name:"Minh Hi\u1ebfu 5",tel:"0972715306",permission:3},{id:6,name:"Man 5",tel:"0972715306",permission:3}]}},[[10,1,2]]]);
//# sourceMappingURL=main.4f7c9a81.chunk.js.map