import Container from '../shared/components/Container';
import { MainTitle } from '../shared/components/MainTitle';
import { InitializationPerformanceDemo } from './useStatePageComponents/InitializationPerformanceDemo';
import { RapidUpdatesDemo } from './useStatePageComponents/RapidUpdatesDemo';

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