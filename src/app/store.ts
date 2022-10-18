/* 
In dieser Datei legt man gewöhnlich einen Redux-Store an, der die
Slices aller Features zusammenführt und weitere Konfiguration vornimmt.
In einem React-Projekt wird der Store nur einmal im Einstiegspunkt
(index.tsx) importiert und im Provider verwendet.
Ansonsten findet alle Redux-Interakion in Komponenten durch die Hooks
statt.
Es kann aber sein dass man ihn in nicht-React-Code brauch - dann ist
es in Ordnung, ihn zu importieren.
Man sollte aber prüfen, ob man nicht statt dessen den Store-Zugriff
mit einem Thunk wegabstrahieren kann.
 */

// der Export ist nur da, damit die leere Datei keinen Fehler verursacht
export {};
