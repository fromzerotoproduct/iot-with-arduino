In questo codice, prima di tutto importiamo la libreria Johnny-Five. Quindi, creiamo un nuovo oggetto Board e aspettiamo che sia pronto, utilizzando il metodo on("ready").

All'interno della funzione ready, creiamo due oggetti Led per i pin 12 e 13 e li salviamo nelle variabili led1 e led2.

Infine, utilizziamo il metodo loop() di Johnny-Five per far lampeggiare i due LED alternativamente. Il metodo loop() esegue la funzione callback passata ogni 500 millisecondi. All'interno della funzione callback, chiamiamo il metodo toggle() su entrambi gli oggetti Led per alternare lo stato dei LED.