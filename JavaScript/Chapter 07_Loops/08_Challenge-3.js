let isPresent = true, isDisplayed = true, isEnabled = false
if (isPresent) {
    if (isDisplayed) {
        if (isEnabled) {    
            console.log("Element is intractable");
        } else {
            console.log("Element is disabled, WARNING Action: Element is visible but disabled. Wait for enable state or check preconditions.");
        }
    } else {
        console.log("Element is not displayed");
    }

} else {
    console.log("Element is not present");
}

