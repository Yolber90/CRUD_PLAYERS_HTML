
// Load Nav Bar in all Pages, append under id'nav-header'
let nav = document.getElementById('nav-header')

nav.innerHTML =
    `
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
            <img src="media/eden_ballers_1.jpg" alt="">
        </a>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="add-player.html">Add Player</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="player-delete.html">Delete</a>
                </li>


                <li class="nav-item">
                    <a  class="nav-link" href="player-add-stats.html">Update</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://crud-player-app.onrender.com/api/players">api</a>
                </li>
                <!-- Dark Mode -- backlogged feature -->
                <!-- <li>
                    <label class="switch">
                        <input id="tester"  type="checkbox">
                        <span   class="slider round"></span>
                      </label>
                </li> -->
                
            </ul>

        </div>
        
    </nav>
`

// Load Table
let apiUrl = 'https://crud-player-app.onrender.com/api/players'

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .catch(error => console.error('Error:', error))
    .then(data => {
        if (!data.length) {
            document.getElementById('player-cards').innerHTML +=
                `
                    <h1 id='test-h1'>No Players Exist</h1>
                    `
        }

        function addUpPoints(i) {

            let pointsSum = 0
            for (let x = 0; x < data[i].stat.length; x++) {
                pointsSum = pointsSum + data[i].stat[x].points
            }
            return pointsSum;
        }

        // Calculate Average Poitns per game
        function pointsPergame(i) {
            let ppg = addUpPoints(i) / data[i].stat.length
            return ppg.toFixed(1)
        }

        // On a click event, figure out type of event, thenload table
        addEventListener('click', (event) => {


            // variable declarations
            const clickedId = event.target.id
            const historyId = document.getElementById('modal-body-history-stats')
            const playerNumber = document.getElementById('player-number')
            const title = document.getElementById('modal-title')
            const bioData = document.getElementById('player-bio')
            const bioTable = document.getElementById('bio-table')
            let playerData = [...data]
            console.log(clickedId)

            const capturePlayerDataById = () => {

                playerData = playerData.filter((profile) => {
                    return profile._id == clickedId
                })
                playerData = playerData[0]

            }

            capturePlayerDataById()

            // console.log(playerData)

            const loadTables = () => {
               
               title.innerHTML = playerData.name
               
               playerNumber.innerHTML = `<p>#${playerData.number}</p>`
                
                bioTable.innerHTML +=
                `
                <tr>
                    <td>Nick Name:</td>
                    <td>${playerData.nickName}</td>
                </tr>
                <tr>
                    <td>Nationality:</td>
                    <td>${playerData.nationality}</td>
                </tr>
                <tr>
                    <td>Age:</td>
                    <td>${playerData.measurements.age}</td>
                </tr>
                <tr>
                    <td>Height:</td>
                    <td>${playerData.measurements.height}</td>
                </tr>
                <tr>
                    <td>Weight:</td>
                    <td>${playerData.measurements.weight}</td>
                </tr>
                `
                

                
               playerData.stat.forEach(player => {
                    historyId.innerHTML +=
                        `
                            <td>${player.gamedate}</td>
                            <td>${player.points}</td>
                            `
                });

                

                // bioData.innerHTML +=
                // `
                //     <td>
                        
                //     </td>
                //     <td>#${playerData.number}</td>
                //     <td>${playerData.nickName}</td>
                //     <td>${playerData.nationality}</td>
                //     <td>${playerData.measurements.age}</td>
                //     <td>${playerData.measurements.weight}</td>
                //     <td>${playerData.measurements.height}</td>
                // `
            }




            const clearTables = () => {
                historyId.innerHTML     = '';
                bioTable.innerHTML    = '';
            }

            clearTables() // Clear Tables before opening Modal

            loadTables() // Load new table defined by the clicked id


        })
        // End of click

        for (i in data) {

            // Get Total Points stored in the stats.points array

            document.getElementById('index-body-table-load').innerHTML +=
                `
                    <tr>
                        <td>
                            <div class="d-flex align-items-center">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt=""
                                    style="width: 45px; height: 45px" class="rounded-circle" />
                                <div class="ms-3">
                                    <a href="#" id=${data[i]._id} class='modal-toggle' data-toggle="modal" data-target="#exampleModalCenter" >${data[i].name}</a>
                                    <p class="text-muted mb-0">-${data[i].nickName}</p>
                                </diOhv>
                            </div>
                        </td>
                        <td>
                            <p class="fw-normal mb-1">${data[i].stat[data[i].stat.length - 1].gamedate}</p>
                            <span class="badge badge-info">Points: ${data[i].stat[data[i].stat.length - 1].points}</span>
                        </td>

                        <td>
                            ${addUpPoints(i)}
                        </td>

                        <td>
                            <span class="badge badge-success rounded-pill d-inline">${pointsPergame(i)}</span>
                        </td>
                            

                    </tr>


                   
                    `


        }
    })


