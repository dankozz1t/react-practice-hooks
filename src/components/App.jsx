import { Tabs } from "./Tabs";
import { data } from '../data/tabs';

export const App = () => {
  return (
    <div>
      <Tabs items={data} />
    </div>
  );
};
