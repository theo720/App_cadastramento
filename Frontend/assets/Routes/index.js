import { NavigatorContainer } from '@react-navigation/native';
import { StackRoutes } from './stack.routes';
export function Routes() {
    return (
    
        <NavigatorContainer>
            <StackRoutes />
        </NavigatorContainer>
    );
        
}