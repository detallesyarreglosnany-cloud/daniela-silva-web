/* KubIA · registro anónimo de visitas y contactos (sin datos personales).
   Guarda: página, código de recomendación (si hay) y si es celular. */
(function(){
  var URL='https://bsljdecmnghumsyadzcj.supabase.co', KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzbGpkZWNtbmdodW1zeWFkemNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQxNjgyODYsImV4cCI6MjEwOTc0NDI4Nn0.TVpijEHFDEQKduP5Yi4Rd58MPcBEMZLlNNhmL9dn7CQ';
  
  function ref(){try{var s=JSON.parse(localStorage.getItem('kubia_ref')||'null');if(s&&s.c&&Date.now()-s.t<60*864e5)return s.c}catch(e){}
    var q=(new URLSearchParams(location.search).get('ref')||'').trim().toUpperCase();return /^[A-Z0-9-]{2,20}$/.test(q)?q:null}
  function rpc(fn,body){try{fetch(URL+'/rest/v1/rpc/'+fn,{method:'POST',keepalive:true,headers:{'apikey':KEY,'Authorization':'Bearer '+KEY,'Content-Type':'application/json'},body:JSON.stringify(body)}).catch(function(){})}catch(e){}}
  var pag=location.pathname.replace(/\.html$/,'')||'/';
  if(!/\/(admin|afiliados)/.test(pag))rpc('registrar_visita',{p_pagina:pag,p_ref:ref(),p_movil:/Mobi|Android/i.test(navigator.userAgent)});
  document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href*="wa.me/584221754245"]');if(!a)return;
    var txt=(a.textContent||'').trim().slice(0,60);var sec=a.closest('section');
    rpc('registrar_contacto',{p_ref:ref(),p_origen:(sec&&sec.id?sec.id+' · ':'')+txt,p_pagina:pag})},true);
  window.KUBIA_SB={url:URL,key:KEY};
})();
