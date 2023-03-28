const name1="Kabil";
const name2="Kabil";
const object1 ={name:"Kabil"};
const object2 ={name:"Kabil"};
function Test()
{
    return <div><button onClick={Compare}>Compare</button></div>
    function Compare()
    {
        console.log(name1===name2)
        console.log(name1===object1)
}

}
ReactDOM.render(<Test/>,document.getElementById("mydiv"))