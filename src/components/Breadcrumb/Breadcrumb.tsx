import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledBreadcrumb } from './Breadcrumb.styled';

const Breadcrumb: React.FC = (
) => {
  const navigate = useNavigate();

  return (
    <>
      <StyledBreadcrumb onClick={() => navigate('/')}>
        Podcaster
      </StyledBreadcrumb>
      <hr style={{ margin: ' 0px 30px' }} />
    </>
  );
};

export default Breadcrumb;
