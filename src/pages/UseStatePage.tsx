import Container from '../shared/components/Container';
import { MainTitle } from '../shared/components/MainTitle';
import { InitializationPerformanceDemo } from './hooks/useStatePageComponents/InitializationPerformanceDemo';
import { RapidUpdatesDemo } from './hooks/useStatePageComponents/RapidUpdatesDemo';

const UseStatePage = () => {
  return (
    <Container>
      <MainTitle title={"UseState's two forms"} />
      <InitializationPerformanceDemo />
      <RapidUpdatesDemo />
    </Container>
  );
};

export default UseStatePage;