import { Box, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon as I } from '@fortawesome/react-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface SkillItemProps {
    icon?: IconProp;
    imageSrc?: string;
    name: string;
}

export const SkillItem = ({ name, icon, imageSrc }: SkillItemProps) => {
    return (
        <Stack sx={{
            borderRadius: '5px',
            boxShadow: '0 4px 12px 0 rgba(0, 0, 0, .08)',
            p: 2,
            backgroundColor: '#fff',
        }}>
            <Stack direction={'row'} spacing={2} alignItems={'center'}>
                {icon &&
                    <I
                        fontSize={'28px'}
                        icon={icon} />
                }
                {imageSrc &&
                    <Box sx={{
                        height: '28px',
                        width: '28px',
                    }}>
                        <img
                            style={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'contain',
                            }}
                            src={imageSrc} alt={name} />
                    </Box>
                }
                <Typography
                    variant="body1">
                    {name}
                </Typography>
            </Stack>
        </Stack>
    )
}

