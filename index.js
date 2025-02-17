const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let rectangles = document.querySelector(".rectangle")
let pass1 = document.getElementById("password1")
let pass2 = document.getElementById("password2")
    document.getElementById("password1").addEventListener("click", function() {
        const textToCopy = this.innerText;
        navigator.clipboard.writeText(textToCopy)  
    })
    document.getElementById("password2").addEventListener("click", function() {
        const textToCopy = this.innerText;
        navigator.clipboard.writeText(textToCopy)  
    })

function generatePasswords(){
    document.getElementById("password1").textContent = "";
    document.getElementById("password2").textContent = "";
    for (let i = 0; i<16; i++){
        document.getElementById("password1").textContent += characters[Math.floor(Math.random()*characters.length)]
        document.getElementById("password2").textContent += characters[Math.floor(Math.random()*characters.length)] 
    }
}
  document.getElementById("downloadBtn").addEventListener("click", function() {
    const text1 = document.getElementById("password1").innerText;
    const text2 = document.getElementById("password2").innerText;
    const combinedText = text1 + "\n\n" + text2;
    
    const blob = new Blob([combinedText], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "saved-pass.txt";
    
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });

