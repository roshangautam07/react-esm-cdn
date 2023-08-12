export const simplePopup = () => {
    window
        .Toastify({
            text: "Hi",
            duration: 4500,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            gravity: "top",
            position: "left",
        })
        .showToast();
}