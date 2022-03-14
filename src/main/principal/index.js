import Stories from './stories/Stories.js'
import Posts from './posts/Posts.js';
import './style.css'

export default function Principal(){
    return(
        <div className="stories">
            
            <Stories/>
            <Posts/> 
        </div>
        
    );
}