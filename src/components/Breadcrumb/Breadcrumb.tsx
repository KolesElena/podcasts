import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledBreadcrumb } from './Breadcrumb.styled';

const Breadcrumb: React.FC = (
) => {
  const navigate = useNavigate();

  return (
    <StyledBreadcrumb onClick={() => navigate('/')}>
      Podcaster
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;
