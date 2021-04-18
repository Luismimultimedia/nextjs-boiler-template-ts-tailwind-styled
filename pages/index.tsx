// Componets
import { Button } from "components";


const Home = () => {
  return (
    <div>
      <Button
        title="Primary"
        variant="primary"
        onClick={() => console.log("Hola mundo")}
      />

      <Button
        title="Primary"
        variant="secondary"
        onClick={() => console.log("Hola mundo cruels")}
      />

    </div>
  );
};

export default Home;
