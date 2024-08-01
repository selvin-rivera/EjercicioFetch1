fetch("https://api.escuelajs.co/api/v1/users")
    .then(response => response.json())
    .then(data => {
        let card = `<div class="row row-cols-1 row-cols-md-3 g-4">`
        for (let user of data) {
             card += `<div class="col">
                    <div class="card">
                        <img src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" class="card-img-top" alt="Usuario">
                        <div class="card-body">
                            <h5 class="card-title">${user.name}</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><strong>Correo electrónico:</strong> ${user.email}</li>
                                <li class="list-group-item"><strong>Contraseña:</strong> ${user.password}</li>
                                <li class="list-group-item"><strong>Avatar:</strong> ${user.avatar}</li>
                            </ul>
                        </div>
                    </div>
                </div>`
        }
            card += "</div>"

    document.getElementById("list-card").innerHTML = card

}) 