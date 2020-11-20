import {AplicationContext} from 'context/application/aplication';
import {useContext} from 'react';

export default function useAplicationContext() {
  return useContext(AplicationContext);
}
