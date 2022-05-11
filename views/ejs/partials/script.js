
var limite = (response) => {
    global.connection.collection("limite").insertOne(req.body);
    alert("inserido !");
}
/// fazer aqui a mensagem de verificação do elemen do valor se maior que o limite
//<% if(listLancamento.length > 0)( element => {%>
  //  if(element.valor > element.limite")
    //<p><%= "Seu valor limite é de " + element.limite %></p>
 // <% });%>   