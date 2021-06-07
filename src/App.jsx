import { useState } from 'react';

const App = () => {
	// create a state to hold the currently active/focused input element
	// set state of the inputs
	const [currentlyFocusedInput, setCurrentlyFocusedInput] = useState(null);

	//set state of the data in the first row of the keyboard
	const [firstRowData, setFirstRowData] = useState(['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'])

	//set state of the data in the second row of the keyboard
	const [secondRowData, setSecondRowData] = useState(['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'])

	// //set state of the data in the third row of the keyboard
	const [thirdRowData, setThirdRowData] = useState(['Z', 'X', 'C', 'V', 'B', 'N', 'M'])
	
// function to get the value of the clicked button
	const buttonHandler = (e) => {
		setCurrentlyFocusedInput((currFoc) => {
			let val = currFoc.value + e.target.value;
			currFoc.value = val;
			return currFoc;
		});
		currentlyFocusedInput?.focus();
	};

	// function to activate the backspace button when clicked 
	const backSpaceHandler = () => {
		const chars = currentlyFocusedInput.value;
		let newString = chars.slice(0, chars.length-1) 
		setCurrentlyFocusedInput((currFoc) => {
			currFoc.value = newString;
			return currFoc;
		})
	}

	// function to activate the shift button when clicked 
	const shiftHandler = () => {
		setFirstRowData((prevState) => {
			const string = firstRowData.join('');
			if (string === string.toLowerCase()) {
				prevState = string.toUpperCase().split('')
			} else {
				prevState = string.toLowerCase().split('')
			}

			return prevState;
		});
		setSecondRowData((prevState) => {
			const string = secondRowData.join('');
			if (string === string.toLowerCase()) {
				prevState = string.toUpperCase().split('')
			} else {
				prevState = string.toLowerCase().split('')
			}

			return prevState;
		});
		setThirdRowData((prevState) => {
			const string = thirdRowData.join('');
			if (string === string.toLowerCase()) {
				prevState = string.toUpperCase().split('')
			} else {
				prevState = string.toLowerCase().split('')
			}

			return prevState;
		});
	}

	return (
		<div className='App'>
			<h2 style={{textAlign:'center', fontFamily:'cursive', paddingTop:'6rem',  textShadow: '2px 2px #afa6a6'}}>Heey there click the custom keyboard to type...</h2>
			<div className='login-form'>
				
				<input
					type='text'
					placeholder='enter username'
					onFocus={(e) => setCurrentlyFocusedInput(e.target)}
				/>
				<input
					type='text'
					placeholder='enter password'
					onFocus={(e) => setCurrentlyFocusedInput(e.target)}
				/>
			</div>

			<div className='keyboard-container'>
				<div className='key-row'>
					<button value='1' onClick={buttonHandler}>
						1
					</button>
					<button value='2' onClick={buttonHandler}>
						2
					</button>
					<button value='3' onClick={buttonHandler}>3</button>
					<button value='4' onClick={buttonHandler}>4</button>
					<button value='5' onClick={buttonHandler}>5</button>
					<button value='6' onClick={buttonHandler}>6</button>
					<button value='7' onClick={buttonHandler}>7</button>
					<button value='8' onClick={buttonHandler}>8</button>
					<button value='9' onClick={buttonHandler}>9</button>
					<button value='0' onClick={buttonHandler}>0</button>
				</div>

				{/* rendering the first row characters */}
				<div className='key-row'>
					{
						firstRowData.map(char => <button key={char} value={char} onClick={buttonHandler}>{ char}</button>)
					}
					
				</div>

				{/* rendering the second row characters */}
				<div className='key-row'>
					{
						secondRowData.map(char => <button key={char} value={char} onClick={buttonHandler}>{ char}</button>)
					}
				</div>

				{/* rendering the  third row characters */}
				<div className='key-row'>
					<button value='shift' onClick={shiftHandler}>Shift</button>
					{
						thirdRowData.map(char => <button key={char} value={char} onClick={buttonHandler}>{ char}</button>)
					}
					<button className='btn-large' onClick={backSpaceHandler}>Backspace</button>
				</div>
				<div className='key-row'>
					<button className='btn-full'></button>
				</div>
			</div>
		</div>
	);
};

export default App;
