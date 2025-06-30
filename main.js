const secciones = {
  plugins: `
    <section>
      <h2>🧩 Minecraft Plugins</h2>
      <div class="plugin-card">
        <h3>LeonelAbilities</h3>
        <p>Habilidad visual y configurable con GUI, efectos especiales y detección automática de idioma del jugador.</p>
        <a href="resources/LeonelAbilities-1.0.jar" download>Descargar Plugin</a>
      </div>
    </section>
  `,
bots: `
  <section>
    <h2>🤖 Discord Bots</h2>
    <div class="plugin-card">
      <h3>Discord Bots</h3>
      <p>Los bots oficiales de LeonelDev están disponibles exclusivamente en nuestro servidor de Discord. Unite para conocerlos, usarlos y participar en su evolución.</p>
      <a href="https://discord.gg/HCnX84xZPB" target="_blank">Acceder al servidor</a>
    </div>
  </section>
`,
proyectos: `
  <section>
    <h2>🧰 Páginas Web</h2>
    <p>Desarrolladas por <strong>LeonelDev Studios</strong>, pensadas con identidad visual, modularidad y enfoque en la experiencia.</p>

    <div class="fila-proyectos">
      <div class="card-delgada">
        <h3>LeonelGamingCompany</h3>
        <p>Pagina web oficial de juegos en html.</p>
        <a href="https://leonelgamingcompany.github.io" target="_blank">Visitar</a>
      </div>

      <div class="card-delgada">
        <h3>LeonelCodeMaker</h3>
        <p>Generador visual de html sin código, directamente desde el navegador.</p>
        <div>Próximamente</div>
      </div>

      <div class="card-delgada">
        <h3>Grabador de pantalla</h3>
        <p>Grabador de pantalla para capturar tu pantalla desde tu navegador.</p>
        <a href="https://grabarpantallahd.github.io" target="_blank">Visitar</a>
      </div>
    </div>
  </section>
`
};

function mostrar(seccion) {
  document.getElementById("contenido").innerHTML = secciones[seccion] || "<p>Contenido no disponible.</p>";
  resaltarPestaña(seccion);
}

function resaltarPestaña(activa) {
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    link.classList.remove("activo");
    if (link.getAttribute("href").includes(activa)) {
      link.classList.add("activo");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mostrar('plugins');
});