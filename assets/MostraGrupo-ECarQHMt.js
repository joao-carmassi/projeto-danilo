import{C as m,T as _,s as x,_ as g,c as i,a as t,b as d,w as h,t as f,F as C,r as w,d as e,o as a,e as P,f as k}from"./index-DJkHB5Z-.js";const b={components:{CardProduto:m,TituloCategoria:_},data(){return{id:this.$route.params.id,SProdutos:x(),produtos:{}}},watch:{"$route.params.id":{immediate:!0,handler(){this.id=this.$route.params.id,this.baixaProdutos()}}},methods:{async baixaProdutos(){var o;this.produtos=(await this.SProdutos).getProdutos,this.produtos=this.produtos[this.id],(o=document.getElementById("tituloCategoria"))==null||o.scrollIntoView()}}},y={class:"px-5 md:px-24 lg:px-52 flex flex-col gap-5"},B={class:"mt-7 px-2"},T={class:"breadcrumbs text-sm"},v={class:"flex gap-x-3 md:gap-x-6 gap-y-10 flex-wrap"};function V(o,r,$,L,s,N){const n=e("TituloCategoria"),l=e("RouterLink"),u=e("CardProduto");return a(),i("section",y,[t("div",B,[d(n,{categoria:s.id,id:"tituloCategoria"},null,8,["categoria"]),t("div",T,[t("ul",null,[t("li",null,[d(l,{to:"/"},{default:h(()=>r[0]||(r[0]=[P("Home")])),_:1})]),t("li",null,f(s.id),1)])])]),t("div",v,[(a(!0),i(C,null,w(s.produtos,(c,p)=>(a(),k(u,{class:"min-w-40 w-1/6 flex-grow",key:p,produto:c},null,8,["produto"]))),128))])])}const E=g(b,[["render",V]]);export{E as default};