
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
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
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
    

