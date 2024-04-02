import { useMediaQuery } from "@mui/material";
import Karlos from '../../assets/img/karlos.jpg';

export const sx = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const matches = useMediaQuery('(min-width: 600px)');
    const css = {
        wrapperPage: {
            color: '#353f4f',
        },
        container: {
            first: {
                position: 'relative',
                minHeight: '31.25rem',
                display: 'flex',
                flexDirection: 'column',
            }
        },
        section: {
            first: {
                paddingTop: '4.375rem',
                paddingBottom: '4.0625rem',
                backgroundSize: '100%',
                minHeight: '31.25rem',
            },
            default: {
                paddingTop: matches ? '7.5rem' : '4.0625rem',
            }
        },
        box: {
            square: {
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginLeft: '-11.25rem',
            },
            squareImgWrappper: {
                height: '22.5rem',
                width: '22.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                position: 'absolute' as any,
            },
            squareImg: {
                height: '100%',
                width: '100%',
                clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)',
                border: '0.125rem solid #fff',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${Karlos})`,
            },
            wrapperImgAcademic: {
                width: '6.25rem',
                height: '6.25rem',
            },
            infoBox: {
                borderRadius: '0.3125rem',
                backgroundColor: '#fff',
                boxShadow: '0 0.25rem 0.75rem 0 rgba(0, 0, 0, .08)',
                p: 2,
                minHeight: '11.5625rem',
            },
            iconWrapper: {
                height: '3rem',
                minWidth: '3rem',
                backgroundColor: '#353f4f',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '1.625rem',
            },
        },
        imgAcademic: {
            width: '100%',
            height: '100%',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            objectFit: 'contain' as any,
        },
        text: {
            titleBox: {
                fontSize: '1.75rem',
                fontWeight: 400,
            },
            heroTitle: {
                fontSize: matches ? '2.875rem' : '2.375rem',
                textAlign: 'center',
                fontWeight: 300,
            },
            heroSubtitle: {
                textAlign: 'center',
                fontSize: '1.375rem',
            },
            skillsTitle: {
                fontSize: '2rem',
                fontWeight: 500,
                mb: 5,
                textAlign: 'center',
            },
            stepper: {
                'mt': '0.625rem !important',
                '& > a': {
                    color: '#353f4f',
                }
            },
            titleSection: {
                fontSize: matches ? '2.625rem' : '2.125rem',
                fontWeight: 500,
                mb: 5,
                height: matches ? '3.5rem' : '3.125rem',
            },
        },
        ul: {
            soft: {
                display: 'grid',
                margin: '0',
                listStyle: 'none',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gridTemplateRows: 'repeat(2, 1fr)',
                gap: '0.9375rem',
                padding: '0',
            },
            hard: {
                display: 'grid',
                margin: '0',
                listStyle: 'none',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gridTemplateRows: 'repeat(2, 1fr)',
                gap: '0.9375rem',
                padding: '0',
            },
            stepper: {
                display: 'grid',
                margin: '0',
                listStyle: 'none',
                gridTemplateColumns: 'repeat(1, 1fr)',
                gridTemplateRows: 'repeat(3, 1fr)',
                gap: '0',
                padding: '0',
            }
        },
        divider: {
            wrapperV: {
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
            },
            v: {
                height: '100%',
                borderLeft: '0.0625rem solid #353f4f',
            },
            stepper: {
                marginLeft: '1.375rem',
                height: '3rem',
                borderLeft: '0.125rem solid #353f4f',
            }
        }
    };

    return { css }
}