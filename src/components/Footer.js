import Container from "./styles/Container.styled";
import Flex from "./styles/Flex.styled";
import StyledFooter from "./styles/Footer.styled";

const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<img src="./images/logo_white.svg" alt=""/>
				<Flex>
					<ul>
						<li>
							Lorem ipsum dolor sit amet
						</li>
						<li>+234 705 205 3780</li>
						<li>zubairidrisaweda@gmail.com</li>
					</ul>
					<ul>
						<li>About Us</li>
						<li>What We Do</li>
						<li>FAQ</li>
					</ul>
					<ul>
						<li>Career</li>
						<li>Blog</li>
						<li>Contact Us</li>
					</ul>
				</Flex>
				<p>&copy; 2022 Zubs Huddle. Do giveaway.</p>
			</Container>
		</StyledFooter>
	);
};

export default Footer;
