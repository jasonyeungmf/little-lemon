import { Box, HStack, VStack } from "@chakra-ui/react";

function Footer() {
    return (
        
            <HStack align={0}>
                <VStack>
                    <h5>Doormat navigation</h5>
                    <ul>
                        <li><a href="https://www.w3schools.com">Home</a></li>
                        <li><a href="https://www.w3schools.com">About</a></li>
                        <li><a href="https://www.w3schools.com">Menu</a></li>
                        <li><a href="https://www.w3schools.com">Reservations</a></li>
                        <li><a href="https://www.w3schools.com">Order online</a></li>
                        <li><a href="https://www.w3schools.com">Login</a></li>
                    </ul>
                </VStack>
                <VStack>
                    <h5>Contact</h5>
                    <ul>
                        <li>Address</li>
                        <li>Phone number</li>
                        <li>Email</li>
                    </ul>
                </VStack>
                <VStack>
                    <h5>Social media</h5>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Youtube</li>
                    </ul>
                </VStack>
            </HStack>
        
    );
}

export default Footer;