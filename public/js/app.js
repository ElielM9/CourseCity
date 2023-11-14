const hamburguer=document.querySelector(".hamburguer"),cartBtn=document.querySelector("#cart .cart-icon"),cartProducts=document.querySelector("#cart-products"),contenedorCart=document.querySelector("#cart-list tbody"),vaciarCartBtn=document.querySelector("#vaciar-carrito"),listaCursos=document.querySelector("#lista-cursos");let articulosCarrito=[];function eventListeners(){hamburguer.addEventListener("click",()=>{document.querySelector(".header__barra .nav").classList.toggle("activo")}),cartBtn.addEventListener("click",()=>{cartProducts.classList.toggle("cart__products--active")}),window.addEventListener("scroll",()=>{document.querySelector(".header__barra .nav").classList.remove("activo"),cartProducts.classList.remove("cart__products--active")}),listaCursos.addEventListener("click",agregarCurso),cartProducts.addEventListener("click",eliminarCurso),vaciarCartBtn.addEventListener("click",()=>{articulosCarrito=[],cleanHTML()}),loadLocalStorage()}function loadLocalStorage(){articulosCarrito=JSON.parse(localStorage.getItem("cart"))||[],shoppingCartHTML()}function agregarCurso(t){if(t.preventDefault(),t.target.classList.contains("agregar-carrito")){leerDatosCurso(t.target.parentElement.parentElement)}}function leerDatosCurso(t){const r={imagen:t.querySelector(".curso__img").src,titulo:t.querySelector(".curso__nombre").textContent,precio:t.querySelector(".curso__precio").textContent,id:t.querySelector("a").getAttribute("data-id"),cantidad:1},e=articulosCarrito.some(t=>t.id===r.id);if(e){const t=articulosCarrito.map(t=>t.id==r.id?(t.cantidad++,t):t);articulosCarrito=[...t]}e||(articulosCarrito=[...articulosCarrito,r]),shoppingCartHTML()}function eliminarCurso(t){if(t.preventDefault(),t.target.classList.contains("delete-btn")){const r=t.target.getAttribute("data-id");articulosCarrito=articulosCarrito.filter(t=>t.id!==r),shoppingCartHTML()}}function shoppingCartHTML(){cleanHTML(),articulosCarrito.forEach(t=>{const{imagen:r,titulo:e,precio:a,cantidad:o,id:n}=t,c=document.createElement("tr");c.innerHTML=`\n      <td>\n       <img src="${r}"/>\n      </td>\n      <td>\n        ${e}\n      </td>\n      <td>\n        ${a}\n      </td>\n      <td>\n        ${o}\n      </td>\n      <td>\n        <a href="#">\n         <svg class="delete-btn delete-btn-icon" data-id="${n}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>\n        </a>\n      </td>\n      `,contenedorCart.appendChild(c)}),syncStorage()}function syncStorage(){localStorage.setItem("cart",JSON.stringify(articulosCarrito))}function cleanHTML(){for(;contenedorCart.firstChild;)contenedorCart.removeChild(contenedorCart.firstChild)}document.addEventListener("DOMContentLoaded",eventListeners);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJoYW1idXJndWVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2FydEJ0biIsImNhcnRQcm9kdWN0cyIsImNvbnRlbmVkb3JDYXJ0IiwidmFjaWFyQ2FydEJ0biIsImxpc3RhQ3Vyc29zIiwiYXJ0aWN1bG9zQ2Fycml0byIsImV2ZW50TGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIndpbmRvdyIsInJlbW92ZSIsImFncmVnYXJDdXJzbyIsImVsaW1pbmFyQ3Vyc28iLCJjbGVhbkhUTUwiLCJsb2FkTG9jYWxTdG9yYWdlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNob3BwaW5nQ2FydEhUTUwiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJjb250YWlucyIsImxlZXJEYXRvc0N1cnNvIiwicGFyZW50RWxlbWVudCIsImN1cnNvIiwiaW5mb0N1cnNvIiwiaW1hZ2VuIiwic3JjIiwidGl0dWxvIiwidGV4dENvbnRlbnQiLCJwcmVjaW8iLCJpZCIsImdldEF0dHJpYnV0ZSIsImNhbnRpZGFkIiwiZXhpc3RlIiwic29tZSIsImN1cnNvcyIsIm1hcCIsImN1cnNvSWQiLCJmaWx0ZXIiLCJmb3JFYWNoIiwicm93IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwic3luY1N0b3JhZ2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoiQUFDQSxNQUFNQSxXQUFhQyxTQUFTQyxjQUFjLGVBQ3BDQyxRQUFVRixTQUFTQyxjQUFjLG9CQUdqQ0UsYUFBZUgsU0FBU0MsY0FBYyxrQkFDdENHLGVBQWlCSixTQUFTQyxjQUFjLG9CQUN4Q0ksY0FBZ0JMLFNBQVNDLGNBQWMsbUJBQ3ZDSyxZQUFjTixTQUFTQyxjQUFjLGlCQUMzQyxJQUFJTSxpQkFBbUIsR0FJdkIsU0FBU0MsaUJBRVBULFdBQVdVLGlCQUFpQixRQUFTLEtBQ3ZCVCxTQUFTQyxjQUFjLHVCQUUvQlMsVUFBVUMsT0FBTyxZQUd2QlQsUUFBUU8saUJBQWlCLFFBQVMsS0FDaENOLGFBQWFPLFVBQVVDLE9BQU8sNEJBR2hDQyxPQUFPSCxpQkFBaUIsU0FBVSxLQUNwQlQsU0FBU0MsY0FBYyx1QkFFL0JTLFVBQVVHLE9BQU8sVUFDckJWLGFBQWFPLFVBQVVHLE9BQU8sNEJBT2hDUCxZQUFZRyxpQkFBaUIsUUFBU0ssY0FJdENYLGFBQWFNLGlCQUFpQixRQUFTTSxlQUl2Q1YsY0FBY0ksaUJBQWlCLFFBQVMsS0FDdENGLGlCQUFtQixHQUNuQlMsY0FHRkMsbUJBSUYsU0FBU0EsbUJBQ1BWLGlCQUFtQlcsS0FBS0MsTUFBTUMsYUFBYUMsUUFBUSxVQUFZLEdBRS9EQyxtQkFTRixTQUFTUixhQUFhUyxHQUdwQixHQUZBQSxFQUFFQyxpQkFFRUQsRUFBRUUsT0FBT2YsVUFBVWdCLFNBQVMsbUJBQW9CLENBSWxEQyxlQUgwQkosRUFBRUUsT0FBT0csY0FBY0EsZ0JBV3JELFNBQVNELGVBQWVFLEdBS3RCLE1BQU1DLEVBQVksQ0FDaEJDLE9BQVFGLEVBQU01QixjQUFjLGVBQWUrQixJQUMzQ0MsT0FBUUosRUFBTTVCLGNBQWMsa0JBQWtCaUMsWUFDOUNDLE9BQVFOLEVBQU01QixjQUFjLGtCQUFrQmlDLFlBQzlDRSxHQUFJUCxFQUFNNUIsY0FBYyxLQUFLb0MsYUFBYSxXQUMxQ0MsU0FBVSxHQU1OQyxFQUFTaEMsaUJBQWlCaUMsS0FBTVgsR0FBVUEsRUFBTU8sS0FBT04sRUFBVU0sSUFHdkUsR0FBSUcsRUFBUSxDQUNWLE1BQU1FLEVBQVNsQyxpQkFBaUJtQyxJQUFLYixHQUMvQkEsRUFBTU8sSUFBTU4sRUFBVU0sSUFDeEJQLEVBQU1TLFdBR0NULEdBR0FBLEdBR1h0QixpQkFBbUIsSUFBSWtDLEdBR3BCRixJQUVIaEMsaUJBQW1CLElBQUlBLGlCQUFrQnVCLElBSzNDUixtQkFTRixTQUFTUCxjQUFjUSxHQUdyQixHQUZBQSxFQUFFQyxpQkFFRUQsRUFBRUUsT0FBT2YsVUFBVWdCLFNBQVMsY0FBZSxDQUU3QyxNQUFNaUIsRUFBVXBCLEVBQUVFLE9BQU9ZLGFBQWEsV0FHdEM5QixpQkFBbUJBLGlCQUFpQnFDLE9BQVFmLEdBQVVBLEVBQU1PLEtBQU9PLEdBRW5FckIsb0JBT0osU0FBU0EsbUJBRVBOLFlBSUFULGlCQUFpQnNDLFFBQVNoQixJQUN4QixNQUFNRSxPQUFFQSxFQUFNRSxPQUFFQSxFQUFNRSxPQUFFQSxFQUFNRyxTQUFFQSxFQUFRRixHQUFFQSxHQUFPUCxFQUMzQ2lCLEVBQU05QyxTQUFTK0MsY0FBYyxNQUNuQ0QsRUFBSUUsVUFBWSxrQ0FFRGpCLDBDQUdURSx1Q0FHQUUsdUNBR0FHLCtHQUlrREYsc1RBTXhEaEMsZUFBZTZDLFlBQVlILEtBSTdCSSxjQUdGLFNBQVNBLGNBQ1A5QixhQUFhK0IsUUFBUSxPQUFRakMsS0FBS2tDLFVBQVU3QyxtQkFNOUMsU0FBU1MsWUFHUCxLQUFPWixlQUFlaUQsWUFDcEJqRCxlQUFla0QsWUFBWWxELGVBQWVpRCxZQXhMOUNyRCxTQUFTUyxpQkFBaUIsbUJBQW9CRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBWYXJpYWJsZXMgTmF2XHJcbmNvbnN0IGhhbWJ1cmd1ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaGFtYnVyZ3VlcmApO1xyXG5jb25zdCBjYXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2NhcnQgLmNhcnQtaWNvbmApO1xyXG5cclxuLy8gVmFyaWFibGVzIGNhcnJpdG9cclxuY29uc3QgY2FydFByb2R1Y3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2NhcnQtcHJvZHVjdHNgKTtcclxuY29uc3QgY29udGVuZWRvckNhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2FydC1saXN0IHRib2R5YCk7XHJcbmNvbnN0IHZhY2lhckNhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdmFjaWFyLWNhcnJpdG9gKTtcclxuY29uc3QgbGlzdGFDdXJzb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbGlzdGEtY3Vyc29zYCk7XHJcbmxldCBhcnRpY3Vsb3NDYXJyaXRvID0gW107XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGBET01Db250ZW50TG9hZGVkYCwgZXZlbnRMaXN0ZW5lcnMpO1xyXG5cclxuZnVuY3Rpb24gZXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgLyogQWwgZGFyIENMSUNLIGVuIGVsIGJvdG9uIGBoYW1idXJndWVyYC4gYWx0ZXJuYSBsYSBjbGFzZSBgYWN0aXZvYCBlbiBlbCBgbmF2YC4gU2UgdXNhIHBhcmEgbW9zdHJhciB5IG9jdWx0YXIgbGEgbmF2Ki9cclxuICBoYW1idXJndWVyLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmhlYWRlcl9fYmFycmEgLm5hdmApO1xyXG5cclxuICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKGBhY3Rpdm9gKTtcclxuICB9KTtcclxuXHJcbiAgY2FydEJ0bi5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsICgpID0+IHtcclxuICAgIGNhcnRQcm9kdWN0cy5jbGFzc0xpc3QudG9nZ2xlKGBjYXJ0X19wcm9kdWN0cy0tYWN0aXZlYCk7XHJcbiAgfSk7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGBzY3JvbGxgLCAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaGVhZGVyX19iYXJyYSAubmF2YCk7XHJcblxyXG4gICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoYGFjdGl2b2ApO1xyXG4gICAgY2FydFByb2R1Y3RzLmNsYXNzTGlzdC5yZW1vdmUoYGNhcnRfX3Byb2R1Y3RzLS1hY3RpdmVgKTtcclxuICB9KTtcclxuXHJcbiAgLy8gRGFyIENMSUNLIGVuIGFncmVnYXIgY2Fycml0byBtYW5kYSBhIGxsYW1hciBhIGxhIGZ1bmNpb24gYWdyZWdhckNhcnJpdG9cclxuXHJcbiAgLyogTGEgbMOtbmVhIGBsaXN0YUN1cnNvcy5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGFncmVnYXJDdXJzbyk7YCBhw7FhZGUgdW4gZXZlbnRvIGVuIGVsIGVsZW1lbnRvXHJcbiBgbGlzdGFDdXJzb3NgLiBEYXIgQ0xJQ0sgZW4gYGxpc3RhQ3Vyc29zYCBsbGFtYSBhIGxhIGZ1bmNpb24gYGFncmVnYXJDdXJzb2AqL1xyXG4gIGxpc3RhQ3Vyc29zLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgYWdyZWdhckN1cnNvKTtcclxuXHJcbiAgLyogTGEgbMOtbmVhIGBjYXJ0LmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgZWxpbWluYXJDdXJzbyk7YCBhw7FhZGUgdW4gZXZlbnRvIGVuIGVsIGVsZW1lbnRvIGBjYXJ0YC4gXHJcbiAgRGFyIENMSUNLIGVuIGBjYXJ0YCwgbGxhbWEgYSBsYSBmdW5jaW9uIGBlbGltaW5hckN1cnNvYC4gKi9cclxuICBjYXJ0UHJvZHVjdHMuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBlbGltaW5hckN1cnNvKTtcclxuXHJcbiAgLyogRXN0YSBsw61uZWEgYcOxYWRlIHVuIGV2ZW50byBhbCBlbGVtZW50byB2YWNpYXJDYXJ0QnRuYC4gXHJcbiAgRGFyIENMSUNLIGEgZXN0ZSBlbGVtZW50byBlamVjdXRhIGVsIGPDs2RpZ28gZGVudHJvIGRlIGxhIGFycm93IGZ1bmN0aW9uIHkgdmFjw61hIGVsIGNhcnJpdG8qL1xyXG4gIHZhY2lhckNhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKSA9PiB7XHJcbiAgICBhcnRpY3Vsb3NDYXJyaXRvID0gW107IC8vIFJlc2V0ZWFyIGVsIGFycmVnbG9cclxuICAgIGNsZWFuSFRNTCgpO1xyXG4gIH0pO1xyXG5cclxuICBsb2FkTG9jYWxTdG9yYWdlKCk7XHJcbn1cclxuXHJcbi8vIEZ1bmNpb25lc1xyXG5mdW5jdGlvbiBsb2FkTG9jYWxTdG9yYWdlKCkge1xyXG4gIGFydGljdWxvc0NhcnJpdG8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjYXJ0YCkpIHx8IFtdO1xyXG5cclxuICBzaG9wcGluZ0NhcnRIVE1MKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMYSBmdW5jaW9uIGBhZ3JlZ2FyQ3Vyc29gIHNlIHVzYSBwYXJhIGHDsWFkaXIgdW4gY3Vyc28gYWwgY2Fycml0byBkZSBjb21wcmFzIGN1YW5kbyBzZSBsZSBkYSBDTElDSyBhbCBib3RvbiBjb24gbGEgY2xhc2VcclxuICogYGFncmVnYXItY2Fycml0b2AuXHJcbiAqIEBwYXJhbSBlIC0gRWwgcGFyYW1ldHJvIGBlYCBlcyB1biBvYmpldG8gZGUgZXZlbnRvIHF1ZSBzZSBwYXNhIGEgbGEgZnVuY2lvbiBgYWdyZWdhckN1cnNvYC5cclxuICogTm9ybWFsbWVudGUgc2UgdXNhIHBhcmEgYWNjZWRlciBhIGluZm9ybWFjacOzbiBzb2JyZSBlbCBldmVudG8gcXVlIGRlc2VuY2FkZW7DsyBsYSBmdW5jacOzbiwgY29tbyBlbCBlbGVtZW50byBkZSBkZXN0aW5vIGVuIGVsIHF1ZSBzZSBoaXpvIENMSUNLLiBFbiBlc3RlIGNhc28sIGxhIGZ1bmNpw7NuIHNlIGVzdMOhIHV0aWxpemFuZG8gY29tbyB1biBjb250cm9sYWRvciBkZSBldmVudG9zIHBhcmEgdW4gQ0xJQ0tcclxuICovXHJcbmZ1bmN0aW9uIGFncmVnYXJDdXJzbyhlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGBhZ3JlZ2FyLWNhcnJpdG9gKSkge1xyXG4gICAgY29uc3QgY3Vyc29TZWxlY2Npb25hZG8gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJzb1NlbGVjY2lvbmFkbyk7XHJcblxyXG4gICAgbGVlckRhdG9zQ3Vyc28oY3Vyc29TZWxlY2Npb25hZG8pO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIExhIGZ1bmNpb24gYGxlZXJEYXRvc0N1cnNvYCBhw7FhZGUgdW4gY3Vyc28gYWwgY2Fycml0byBkZSBjb21wcmFzIHkgYWN0dWFsaXphIGxhIGNhbnRpZGFkIHNpIGVsIGN1cnNvIHlhIGV4aXN0ZSBlbiBlbCBjYXJyaXRvLlxyXG4gKiBAcGFyYW0gY3Vyc28gLSBFbCBwYXJhbWV0cm8gYGN1cnNvYCBlcyB1bmEgcmVmZXJlbmNpYSBhIHVuIGVsZW1lbnRvIEhUTUwgcXVlIHJlcHJlc2VudGEgdW4gY3Vyc28uXHJcbiAqL1xyXG5mdW5jdGlvbiBsZWVyRGF0b3NDdXJzbyhjdXJzbykge1xyXG4gIC8vIGNvbnNvbGUubG9nKGN1cnNvKTtcclxuXHJcbiAgLyogQ3JlYSB1biBvYmpldG8gbGxhbWFkbyBgaW5mb0N1cnNvYCBxdWUgY29udGllbmUgaW5mb3JtYWNpw7NuIHNvYnJlIGVsIGN1cnNvIHNlbGVjY2lvbmFkby4gVXRpbGl6YSBlbCBtw6l0b2RvIGBxdWVyeVNlbGVjdG9yYCBwYXJhIHNlbGVjY2lvbmFyIGVsZW1lbnRvcyBlc3BlY8OtZmljb3MgZGVudHJvIGRlbCBlbGVtZW50byBgY3Vyc29cclxuICB5IHJlY3VwZXJhciBzdXMgdmFsb3Jlcy4gKi9cclxuICBjb25zdCBpbmZvQ3Vyc28gPSB7XHJcbiAgICBpbWFnZW46IGN1cnNvLnF1ZXJ5U2VsZWN0b3IoYC5jdXJzb19faW1nYCkuc3JjLFxyXG4gICAgdGl0dWxvOiBjdXJzby5xdWVyeVNlbGVjdG9yKGAuY3Vyc29fX25vbWJyZWApLnRleHRDb250ZW50LFxyXG4gICAgcHJlY2lvOiBjdXJzby5xdWVyeVNlbGVjdG9yKGAuY3Vyc29fX3ByZWNpb2ApLnRleHRDb250ZW50LFxyXG4gICAgaWQ6IGN1cnNvLnF1ZXJ5U2VsZWN0b3IoYGFgKS5nZXRBdHRyaWJ1dGUoYGRhdGEtaWRgKSxcclxuICAgIGNhbnRpZGFkOiAxLFxyXG4gIH07XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKGluZm9DdXJzbyk7XHJcblxyXG4gIC8qIENvbXBydWViYSBzaSB1biBjdXJzbyBleGlzdGUgZW4gZWwgY2Fycml0by4gSXRlcmEgc29icmUgZWwgYXJyYXkgYGFydGljdWxvc0NhcnJpdG9gIHkgY29tcHJ1ZWJhIHNpIGFsZ8O6biBjdXJzbyB0aWVuZSBlbCBtaXNtbyBpZCBxdWUgZWwgYGluZm9DdXJzb2AgcXVlIHNlIGVzdMOhIGFncmVnYWRvLiBTaSBleGlzdGUgdW4gY3Vyc28gY29uIGVsIG1pc21vIGlkLCBsYSB2YXJpYWJsZSBgZXhpc3RlYCBzZXLDoSB0cnVlLCBkZSBsbyBjb250cmFyaW8gc2Vyw6EgZmFsc2UuICovXHJcbiAgY29uc3QgZXhpc3RlID0gYXJ0aWN1bG9zQ2Fycml0by5zb21lKChjdXJzbykgPT4gY3Vyc28uaWQgPT09IGluZm9DdXJzby5pZCk7XHJcblxyXG4gIC8qIFJldmlzYSBzaSBlbCBjdXJzbyBzZWxlY2Npb25hZG8geWEgZXhpc3RlIGVuIGVsIGNhcnJpdG8uIFNpIGV4aXN0ZSwgaW5jcmVtZW50YSBsYSBjYW50aWRhZCBkZWwgY3Vyc28gZW4gMS4gU2kgbm8sIGHDsWFkZSBlbCBjdXJzbyBhbCBhcnJheSBkZWwgY2Fycml0byBkZSBjb21wcmFzIGBhcnRpY3Vsb3NDYXJyaXRvYC4gKi9cclxuICBpZiAoZXhpc3RlKSB7XHJcbiAgICBjb25zdCBjdXJzb3MgPSBhcnRpY3Vsb3NDYXJyaXRvLm1hcCgoY3Vyc28pID0+IHtcclxuICAgICAgaWYgKGN1cnNvLmlkID09IGluZm9DdXJzby5pZCkge1xyXG4gICAgICAgIGN1cnNvLmNhbnRpZGFkKys7XHJcblxyXG4gICAgICAgIC8vIFJldG9ybmEgZWwgb2JqZXRvIGFjdHVhbGl6YWRvXHJcbiAgICAgICAgcmV0dXJuIGN1cnNvO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFJldG9ybmEgbG9zIG5vIGR1cGxpY2Fkb3NcclxuICAgICAgICByZXR1cm4gY3Vyc287XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgYXJ0aWN1bG9zQ2Fycml0byA9IFsuLi5jdXJzb3NdO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFleGlzdGUpIHtcclxuICAgIC8vIEFncmVnYSBlbGVtZW50b3MgYWwgYXJyZWdsbyBgYXJ0aWN1bG9zQ2Fycml0b2BcclxuICAgIGFydGljdWxvc0NhcnJpdG8gPSBbLi4uYXJ0aWN1bG9zQ2Fycml0bywgaW5mb0N1cnNvXTtcclxuICB9XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKGFydGljdWxvc0NhcnJpdG8pO1xyXG5cclxuICBzaG9wcGluZ0NhcnRIVE1MKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMYSBmdW5jaW9uIGBlbGltaW5hckN1cnNvYCBzZSB1c2EgcGFyYSBlbGltaW5hciB1biBjdXJzbyBkZWwgY2Fycml0byBkZSBjb21wcmFzIGZpbHRyYW5kbyBlbCBjdXJzbyBjb24gZWwgaWQgZXNwZWNpZmljYWRvIGVuIGVsIGFycmVnbG8gYGFydGljdWxvc0NhcnJpdG9gLlxyXG4gKiBAcGFyYW0gZSAtIEVsIHBhcmFtZXRybyBgZWAgZXMgdW4gb2JqZXRvIGRlIGV2ZW50byBxdWUgc2UgcGFzYSBhIGxhIGZ1bmNpw7NuIGBlbGltaW5hckN1cnNvYC4gU2UgdXRpbGl6YSBub3JtYWxtZW50ZSBwYXJhIGFjY2VkZXIgYSBsYSBpbmZvcm1hY2nDs24gc29icmUgZWwgZXZlbnRvIHF1ZSBkZXNlbmNhZGVuw7MgbGEgZnVuY2nDs24sXHJcbiAqIGNvbW8gZWxlbGVtZW50byBvYmpldGl2byBvIGN1YWxxdWllciBkYXRvIGFzb2NpYWRvIGNvbiBlbCBldmVudG8uIEVuIGVzdGUgY2FzbywgbGEgZnVuY2nDs24gdXRpbGl6YSBgZWAgcGFyYVxyXG4gKiBwcmV2ZW5pclxyXG4gKi9cclxuZnVuY3Rpb24gZWxpbWluYXJDdXJzbyhlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGBkZWxldGUtYnRuYCkpIHtcclxuICAgIC8vIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgIGNvbnN0IGN1cnNvSWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoYGRhdGEtaWRgKTtcclxuXHJcbiAgICAvLyBFbGltaW5hciBkZWwgYXJyZWdsbyBkZWwgY2Fycml0b1xyXG4gICAgYXJ0aWN1bG9zQ2Fycml0byA9IGFydGljdWxvc0NhcnJpdG8uZmlsdGVyKChjdXJzbykgPT4gY3Vyc28uaWQgIT09IGN1cnNvSWQpO1xyXG4gICAgLy8gY29uc29sZS5sb2coYXJ0aWN1bG9zQ2Fycml0byk7XHJcbiAgICBzaG9wcGluZ0NhcnRIVE1MKCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogTGEgZnVuY2lvbiBgc2hvcHBpbmdDYXJ0SFRNTCgpYCBnZW5lcmEgY8OzZGlnbyBIVE1MIHBhcmEgZWwgY2Fycml0byBkZSBjb21wcmFzIGJhc2FkbyBlbiBsb3MgZWxlbWVudG9zIGRlbCBhcnJheSBgYXJ0aWN1bG9zQ2Fycml0b2AuXHJcbiAqL1xyXG5mdW5jdGlvbiBzaG9wcGluZ0NhcnRIVE1MKCkge1xyXG4gIC8qIExhIGZ1bmNpb24gY2xlYW5IVE1MIHNlIGVqZWN1dGEgYW50ZXMgZGUgZ2VuZXJhciBlbCBIVE1MIGRlbCBjYXJyaXRvIHBhcmEgbGltcGlhciBlbCBIVE1MIGFudGVyaW9yIGFudGVzIGRlIGHDsWFkaXIgZWwgbnVldm8gY29udGVuaWRvLiovXHJcbiAgY2xlYW5IVE1MKCk7XHJcblxyXG4gIC8vIFJlY29ycmUgZWwgY2Fycml0byB5IGdlbmVyYSBlbCBIVE1MXHJcbiAgLyogSXRlcmEgc29icmUgY2FkYSBlbGVtZW50byBkZWwgYXJyYXkgYGFydGljdWxvc0NhcnJpdG9gLiBmb3JFYWNoLCBlamVjdXRhIGVsIGPDs2RpZ28gZGVudHJvIGRlIGxhIGFycm93IGZ1bmN0aW9uLiBFbiBlc3RlIGNhc28gZXN0w6EgZ2VuZXJhbmRvIGPDs2RpZ28gSFRNTCBwYXJhIGNhZGEgZWxlbWVudG8gZGVsIGNhcnJpdG8gZGUgY29tcHJhcyB5IGxvIGHDsWFkZSBhbCBlbGVtZW50byBgY29udGVuZWRvckNhcnRgLiAqL1xyXG4gIGFydGljdWxvc0NhcnJpdG8uZm9yRWFjaCgoY3Vyc28pID0+IHtcclxuICAgIGNvbnN0IHsgaW1hZ2VuLCB0aXR1bG8sIHByZWNpbywgY2FudGlkYWQsIGlkIH0gPSBjdXJzbztcclxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYHRyYCk7XHJcbiAgICByb3cuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8dGQ+XHJcbiAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VufVwiLz5cclxuICAgICAgPC90ZD5cclxuICAgICAgPHRkPlxyXG4gICAgICAgICR7dGl0dWxvfVxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGQ+XHJcbiAgICAgICAgJHtwcmVjaW99XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICAke2NhbnRpZGFkfVxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGQ+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgPHN2ZyBjbGFzcz1cImRlbGV0ZS1idG4gZGVsZXRlLWJ0bi1pY29uXCIgZGF0YS1pZD1cIiR7aWR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB0cmFuc2Zvcm06IDttc0ZpbHRlcjo7XCI+PHBhdGggZD1cIm0xNi4xOTIgNi4zNDQtNC4yNDMgNC4yNDItNC4yNDItNC4yNDItMS40MTQgMS40MTRMMTAuNTM1IDEybC00LjI0MiA0LjI0MiAxLjQxNCAxLjQxNCA0LjI0Mi00LjI0MiA0LjI0MyA0LjI0MiAxLjQxNC0xLjQxNEwxMy4zNjQgMTJsNC4yNDItNC4yNDJ6XCI+PC9wYXRoPjwvc3ZnPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC90ZD5cclxuICAgICAgYDtcclxuXHJcbiAgICAvKiBBw7FhZGUgZWwgaHRtbCBnZW5lcmFkbyBhbCBlbGVtZW50byBgY29udGVuZWRvckNhcnRgLiBTaWduaWZpY2EgcXVlIHNlIGHDsWFkaXLDoSBjb21vIGVsZW1lbnRvIGhpam8gZGUgYGNvbnRlbmVkb3JDYXJ0YCBub3JtYWxtZW50ZSBzZSBhw7FhZGUgY29tbyB1biB0Ym9keSAqL1xyXG4gICAgY29udGVuZWRvckNhcnQuYXBwZW5kQ2hpbGQocm93KTtcclxuICB9KTtcclxuXHJcbiAgLy8gQWdyZWdhciBjYXJyaXRvIGFsIHN0b3JhZ2VcclxuICBzeW5jU3RvcmFnZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzeW5jU3RvcmFnZSgpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgY2FydGAsIEpTT04uc3RyaW5naWZ5KGFydGljdWxvc0NhcnJpdG8pKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIExhIGZ1bmNpb24gY2xlYW5IVE1MIGVsaW1pbmEgdG9kb3MgbG9zIGVsZW1lbnRvcyBoaWpvIGRlbCBlbGVtZW50byBgY29udGVuZWRvckNhcnRgLlxyXG4gKi9cclxuZnVuY3Rpb24gY2xlYW5IVE1MKCkge1xyXG4gIC8vIEZvcm1hIGxlbnRhXHJcbiAgLy8gY29udGVuZWRvckNhcnQuaW5uZXJIVE1MID0gYGA7XHJcbiAgd2hpbGUgKGNvbnRlbmVkb3JDYXJ0LmZpcnN0Q2hpbGQpIHtcclxuICAgIGNvbnRlbmVkb3JDYXJ0LnJlbW92ZUNoaWxkKGNvbnRlbmVkb3JDYXJ0LmZpcnN0Q2hpbGQpO1xyXG4gIH1cclxufVxyXG4iXX0=
