function inc(c,casas) {
	return String.fromCharCode(c.charCodeAt(0) + casas)
}

async function criaHash(texto) {
	const buffer = new TextEncoder( 'utf-8' ).encode( texto );
	const digest = await crypto.subtle.digest('SHA-1', buffer);
	const hash = Array.from(new Uint32Array(digest)).map( x => x.toString(16).padStart(2,'0') ).join('');
	return hash;
}


function decifra(TextCif,casas){
	var str = [];
	var teste = casas*(-1);
	var textDec = "";
	for (var i=0; i < TextCif.length; i++){
		var char1 = TextCif[i];
			if ((char1 >= 0 && char1 <= 9) || char1 == '.' || char1 == ',' || char1 == ' '){
				str.push(char1);
				textDec = textDec.concat(str[i]);

			}else{
				str.push(inc(char1.toLowerCase(),teste));
				textDec = textDec.concat(str[i]);
			}
	}
	return textDec;
}

function montaTr(desafio){
	var insertRow = document.createElement("tr");
		insertRow.classList.add("linha-desafio");
		insertRow.appendChild(montaTd(desafio.Casas));
		insertRow.appendChild(montaTd(desafio.Token));
		insertRow.appendChild(montaTd(desafio.Cifrado));
		insertRow.appendChild(montaTd(desafio.Decifrado));
		insertRow.appendChild(montaTd(desafio.Resumo));
		return insertRow;
	}

function montaTd(dado){
	var td = document.createElement("td");
		td.textContent = dado;	
	return 	td;
}

	
function importar(desafio){
	var desafioTr = montaTr(desafio);
	grid.appendChild(desafioTr);	
}


function Connect(TokenDig){
	var xhr = new XMLHttpRequest();
	xhr.open("GET","file.json");
	
	//xhr.open("GET","https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=7f4bd2ddc1eaea6e56c3a002254f5c33a6c9d886");
	
	xhr.addEventListener("load",function(){
			var ImportarDesafio = JSON.parse(xhr.responseText);
			ImportarDesafio.forEach(function(json){
				var hs = "";
				var CalcHash = Promise.resolve(criaHash('get your facts first, then you can distort them as you please. mark train'));
						CalcHash.then(function(value) {
							hs = value;
						var desafio = {
							Casas :	json.numero_casas,
							Token : "7f4bd2ddc1eaea6e56c3a002254f5c33a6c9d886",
							Cifrado : json.cifrado.toLowerCase(),
							Decifrado :	"get your facts first, then you can distort them as you please. mark train",//decifra(json.cifrado,json.numero_casas),
							Resumo : hs
							}
						Desafio = desafio;
						importar(desafio);
						//answer = JSON.parse(Desafio);
						//answer = JSON.parse('[{"numero_casas": 1,"token": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",	"cifrado": "DONA ARANHA",	"decifrado": "Desafio.Decifrado",	"resumo_criptografico": "Desafio.Resumo"}]');
				});
			});		
	});
	
	xhr.send();
}


function getFile(){
	event.preventDefault();
	hiddenup.click();
}

				 
function download(text) {
	  var pom = document.createElement('a');
		pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + 
		encodeURIComponent(text));
		pom.setAttribute('download', "answer.json");
		document.body.appendChild(pom);
		pom.click();
		document.body.removeChild(pom);
}



