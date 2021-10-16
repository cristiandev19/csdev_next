import Container from 'components/ui/atoms/Container';
import React, { VoidFunctionComponent } from 'react';

const PresentationSection: VoidFunctionComponent = () => {
  return (
    <section className="relative flex" style={{ height: '800px' }}>
      <Container className="m-auto z-10">
        <div>
          Llevo mas de 3 años trabajando en el sector de la tecnología,
          desarrollando
        </div>
      </Container>
    </section>
  );
};

export default PresentationSection;
