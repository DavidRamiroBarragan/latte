import {AplicationContext} from 'context/aplication';
import {useContext} from 'react';

export default function useAplicationContext() {
  return useContext(AplicationContext);
}
