<script>
window.addEventListener("onEmbeddedMessagingReady", () => {
    
    var uid = $A.get("$SObjectType.CurrentUser.Id");

    if (uid != null){
        var url = 'https://demo331-2a030ea32f33.herokuapp.com/t1?sub=' + uid;
        fetch(url)
        .then(response => response.text())
        .then(response => {
            embeddedservice_bootstrap.userVerificationAPI.setIdentityToken({
            identityTokenType : "JWT", identityToken : response});
            embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields({'uid' : uid});
        })
        .catch(err => {
            console.log(err)
        })
	}
 
});

embeddedservice_bootstrap.init(…)

</script>