(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),l=n.n(r),c=n(6),i=n(7),s=n(5),u=n(1),m=n(2),f=n(4),d=n(3),h=(n(16),function(e){var t=e.toDo,n=e.done;return o.a.createElement("div",{className:"app-header d-flex"},o.a.createElement("h1",null,"Todo List"),o.a.createElement("h2",null,t," more todo, ",n," done"))}),b=(n(17),function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={term:""},e.onSearch=function(t){e.setState({term:t.target.value}),e.props.onSearchChange(t.target.value)},e}return Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement("input",{placeholder:"search",type:"text",className:"form-control search-input",onChange:this.onSearch,value:this.state.term})}}]),n}(a.Component)),p=n(10),g=(n(18),function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.onDeleted,a=e.onToggleDone,r=e.onToggleImportant,l=e.important,c="todo-list-item";return e.done&&(c+=" done"),l&&(c+=" important"),o.a.createElement("span",{className:c},o.a.createElement("span",{className:"todo-list-item-label",onClick:a},t),o.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:r},o.a.createElement("i",{className:"fa fa-exclamation"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n},o.a.createElement("i",{className:"fa fa-trash-o"})))}}]),n}(a.Component)),v=(n(19),function(e){var t=e.todos,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,l=t.map((function(e){var t=e.id,l=Object(p.a)(e,["id"]);return o.a.createElement("li",{key:t,className:"list-group-item"},o.a.createElement(g,Object.assign({},l,{onDeleted:function(){return n(t)},onToggleImportant:function(){return a(t)},onToggleDone:function(){return r(t)}})))}));return o.a.createElement("ul",{className:"list-group todo-list"},l)}),E=(n(20),function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.filter,n=e.onFilterChange,a=this.buttons.map((function(e){var a=e.name,r=e.label,l=t===a?"btn-info":"btn-outline-secondary";return o.a.createElement("button",{type:"button",className:"btn ".concat(l),key:a,onClick:function(){return n(a)}},r)}));return o.a.createElement("div",{className:"btn-group"},a)}}]),n}(a.Component)),O=(n(21),function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={label:""},e.onLabelChange=function(t){e.setState({label:t.target.value}),console.log(e.state.label)},e.onSubmit=function(t){t.preventDefault(),e.props.addItem(e.state.label),e.setState({label:""})},e}return Object(m.a)(n,[{key:"render",value:function(){this.props.addItem;return o.a.createElement("form",{className:"item-add-form d-flex",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"form-control",onChange:this.onLabelChange,placeholder:"What needs to be done",value:this.state.label}),o.a.createElement("button",{className:"btn btn-outline-secondary"},"Add"))}}]),n}(a.Component)),j=(n(22),n(23),function(){return o.a.createElement("header",null,o.a.createElement("div",{class:"title-block"},o.a.createElement("i",{class:"fa fa-pencil btn-sm title-icon","aria-hidden":"true"}),o.a.createElement("h3",{class:"title"},"Todo List")),o.a.createElement("ul",{class:"navigation"},o.a.createElement("li",{class:"navigation-item"},o.a.createElement("a",null,"Main page")),o.a.createElement("li",{class:"navigation-item"},o.a.createElement("a",null,"About Us"))))}),y=function(){return o.a.createElement("footer",null,o.a.createElement("i",{class:"fa fa-instagram","aria-hidden":"true"}),o.a.createElement("i",{class:"fa fa-facebook-official","aria-hidden":"true"}),o.a.createElement("i",{class:"fa fa-twitter-square","aria-hidden":"true"}))},I=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).maxId=100,e.state={todos:[e.createTodoItem("Drink Coffe"),e.createTodoItem("Two"),e.createTodoItem("Three")],term:"",filter:""},e.deliteItem=function(t){e.setState((function(e){var n=e.todos,a=n.findIndex((function(e){return e.id===t}));return{todos:[].concat(Object(s.a)(n.slice(0,a)),Object(s.a)(n.slice(a+1)))}}))},e.onSearchChange=function(t){e.setState({term:t})},e.onFilterChange=function(t){e.setState({filter:t})},e.searchItem=function(e,t){return 0===t.length?e:e.filter((function(e){return e.label.toLowerCase().indexOf(t.toLowerCase())>-1}))},e.filterItem=function(e,t){switch(t){case"all":return e;case"done":return e.filter((function(e){return e.done}));case"active":return e.filter((function(e){return!e.done}));default:return e}},e.addItem=function(t){var n=e.createTodoItem(t);e.setState((function(e){var t=e.todos;return{todos:[].concat(Object(s.a)(t),[n])}}))},e.onToggleImportant=function(t){e.setState((function(n){var a=n.todos;return{todos:e.toggleProperty(a,t,"important")}}))},e.onToggleDone=function(t){e.setState((function(n){var a=n.todos;return{todos:e.toggleProperty(a,t,"done")}}))},e}return Object(m.a)(n,[{key:"createTodoItem",value:function(e){return{label:e,important:!1,done:!1,id:this.maxId++}}},{key:"toggleProperty",value:function(e,t,n){var a=e.findIndex((function(e){return e.id===t})),o=e[a],r=Object(i.a)(Object(i.a)({},o),{},Object(c.a)({},n,!o[n]));return[].concat(Object(s.a)(e.slice(0,a)),[r],Object(s.a)(e.slice(a+1)))}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.term,a=e.filter,r=t.filter((function(e){return e.done})).length,l=t.filter((function(e){return!1===e.done})).length,c=this.searchItem(this.filterItem(t,a),n);return o.a.createElement(o.a.Fragment,null,o.a.createElement(j,null),o.a.createElement("div",{className:"todo-app"},o.a.createElement(h,{toDo:l,done:r}),o.a.createElement("div",{className:"top-panel d-flex"},o.a.createElement(b,{onSearchChange:this.onSearchChange}),o.a.createElement(E,{filter:a,onFilterChange:this.onFilterChange})),o.a.createElement(v,{todos:c,onDeleted:this.deliteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),o.a.createElement(O,{addItem:this.addItem})),o.a.createElement(y,null))}}]),n}(a.Component);l.a.render(o.a.createElement(I,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.7c928cf6.chunk.js.map