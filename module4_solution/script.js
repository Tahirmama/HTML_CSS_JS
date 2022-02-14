/*
Solution of assignment 4:

Expected output:

Hello Yaakov
Good Bye ALi
Good Bye Akbar
Good Bye Anwar
Hello Nasir
Hello Fraaz
Hello Lala
Hello Amir
Hello Maqsood
Good Bye koraal
*/

(function() {
    var names = ["Yaakov", "ALi", "Akbar", "Anwar", "Nasir", "Fraaz", "Lala", "Amir", "Maqsood", "Koraal"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'a') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
