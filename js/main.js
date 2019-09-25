tit1.textContent="Desafio Codenation";
aba.textContent="Desafio - Codenation";

tit2.textContent = "Solução Desafio";

buscar.addEventListener("click",function(event){
	event.preventDefault();
	Connect(token);
});
	
gerar.addEventListener("click",function(event){
	event.preventDefault();
	answer = ('['+String.fromCharCode(13)+' {'+String.fromCharCode(13)+'	"numero_casas": '+Desafio.Casas+','+String.fromCharCode(13)+'	"token": "'+Desafio.Token+'",'+String.fromCharCode(13)+'	"cifrado": "'+Desafio.Cifrado+'",'+String.fromCharCode(13)+'	"decifrado": "'+Desafio.Decifrado+'",'+String.fromCharCode(13)+'	"resumo_criptografico": "'+Desafio.Resumo+'"'+String.fromCharCode(13)+' }'+String.fromCharCode(13)+']');
	txtjson.textContent = answer;	
});


form2.action="https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token="+usertoken;


		 // <form action="https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token="+usertoken  name="answer" method="POST" id="frm">
			// <input type="file" name="answer.json" value=answer>
		 // </form>
				 

