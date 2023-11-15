const hamburguer=document.querySelector(".hamburguer"),cartBtn=document.querySelector(".cart__icons"),cartProducts=document.querySelector("#cart-products"),contenedorCart=document.querySelector("#cart-list"),vaciarCartBtn=document.querySelector("#vaciar-carrito"),listaCursos=document.querySelector("#lista-cursos");let articulosCarrito=[];const cartCounter=document.querySelector("#cart-counter"),cartTotal=document.querySelector(".cart__total--span");function eventListeners(){hamburguer.addEventListener("click",()=>{document.querySelector(".header__barra .nav").classList.toggle("activo")}),cartBtn.addEventListener("click",()=>{cartProducts.classList.toggle("cart__products--active")}),window.addEventListener("scroll",()=>{document.querySelector(".header__barra .nav").classList.remove("activo"),cartProducts.classList.remove("cart__products--active")}),listaCursos.addEventListener("click",agregarCurso),cartProducts.addEventListener("click",eliminarCurso),vaciarCartBtn.addEventListener("click",cleanCart),loadLocalStorage()}function loadLocalStorage(){articulosCarrito=JSON.parse(localStorage.getItem("cart"))||[],shoppingCartHTML()}function agregarCurso(t){if(t.preventDefault(),t.target.classList.contains("agregar-carrito")){leerDatosCurso(t.target.parentElement.parentElement)}}function leerDatosCurso(t){const r={imagen:t.querySelector(".curso__img").src,titulo:t.querySelector(".curso__nombre").textContent,precio:t.querySelector(".curso__precio").textContent,id:t.querySelector("a").getAttribute("data-id"),cantidad:1},e=articulosCarrito.some(t=>t.id===r.id);if(e){const t=articulosCarrito.map(t=>t.id==r.id?(t.cantidad++,t):t);articulosCarrito=[...t]}e||(articulosCarrito=[...articulosCarrito,r]),shoppingCartHTML()}function eliminarCurso(t){if(t.preventDefault(),t.target.classList.contains("delete-btn")){const r=t.target.getAttribute("data-id");articulosCarrito=articulosCarrito.filter(t=>t.id!==r),shoppingCartHTML()}}function shoppingCartHTML(){cleanHTML(),articulosCarrito.forEach(t=>{const{imagen:r,titulo:e,precio:a,cantidad:o,id:n}=t,c=document.createElement("tr");c.innerHTML=`\n      <td>\n       <img src="${r}"/>\n      </td>\n      <td>\n        ${e}\n      </td>\n      <td>\n        ${a}\n      </td>\n      <td>\n        ${o}\n      </td>\n      <td>\n        <a href="#">\n         <svg class="delete-btn delete-btn-icon" data-id="${n}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>\n        </a>\n      </td>\n      `,contenedorCart.appendChild(c)}),updateTotal(),syncStorage()}function updateTotal(){let t=0,r=0;articulosCarrito.forEach(e=>{r+=e.cantidad,t+=parseInt(e.cantidad*e.precio.slice(1))}),cartCounter.textContent=r,cartTotal.textContent="$"+t}function cleanCart(){articulosCarrito=[],cartCounter.textContent=0,cartTotal.textContent="$0",cleanHTML(),syncStorage()}function syncStorage(){localStorage.setItem("cart",JSON.stringify(articulosCarrito))}function cleanHTML(){for(;contenedorCart.firstChild;)contenedorCart.removeChild(contenedorCart.firstChild)}document.addEventListener("DOMContentLoaded",eventListeners);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJoYW1idXJndWVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2FydEJ0biIsImNhcnRQcm9kdWN0cyIsImNvbnRlbmVkb3JDYXJ0IiwidmFjaWFyQ2FydEJ0biIsImxpc3RhQ3Vyc29zIiwiYXJ0aWN1bG9zQ2Fycml0byIsImNhcnRDb3VudGVyIiwiY2FydFRvdGFsIiwiZXZlbnRMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwid2luZG93IiwicmVtb3ZlIiwiYWdyZWdhckN1cnNvIiwiZWxpbWluYXJDdXJzbyIsImNsZWFuQ2FydCIsImxvYWRMb2NhbFN0b3JhZ2UiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2hvcHBpbmdDYXJ0SFRNTCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImNvbnRhaW5zIiwibGVlckRhdG9zQ3Vyc28iLCJwYXJlbnRFbGVtZW50IiwiY3Vyc28iLCJpbmZvQ3Vyc28iLCJpbWFnZW4iLCJzcmMiLCJ0aXR1bG8iLCJ0ZXh0Q29udGVudCIsInByZWNpbyIsImlkIiwiZ2V0QXR0cmlidXRlIiwiY2FudGlkYWQiLCJleGlzdGUiLCJzb21lIiwiY3Vyc29zIiwibWFwIiwiY3Vyc29JZCIsImZpbHRlciIsImNsZWFuSFRNTCIsImZvckVhY2giLCJyb3ciLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJ1cGRhdGVUb3RhbCIsInN5bmNTdG9yYWdlIiwidG90YWwiLCJ0b3RhbE9mQ291cnNlcyIsInBhcnNlSW50Iiwic2xpY2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoiQUFDQSxNQUFNQSxXQUFhQyxTQUFTQyxjQUFjLGVBQ3BDQyxRQUFVRixTQUFTQyxjQUFjLGdCQUdqQ0UsYUFBZUgsU0FBU0MsY0FBYyxr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U1csaUJBQWlCLG1CQUFvQkQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVmFyaWFibGVzIE5hdlxyXG5jb25zdCBoYW1idXJndWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmhhbWJ1cmd1ZXJgKTtcclxuY29uc3QgY2FydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXJ0X19pY29uc2ApO1xyXG5cclxuLy8gVmFyaWFibGVzIGNhcnJpdG9cclxuY29uc3QgY2FydFByb2R1Y3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2NhcnQtcHJvZHVjdHNgKTtcclxuY29uc3QgY29udGVuZWRvckNhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2FydC1saXN0YCk7XHJcbmNvbnN0IHZhY2lhckNhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdmFjaWFyLWNhcnJpdG9gKTtcclxuY29uc3QgbGlzdGFDdXJzb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbGlzdGEtY3Vyc29zYCk7XHJcbmxldCBhcnRpY3Vsb3NDYXJyaXRvID0gW107XHJcblxyXG5jb25zdCBjYXJ0Q291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjYXJ0LWNvdW50ZXJgKTtcclxuY29uc3QgY2FydFRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhcnRfX3RvdGFsLS1zcGFuYCk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGBET01Db250ZW50TG9hZGVkYCwgZXZlbnRMaXN0ZW5lcnMpO1xyXG5cclxuZnVuY3Rpb24gZXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgLyogQWwgZGFyIENMSUNLIGVuIGVsIGJvdG9uIGBoYW1idXJndWVyYC4gYWx0ZXJuYSBsYSBjbGFzZSBgYWN0aXZvYCBlbiBlbCBgbmF2YC4gU2UgdXNhIHBhcmEgbW9zdHJhciB5IG9jdWx0YXIgbGEgbmF2Ki9cclxuICBoYW1idXJndWVyLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmhlYWRlcl9fYmFycmEgLm5hdmApO1xyXG5cclxuICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKGBhY3Rpdm9gKTtcclxuICB9KTtcclxuXHJcbiAgY2FydEJ0bi5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsICgpID0+IHtcclxuICAgIGNhcnRQcm9kdWN0cy5jbGFzc0xpc3QudG9nZ2xlKGBjYXJ0X19wcm9kdWN0cy0tYWN0aXZlYCk7XHJcbiAgfSk7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGBzY3JvbGxgLCAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaGVhZGVyX19iYXJyYSAubmF2YCk7XHJcblxyXG4gICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoYGFjdGl2b2ApO1xyXG4gICAgY2FydFByb2R1Y3RzLmNsYXNzTGlzdC5yZW1vdmUoYGNhcnRfX3Byb2R1Y3RzLS1hY3RpdmVgKTtcclxuICB9KTtcclxuXHJcbiAgLy8gRGFyIENMSUNLIGVuIGFncmVnYXIgY2Fycml0byBtYW5kYSBhIGxsYW1hciBhIGxhIGZ1bmNpb24gYWdyZWdhckNhcnJpdG9cclxuXHJcbiAgLyogTGEgbMOtbmVhIGBsaXN0YUN1cnNvcy5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGFncmVnYXJDdXJzbyk7YCBhw7FhZGUgdW4gZXZlbnRvIGVuIGVsIGVsZW1lbnRvXHJcbiBgbGlzdGFDdXJzb3NgLiBEYXIgQ0xJQ0sgZW4gYGxpc3RhQ3Vyc29zYCBsbGFtYSBhIGxhIGZ1bmNpb24gYGFncmVnYXJDdXJzb2AqL1xyXG4gIGxpc3RhQ3Vyc29zLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgYWdyZWdhckN1cnNvKTtcclxuXHJcbiAgLyogTGEgbMOtbmVhIGBjYXJ0LmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgZWxpbWluYXJDdXJzbyk7YCBhw7FhZGUgdW4gZXZlbnRvIGVuIGVsIGVsZW1lbnRvIGBjYXJ0YC4gXHJcbiAgRGFyIENMSUNLIGVuIGBjYXJ0YCwgbGxhbWEgYSBsYSBmdW5jaW9uIGBlbGltaW5hckN1cnNvYC4gKi9cclxuICBjYXJ0UHJvZHVjdHMuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBlbGltaW5hckN1cnNvKTtcclxuXHJcbiAgLyogRXN0YSBsw61uZWEgYcOxYWRlIHVuIGV2ZW50byBhbCBlbGVtZW50byB2YWNpYXJDYXJ0QnRuYC4gXHJcbiAgRGFyIENMSUNLIGEgZXN0ZSBlbGVtZW50byBlamVjdXRhIGVsIGPDs2RpZ28gZGVudHJvIGRlIGxhIGFycm93IGZ1bmN0aW9uIHkgdmFjw61hIGVsIGNhcnJpdG8qL1xyXG4gIHZhY2lhckNhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBjbGVhbkNhcnQpO1xyXG5cclxuICBsb2FkTG9jYWxTdG9yYWdlKCk7XHJcbn1cclxuXHJcbi8vIEZ1bmNpb25lc1xyXG5mdW5jdGlvbiBsb2FkTG9jYWxTdG9yYWdlKCkge1xyXG4gIGFydGljdWxvc0NhcnJpdG8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjYXJ0YCkpIHx8IFtdO1xyXG5cclxuICBzaG9wcGluZ0NhcnRIVE1MKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMYSBmdW5jaW9uIGBhZ3JlZ2FyQ3Vyc29gIHNlIHVzYSBwYXJhIGHDsWFkaXIgdW4gY3Vyc28gYWwgY2Fycml0byBkZSBjb21wcmFzIGN1YW5kbyBzZSBsZSBkYSBDTElDSyBhbCBib3RvbiBjb24gbGEgY2xhc2VcclxuICogYGFncmVnYXItY2Fycml0b2AuXHJcbiAqIEBwYXJhbSBlIC0gRWwgcGFyYW1ldHJvIGBlYCBlcyB1biBvYmpldG8gZGUgZXZlbnRvIHF1ZSBzZSBwYXNhIGEgbGEgZnVuY2lvbiBgYWdyZWdhckN1cnNvYC5cclxuICogTm9ybWFsbWVudGUgc2UgdXNhIHBhcmEgYWNjZWRlciBhIGluZm9ybWFjacOzbiBzb2JyZSBlbCBldmVudG8gcXVlIGRlc2VuY2FkZW7DsyBsYSBmdW5jacOzbiwgY29tbyBlbCBlbGVtZW50byBkZSBkZXN0aW5vIGVuIGVsIHF1ZSBzZSBoaXpvIENMSUNLLiBFbiBlc3RlIGNhc28sIGxhIGZ1bmNpw7NuIHNlIGVzdMOhIHV0aWxpemFuZG8gY29tbyB1biBjb250cm9sYWRvciBkZSBldmVudG9zIHBhcmEgdW4gQ0xJQ0tcclxuICovXHJcbmZ1bmN0aW9uIGFncmVnYXJDdXJzbyhlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGBhZ3JlZ2FyLWNhcnJpdG9gKSkge1xyXG4gICAgY29uc3QgY3Vyc29TZWxlY2Npb25hZG8gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJzb1NlbGVjY2lvbmFkbyk7XHJcblxyXG4gICAgbGVlckRhdG9zQ3Vyc28oY3Vyc29TZWxlY2Npb25hZG8pO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIExhIGZ1bmNpb24gYGxlZXJEYXRvc0N1cnNvYCBhw7FhZGUgdW4gY3Vyc28gYWwgY2Fycml0byBkZSBjb21wcmFzIHkgYWN0dWFsaXphIGxhIGNhbnRpZGFkIHNpIGVsIGN1cnNvIHlhIGV4aXN0ZSBlbiBlbCBjYXJyaXRvLlxyXG4gKiBAcGFyYW0gY3Vyc28gLSBFbCBwYXJhbWV0cm8gYGN1cnNvYCBlcyB1bmEgcmVmZXJlbmNpYSBhIHVuIGVsZW1lbnRvIEhUTUwgcXVlIHJlcHJlc2VudGEgdW4gY3Vyc28uXHJcbiAqL1xyXG5mdW5jdGlvbiBsZWVyRGF0b3NDdXJzbyhjdXJzbykge1xyXG4gIC8vIGNvbnNvbGUubG9nKGN1cnNvKTtcclxuXHJcbiAgLyogQ3JlYSB1biBvYmpldG8gbGxhbWFkbyBgaW5mb0N1cnNvYCBxdWUgY29udGllbmUgaW5mb3JtYWNpw7NuIHNvYnJlIGVsIGN1cnNvIHNlbGVjY2lvbmFkby4gVXRpbGl6YSBlbCBtw6l0b2RvIGBxdWVyeVNlbGVjdG9yYCBwYXJhIHNlbGVjY2lvbmFyIGVsZW1lbnRvcyBlc3BlY8OtZmljb3MgZGVudHJvIGRlbCBlbGVtZW50byBgY3Vyc29cclxuICB5IHJlY3VwZXJhciBzdXMgdmFsb3Jlcy4gKi9cclxuICBjb25zdCBpbmZvQ3Vyc28gPSB7XHJcbiAgICBpbWFnZW46IGN1cnNvLnF1ZXJ5U2VsZWN0b3IoYC5jdXJzb19faW1nYCkuc3JjLFxyXG4gICAgdGl0dWxvOiBjdXJzby5xdWVyeVNlbGVjdG9yKGAuY3Vyc29fX25vbWJyZWApLnRleHRDb250ZW50LFxyXG4gICAgcHJlY2lvOiBjdXJzby5xdWVyeVNlbGVjdG9yKGAuY3Vyc29fX3ByZWNpb2ApLnRleHRDb250ZW50LFxyXG4gICAgaWQ6IGN1cnNvLnF1ZXJ5U2VsZWN0b3IoYGFgKS5nZXRBdHRyaWJ1dGUoYGRhdGEtaWRgKSxcclxuICAgIGNhbnRpZGFkOiAxLFxyXG4gIH07XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKGluZm9DdXJzbyk7XHJcblxyXG4gIC8qIENvbXBydWViYSBzaSB1biBjdXJzbyBleGlzdGUgZW4gZWwgY2Fycml0by4gSXRlcmEgc29icmUgZWwgYXJyYXkgYGFydGljdWxvc0NhcnJpdG9gIHkgY29tcHJ1ZWJhIHNpIGFsZ8O6biBjdXJzbyB0aWVuZSBlbCBtaXNtbyBpZCBxdWUgZWwgYGluZm9DdXJzb2AgcXVlIHNlIGVzdMOhIGFncmVnYWRvLiBTaSBleGlzdGUgdW4gY3Vyc28gY29uIGVsIG1pc21vIGlkLCBsYSB2YXJpYWJsZSBgZXhpc3RlYCBzZXLDoSB0cnVlLCBkZSBsbyBjb250cmFyaW8gc2Vyw6EgZmFsc2UuICovXHJcbiAgY29uc3QgZXhpc3RlID0gYXJ0aWN1bG9zQ2Fycml0by5zb21lKChjdXJzbykgPT4gY3Vyc28uaWQgPT09IGluZm9DdXJzby5pZCk7XHJcblxyXG4gIC8qIFJldmlzYSBzaSBlbCBjdXJzbyBzZWxlY2Npb25hZG8geWEgZXhpc3RlIGVuIGVsIGNhcnJpdG8uIFNpIGV4aXN0ZSwgaW5jcmVtZW50YSBsYSBjYW50aWRhZCBkZWwgY3Vyc28gZW4gMS4gU2kgbm8sIGHDsWFkZSBlbCBjdXJzbyBhbCBhcnJheSBkZWwgY2Fycml0byBkZSBjb21wcmFzIGBhcnRpY3Vsb3NDYXJyaXRvYC4gKi9cclxuICBpZiAoZXhpc3RlKSB7XHJcbiAgICBjb25zdCBjdXJzb3MgPSBhcnRpY3Vsb3NDYXJyaXRvLm1hcCgoY3Vyc28pID0+IHtcclxuICAgICAgaWYgKGN1cnNvLmlkID09IGluZm9DdXJzby5pZCkge1xyXG4gICAgICAgIGN1cnNvLmNhbnRpZGFkKys7XHJcblxyXG4gICAgICAgIC8vIFJldG9ybmEgZWwgb2JqZXRvIGFjdHVhbGl6YWRvXHJcbiAgICAgICAgcmV0dXJuIGN1cnNvO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFJldG9ybmEgbG9zIG5vIGR1cGxpY2Fkb3NcclxuICAgICAgICByZXR1cm4gY3Vyc287XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgYXJ0aWN1bG9zQ2Fycml0byA9IFsuLi5jdXJzb3NdO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFleGlzdGUpIHtcclxuICAgIC8vIEFncmVnYSBlbGVtZW50b3MgYWwgYXJyZWdsbyBgYXJ0aWN1bG9zQ2Fycml0b2BcclxuICAgIGFydGljdWxvc0NhcnJpdG8gPSBbLi4uYXJ0aWN1bG9zQ2Fycml0bywgaW5mb0N1cnNvXTtcclxuICB9XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKGFydGljdWxvc0NhcnJpdG8pO1xyXG5cclxuICBzaG9wcGluZ0NhcnRIVE1MKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMYSBmdW5jaW9uIGBlbGltaW5hckN1cnNvYCBzZSB1c2EgcGFyYSBlbGltaW5hciB1biBjdXJzbyBkZWwgY2Fycml0byBkZSBjb21wcmFzIGZpbHRyYW5kbyBlbCBjdXJzbyBjb24gZWwgaWQgZXNwZWNpZmljYWRvIGVuIGVsIGFycmVnbG8gYGFydGljdWxvc0NhcnJpdG9gLlxyXG4gKiBAcGFyYW0gZSAtIEVsIHBhcmFtZXRybyBgZWAgZXMgdW4gb2JqZXRvIGRlIGV2ZW50byBxdWUgc2UgcGFzYSBhIGxhIGZ1bmNpw7NuIGBlbGltaW5hckN1cnNvYC4gU2UgdXRpbGl6YSBub3JtYWxtZW50ZSBwYXJhIGFjY2VkZXIgYSBsYSBpbmZvcm1hY2nDs24gc29icmUgZWwgZXZlbnRvIHF1ZSBkZXNlbmNhZGVuw7MgbGEgZnVuY2nDs24sXHJcbiAqIGNvbW8gZWxlbGVtZW50byBvYmpldGl2byBvIGN1YWxxdWllciBkYXRvIGFzb2NpYWRvIGNvbiBlbCBldmVudG8uIEVuIGVzdGUgY2FzbywgbGEgZnVuY2nDs24gdXRpbGl6YSBgZWAgcGFyYVxyXG4gKiBwcmV2ZW5pclxyXG4gKi9cclxuZnVuY3Rpb24gZWxpbWluYXJDdXJzbyhlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGBkZWxldGUtYnRuYCkpIHtcclxuICAgIC8vIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgIGNvbnN0IGN1cnNvSWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoYGRhdGEtaWRgKTtcclxuXHJcbiAgICAvLyBFbGltaW5hciBkZWwgYXJyZWdsbyBkZWwgY2Fycml0b1xyXG4gICAgYXJ0aWN1bG9zQ2Fycml0byA9IGFydGljdWxvc0NhcnJpdG8uZmlsdGVyKChjdXJzbykgPT4gY3Vyc28uaWQgIT09IGN1cnNvSWQpO1xyXG4gICAgLy8gY29uc29sZS5sb2coYXJ0aWN1bG9zQ2Fycml0byk7XHJcbiAgICBzaG9wcGluZ0NhcnRIVE1MKCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogTGEgZnVuY2lvbiBgc2hvcHBpbmdDYXJ0SFRNTCgpYCBnZW5lcmEgY8OzZGlnbyBIVE1MIHBhcmEgZWwgY2Fycml0byBkZSBjb21wcmFzIGJhc2FkbyBlbiBsb3MgZWxlbWVudG9zIGRlbCBhcnJheSBgYXJ0aWN1bG9zQ2Fycml0b2AuXHJcbiAqL1xyXG5mdW5jdGlvbiBzaG9wcGluZ0NhcnRIVE1MKCkge1xyXG4gIC8qIExhIGZ1bmNpb24gY2xlYW5IVE1MIHNlIGVqZWN1dGEgYW50ZXMgZGUgZ2VuZXJhciBlbCBIVE1MIGRlbCBjYXJyaXRvIHBhcmEgbGltcGlhciBlbCBIVE1MIGFudGVyaW9yIGFudGVzIGRlIGHDsWFkaXIgZWwgbnVldm8gY29udGVuaWRvLiovXHJcbiAgY2xlYW5IVE1MKCk7XHJcblxyXG4gIC8vIFJlY29ycmUgZWwgY2Fycml0byB5IGdlbmVyYSBlbCBIVE1MXHJcbiAgLyogSXRlcmEgc29icmUgY2FkYSBlbGVtZW50byBkZWwgYXJyYXkgYGFydGljdWxvc0NhcnJpdG9gLiBmb3JFYWNoLCBlamVjdXRhIGVsIGPDs2RpZ28gZGVudHJvIGRlIGxhIGFycm93IGZ1bmN0aW9uLiBFbiBlc3RlIGNhc28gZXN0w6EgZ2VuZXJhbmRvIGPDs2RpZ28gSFRNTCBwYXJhIGNhZGEgZWxlbWVudG8gZGVsIGNhcnJpdG8gZGUgY29tcHJhcyB5IGxvIGHDsWFkZSBhbCBlbGVtZW50byBgY29udGVuZWRvckNhcnRgLiAqL1xyXG4gIGFydGljdWxvc0NhcnJpdG8uZm9yRWFjaCgoY3Vyc28pID0+IHtcclxuICAgIGNvbnN0IHsgaW1hZ2VuLCB0aXR1bG8sIHByZWNpbywgY2FudGlkYWQsIGlkIH0gPSBjdXJzbztcclxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYHRyYCk7XHJcbiAgICByb3cuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8dGQ+XHJcbiAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VufVwiLz5cclxuICAgICAgPC90ZD5cclxuICAgICAgPHRkPlxyXG4gICAgICAgICR7dGl0dWxvfVxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGQ+XHJcbiAgICAgICAgJHtwcmVjaW99XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICAke2NhbnRpZGFkfVxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGQ+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgPHN2ZyBjbGFzcz1cImRlbGV0ZS1idG4gZGVsZXRlLWJ0bi1pY29uXCIgZGF0YS1pZD1cIiR7aWR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB0cmFuc2Zvcm06IDttc0ZpbHRlcjo7XCI+PHBhdGggZD1cIm0xNi4xOTIgNi4zNDQtNC4yNDMgNC4yNDItNC4yNDItNC4yNDItMS40MTQgMS40MTRMMTAuNTM1IDEybC00LjI0MiA0LjI0MiAxLjQxNCAxLjQxNCA0LjI0Mi00LjI0MiA0LjI0MyA0LjI0MiAxLjQxNC0xLjQxNEwxMy4zNjQgMTJsNC4yNDItNC4yNDJ6XCI+PC9wYXRoPjwvc3ZnPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC90ZD5cclxuICAgICAgYDtcclxuXHJcbiAgICAvKiBBw7FhZGUgZWwgaHRtbCBnZW5lcmFkbyBhbCBlbGVtZW50byBgY29udGVuZWRvckNhcnRgLiBTaWduaWZpY2EgcXVlIHNlIGHDsWFkaXLDoSBjb21vIGVsZW1lbnRvIGhpam8gZGUgYGNvbnRlbmVkb3JDYXJ0YCBub3JtYWxtZW50ZSBzZSBhw7FhZGUgY29tbyB1biB0Ym9keSAqL1xyXG4gICAgY29udGVuZWRvckNhcnQuYXBwZW5kQ2hpbGQocm93KTtcclxuICB9KTtcclxuXHJcbiAgdXBkYXRlVG90YWwoKTtcclxuICAvLyBBZ3JlZ2FyIGNhcnJpdG8gYWwgc3RvcmFnZVxyXG4gIHN5bmNTdG9yYWdlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRvdGFsKCkge1xyXG4gIGxldCB0b3RhbCA9IDA7XHJcbiAgbGV0IHRvdGFsT2ZDb3Vyc2VzID0gMDtcclxuXHJcbiAgYXJ0aWN1bG9zQ2Fycml0by5mb3JFYWNoKChjdXJzbykgPT4ge1xyXG4gICAgdG90YWxPZkNvdXJzZXMgKz0gY3Vyc28uY2FudGlkYWQ7XHJcbiAgICB0b3RhbCArPSBwYXJzZUludChjdXJzby5jYW50aWRhZCAqIGN1cnNvLnByZWNpby5zbGljZSgxKSk7XHJcbiAgfSk7XHJcblxyXG4gIGNhcnRDb3VudGVyLnRleHRDb250ZW50ID0gdG90YWxPZkNvdXJzZXM7XHJcbiAgY2FydFRvdGFsLnRleHRDb250ZW50ID0gYCQke3RvdGFsfWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFuQ2FydCgpIHtcclxuICBhcnRpY3Vsb3NDYXJyaXRvID0gW107IC8vIFJlc2V0ZWFyIGVsIGFycmVnbG9cclxuICBjYXJ0Q291bnRlci50ZXh0Q29udGVudCA9IDA7XHJcbiAgY2FydFRvdGFsLnRleHRDb250ZW50ID0gYCQwYDtcclxuXHJcbiAgY2xlYW5IVE1MKCk7XHJcbiAgc3luY1N0b3JhZ2UoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3luY1N0b3JhZ2UoKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYGNhcnRgLCBKU09OLnN0cmluZ2lmeShhcnRpY3Vsb3NDYXJyaXRvKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMYSBmdW5jaW9uIGNsZWFuSFRNTCBlbGltaW5hIHRvZG9zIGxvcyBlbGVtZW50b3MgaGlqbyBkZWwgZWxlbWVudG8gYGNvbnRlbmVkb3JDYXJ0YC5cclxuICovXHJcbmZ1bmN0aW9uIGNsZWFuSFRNTCgpIHtcclxuICAvLyBGb3JtYSBsZW50YVxyXG4gIC8vIGNvbnRlbmVkb3JDYXJ0LmlubmVySFRNTCA9IGBgO1xyXG4gIHdoaWxlIChjb250ZW5lZG9yQ2FydC5maXJzdENoaWxkKSB7XHJcbiAgICBjb250ZW5lZG9yQ2FydC5yZW1vdmVDaGlsZChjb250ZW5lZG9yQ2FydC5maXJzdENoaWxkKTtcclxuICB9XHJcbn1cclxuIl19
