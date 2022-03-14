import Principal from './principal/index.js';
import Lateral from './lateral/index.js';
import "./style.css";

export function Main(){
    return(
        <main>
            
                <section className="principal">
                    <Principal className='esquerda'/>         
                </section> 
                    
                <aside className="lateral">
                    <Lateral/>
                </aside>

                        
          
        </main>
    );
}