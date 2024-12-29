"use strict";
// Selecionando elementos do DOM
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
// Função para adicionar uma tarefa à lista
const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Por favor, insira uma tarefa.");
        return;
    }
    // Criar um novo item de lista
    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    // Adicionando um botão para remover a tarefa
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.style.marginLeft = "10px";
    removeButton.addEventListener("click", () => {
        taskList.removeChild(listItem);
    });
    // Adiciona o botão ao item da lista
    listItem.appendChild(removeButton);
    // Adiciona o item à lista
    taskList.appendChild(listItem);
    // Limpa o campo de entrada
    taskInput.value = "";
};
// Adicionar o evento de clique ao botão
addTaskButton.addEventListener("click", addTask);
// Adicionar o evento de tecla Enter no campo de entrada
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
