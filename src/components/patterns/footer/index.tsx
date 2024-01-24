import { Box, Container, IconButton, Stack, Typography, useMediaQuery } from "@mui/material"
import { FontAwesomeIcon as I } from '@fortawesome/react-fontawesome'
import { sx } from "./sx";

export const Footer = () => {
    const matches = useMediaQuery('(min-width: 600px)');
    const { css } = sx();
    return (
        <footer>
            <Container>
                <Box sx={{ ...css.box.dividerH }}></Box>
                <Box py={'4.0625rem'} display={'flex'} justifyContent={'space-between'} flexDirection={matches ? 'row' : 'column'}>
                    <Stack mb={matches ? 0 : 2} alignItems={'center'}>
                        <Typography sx={{ ...css.text.title }} variant="h1">
                            Karlos Macêdo
                        </Typography>
                        <Typography
                            fontWeight={300}
                            fontFamily={'Roboto mono'}
                            fontSize={'1rem'}>
                            Front-end Developer
                        </Typography>
                    </Stack>
                    <Stack
                        direction={'row'}
                        spacing={1}
                        justifyContent={'center'}
                        alignItems={'center'}>
                        <a
                            href="https://www.linkedin.com/in/karlos-mac%C3%AAdo/" target="_blank">
                            <IconButton sx={{ ...css.iconBtn }} >
                                <I icon={['fab', 'linkedin']} />
                            </IconButton>
                        </a>
                        <a href="https://github.com/karrlosm/" target="_blank">
                            <IconButton sx={{ ...css.iconBtn }} >
                                <I icon={['fab', 'github']} />
                            </IconButton>
                        </a>
                    </Stack>
                </Box>
            </Container>
        </footer>
    )
}