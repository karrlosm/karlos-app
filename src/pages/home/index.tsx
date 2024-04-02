import { Box, Container, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { motion, useScroll } from 'framer-motion';
import ReactTyped from "react-typed";

import IFPB from '../../assets/img/campus-monteiro.png';
import { useEffect, useRef, useState } from "react";
import { SquarePic } from "../../components/square-pic";
import { FontAwesomeIcon as I } from '@fortawesome/react-fontawesome';
import { SkillItem } from "../../components/skill-item";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { hardSkills, softSkills } from "../../static/skills";
import { sx } from "./sx";

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

export const Home = () => {
    const { css } = sx();
    const matches = useMediaQuery('(min-width: 600px)');
    const [picture, setPicture] = useState(false);
    const [text, setText] = useState(false);

    const ref = useRef(null)
    const [scrollY, setScrollY] = useState(0);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"],
    });

    useEffect(() => {
        setTimeout(() => {
            setPicture(true)
        }, 100)
        setTimeout(() => {
            setText(true)
        }, 2000)
    }, [])

    useEffect(() => {
        scrollYProgress.onChange(number => setScrollY(number));
      }, [scrollYProgress, scrollY]);
    
    return (
        <div style={{ ...css.wrapperPage }}>
            <section style={{ ...css.section.first }}>
                <Container sx={{ ...css.container.first }}>
                    <Box>
                        <motion.div
                            initial={{ opacity: 0, x: 0, y: 0 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 1 }}>
                            <Typography
                                sx={{ ...css.text.heroTitle }}
                                variant="h1">Karlos Macêdo</Typography>
                        </motion.div>
                    </Box>
                    <Box height={'400px'} my={5}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}>
                            <div style={{ ...css.box.square }}>
                                <motion.div
                                    initial={{ opacity: 0, x: 0, y: 0 }}
                                    animate={{ opacity: 0.2, x: 0, y: 0 }}
                                    transition={{ duration: 0.2 }}>
                                    <SquarePic />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 0, y: 0 }}
                                    animate={{ opacity: 0.4, x: 0, y: 10 }}
                                    transition={{ duration: 0.4 }}>
                                    <SquarePic />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 0, y: 0 }}
                                    animate={{ opacity: 0.6, x: 0, y: 20 }}
                                    transition={{ duration: 0.6 }}>
                                    <SquarePic />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 0, y: 0 }}
                                    animate={{ opacity: 0.8, x: 0, y: 30 }}
                                    transition={{ duration: 0.8 }}>
                                    <SquarePic />
                                </motion.div>
                                {picture &&
                                    <motion.div
                                        initial={{ opacity: 0, x: 0, y: '0' }}
                                        animate={{ opacity: 1, x: 0, y: 35 }}
                                        transition={{ duration: 1 }}>
                                        <div style={{ ...css.box.squareImgWrappper }}>
                                            <div style={{ ...css.box.squareImg }}>
                                            </div>
                                        </div>
                                    </motion.div>
                                }
                            </div>
                        </motion.div>
                    </Box>
                    <Box height={'33px'}>
                        {text &&
                            <motion.div
                                initial={{ opacity: 0, x: 0, y: '10vh' }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 1.2 }}>
                                <Typography
                                    fontFamily={'Roboto mono'}
                                    sx={{ ...css.text.heroSubtitle }}>
                                    <ReactTyped strings={["Front-end developer"]} typeSpeed={80} showCursor={false} />
                                </Typography>
                            </motion.div>
                        }
                    </Box>
                </Container>
            </section>
            <section id="about" style={{ ...css.section.default }}>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <motion.div
                                initial={{ opacity: 0, x: '10vh', y: '0' }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 1 }}>
                                <Stack spacing={3} sx={{ ...css.box.infoBox }}>
                                    <Typography
                                        sx={{ ...css.text.titleBox }}
                                        fontFamily={'Roboto mono'}
                                        variant="h3">
                                        Sobre mim
                                    </Typography>
                                    <Typography
                                        variant="body1">
                                        Com 22 anos e formado em Análise e Desenvolvimento de Sistemas,
                                        já coleciono na bagagem as primeiras temporadas de uma série de experiências profissionais na área,
                                        afim de possuir cada vez mais conhecimento e aumentar minhas habilidades, além
                                        de procurar sempre contribuir positivamente onde quer que eu esteja colaborando.
                                    </Typography>
                                </Stack>
                            </motion.div>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <motion.div
                                initial={{ opacity: 0, x: '-10vh', y: '0' }}
                                animate={(!matches ? scrollY > 0.2 : true) ?{ opacity: 1, x: 0, y: 0 } : 'hidden'}
                                transition={{ duration: 1 }}>
                                <Stack spacing={3} sx={{ ...css.box.infoBox }}>
                                    <Typography
                                        sx={{ ...css.text.titleBox }}
                                        fontFamily={'Roboto mono'}
                                        variant="h3">
                                        Formação Acadêmica
                                    </Typography>
                                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                                        <Box sx={{ ...css.box.wrapperImgAcademic }}>
                                            <img
                                                style={{ ...css.imgAcademic }}
                                                src={IFPB} alt="Instituto Federal da Paraíba" />
                                        </Box>
                                        <Typography
                                            variant="body1">
                                            Análise e Desenvolvimento de Sistemas <br />
                                            IFPB - Campus Monteiro
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section id="skills" style={{ ...css.section.default }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item lg={5.5} md={5.5} sm={12} xs={12}>
                            <motion.div
                                style={{
                                    position: 'relative',
                                }}
                                initial={{ opacity: 0, x: 0, y: 0 }}
                                animate={scrollY > (matches ? 0.3 : 0.35) ? { opacity: 1, x: 0, y: 0 } : 'hidden'}
                                transition={{ duration: 1 }}>
                                    <Typography
                                        sx={{ ...css.text.skillsTitle }}
                                        fontFamily={'Roboto mono'}
                                        variant="h2">
                                        Soft Skills
                                    </Typography>
                                    <motion.ul
                                        style={{ ...css.ul.soft }}
                                        initial="hidden"
                                        animate={scrollY > (matches ? 0.3 : 0.35) ? "visible" : "hidden"}
                                        variants={container1}>
                                            {softSkills.map((skill) => (
                                                <motion.li key={skill.name} variants={item}>
                                                    <SkillItem name={skill.name} icon={skill.icon as IconProp} />
                                                </motion.li>
                                            ))}
                                    </motion.ul>
                            </motion.div>
                        </Grid>
                        <Grid item lg={1} md={1} sm={12} xs={12}>
                            <Box sx={{ ...css.divider.wrapperV  }}>
                                <Box sx={{ ...css.divider.v }}></Box>
                            </Box>
                        </Grid>
                        <Grid item lg={5.5} md={5.5} sm={12} xs={12}>
                            <motion.div
                                initial={{ opacity: 0, x: 0, y: 0 }}
                                animate={scrollY > (matches ? 0.3 : 0.45) ? { opacity: 1, x: 0, y: 0 } : 'hidden'}
                                transition={{ duration: 1 }}>
                                <Typography
                                    sx={{
                                        ...css.text.skillsTitle,
                                        mt: matches ? 0 : '30px',
                                    }}
                                    fontFamily={'Roboto mono'}
                                    variant="h2">
                                    Hard Skills
                                </Typography>
                                <motion.ul
                                    style={{ ...css.ul.hard }}
                                    initial="hidden"
                                    animate={scrollY > (matches ? 0.3 : 0.45) ? "visible" : "hidden"}
                                    variants={container1}>
                                        {hardSkills.map((skill) => (
                                            <motion.li key={skill.name} variants={item}>
                                                <SkillItem name={skill.name} imageSrc={skill.src} />
                                            </motion.li>
                                        ))}
                                </motion.ul>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section id="function" style={{ ...css.section.default }}>
                <Container>
                    <motion.div
                        initial={{ opacity: 0, x: 0, y: '10vh' }}
                        animate={scrollY > 0.5 ? { opacity: 1, x: 0, y: 0 } : 'hidden'}
                        transition={{ duration: 1 }}>
                        <Stack>
                            <Typography
                                sx={{ ...css.text.titleSection }}
                                fontFamily={'Roboto mono'}
                                variant="h2">
                                {scrollY > 0.5 && <ReactTyped strings={["O que faço"]} typeSpeed={40} showCursor={false} />}
                            </Typography>
                            <Typography
                                variant="body1">
                                Minha especialidade principal é transformar projetos de layouts em sites (e aplicativos num futuro próximo) e integrá-los na linguagem de programação que mais se adeque ao produto em questão.
                                Partindo desse princípio, sou responsável por criar toda a parte da web visível para o usuário, tornando a sua experiência de navegação ainda mais agradável, inteligente e responsiva,
                                agregando ainda mais valor no produto final do cliente graças ao meu trabalho junto do time que estiver colaborando comigo. <br /> <br /> Com muito prazer, um FRONT-END.
                            </Typography>
                        </Stack>
                    </motion.div>
                </Container>
            </section>
            <section id="experience" style={{ ...css.section.default }}>
                <Container>
                    <motion.div
                        initial={{ opacity: 0, x: 0, y: '10vh' }}
                        animate={scrollY > 0.65 ? { opacity: 1, x: 0, y: 0 } : 'hidden'}
                        transition={{ duration: 1 }}>
                        <Stack>
                            <Typography
                                sx={{ ...css.text.titleSection }}
                                fontFamily={'Roboto mono'}
                                variant="h2">
                                {scrollY > 0.65 && <ReactTyped strings={["Experiência"]} typeSpeed={40} showCursor={false} />}
                            </Typography>
                            <motion.ul
                                style={{ ...css.ul.stepper }}
                                initial="hidden"
                                animate={scrollY > 0.65 ? "visible" : "hidden"}
                                variants={container1}>
                                <motion.li variants={item}>
                                    <Box>
                                        <Stack direction={'row'} spacing={2} alignItems={'start'}>
                                            <Box>
                                                <Box sx={{ ...css.box.iconWrapper }}>
                                                    <I icon={['fas', 'check']} />
                                                </Box>
                                                <Box sx={{ ...css.divider.stepper }}></Box>
                                            </Box>
                                            <Typography sx={{ ...css.text.stepper }}>2021 - Monitor bolsista no IFPB na disciplina de lógica de programação com Python</Typography>
                                        </Stack>
                                    </Box>
                                </ motion.li>
                                <motion.li variants={item}>
                                    <Box>
                                        <Stack direction={'row'} spacing={2} alignItems={'start'}>
                                            <Box>
                                                <Box sx={{ ...css.box.iconWrapper }}>
                                                    <I icon={['fas', 'check']} />
                                                </Box>
                                                <Box sx={{ ...css.divider.stepper }}></Box>
                                            </Box>
                                            <Typography
                                                sx={{ ...css.text.stepper }}>2022 - Egresso como estagiário na Commarket como desenvolvedor Full-stack</Typography>
                                        </Stack>
                                    </Box>
                                </ motion.li>
                                <motion.li variants={item}>
                                    <Box>
                                        <Stack direction={'row'} spacing={2} alignItems={'start'}>
                                            <Box sx={{ ...css.box.iconWrapper }}>
                                                <I icon={['fas', 'location-dot']} />
                                            </Box>
                                            <Typography sx={{ ...css.text.stepper }}>Hoje - Desenvolvedor Front-end na <a target="_blank" href="https://commarket.com.br">Commarket</a></Typography>
                                        </Stack>
                                    </Box>
                                </ motion.li>
                            </ motion.ul>
                        </Stack>
                    </motion.div>
                </Container>
            </section>
            <section id="projects" style={{
                ...css.section.default,
                paddingBottom: '4.0625rem',
            }}>
                <Container>
                    <motion.div
                        initial={{ opacity: 0, x: 0, y: '10vh' }}
                        animate={scrollY > 0.79 ? { opacity: 1, x: 0, y: 0 } : 'hidden'}
                        transition={{ duration: 1 }}>
                        <Stack>
                            <Typography
                                sx={{ ...css.text.titleSection }}
                                fontFamily={'Roboto mono'}
                                variant="h2">
                                {scrollY > 0.79 && <ReactTyped strings={["Projetos pessoais"]} typeSpeed={40} showCursor={false} />}
                            </Typography>
                            <Typography
                                sx={{
                                    textAlign: 'center',
                                    height: matches ? '56px' : '50px',
                                }}
                                variant="body1">
                                Essa seção será atualizada em breve <br /> (mas esse já é um rs).
                            </Typography>
                        </Stack>
                    </motion.div>
                </Container>
            </section>
        </div>
    )
}