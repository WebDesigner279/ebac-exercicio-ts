"use strict";
// Função de multiplicação
function multiply(num1, num2) {
    return num1 * num2;
}
// Função de saudação
function greet(name) {
    return "Olá " + name;
}
// Manipulação DOM
document.addEventListener("DOMContentLoaded", () => {
    // Criando elementos no DOM
    const appDiv = document.createElement("div");
    appDiv.id = "app";
    const multiplicationResult = multiply(4, 5); // Exemplo de multiplicação
    const greetingMessage = greet("João"); // Exemplo de saudação
    const multiplicationDiv = document.createElement("div");
    multiplicationDiv.textContent = `Multiplicação: 4 x 5 = ${multiplicationResult}`;
    const greetingDiv = document.createElement("div");
    greetingDiv.textContent = greetingMessage;
    appDiv.appendChild(multiplicationDiv);
    appDiv.appendChild(greetingDiv);
    document.body.appendChild(appDiv);
});
