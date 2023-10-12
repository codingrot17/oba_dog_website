
function changesrc() {
    document.getElementById("butt").innerHTML = "Loading";
    const image = fetch('https://dog.ceo/api/breeds/image/random').then
((img) => {
const data = img.json();
return data
}).then((data) => {
    if (data.status = 'approved') {
        console.log('yes');
        document.getElementById("butt").innerHTML = "Almost there";
    }
    const link = data.message;
    document.getElementById("myImg").src = link;
    if (document.getElementById("myImg").src = link) {
        document.getElementById("butt").innerHTML = "Click me";
    }
})
}