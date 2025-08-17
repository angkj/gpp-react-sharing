import { CleanupDemo } from './useEffectPageComponents/CleanupDemo';
import { MainTitle } from '../shared/components/MainTitle';
import Container from '../shared/components/Container';

const UseEffectPage = () => {
  return (
    <Container>
      <MainTitle title={'UseEffect Cleanup'} />
      <CleanupDemo />
    </Container>
  );
};

export default UseEffectPage;