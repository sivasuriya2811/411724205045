function loadUsers() {

    const status = document.getElementById("status");
    const users = document.getElementById("users");

    status.innerHTML = "Loading...";
    users.innerHTML = "";

    setTimeout(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {

                data.forEach(user => {

                    users.innerHTML += `
                        <div class="user-card">
                            <h3>${user.name}</h3>
                            <p><strong>Email:</strong> ${user.email}</p>
                            <p><strong>Phone:</strong> ${user.phone}</p>
                        </div>
                    `;

                });

                status.innerHTML = "Loaded successfully";

            })
            .catch(error => {

                status.innerHTML = "Error loading data";
                console.log(error);

            });

    }, 2000);
}