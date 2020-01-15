import React from 'react'

// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações (props) que um componente PAI passa para o componente FILHO
// Estado: Informações mantidas pelo componente (lembrar: imutabilidade)
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'



function App() {
    return (
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <form>
            <div className="input-block">  
              <label htmlFor="github_username">Usuário no Github</label>
              <input name="github_username" id="github_username" required />
            </div>
              
            <div className="input-block"> 
              <label htmlFor="techs">Tecnologias</label>
              <input name="techs" id="techs" required />
            </div>

            <div className="input-group">
              <div className="input-block"> 
                <label htmlFor="latitude">Latitude</label>
                <input name="latitude" id="latitude" required />
              </div>

              <div className="input-block"> 
                <label htmlFor="longitude">Longitude</label>
                <input name="longitude" id="longitude" required />
              </div>
            </div>
            <button type="submit">Salvar</button>
          </form>
        </aside>
        <main>
          <ul>
            <li className="dev-item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/21065471?s=460&v=4" alt="Carlos Bruno" />
                <div className="user-info">
                  <strong>Carlos Bruno</strong>
                  <span>ReactJS, React Native, Node.js</span>
                </div>
              </header>
              <p>SysAdmin Linux. Aprendendo JavaScript, Node.JS, React JS e React Native.</p>
              <a href="https://github.com/suricarlos">Acessar perfil no Github</a>
            </li>

            <li className="dev-item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/21065471?s=460&v=4" alt="Carlos Bruno" />
                <div className="user-info">
                  <strong>Carlos Bruno</strong>
                  <span>ReactJS, React Native, Node.js</span>
                </div>
              </header>
              <p>SysAdmin Linux. Aprendendo JavaScript, Node.JS, React JS e React Native.</p>
              <a href="https://github.com/suricarlos">Acessar perfil no Github</a>
            </li>

            <li className="dev-item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/21065471?s=460&v=4" alt="Carlos Bruno" />
                <div className="user-info">
                  <strong>Carlos Bruno</strong>
                  <span>ReactJS, React Native, Node.js</span>
                </div>
              </header>
              <p>SysAdmin Linux. Aprendendo JavaScript, Node.JS, React JS e React Native.</p>
              <a href="https://github.com/suricarlos">Acessar perfil no Github</a>
            </li>

            <li className="dev-item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/21065471?s=460&v=4" alt="Carlos Bruno" />
                <div className="user-info">
                  <strong>Carlos Bruno</strong>
                  <span>ReactJS, React Native, Node.js</span>
                </div>
              </header>
              <p>SysAdmin Linux. Aprendendo JavaScript, Node.JS, React JS e React Native.</p>
              <a href="https://github.com/suricarlos">Acessar perfil no Github</a>
            </li>
          </ul>
        </main>
      </div>
    )
}

export default App;
