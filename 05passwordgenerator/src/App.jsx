import { useState, useCallback, useEffect, useRef } from "react";



function App() {

    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [characterAllowed, setCharacterAllowed] = useState(false)
    const [password, setPassword] = useState("")

    //ref hook

    const passwordRef = useRef(null);


    // it return memorized version of callback 
    //that changes when one of the inout changes
    const passwordGenerator = useCallback(() => {

        let pass = "";

        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllowed) {
            str += "0123456789"
        }
        if (characterAllowed) {
            str += "!~`#$%^&*()+_="
        }

        for (let i = 1; i <= length; i++) {
            const char = Math.floor(Math.random() * str.length + 1);

            pass += str.charAt(char);

        }
        setPassword(pass)

    }, [length, numberAllowed, characterAllowed, setPassword])



    //copy password

    const copyPasswordToClipboard = useCallback(() => {
        {/*he writeText() method of the
             Clipboard interface writes the 
             specified text to the system 
             clipboard, returning a Promise 
             that is resolved once the system 
             clipboard has been updated*/ }

        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 99)

        window.navigator.clipboard.writeText(password)

    }, [password])
    useEffect(() => {
        passwordGenerator()

    }, [length, numberAllowed, characterAllowed, passwordGenerator])


    return (

        <>
            <div className="w-full max-w-md mx-auto shadow-md rounded-bl-lg px-4 my-8 text-amber-600 bg-gray-800 ">

                <h1 className="text-center text-white my-3">Password Generator</h1>

                <div className="flex shadow rounded-lg overflow-hidden ">

                    <input type="text" value={password} className="outline-none w-full py-1 px-3 mx-0.5" placeholder="password" readOnly style={{ backgroundColor: "white", color: "gray" }} ref={passwordRef}></input>


                    <button className="outline-none bg-blue text-white px-3 py-0.5 shrink-0 bg-blue-950" onClick={copyPasswordToClipboard}>copy</button>


                </div>

                <div className="flex text-sm gap-x-2">


                    <div className="flex items-center gap-x-1">


                        {/* Whenever the slider value changes, take the new value, convert it to a number, and store it in length. */}
                        <input id="1" type="range" min={8} max={100} value={length} className="cursor-pointer" onChange={(e) => { setLength(Number(e.target.value)) }} />

                        <label htmlFor="1">Length:{length}</label>





                    </div>

                    <div className="flex items-center gap-x-1">


                        {/* Whenever the slider value changes, take the new value, convert it to a number, and store it in length. */}
                        <input id="2" type="checkbox" value={numberAllowed} onChange={(e) => { setNumberAllowed((prev) => !prev) }} />

                        <label htmlFor="2">Numbers</label>





                    </div>

                    <div className="flex items-center gap-x-1">


                        {/* Whenever the slider value changes, take the new value, convert it to a number, and store it in length. */}
                        <input id="3" type="checkbox" value={characterAllowed} onChange={(e) => { setCharacterAllowed((prev) => !prev) }} />

                        <label htmlFor="2">Characters</label>





                    </div>


                </div >



            </div>





        </>
    )

}

export default App;