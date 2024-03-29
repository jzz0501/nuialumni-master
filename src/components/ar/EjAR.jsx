//Ejemplo de un cubo en RA
import { Canvas} from "@react-three/fiber";
import XrCube from './XrCube';
import { ARButton, XR } from "@react-three/xr";
import XrCono from "./XrCono";


function EjAR(){


    return(
        <>
          <ARButton/>
          <Canvas>
              <XR>
                  <XrCube />
                  <XrCono />
              </XR>
          </Canvas>
        </>
)

}

export default EjAR;