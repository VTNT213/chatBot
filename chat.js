function talk(){
    var know = {
        "Who are you" : "Hello, VT's Bot here <3",
        "How are you" : "I am doing really great! Wbu?",
        "I am doing fine. Thanks." : "That's good to hear!",
        "Bye" : "Okay! See ya around."
    };

    var user = document.getElementById('userBox').value;
        document.getElementById('cahtLog').innerHTML = user + "<br>"
    if (user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br";
    }else{
        document.getElementById('cahtLog').innerHTML = "Sorry, I didn't understand. :(";
    }
}