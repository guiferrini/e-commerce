import React from 'react';

import { Container } from './styles';

interface tooltipProps {
  title: string
}

const Tooltip: React.FC<tooltipProps> = ({ title, children }) => {
  return (
    <Container>
      {children}
      <span>{title}</span>
    </Container>
  )
}

export default Tooltip;