(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(8),c=n.n(s),l=(n(15),n(1)),o=n(2),u=n(5),i=n(3),m=n(4),h=n(6),p=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={user:e.user},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.onSelectUser,n=this.state.user,a=n.name,s=n.username;return r.a.createElement("div",null,r.a.createElement("li",{className:"ph3 pv2 b--light-silver pointer grow",onClick:function(){return t(e.state.user)}},r.a.createElement("strong",null,a)," - ",s))}}]),t}(r.a.Component),d=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={users:[]},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new Request("https://jsonplaceholder.typicode.com/users");fetch(t).then(function(e){return e.json()}).then(function(t){e.setState({users:t})})}},{key:"render",value:function(){var e=this.props.onSelectUser,t=this.state.users;if(0!==t.length){var n=t.map(function(t){return r.a.createElement(p,{key:t.id,user:t,onSelectUser:e})});return r.a.createElement("div",null,r.a.createElement("h2",null,"Users"),r.a.createElement("ul",{className:"list"},n),r.a.createElement("p",{className:"black-20"},r.a.createElement("a",{className:"black-20",href:"https://jsonplaceholder.typicode.com/users"},"https://jsonplaceholder.typicode.com/users")))}return r.a.createElement("h2",null,"Loading list of users")}}]),t}(r.a.Component),b=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(i.a)(t).call(this))).onNameChange=function(t){e.setState({name:t.target.value})},e.onUsernameChange=function(t){e.setState({name:t.target.value})},e.onAddUser=function(){fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.state.name,username:e.state.username})}).then(function(e){return e.json()}).then(function(e){return console.log(e)})},e.state={name:"",username:""},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Add user"),r.a.createElement("div",null,r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",onChange:this.onNameChange})),r.a.createElement("div",null,r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"text",name:"name",onChange:this.onUsernameChange})),r.a.createElement("div",null,r.a.createElement("input",{type:"button",value:"Add user",onClick:this.onAddUser})))}}]),t}(r.a.Component),f=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={posts:[]},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.selectedUser.id;fetch("https://jsonplaceholder.typicode.com/posts?userId="+t).then(function(e){return e.json()}).then(function(t){return e.setState({posts:t})})}},{key:"render",value:function(){var e=this.props.selectedUser,t=e.name,n=e.username,a=this.state.posts.map(function(e){return r.a.createElement("li",{className:"ph3 pv2 b--light-silver",key:e.id},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.body))});return r.a.createElement("div",null,r.a.createElement("h1",null,t,"'s posts"),r.a.createElement("p",{className:"black-50"},n),r.a.createElement("ul",{className:"list"},a))}}]),t}(r.a.Component),v=function(e){var t=e.onRouteChange;return r.a.createElement("nav",{className:"bt bb tc mw8 center mt4 pointer athelas br4"},r.a.createElement("p",{className:"f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l",onClick:function(){return t("users")}},"Users"),r.a.createElement("p",{className:"f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l",onClick:function(){return t("addUser")}},"Add user"))},E=(n(17),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(i.a)(t).call(this))).onRouteChange=function(t){e.setState({route:t})},e.onSelectUser=function(t){e.setState({route:"posts",selectedUser:t})},e.state={route:"users",selectedUser:{}},e.onSelectUser=e.onSelectUser.bind(Object(h.a)(Object(h.a)(e))),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e;switch(this.state.route){case"users":e=r.a.createElement(d,{onSelectUser:this.onSelectUser});break;case"addUser":e=r.a.createElement(b,null);break;case"posts":e=r.a.createElement(f,{selectedUser:this.state.selectedUser});break;default:e=r.a.createElement(d,null)}return r.a.createElement("div",{className:"bb tc mw8 center mt4 athelas"},r.a.createElement(v,{onRouteChange:this.onRouteChange}),e)}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(19);c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(21)}},[[9,2,1]]]);
//# sourceMappingURL=main.d7ca0316.chunk.js.map