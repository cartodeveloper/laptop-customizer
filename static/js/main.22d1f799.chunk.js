(this["webpackJsonplaptop-customizer-mariat"]=this["webpackJsonplaptop-customizer-mariat"]||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var s=r(0),n=r(1),a=r(8),c=r.n(a),o=(r(14),r(2)),i=r(3),u=r(5),p=r(4),l=(r(15),r(6)),m=r.n(l),h=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),j=function(e){Object(u.a)(r,e);var t=Object(p.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"feature__item",children:[Object(s.jsx)("input",{type:"radio",id:this.props.itemHash,className:"feature__option",name:m()(this.props.feature),checked:this.props.item.name===this.props.selected[this.props.feature].name,onChange:function(t){return e.props.updateFeature(e.props.feature,e.props.item)}}),Object(s.jsxs)("label",{htmlFor:this.props.itemHash,className:"feature__label",children:[this.props.item.name," (",h.format(this.props.item.cost),")"]})]},this.props.itemHash)}}]),r}(n.Component),d=function(e){Object(u.a)(r,e);var t=Object(p.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return Object(s.jsxs)("fieldset",{className:"feature",children:[Object(s.jsx)("legend",{className:"feature__name",children:Object(s.jsx)("h3",{children:this.props.feature})}),this.props.options]},this.props.featureHash)}}]),r}(n.Component),b=function(e){Object(u.a)(r,e);var t=Object(p.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.features).map((function(t,r){var n=t+"-"+r,a=e.props.features[t].map((function(r){var n=m()(JSON.stringify(r));return Object(s.jsx)(j,{selected:e.props.selected,itemHash:n,feature:t,item:r,updateFeature:e.props.updateFeature},r.name)}));return Object(s.jsx)(d,{feature:t,options:a,featureHash:n},r)}));return Object(s.jsxs)("form",{className:"main__form",children:[Object(s.jsx)("h2",{children:"Customize your laptop"}),t]})}}]),r}(n.Component),O=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),f=function(e){Object(u.a)(r,e);var t=Object(p.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"summary__option",children:[Object(s.jsxs)("div",{className:"summary__option__label",children:[this.props.feature," "]}),Object(s.jsx)("div",{className:"summary__option__value",children:this.props.selectedOption.name}),Object(s.jsx)("div",{className:"summary__option__cost",children:O.format(this.props.selectedOption.cost)})]},this.props.featureHash)}}]),r}(n.Component),y=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),v=function(e){Object(u.a)(r,e);var t=Object(p.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.selected).reduce((function(t,r){return t+e.props.selected[r].cost}),0);return Object(s.jsxs)("div",{className:"summary__total",children:[Object(s.jsx)("div",{className:"summary__total__label",children:"Total"}),Object(s.jsx)("div",{className:"summary__total__value",children:y.format(t)})]})}}]),r}(n.Component),_=function(e){Object(u.a)(r,e);var t=Object(p.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.selected).map((function(t,r){var n=t+"-"+r,a=e.props.selected[t];return Object(s.jsx)(f,{featureHash:n,selectedOption:a,const:a.const},a.name)}));return Object(s.jsxs)("section",{className:"main__summary",children:[Object(s.jsx)("h2",{children:"Your cart"}),t,Object(s.jsx)(v,{selected:this.props.selected})]})}}]),r}(n.Component),x={Processor:[{name:"17th Generation Intel Core HB (7 Core with donut spare)",cost:700},{name:"Professor X AMD Fire Breather with sidewinder technology",cost:1200}],"Operating System":[{name:"Ubuntu Linux 16.04",cost:200},{name:"Bodhi Linux",cost:300}],"Video Card":[{name:"Toyota Corolla 1.5v",cost:1150.98},{name:"Mind mild breeze 2000",cost:1345}],Display:[{name:'15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',cost:1500},{name:'15.3" HGTV (3840 x 2160) Home makeover edition',cost:1400}]},C=function(e){Object(u.a)(r,e);var t=Object(p.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return Object(s.jsx)("header",{children:Object(s.jsx)("h1",{children:"ELF Computing | Laptops"})})}}]),r}(n.Component),N=function(e){Object(u.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(o.a)(this,r);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={selected:{Processor:{name:"17th Generation Intel Core HB (7 Core with donut spare)",cost:700},"Operating System":{name:"Ubuntu Linux 16.04",cost:200},"Video Card":{name:"Toyota Corolla 1.5v",cost:1150.98},Display:{name:'15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',cost:1500}}},e.updateFeature=function(t,r){var s=Object.assign({},e.state.selected);s[t]=r,e.setState({selected:s})},e}return Object(i.a)(r,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(C,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(b,{selected:this.state.selected,features:x,updateFeature:this.updateFeature}),Object(s.jsx)(_,{selected:this.state.selected})]})]})}}]),r}(n.Component);c.a.render(Object(s.jsx)(N,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.22d1f799.chunk.js.map