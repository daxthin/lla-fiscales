import{r as n,j as e}from"./index-7a03aa50.js";const c=({name:a,children:t})=>{const[s,l]=n.useState(!1);return window.addEventListener("click",r=>{r.target.className.includes("dropdown")||l(!1)}),e.jsxs("div",{className:"dropdown",children:[e.jsxs("div",{className:"flex flex-row justify-center items-center",onClick:()=>l(!s),children:[e.jsx("button",{className:"dropdown-btn font-bold",children:a}),e.jsx("div",{className:"min-w-[25px]",children:e.jsx("img",{src:"../../public/sort-down.png",alt:""})})]}),e.jsx("div",{className:`dropdown-list transition-opacity duration-200 ${s?"opacity-100":"opacity-0 pointer-events-none"} bg-white absolute rounded-[10px] p-4 mt-4 z-10`,children:e.jsx("ul",{className:"flex flex-col gap-1",children:t})})]})},i=()=>e.jsxs("div",{className:"w-[350px] border border-black flex flex-row items-center gap-2",children:[e.jsx("div",{className:"p-2",children:e.jsx("img",{src:"../../public/Search.png",alt:""})}),e.jsx("input",{type:"text",placeholder:"Buscar contenido",className:"border-none outline-none"})]}),x=()=>e.jsxs("nav",{className:"w-full flex flex-row justify-around items-center bg-white p-4",children:[e.jsxs("div",{className:"flex flex-row gap-8 justify-center items-center",children:[e.jsx("img",{src:"../../public/lla_logo.png",alt:"",draggable:!1}),e.jsx("a",{href:"/",className:"text-black border-b-[3px] w-[94px] text-center p-1 border-b-violet-700 font-bold text-base",children:"Home"}),e.jsxs(c,{name:"Cómo fiscalizar",children:[e.jsx("li",{children:e.jsx("a",{href:"/involved-people",className:"text-black font-semibold text-base",children:"Personas que intervienen"})}),e.jsx("li",{children:e.jsx("a",{href:"/before-vote",className:"text-black font-semibold text-base",children:"El paso a paso"})}),e.jsx("li",{children:e.jsx("a",{href:"/",className:"text-black font-semibold text-base",children:"El certificado de Escrutinio"})}),e.jsx("li",{children:e.jsx("a",{href:"/",className:"text-black font-semibold text-base",children:"Trampas comunes"})}),e.jsx("li",{children:e.jsx("a",{href:"/",className:"text-black font-semibold text-base",children:"Boletas y documentos válidos"})}),e.jsx("li",{children:e.jsx("a",{href:"/",className:"text-black font-semibold text-base",children:"Cuándo, cómo y dónde denunciar"})})]})]}),e.jsx(i,{})]}),m=()=>e.jsxs("footer",{className:"bg-black flex flex-row items-center justify-between pb-28 pt-32 pr-36 pl-36 mt-20 self-end",children:[e.jsx("h2",{className:"text-white font-bold text-base",children:"Fiscales La Libertad Avanza"}),e.jsxs("div",{className:"flex flex-row gap-4",children:[e.jsx("a",{href:"",children:e.jsx("img",{src:"../../public/Instagram.png",alt:""})}),e.jsx("a",{href:"",children:e.jsx("img",{src:"../../public/Facebook.png",alt:""})})]})]});export{m as F,x as N};