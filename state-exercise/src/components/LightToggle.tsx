function myToggle (){
    let element = document.body;
    element.classList.toggle("dark-mode");
}

const LightToggle = () => {
    return (
        <div>
            <button onClick={myToggle}>
                Toggle Lights
            </button>
        </div>
    );
}

export default LightToggle