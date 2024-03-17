// Use dynamic import instead of require
import('is-online').then(({default: isOnline}) => {
    isOnline().then(online => {
        if (!online) {
            console.log("You are now offline.");
            console.log("Please check your internet connection.");
        }else{
            console.log("You are now online.");
            console.log("Please check your internet connection.");
        }
    });
}).catch(error => {
    console.error("Failed to import is-online module:", error);
});
