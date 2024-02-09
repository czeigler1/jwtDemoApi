<script>
    uid = null; 

    window.addEventListener("onEmbeddedMessagingReady", () => {
        uid = $A.get("$SObjectType.CurrentUser.Id");

        if (uid != undefined){
            fetch('https://demo331-2a030ea32f33.herokuapp.com/t1?sub=' + uid)
            .then(response => response.text())
            .then(response => {
                token = response;
            })
            .catch(err => {
                console.log(err)
            })
            
            if (token != null){
                embeddedservice_bootstrap.userVerificationAPI.setIdentityToken({
                   identityTokenType : "JWT", identityToken : token});
            }

            embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields({
                  "uid" : uid
            });
        }

    });
 
</script>
