import { ButtonBase, withStyles } from '@material-ui/core';
import { styled } from '@mui/material';

export const EndButtonBase = withStyles({
  root: {
    margin: 5,
    color: 'fff',
    backgroundColor: '#1976d1',
    padding: '8px 90px',
    borderRadius: '5px',
    fontWeight: 'bold',
    '&:focus': {
      outline: 'auto',
    },
  },
})(ButtonBase);

export const ExitButtonBase = withStyles({
  root: {
    margin: 5,
    color: '#d64444',
    backgroundColor: '#faf2f2',
    padding: '7px 8px 7px 5px',
    borderRadius: '5px',
    fontWeight: 'bold',
    '&:focus': {
      outline: 'auto',
    },
  },
})(ButtonBase);

type StyleWrapperProps = {
  margin?: string;
  color?: string;
};

export const StyleWrapper = styled('div')<StyleWrapperProps>`
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
`;

export const StyleText = styled('span')<StyleWrapperProps>`
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
`;
