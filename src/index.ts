import { useFormContext } from 'react-hook-form';

console.log('from react-hook-form-dependency', useFormContext);

// @ts-ignore
window.fromReactHookFormDependency = useFormContext;