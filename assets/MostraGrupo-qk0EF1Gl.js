import{C as p,T as m,s as _,_ as x,c as a,a as o,b as i,w as h,t as g,F as f,r as w,d as s,o as e,e as C,f as P}from"./index-CMn4zHQl.js";const k={components:{CardProduto:p,TituloCategoria:m},data(){return{id:this.$route.params.id,SProdutos:_(),produtos:{}}},watch:{"$route.params.id":{immediate:!0,handler(){this.id=this.$route.params.id,this.baixaProdutos()}}},methods:{async baixaProdutos(){this.produtos=(await this.SProdutos).getProdutos,this.produtos=this.produtos[this.id],window.scrollTo(0,0)}}},T={class:"px-5 md:px-24 lg:px-52 flex flex-col gap-5"},b={class:"mt-7 px-2"},v={class:"breadcrumbs text-sm"},y={class:"flex gap-x-3 md:gap-x-6 gap-y-10 flex-wrap"};function B($,r,L,N,t,S){const d=s("TituloCategoria"),n=s("RouterLink"),l=s("CardProduto");return e(),a("section",T,[o("div",b,[i(d,{categoria:t.id,id:"tituloCategoria"},null,8,["categoria"]),o("div",v,[o("ul",null,[o("li",null,[i(n,{to:"/"},{default:h(()=>r[0]||(r[0]=[C("Home")])),_:1})]),o("li",null,g(t.id),1)])])]),o("div",y,[(e(!0),a(f,null,w(t.produtos,(u,c)=>(e(),P(l,{class:"min-w-40 w-1/6 flex-grow",key:c,produto:u},null,8,["produto"]))),128))])])}const F=x(k,[["render",B]]);export{F as default};