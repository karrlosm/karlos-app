/* eslint-disable @typescript-eslint/no-explicit-any */
export const sx = () => {
    const css = {
        header: {
            position: 'fixed' as any,
            width: '100%',
            zIndex: 10,
        },
        container: {
            position: 'relative',
            height: '4.375rem',
            py: '0.5rem',
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
        },
        iconBtn: {
            backdropFilter: 'blur(50px)',
            WebkitBackdropFilter: 'blur(50px)',
            color: '#353f4f',
            height: '3rem',
        },
        link: {
            textDecoration: 'none',
            textAlign: 'center' as any,
            color: '#353f4f',
        },
        ul: {
            stepper: {
                display: 'grid',
                margin: '0',
                listStyle: 'none',
                gridTemplateColumns: 'repeat(1, 1fr)',
                gridTemplateRows: 'repeat(4, 1fr)',
                gap: '15px',
                padding: '0',
            }
        }
    };

    return { css }
}