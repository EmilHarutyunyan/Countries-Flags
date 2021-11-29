import React, {useState, useEffect} from "react";


// Styles
import { HeaderEl, Wrapper, Title, ModeSwitcher } from "./Header.styles";
import { Container } from "../Container/Container";
// Icons
import { IoMoon, IoMoonOutline } from "react-icons/io5";

export const Header = () => {

	const [theme, setTheme] = useState('light');

	const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

	useEffect(() =>{
		document.body.setAttribute('data-theme', theme)
	},[theme])

	return (
		<HeaderEl>
			<Container>
				<Wrapper>
					<Title>Where is the world?</Title>
					<ModeSwitcher onClick={toggleTheme}>
						{theme === 'light' ? (
							<IoMoonOutline size="14px"/> 
						) : (
							<IoMoon size="14px"/> 

						)}
						<span>{theme} Theme</span>  
					</ModeSwitcher>
				</Wrapper>
			</Container>
		
		</HeaderEl>
	);
};
