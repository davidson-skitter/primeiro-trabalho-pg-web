document.querySelector("#meuBotao").addEventListener("click", function() {
    document.querySelector("#mensagem").textContent = "Sejam fortes e corajosos! Não tenham medo nem fiquem aterrorizados por causa deles, pois o Senhor, o seu Deus, vai com vocês; ele nunca os deixará, nem os abandonará. Deuteronômio 31:6.";
    setTimeout(function() {
        mensagem.textContent = "";
    }, 20000);
});