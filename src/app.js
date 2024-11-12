/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const WHO_LIST = new Array("A two", "A lonely", "A lonely", "A lonely");
  const ACTION_LIST = new Array(
    "headed pinecone",
    "jogger kiked",
    "merchant kiked",
    "comedian burned"
  );
  const WHAT_LIST = new Array(
    "yellet at my sandwich",
    "my sandwich",
    "my car near",
    "my car in front"
  );
  const WHEN_LIST = new Array(
    "in my house",
    "on the street",
    "the toilet",
    "of the office"
  );

  function generadorDeExcusas() {
    const who = obtenerWhoAleatoria();
    const action = obtenerActionAleatoria();
    const what = obtenerWhatAleatoria();
    const when = obtenerWhenAleatoria();
    const excusa = generarExcusa(who, action, what, when);
    return excusa;
  }

  function obtenerElementoAleatorio(list) {
    const listPosition = Math.floor(Math.random() * list.length);
    return list[listPosition];
  }

  function obtenerWhoAleatoria() {
    return obtenerElementoAleatorio(WHO_LIST);
  }

  function obtenerActionAleatoria() {
    return obtenerElementoAleatorio(ACTION_LIST);
  }

  function obtenerWhatAleatoria() {
    return obtenerElementoAleatorio(WHAT_LIST);
  }

  function obtenerWhenAleatoria() {
    return obtenerElementoAleatorio(WHEN_LIST);
  }

  function generarExcusa(who, action, what, when) {
    return `${who} ${action} ${what} ${when}.`;
  }

  document.getElementById("excuses").innerHTML = generadorDeExcusas();
  //console.log("Hello Rigo from the console!");
};
