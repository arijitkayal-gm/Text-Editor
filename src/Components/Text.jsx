import React, { useContext } from 'react'
import { useState } from 'react';
import Button from './Button';
import { ToastContext } from './ToastContext';
import Footer from './Footer';

const Text = ({ mode }) => {
    const [text, setText] = useState('');
    const [findWord, setFindWord] = useState('');
    const [replaceWord, setReplaceWord] = useState('');
    const [showFind,setShowFind]=useState(false);
    const { addToast } = useContext(ToastContext)

    const speakText = () => {
        const msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        addToast('Text is being spoken', 'info');
    };

    const handleFindReplace = () => {
        if (!findWord) return;
        const regex = new RegExp(findWord, 'gi');
        setText(text.replace(regex, replaceWord));
        addToast('Replaced successfully', 'info');
    };

    const isDisabled=()=>{

    }

    return (
        <>
            <div className={`text-container ${mode === 'dark' ? 'dark' : 'light'}`}>
                <h1>Text :</h1>
                <textarea value={text} id="" onChange={(e) => { setText(e.target.value) }} className={`text-box ${mode ==='dark'?'dark':'light'}`} rows={10}></textarea>
                <div className='text-buttons'>
                    <Button name={"UPPERCASE"} handleClick={() => { setText(text.toUpperCase()); addToast(' Done', 'info') }} disabled={!text}/>
                    <Button name={"LOWERCASE"} handleClick={() => { setText(text.toLowerCase()); addToast(' Done', 'info') }} disabled={!text}/>
                    <Button name={"CLEAR TEXT"} handleClick={() => { setText(''); addToast(' Done', 'info') }} disabled={!text} />
                    <Button name={"COPY TEXT"} handleClick={() => { navigator.clipboard.writeText(text); addToast(' Done', 'info') }} disabled={!text} />
                    <Button name={"SPEAK TEXT"} handleClick={speakText} disabled={!text} />
                    <Button name={"REVERSE"} handleClick={() => { setText(text.split('').reverse().join('')); addToast(' Done', 'info') }} disabled={!text} />
                    <Button name={"CAPITALIZE"} handleClick={() => { setText(text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')); addToast(' Done', 'info') }} disabled={!text} />
                    <Button name={"TRIM SPACE"} handleClick={() => { setText(text.replace(/\s+/g, ' ').trim()); addToast(' Done', 'info') }} disabled={!text} />
                    <Button name={"FIND & REPLACE"} handleClick={()=>{setShowFind(!showFind)}} disabled={!text} />

                </div>
                <div className={`find-replace ${showFind?'show':'hide'} `}>
                    <input placeholder="Find..." value={findWord} onChange={(e) => setFindWord(e.target.value)} className={`${mode === 'dark' ? 'dark' : 'light'}`}/>
                    <input placeholder="Replace with..." value={replaceWord} onChange={(e) => setReplaceWord(e.target.value)} className={`${mode === 'dark' ? 'dark' : 'light'}`}/>
                    <Button name="FIND & REPLACE" handleClick={handleFindReplace} />
                </div>
                <div className='text-info'>
                    <p>Word Count: {text.trim().split(/\s+/).filter(Boolean).length}</p>
                    <p>Character Count: {text.length}</p>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Text
