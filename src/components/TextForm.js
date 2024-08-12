import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        // console.log("Uppercase clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = ()=> {
        // console.log("Uppercase clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleTogClick = () => {
        let newText = text.split('').map(char => {
            return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
        }).join('');
        setText(newText);
    };

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }


    const handleOnChange = (event)=> {
        // console.log("On Change");
        setText(event.target.value);
    }
    
    const [text, setText] = useState('Enter text here');
    return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-info mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-info mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-info mx-2" onClick={handleTogClick}>Convert to Togglecase</button>
        <button className="btn btn-info my-2" onClick={handleClearClick}>Clear Text</button>
    </div><br/>
    <div className="container">
        <h2>Word and Characters Counter</h2>
        <p> {text.split(" ").length} Words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} Minutes to read </p>
        <h2>Preview Summary</h2>
        <p>{text}</p>
    </div><br/>

    <footer><hr/>
        <div className="container">
            &copy;| Developed by Gauri Tyagi.
        </div>
    </footer>
    </>
  )
}
