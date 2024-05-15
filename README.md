<h1>
  Asincronismo en JS
</h1>
<ul>
  <li>
    Codigo sincrono vs asíncrono
  </li>
</ul>
El código síncrono es como usualmente se escribe un programa, instrucciones que el programa va interpretando linea por linea, como en el siguiente ejemplo:
<div align="center">
  <img 
    src="https://github.com/Alejo-P/Asincronismo-JS/assets/150528715/f9c9fd9a-2dec-46b3-80bf-eb7295991630" 
    alt="Fig. Ejecucion de una peticion en JavaScript (para web Scraping)" 
    style="display: block; margin-left: auto; margin-right: auto; width: 45%;"
  />
  <br>
  <i>
    Fig. Ejecucion de una peticion en JavaScript (para web Scraping)
  </i>
</div>
En el codigo, la consulta a la pagina se hace de forma sincrona, lo que puede bloquearel programa hasta que recupere la infromacion que necesita para proseguir, el siguiente codigo usa async y  await para evitar el bloqueo del hilo principal:

<div align="center">
  <img 
    src="https://github.com/Alejo-P/Asincronismo-JS/assets/150528715/70300c8d-18cc-487c-a9bb-a9c5b689a2de" 
    alt="Fig, Uso de async y await en JavaScript" 
    style="display: block; margin-left: auto; margin-right: auto; width: 50%;"
  />
  <br>
  <i>
    Fig, Uso de async y await en JavaScript
  </i>
</div>

J.  Promesas
El uso de promesas hace posible manejar de mejor manera el código asíncrono en JavaScript, se puede crear promesas usando el constructor new Promise() que acepta como parámetros 2 funciones, revolve() -> indica que hacer si se resuelve la promesa y reject() -> indica que hacer si la promesa es rechazada, como el siguiente ejemplo:
 
Fig. Uso de asincronismo en JavaScript
K.  Async Await
El uso de async y await es otra forma de manejar código asíncrono, la palabra reservada async le indica a JavaScript que la función será ejecutada de forma asíncrona y la palabra reservada await indica que detenga la ejecución en la linea que se uso y espere a que se resuelva la promesa para continuar
 
Fig. Uso de async y await en JavaScript


![image](https://github.com/Alejo-P/Asincronismo-JS/assets/150528715/1cfbb7ff-5218-4bad-92bf-3e18e6eb1e20)

![image](https://github.com/Alejo-P/Asincronismo-JS/assets/150528715/31d5115c-247f-4e7c-9094-81a07a952519)
