import { Container, IconButton, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon as I } from '@fortawesome/react-fontawesome';
import { sx } from "./sx";
import { motion } from "framer-motion";
import React from "react";

const variants = {
    open: {
      borderRadius: 0,
      height: "100vh",
      width: "100vw",
      x: 16,
      y: -16
    },
    closed: {}
};

const container1 = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
};

const item = {
    hidden: { y: 0, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const linksMenu = [
    {
        link: '#about',
        name: 'Sobre mim',
    },
    {
        link: '#skills',
        name: 'Skills',
    },
    {
        link: '#function',
        name: 'O que faço',
    },
    {
        link: '#experience',
        name: 'Experiência',
    },
    {
        link: '#projects',
        name: 'Projetos pessoais',
    },
]
  

export const Header = () => {
    const { css } = sx();
    const [isOpenMenu, setIsOpenMenu] = React.useState(false);


    return (
        <header style={{ ...css.header }}>
            <Container sx={{ ...css.container }}>
                <motion.div
                    className={`menu ${isOpenMenu ? "active" : ""}`}
                    animate={isOpenMenu ? "open" : "closed"}
                    variants={variants}
                    transition={{ damping: 10 }}>
                    {isOpenMenu &&
                        <motion.ul
                        style={{ ...css.ul.stepper }}
                        initial="hidden"
                        animate={isOpenMenu ? "visible" : "hidden"}
                        variants={container1}>
                            {linksMenu.map((link) => (
                                <motion.li key={link.link} variants={item}>
                                    <a
                                        onClick={() => setIsOpenMenu(false)}
                                        style={{ ...css.link }}
                                        href={link.link}>
                                        <Typography>
                                            {link.name}
                                        </Typography>
                                    </a>
                                </motion.li>
                            ))}
                            <motion.li variants={item}>
                            <Stack
                                direction={'row'}
                                spacing={1}
                                justifyContent={'center'}
                                alignItems={'center'}>
                                <a href="https://www.linkedin.com/in/karlos-mac%C3%AAdo/" target="_blank">
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
                            </motion.li>
                        </motion.ul>
                    }
                </motion.div>
                <IconButton
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                    size="large" sx={{ ...css.iconBtn }}>
                    <I icon={['fas', 'bars']} />
                </IconButton>
            </Container>
        </header>
    )
}