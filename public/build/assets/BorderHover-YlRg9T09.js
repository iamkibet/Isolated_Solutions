import{r as p,j as e}from"./app-eak8Ibuv.js";const c=({children:t,defBorderColor:s="bg-gray-300",hovBorderColor:r="bg-slate-800",className:a})=>{const[n,o]=p.useState(!1),l=()=>{o(!0)},u=()=>{o(!1)},i=n?r:s;return e.jsxs("span",{className:`relative group w-fit z-10 ${a}`,onMouseEnter:l,onMouseLeave:u,children:[e.jsx("span",{className:`absolute left-0 bottom-0 w-full h-0.5 group-hover:w-0 transition-all duration-700 ${s}`}),e.jsx("span",{className:`absolute left-0 bottom-0 pt-px w-0 h-0.5 group-hover:w-full transition-all duration-700 ${i}`}),t]})},d=c;export{d as B};