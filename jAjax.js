
/**
*	@author	Pedro Ribeiro da Silva Neto - 	pcelta
*		    Data:							23/05/2011
*
*
*	Required jQuery JavaScript Library v1.5.1+
*
*	"Classe" responsável por efetuar requisições ajax
*
*	
*/


function CustomAjax(){


	/*ATRIBUTOS PRIVADOS*/
	var method 	= "POST",
		action	= "",
		data	= "param=false",
		async	= false;


	/*METODO PRIVADO QUE EFETUA A REQUISIÇÃO AJAX*/
	doAjax = function(){
		var retorno = null;
		retorno = $.ajax({
			type:	method,
			url:	action,
			data:	data,
			async:	async		
		}).responseText;
		return retorno;
	};

	/* METODOS PUBLICOS */
	
	
	/***	@param formulario
	 * 		@returns data
	 * 
	 *  Recebe o formulário como paramêtro
	 *	Observação: O formulário deve estar com o atributo action declarado
	 */
	this.slack = function(form){
		setAction($(form).attr("action"));
		setData($(form).serialize());
		return doAjax();
	}
	
	
	/***	@param url, data
	 * 		@returns data 		
	 * 		
	 *		-data 	= dados serializados que serão enviados pela requisição
	 *		-url 	= url alvo
	 * 
	 */
	this.simple = function(url, data){
		setAction(url);
		setData(data);
		return doAjax();
	};
	
	
	/***	@param url
	 * 		@returns data
	 * 
	 * 		Método para uma requisição simples sem envio de dados
	 */
	this.single = function(url){
		setAction(url);		
		return doAjax();
	};

	
	/***	@param url, data, method
	 * 		@returns data
	 * 
	 * 		-url 	= url alvo
	 *		-data 	= dados serializados que serão enviados pela requisição
	 *		-method = metodo de envio GET/POST
	 */
	this.advanced = function(url, data, method){
		setAction(url);
		setMethod(method);
		setData(data);
		return doAjax();		
	};




	/* METODOS GETS / SETS PRIVADOS, SÓ SÃO UTILIZADOS INTERNAMENTE */
	
	setMethod = function(newMethod){
		if(newData != "" || newData != null){
			method = newMethod;
		}		
	};
	getMethod = function(){
		return method;	
	};
	setAction = function(newAction){
		action = newAction;
	};
	getAction = function(){
		return action;
	};
	setData = function(newData){
		data = newData;
	};
	getData = function(){
		return data;
	};

}