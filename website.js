function loadUsers()
{
    document.getElementById("status").innerHTML = "Loading...";

    setTimeout(function()
    {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data =>
        {
            let output = "";

            for(let i = 0; i < data.length; i++)
            {
                output += "Name: " + data[i].name + "<br>";
                output += "Email: " + data[i].email + "<br>";
                output += "Phone: " + data[i].phone + "<br><br>";
            }

            document.getElementById("users").innerHTML = output;

            document.getElementById("status").innerHTML = "Loaded successfully";
        });
    }, 2000);
}
