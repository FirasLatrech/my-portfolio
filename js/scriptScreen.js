$.fn.lookAt=function(t,e){let o;null===e&&(e=!1);let{x:s}=t,{y:i}=t;this.data("position")&&!0!==e?o=this.data("position"):(o={x:this.offset().left,y:this.offset().top},this.data("position",o));let n=Math.atan2(i-o.y,s-o.x);this.css("transform",`rotate(${n}rad)`)};class Followme{static initClass(){this.prototype.defaults={dumping:1,disable:!1,coordiantes_to_follow:{x:0,y:0},offset:{x:0,y:0},onChange(t){}}}setCoordinates(t){return this.options.coordiantes_to_follow=t}follow(){let t;this.element.data("dumping")?t=this.element.data("dumping"):(t=this.element.data("dumping")||this.options.dumping,this.element.data("dumping",t));let e=this.element.offset(),o=this.options.offset.x+this.options.coordiantes_to_follow.x-e.left,s=this.options.offset.y+this.options.coordiantes_to_follow.y-e.top,i={x:e.left+o/t,y:e.top+s/t};if(this.element.css({left:i.x,top:i.y}),this.options.onChange(i),!this.disable)return requestAnimationFrame(()=>this.follow())}constructor(t,e){this.options=$.extend({},this.defaults,e),this.element=$(t),this.disable=this.options.disable,this.disable||this.follow()}}Followme.initClass();let elements=[{type:"donut",number:5},{type:"square",number:10},{type:"diamond",number:10},{type:"sausage",number:10},{type:"plus",number:10}],items=[];$.each(elements,function(t,e){let o=500>=$(window).width()?Math.min(e.number,5):e.number;for(let s=0;s<o;s++){let i=$(`<div class="item_container"><div class="${e.type}"></div></div>`);i.css({left:Math.random()*$(window).width(),top:Math.random()*$(window).height()}),items.push(i),$("body").append(i)}});const LA=new Followme("#lookat-target",{onChange:t=>$.each(items,(e,o)=>requestAnimationFrame(()=>$(o).lookAt({x:t.x,y:t.y})))});$(window).on("mousemove.followme",t=>LA.setCoordinates({x:t.pageX,y:t.pageY}));