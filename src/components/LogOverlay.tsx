import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { LogProvider } from '@daniel.neuweiler/ts-lib-module';
import { ScrollContainer, getLogIcon } from '@daniel.neuweiler/react-lib-module';
import { BugReport as LogIcon } from '@mui/icons-material';

interface ILocalProps {
}
type Props = ILocalProps;

const LogOverlay: React.FC<Props> = () => {
  const theme = useTheme();

  const renderLogs = () => {

    return (

      <ScrollContainer>

        {LogProvider.archive.map((log, index) => {

          const LogIconComponent = getLogIcon(log);

          return (

            <React.Fragment
              key={index}>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignContent: 'center',
                  alignItems: 'center',
                  padding: theme.spacing(1),
                  borderRadius: 2,
                  marginBottom: 1,
                  background: theme.palette.mode === 'dark' 
                    ? 'rgba(51, 65, 85, 0.3)' 
                    : 'rgba(248, 250, 252, 0.5)',
                  border: theme.palette.mode === 'dark' 
                    ? '1px solid rgba(100, 116, 139, 0.1)'
                    : '1px solid rgba(203, 213, 225, 0.2)',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    background: theme.palette.mode === 'dark' 
                      ? 'rgba(71, 85, 105, 0.4)' 
                      : 'rgba(241, 245, 249, 0.7)',
                  }
                }}>

                <LogIconComponent />

                <Box sx={{ minWidth: theme.spacing(1.5) }} />

                <Typography
                  key={index}
                  variant={'caption'}
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 500,
                    lineHeight: 1.4
                  }}>
                  {log.message}
                </Typography>
              </Box>

            </React.Fragment>
          );
        })}

      </ScrollContainer>
    )
  };

  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'relative',
        width: 220,
        height: 400,
        background: theme.palette.mode === 'dark' 
          ? 'rgba(30, 41, 59, 0.8)' 
          : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: 3,
        border: theme.palette.mode === 'dark' 
          ? '1px solid rgba(100, 116, 139, 0.2)'
          : '1px solid rgba(203, 213, 225, 0.3)',
        boxShadow: theme.palette.mode === 'dark'
          ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)'
          : '0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        padding: theme.spacing(2),
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: theme.palette.mode === 'dark'
            ? '0 12px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            : '0 12px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.1)',
        }
      }}>

      <Box
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          alignContent: 'flex-start'
        }}>

        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1.5,
          marginBottom: 2
        }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              borderRadius: 2,
              background: `linear-gradient(135deg, ${theme.palette.command?.main || theme.palette.secondary.main}, ${theme.palette.command?.dark || theme.palette.secondary.dark})`,
              boxShadow: `0 4px 12px ${theme.palette.command?.main || theme.palette.secondary.main}30`,
            }}
          >
            <LogIcon 
              sx={{ 
                color: 'white', 
                fontSize: 18
              }} 
            />
          </Box>
          <Typography
            variant='h6'
            sx={{
              fontWeight: 600,
              color: theme.palette.text.primary,
              letterSpacing: '-0.01em'
            }}>
            {'Activity Log'}
          </Typography>
        </Box>

        {renderLogs()}
      </Box>

    </Box>
  );
}

export default LogOverlay;