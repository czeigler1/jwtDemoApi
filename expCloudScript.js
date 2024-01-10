<script>
    var token = null;
    var uid = null;
    
    window.addEventListener("load", () => {
        uid = $A.get("$SObjectType.CurrentUser.Id");
        if (uid != "undefined"){
            fetch('https://demo331-2a030ea32f33.herokuapp.com/t1?sub=' + uid)
            .then(response => response.text())
            .then(response => {
                token = response;
            })
            .catch(err => {
                console.log(err)
            })
        }

    });
    

    window.addEventListener("onEmbeddedMessagingReady", () => {
        if (token != null){
            embeddedservice_bootstrap.userVerificationAPI.setIdentityToken({
       		identityTokenType : "JWT", identityToken : token});
        }
    });
 
</script>
