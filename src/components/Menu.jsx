 
import '../App.css'

export default function Menu ({onAbout, onContact, hide}) {

    function clickedHome(){
        hide(false);
        onAbout(true)
    }

    function clickedContact(){
        onContact(true);
        hide(false);
    }


    return (
        <div className='mobile-menu'>
            <ul>
                <button onClick={clickedHome}>Home</button>
                <button onClick={clickedContact}>About</button>
                <a href="https://github.com/Juryynan">
                    <button>GitHub</button>
                </a>
             
                <a href="src/assets/CV_web.pdf">
                    <button>CV</button>
                </a>
          
            </ul>
            <p>site developed by Juho Ryynänen</p>
        </div>
    )
};