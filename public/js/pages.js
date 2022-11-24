window.addEventListener("load", function (event) {
  date = new Date();
  if (true) {
    document.getElementById("content").innerHTML = `
        <div id="index-banner" class="parallax-container">
        <div class="section no-pad-bot">
          <div class="container">
            <br /><br />
            <h1 class="header center teal-text text-lighten-2">
              SOS CRUZ ROJA
            </h1>
            <div class="row center">
              <h5 class="header col s12 light"></h5>
            </div>
            <div class="row center">
              <a
                href="/pages/maps.html"
                id="ambulance-button"
                class="btn-large waves-effect waves-light teal lighten-1"
                >LLAMAR AMBULANCIA</a
              >
            </div>
            <br /><br />
          </div>
        </div>
        <div class="parallax">
          <img src="/images/zombie2.jpg" alt="Unsplashed background img 1" />
        </div>
      </div>

      <div class="container">
        <div class="section">
          <!--   Icon Section   -->
          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text"></h2>
              <h5 class="center">
                Ante una emergencia zombie no olvides de contactar a la Cruz
                Roja. Jalisco se encuentra en emergencia
              </h5>
              <p class="light">
                Esto no es una prueba. Este es un sistema emitido por el
                gobierno federal de los Estados Unidos Mexicanos anunciando el
                estado de catástrofe 501: El estado se encuentra en un
                apocalipsis zombie. El uso de armas de clase 4 y de nivel
                inferior están permitidas durante la catástrofe, el resto de
                armas están prohibidas. Se invita a la población a colaborar de
                manera voluntaria con el uso del sistem SOS Cruz Roja, sistema
                implementado por la Cruz Roja Mexicana para la ayuda ante la
                presencia Zombie. Ante esta catástrofe, todos debemos ayudar.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="parallax-container valign-wrapper">
        <div class="section no-pad-bot">
          <div class="container"></div>
        </div>
        <div class="parallax">
          <img src="/images/mexico2.jpg" alt="Unsplashed background img 2" />
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 center">
              <h3><i class="mdi-content-send brown-text"></i></h3>
              <h4>¿Cómo acato la emergencia y uso SOS Cruz Roja?</h4>
              <p class="left-align light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                scelerisque id nunc nec volutpat. Etiam pellentesque tristique
                arcu, non consequat magna fermentum ac. Cras ut ultricies eros.
                Maecenas eros justo, ullamcorper a sapien id, viverra ultrices
                eros. Morbi sem neque, posuere et pretium eget, bibendum
                sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu
                mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi
                massa odio, condimentum sed ipsum ac, gravida ultrices erat.
                Nullam eget dignissim mauris, non tristique erat. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae;
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="parallax-container valign-wrapper">
        <div class="section no-pad-bot">
          <div class="container">
            <div class="row center">
              <h5 class="header col s12 light">A</h5>
            </div>
          </div>
        </div>
        <div class="parallax">
          <img src="/images/mexico.jpg" alt="Unsplashed background img 3" />
        </div>
      </div>`;
  } else {
    document.getElementById("content").innerHTML = `
      <div>
        hola
      </div>`;
  }
});
